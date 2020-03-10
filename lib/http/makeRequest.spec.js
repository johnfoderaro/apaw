const https = require('https');
const makeRequest = require('./makeRequest');

jest.mock('https');

describe('makeRequest', () => {
  const resListeners = {};

  const reqEndSpy = jest.fn();
  const reqWriteSpy = jest.fn();
  const resOnSpy = jest.fn((a, b) => {
    resListeners[a] = b;
  });

  const resMock = {
    headers: {},
    statusCode: 200,
    on: resOnSpy,
  };

  https.request = jest.fn((options, callback) => {
    callback(resMock);
    return {
      end: reqEndSpy,
      write: reqWriteSpy,
    };
  });

  afterEach(() => {
    reqEndSpy.mockClear();
    reqWriteSpy.mockClear();
    resOnSpy.mockClear();
  });

  it('should make an HTTP request and resolve a promise', (done) => {
    const response = makeRequest({
      authorization: 'authorization',
      headers: {},
      host: 'webservices.amazon.com',
      path: '/',
      payload: '',
    });

    // mock some HTTP request response data
    resListeners.data('some');
    resListeners.data('data');
    resListeners.end();

    expect(reqEndSpy).toHaveBeenCalledTimes(1);
    expect(reqWriteSpy).toHaveBeenCalledTimes(1);
    expect(resOnSpy).toHaveBeenCalledTimes(3);

    response.then((data) => expect(data).toMatchSnapshot());
    done();
  });

  it('should make an HTTP request and reject a promise', (done) => {
    const mockError = new Error();
    const response = makeRequest({
      authorization: 'authorization',
      headers: {},
      host: 'webservices.amazon.com',
      path: '/',
      payload: '',
    });

    // mock an HTTP request response error
    resListeners.error(mockError);

    expect(reqEndSpy).toHaveBeenCalledTimes(1);
    expect(reqWriteSpy).toHaveBeenCalledTimes(1);
    expect(resOnSpy).toHaveBeenCalledTimes(3);

    response.catch((e) => expect(e).toMatchSnapshot());
    done();
  });
});

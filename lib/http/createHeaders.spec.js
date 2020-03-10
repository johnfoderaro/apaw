const createHeaders = require('./createHeaders');

describe('createHeaders', () => {
  it('should create an object representing HTTP request headers', () => {
    const headers = createHeaders({
      host: 'webservices.amazon.com',
      longDate: '20200308T123600Z',
      operate: 'SearchItems',
    });
    expect(headers).toMatchSnapshot();
  });
});

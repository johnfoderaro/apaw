const signHeaders = require('./signHeaders');

describe('signHeaders', () => {
  it('should create a formatted string of header keys', () => {
    const headers = {
      'Content-Encoding': 'amz-1.0',
      'X-Amz-Date': '20200308T123600Z',
    };
    const signedHeaders = signHeaders(headers);
    expect(signedHeaders).toMatchSnapshot();
  });
});

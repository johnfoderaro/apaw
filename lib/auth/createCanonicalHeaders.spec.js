const createCanonicalHeaders = require('./createCanonicalHeaders');

describe('createCanonicalHeaders', () => {
  it('should create a formatted string of header key/values', () => {
    const headers = {
      'Content-Encoding': 'amz-1.0',
      'X-Amz-Date': '20200308T123600Z',
    };
    const canonicalHeaders = createCanonicalHeaders(headers);
    expect(canonicalHeaders).toMatchSnapshot();
  });
});

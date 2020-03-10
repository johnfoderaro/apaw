const hmacAndHexDigest = require('./hashAndHexEncode');

describe('hmacAndHexDigest', () => {
  it('should create a hexidecimal string of input key and value pairs', () => {
    const hashedString = hmacAndHexDigest('key', 'value');
    expect(hashedString).toMatchSnapshot();
  });
});

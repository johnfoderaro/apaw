const hashAndHexEncode = require('./hashAndHexEncode');

describe('hashAndHexEncode', () => {
  it('should create a hexidecimal string of input object values', () => {
    const hashedString = hashAndHexEncode({
      firstName: 'john',
      lastName: 'foderaro',
    });
    expect(hashedString).toMatchSnapshot();
  });
});

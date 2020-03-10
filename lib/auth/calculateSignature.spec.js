const calculateSignature = require('./calculateSignature');

describe('calculateSignature', () => {
  it('should return a hexidecimal string', () => {
    const calculatedSignature = calculateSignature({
      region: 'region',
      secret: 'secret',
      service: 'service',
      shortDate: '20200308',
      stringToSign: 'string to sign',
      terminationString: 'terminationString',
    });
    expect(calculatedSignature).toMatchSnapshot();
  });
});

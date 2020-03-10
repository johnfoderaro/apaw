const createStringToSign = require('./createStringToSign');

describe('createStringToSign', () => {
  it('should create a formatted string of various request values', () => {
    const stringToSign = createStringToSign({
      algorithm: 'algorithm',
      canonicalRequest: 'canonicalRequest',
      longDate: '20200308T123600Z',
      region: 'region',
      service: 'service',
      shortDate: '20200308',
      terminationString: 'terminationString',
    });
    expect(stringToSign).toMatchSnapshot();
  });
});

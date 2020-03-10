const awsAuthSignature = require('./awsAuthSignature');

describe('awsAuthSignature', () => {
  it('should return a string that represents a signed v4 AWS request', () => {
    const authorization = awsAuthSignature({
      headers: {
        'Content-Encoding': 'amz-1.0',
        'X-Amz-Date': '20200308T123600Z',
      },
      key: 'key',
      longDate: '20200308T123600Z',
      path: '/',
      payload: 'payload',
      region: 'region',
      secret: 'secret',
      shortDate: '20200308',
    });
    expect(authorization).toMatchSnapshot();
  });
});

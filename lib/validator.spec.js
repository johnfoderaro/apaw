const validator = require('./validator');

describe('validator', () => {
  it('should throw an error when a parameter is invalid/missing', () => {
    const validatorInput = {
      operation: 'SearchItems',
      parameters: {
        host: undefined,
        region: 'region',
        key: 'key',
        secret: 'secret',
      },
      payload: {},
    };
    const message = 'Invalid/missing request parameter: host';
    expect(() => validator(validatorInput)).toThrow(message);
  });

  it('should throw an error when a request operation is invalid/missing', () => {
    const validatorInput = {
      operation: 'somethingInvalid',
      parameters: {
        host: 'host',
        region: 'region',
        key: 'key',
        secret: 'secret',
      },
      payload: {},
    };
    const message = 'Invalid/missing request operation: somethingInvalid';
    expect(() => validator(validatorInput)).toThrow(message);
  });

  it('should throw an error when the request payload is not an object', () => {
    const validatorInput = {
      operation: 'SearchItems',
      parameters: {
        host: 'host',
        region: 'region',
        key: 'key',
        secret: 'secret',
      },
      payload: undefined,
    };
    const message = 'Request payload must be an object';
    expect(() => validator(validatorInput)).toThrow(message);
  });
});

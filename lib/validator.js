function validator({ operation, parameters, payload }) {
  let errorMessage;
  const validOperations = [
    'GetBrowseNodes',
    'GetItems',
    'GetVariations',
    'SearchItems',
  ];
  const validParameters = [
    'host',
    'region',
    'key',
    'secret',
  ];

  const isObject = (o) => o && typeof o === 'object' && o.constructor === Object;
  const isString = (s) => typeof s === 'string' || s instanceof String;

  validParameters.forEach((validParemeter) => {
    const lookup = parameters[validParemeter];
    if (!isString(lookup)) {
      errorMessage = `Invalid/missing request parameter: ${validParemeter}`;
    }
  });

  if (!validOperations.includes(operation)) {
    errorMessage = `Invalid/missing request operation: ${operation}`;
  }

  if (!isObject(payload)) {
    errorMessage = 'Request payload must be an object';
  }

  if (errorMessage) {
    throw new Error(errorMessage);
  }
}

module.exports = validator;

const awsAuthSignature = require('./lib/auth/awsAuthSignature');
const timeStamp = require('./lib/timeStamp');
const createHeaders = require('./lib/http/createHeaders');
const makeRequest = require('./lib/http/makeRequest');
const validator = require('./lib/validator');

function Apaw(parameters) {
  return Object.create({
    request(operation, payload) {
      validator({ operation, parameters, payload });
      const {
        host,
        region,
        key,
        secret,
      } = parameters;
      const { longDate, shortDate } = timeStamp();
      const path = `/paapi5/${operation.toLowerCase()}`;
      const headers = createHeaders({ host, longDate, operation });
      const authorization = awsAuthSignature({
        headers,
        key,
        longDate,
        path,
        payload,
        region,
        secret,
        shortDate,
      });
      return makeRequest({
        authorization,
        headers,
        host,
        path,
        payload,
      });
    },
  });
}

module.exports = Apaw;

const hmacAndHexDigest = require('./hmacAndHexDigest');

function calculateSignature(inputObject) {
  const {
    region,
    secret,
    service,
    shortDate,
    stringToSign,
    terminationString,
  } = inputObject;
  const hashedDate = hmacAndHexDigest(`AWS4${secret}`, shortDate).digest();
  const hashedRegion = hmacAndHexDigest(hashedDate, region).digest();
  const hashedService = hmacAndHexDigest(hashedRegion, service).digest();
  const signingKey = hmacAndHexDigest(hashedService, terminationString).digest();
  return hmacAndHexDigest(signingKey, stringToSign).digest('hex');
}

module.exports = calculateSignature;

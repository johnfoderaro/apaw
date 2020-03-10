const calculateSignature = require('./calculateSignature');
const createCanonicalHeaders = require('./createCanonicalHeaders');
const createStringToSign = require('./createStringToSign');
const hashAndHexEncode = require('./hashAndHexEncode');
const signHeaders = require('./signHeaders');

function awsAuthSignature(parameters) {
  const algorithm = 'AWS4-HMAC-SHA256';
  const service = 'ProductAdvertisingAPI';
  const terminationString = 'aws4_request';

  const {
    headers,
    key,
    longDate,
    path,
    payload,
    region,
    secret,
    shortDate,
  } = parameters;

  const canonicalRequest = hashAndHexEncode({
    httpMethodName: 'POST',
    canonicalURI: path,
    canonicalQueryString: '',
    canonicalHeaders: createCanonicalHeaders(headers),
    signedHeaders: signHeaders(headers),
    hashedPayload: hashAndHexEncode({
      payload: JSON.stringify(payload),
    }),
  });

  const stringToSign = createStringToSign({
    algorithm,
    canonicalRequest,
    longDate,
    region,
    service,
    shortDate,
    terminationString,
  });

  const calculatedSignature = calculateSignature({
    region,
    secret,
    service,
    shortDate,
    stringToSign,
    terminationString,
  });

  const credential = `Credential=${key}/${shortDate}/${region}/${service}/${terminationString}`;
  const signature = `Signature=${calculatedSignature}`;
  const signedHeaders = `SignedHeaders=${signHeaders(headers)}`;

  return `${algorithm} ${credential}, ${signedHeaders}, ${signature}`;
}

module.exports = awsAuthSignature;

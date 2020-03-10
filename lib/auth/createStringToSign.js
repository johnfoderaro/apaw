function createStringToSign(inputObject) {
  const {
    algorithm,
    canonicalRequest,
    longDate,
    region,
    service,
    shortDate,
    terminationString,
  } = inputObject;
  const credentialScope = `${shortDate}/${region}/${service}/${terminationString}`;
  return `${algorithm}\n${longDate}\n${credentialScope}\n${canonicalRequest}`;
}

module.exports = createStringToSign;

const crypto = require('crypto');

function hashAndHexEncode(inputObject) {
  const string = Object.values(inputObject).join('\n');
  return crypto.createHash('sha256').update(string, 'utf8').digest('hex');
}

module.exports = hashAndHexEncode;

const crypto = require('crypto');

function hmacAndHexDigest(key, value) {
  return crypto.createHmac('sha256', key).update(value, 'utf8');
}

module.exports = hmacAndHexDigest;

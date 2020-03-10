function signHeaders(headers) {
  const keys = Object.keys(headers);
  const chunks = keys.map((header) => `${header.toLowerCase()};`);
  return chunks.sort().join('').slice(0, -1);
}

module.exports = signHeaders;

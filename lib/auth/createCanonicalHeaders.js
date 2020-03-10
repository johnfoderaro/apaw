function createCanonicalHeaders(headers) {
  const keys = Object.keys(headers);
  const chunks = keys.map(
    (header) => `${header.toLowerCase()}:${headers[header]}\n`,
  );
  return chunks.sort().join('');
}

module.exports = createCanonicalHeaders;

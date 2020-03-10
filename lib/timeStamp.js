function timeStamp() {
  const strip = (string) => {
    switch (string) {
      case ':':
      case '-':
      case '.':
        return false;
      default:
        return true;
    }
  };

  const now = new Date().toISOString();

  // Creates "YYYYMMDD'T'HHMMSS'Z'" string for request headers
  const longDate = now.split('.')[0].split('').filter(strip).join('').concat('Z');
  // Creates 'YYYYMMDD' string for credential scope
  const shortDate = longDate.split('T')[0];

  return { longDate, shortDate };
}

module.exports = timeStamp;

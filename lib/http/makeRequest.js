const https = require('https');

function makeRequest(parameters) {
  const {
    authorization,
    headers,
    host,
    path,
    payload,
  } = parameters;

  const options = {
    headers,
    path,
    hostname: host,
    port: 443,
    method: 'POST',
  };

  headers.Authorization = authorization;

  return new Promise((resolve, reject) => {
    const resBuffer = [];
    const req = https.request(options, (res) => {
      res.on('data', (d) => resBuffer.push(d));
      res.on('error', (err) => reject(err));
      res.on('end', () => resolve({
        data: resBuffer.join(''),
        headers: res.headers,
        status: res.statusCode,
      }));
    });
    req.write(JSON.stringify(payload));
    req.end();
  });
}

module.exports = makeRequest;

function createHeaders({ host, longDate, operation }) {
  return {
    host,
    'content-encoding': 'amz-1.0',
    'content-type': 'application/json; charset=utf-8',
    'x-amz-date': longDate,
    'x-amz-target': `com.amazon.paapi5.v1.ProductAdvertisingAPIv1.${operation}`,
  };
}

module.exports = createHeaders;

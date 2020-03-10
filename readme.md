# Apaw

## Amazon Product Advertising API 5.x Wrapper

**Apaw** is a dependency-free Node.js wrapper around the Amazon Product Advertising API (PAAPI). This module handles making signed HTTP requests to version 5 of the Amazon Product Advertising API. For more detailed information on the Amazon Product Advertising API and how to use it, [please read Amazon's documentation](https://webservices.amazon.com/paapi5/documentation/).

## Installation
- `npm i @johnfoderaro/apaw`

## Example
```javascript
const apaw = Apaw({
  host: 'webservices.amazon.com',
  region: 'us-east-1',
  key: 'AKIDEXAMPLE',
  secret: 'wJalrXUtnFEMI/K7MDENG+bPxRfiCYEXAMPLEKEY',
});

(async () => {
  try {
    const results = await apaw.request('SearchItems', {
      Keywords: 'Harry',
      Marketplace: 'www.amazon.com',
      PartnerTag: 'xyz-20',
      PartnerType: 'Associates',
      Resources: [
        'Images.Primary.Small',
        'ItemInfo.Title',
        'Offers.Listings.Price',
      ],
      SearchIndex: 'All',
    });
    console.log(results);
  } catch (e) {
    console.error(e);
  }
})();
```

## Usage
### Apaw(parameters)
`Apaw(parameters)` accepts an object that must include the following parameters:

```javascript
{
  host: String,
  region: String,
  key: String,
  secret: String,
}
```

For information on `host` and `region`, please consult the [PAAPI "Host and Region" documentation](https://webservices.amazon.com/paapi5/documentation/common-request-parameters.html#host-and-region).

`key` represents "Access Key" and `secret` represents "Secret Key" PAAPI credentials. For information on these credentials, please consult the [PAAPI](https://webservices.amazon.com/paapi5/documentation/register-for-pa-api.html).

### Apaw(parameters).request(operation, payload)
`Apaw(parameters).request(operation, payload)` is the only method available in the returned object from the instantiated `Apaw` factory function. This method creates and makes the signed HTTP request to the specified operation with the provided payload and returns a Promise.

- `operation` is a case sensitive string that must be a valid operation.
- `payload` is an object that must contain valid request key/values.

For information on `operation` and how to properly create and format the `payload` object, please consult [PAAPI "Operations" documentation](https://webservices.amazon.com/paapi5/documentation/operations.html).

This method Rejects errors emitted by the Node `https` module or Resolves an object with the following shape:

```javascript
{
  data: String,
  headers: Object,
  status: Number,
}
```

- `data` is the stringified HTTP response body
- `headers` is an object containing the response headers
- `status` is a number representing the HTTP response status code 

## License
MIT
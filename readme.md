# Apaw

## Amazon Product Advertising API 5.x Wrapper

**Apaw** is a dependency-free Node.js wrapper around version 5.x of the Amazon Product Advertising API (PAAPI). This module handles making the AWS Signature Version 4 signed HTTP requests for the PAAPI service. For more detailed information on the Amazon Product Advertising API and how to use it, [please read Amazon's documentation](https://webservices.amazon.com/paapi5/documentation/).

## Installation
- `npm i @johnfoderaro/apaw`

## Example
```javascript
const Apaw = require('@johnfoderaro/apaw');

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
### Apaw(parameters).request(operation, payload)
The `Apaw` factory function returns an object with the method `request`. Below is a summary of the required arguments for both functions:

- `parameters` is an object that must include the following:

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

- `operation` is a case sensitive string that must be a valid operation as outlined by the PAAPI documentation.

```javascript
'SearchItems'
```

- `payload` is an object that must contain valid request key/values as outlined by the PAAPI documentation.

```javascript
{
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
}
```

For information on `operation` and how to properly create and format the `payload` object, please consult [PAAPI "Operations" documentation](https://webservices.amazon.com/paapi5/documentation/operations.html).

The `request` method Rejects errors emitted by the Node `https` module or Resolves an object with the following shape:

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
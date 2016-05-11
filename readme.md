# mailchimp-dc [![Build Status](https://travis-ci.org/radiovisual/mailchimp-dc.svg?branch=master)](https://travis-ci.org/radiovisual/mailchimp-dc)

> Get the Data Center (dc) value from a Mailchimp API key.

`'0000000000000000-us10'` → `'us10'`

The `dc` value is used to direct your API requests to the appropriate Data Center. It is used in API calls
with the following uri: `https://<dc>.api.mailchimp.com/3.0/`


## Install

```
$ npm install --save mailchimp-dc
```


## Usage

```js
const dc = require('mailchimp-dc');

dc('00000000000000000000000000000000-us10');
//=> 'us10'
```


## API

### mailchimpDc(input)

Returns a string with the Data Center Value.

#### input

Type: `string`

The API Key you want to extract the Data Center value from.

## License

MIT © [Michael Wuergler](http://numetriclabs.com)

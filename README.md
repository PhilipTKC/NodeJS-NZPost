# Wrapper for NZ Post API (WIP)

Work in Progress, Do not use.

### Usage

```ts
const nzPost = new NZPost("YOUR CLIENT ID", "YOUR CLIENT SECRET");

const addressResponse = await nzPost.addressChecker.find("line1", "line2");

const details = await nzPost.addressChecker.detail(addressResponse.addresses[0].DPID);

console.log(details.details);

const suggestion = await nzPost.addressChecker.suggest("address");

console.log(suggestion.addresses);
```

## Acknowledgments

This project utilizes the New Zealand Post API. 

Please see the [NZ Post API t&c's](https://www.nzpost.co.nz/business/terms-and-conditions/terms-and-conditions-for-api-use)
# Wrapper for NZ Post API (WIP)

Work in Progress, Do not use.

### Usage

```ts
const nzPost = new NZPost("YOUR CLIENT ID", "YOUR CLIENT SECRET");

const address = await nzPost.addressChecker.find("1 Queen Street", "Auckland");

if (address && address.success) {
    const dpid = address.addresses[0].DPID;
    console.log(dpid);
    const detail = await nzPost.addressChecker.detail(dpid);
    console.log(detail);
}
```

## Acknowledgments

This project utilizes the New Zealand Post API. 

Please see the [NZ Post API t&c's](https://www.nzpost.co.nz/business/terms-and-conditions/terms-and-conditions-for-api-use)
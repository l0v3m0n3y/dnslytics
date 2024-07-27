# dnslytics
JavaScript library for addon.dnslytics.net
# main
```js
async function main(){
    const {dnslytics} = require('./dnslytics');
    const dns= new dnslytics();
    let req=await dns.domain_info("host")
    console.log(req)
}
main()
```

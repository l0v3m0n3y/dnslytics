class dnslytics{
    constructor(){
        this.api = "https://addon.dnslytics.net"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","Connection": "Keep-Alive","Content-Type":"application/json; charset=UTF-8","x-requested-with": "XMLHttpRequest"}
    }
    async my_ip(){
        let req=await fetch(`${this.api}/myipinfo/v1`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async ipv6_info(ip){
        let req=await fetch(`${this.api}/ipv6info/v1/${ip}`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async asn_info(host){
        let req=await fetch(`${this.api}/asninfo/v1/${host}`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async domain_info(host){
        let req=await fetch(`${this.api}/domaininfo/v1/${host}`,{method:"GET",headers: this.headers});
        return req.json();
    }
}
module.exports = {dnslytics};
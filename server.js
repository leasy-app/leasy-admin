const next = require('next');
const express = require('express');
const compression = require('compression');
const spdy = require('spdy');
const fs = require('fs');
const https = require("https");
const tls = require('tls');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

//TODO: Handle Certificates 
let ir = {
    context: tls.createSecureContext({
        key: fs.readFileSync('/etc/letsencrypt/live/<domain>/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/<domain>/fullchain.pem'),
        ca: fs.readFileSync('/etc/letsencrypt/live/<domain>/chain.pem')
    }).context

};
let addrs = {
    "www.domain.ir": ir,
    "domain.ir": ir,
};

const options = {
    SNICallback: function(domain, cb) {
        cb(null, addrs[domain].context);
    },
    key: fs.readFileSync('/etc/letsencrypt/live/<domain>/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/<domain>/fullchain.pem'),
    ca: fs.readFileSync('/etc/letsencrypt/live/<domain>/chain.pem')
};

const shouldCompress = (req, res) => {
    if (req.headers['x-no-compression']) {
        return false
    }
    return compression.filter(req, res);
};

app.prepare().then(() => {
    const expressApp = express();
    expressApp.use(compression({ filter: shouldCompress }));
    expressApp.use((req,res, next)=>{
        if(req.secure){
            next();
        }else{
            res.redirect('https://' + req.headers.host + req.url);
        }
    });
    expressApp.all('*', (req, res) => {
        return handle(req, res)
    });

    expressApp.listen(80);
    // https.createServer(options, expressApp).listen(443);
    spdy.createServer(options, expressApp).listen(443, error => {
        if (error) {
            console.error(error);
            return process.exit(1);
        } else {
            console.log(`HTTP/2 server listening on port: 443`);
        }
    });
});
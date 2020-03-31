const express = require('express');
const app = express();
const passport = require('passport');
const wsfedsaml2 = require('passport-wsfed-saml2').Strategy;
const fs = require('fs');

passport.use('wsfed-saml2', new wsfedsaml2({
    realm: 'urn:node:app',
    issuer: 'app.com',
    identityProviderUrl: 'https://my-adfs/adfs/ls',
    protocol: 'saml',
    cert: fs.readFileSync("ca.cer"),
    decryptionKey: fs.readFileSync("ca.key")
}, (profile, done) => {
    findByEmail(profile.email, function(err, user) {
        if (err) {
            return done(err);
        }
        return done(null, user);
    });
}));

var User = {
    findByEmail: (email, fn) => {
        var user = { username: 'bobo', email: 'bobo@email.com' };
        return fn(null, user);
    }
}

app.get('/auth',
    passport.authenticate('wsfed-saml2', { failureRedirect: '/failure', failureFlash: true }),
    (req, res) => {
        res.redirect('/success');
    }
);

app.get('/success', (req, res) => {
    console.log("route /success");
    res.send('success');
});

app.get('/failure', (req, res) => {
    console.log("route /failure");
    res.send("failure");
});

var server = app.listen(8888, 'localhost', () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log("app run in http://%s:%s", host, port);
});
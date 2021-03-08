require('dotenv').config();
const config = require("./config")
const axios = require('axios');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('static'));

app.get('/', (req, res) => {
    console.log()
    res.sendFile(path.join(__dirname, '/static/index.html'));
});

app.get('/auth', (req, res) => {
    res.redirect(`https://id.twitch.tv/oauth2/authorize?client_id=${config.twitchClientId}&redirect_uri=http://localhost:3000/auth/twitch/callback&response_type=code&scope=user:read:email`,
    );
});

app.get('/auth/twitch/token', (req, res) => {

    let token = data.access_token
    console.log('My token:', token);
    console.log('My scope:', data.scope);
    res.redirect(`/?token=${token}`);

});

app.get('/auth/twitch/callback', ({query: {code}}, res) => {
    const body = {};
    const opts = {headers: {accept: 'application/json'}};

    axios.post(`https://id.twitch.tv/oauth2/token?client_id=${config.twitchClientId}&client_secret=${config.twitchSecret}&code=${code}&grant_type=authorization_code&redirect_uri=http://localhost:3000/auth/twitch/token`, body, opts)
        .then((_res) => _res.data)
        .then((data) => {
            let token = data.access_token
            console.log('My token:', token);
            console.log('My scope:', data.scope);
            res.redirect(`/?token=${token}`);
        })
        .catch((err) => res.status(500).json({err: err.message}));
});

app.listen(3000);
console.log('App listening on port 3000');

const express = require('express');
const router = express.Router();
const config = require("../config")
const axios = require('axios');


router.get('/login', (req, res) => {
    res.redirect(`https://id.twitch.tv/oauth2/authorize?client_id=${config.twitchClientId}&redirect_uri=http://localhost:3000/auth/twitch/callback&response_type=code&scope=user:read:email`);
});

router.get('/token', (req, res) => {

    let token = data.access_token
    console.log('My token:', token);
    console.log('My scope:', data.scope);
    res.redirect(`/?token=${token}`);

});

router.get('/callback', ({query: {code}}, res) => {
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


module.exports = router;
const express = require('express');
const router = express.Router();
const config = require("../config")
const axios = require('axios');
const getNestedObject = require('../lib/getNestedObject');

const getHeader = (token, accept = 'application/json') => {
    return {
        headers: {
            accept: accept,
            Authorization: token,
            "Client-Id": config.twitchClientId
        }
    };
};

const getUserInfo = (req) => {
    const token = 'Bearer ' + getNestedObject(req, ['cookies', config.cookieName]) || req.headers.authorization || null;
    console.log(token)
    return axios.get(config.urls.twitchUsersHelix, getHeader(token));
};


router.get('/', async (req, res) => {
    try {
        const result = await getUserInfo(req)
        console.log(result.data)
        res.status(result.status).json(result.data);
    } catch (e) {
        res.status(e.response.status).json(e.response.data);
    }
});

router.get('/follows', async (req, res) => {
    try {
        const userInfo = await getUserInfo(req)
        const userId = userInfo.data.data[0].id;
        let header = getHeader(req, 'application/vnd.twitchtv.v5+json')

        let following = await axios.get(`${config.urls.twitchUsersKraken}/${userId}/follows/channels?sortby=last_broadcast`, header);

        console.log(following.data)
        res.status(following.status).json(following.data);
    } catch (e) {
        res.status(e.response.status).json(e.response.data);
    }
});

module.exports = router;
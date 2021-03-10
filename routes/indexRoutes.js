const express = require('express');
const router = express.Router();
const path = require('path');
const messageLogger = require("../log/messageLogger");

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/static/index.html'));
});

/* GET health status. */
router.get('/health', function (req, res, next) {
    messageLogger.log("Surprize Labs API is online - /health")
    res.status(200).json({message: "Health - Surprize Labs API is online"});
});

module.exports = router;
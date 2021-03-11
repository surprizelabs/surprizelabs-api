const indexRouter = require('./routes/indexRoutes');
const twitchAuthApiRouter = require("./routes/twitchAuthApiRoutes")
const app = require("./app");

// Routes
app.use('/auth/twitch', twitchAuthApiRouter);
app.use("/", indexRouter);

module.exports = app;
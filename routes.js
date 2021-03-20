const indexRouter = require('./routes/indexRoutes');
const twitchAuthApiRouter = require("./routes/twitchAuthApiRoutes")
const twitchUsersApiRouter = require("./routes/twitchUsersApiRoutes")
const app = require("./app");

// Routes
app.use('/auth/twitch', twitchAuthApiRouter);
app.use('/twitch/users', twitchUsersApiRouter);
app.use("/", indexRouter);

module.exports = app;
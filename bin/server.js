const app = require("../app");
const config = require("../config");
const path = require('path');
const messageLogger = require("../log/messageLogger");

(async () => {
    await startServer();
})().catch(error => {
    messageLogger.error(error, path.basename(__filename), "Starting App", null);
    process.exit(-1)
});


async function startServer() {
    messageLogger.log(`Server Started (TCP ${config.port})`)
    app.set("port", config.port);

    app.listen(app.get("port"), "0.0.0.0", function () {
        messageLogger.log(`Server started listening on port ${config.port}`)
    });
}
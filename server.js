var http = require("http");
var vidStreamer = require("vid-streamer");
const config = require("./config/config.json");
const port = 4020;

vidStreamer.settings(config.videos);
var app = http.createServer(vidStreamer);
app.listen(port);
console.log(`VidStreamer.js up and running on port ${port}`);

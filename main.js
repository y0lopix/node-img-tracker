const http = require("http");
const host = 'img-srv.herokuapp.com';
const port = 80;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "image/png");
    res.writeHead(200);
    res.end(Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=", 'base64'));
    console.log("\n" + new Date().toISOString() + " - " + req.connection.remoteAddress + " - " + req.url);
    console.log(req.headers);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log("Serveur démarré");
});
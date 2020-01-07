const express = require("express");
const http = require("http");
const app = express();
const PORT = 3000;
const server = http.createServer(app);

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // send signal to exspress telling it that this middleware is done
});

app.get("/", (req, res) => {
    res.send("<h1>Woo! It's home page!</h1>");
    // next();
});;

server.listen(PORT, () => {
    console.log(`Listening at ${PORT}!`);
});

//res.send before .use will only run thre page once
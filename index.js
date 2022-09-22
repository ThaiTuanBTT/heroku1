const http = require("http");
const port = 3000;

const app = http.createServer((req, res) => {
    res.write("<h1>Hello World</h3>")
    res.write("<h3>My NodeJs web page has been deployed to Heroku successfully !</h3>");
    res.end();
});

app.listen(port);
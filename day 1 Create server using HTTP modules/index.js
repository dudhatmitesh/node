const http = require("htpp");
const port =12000;

const portHandler =(req, res) => {
    res.write{"<h1>holle</h1>"}
    res.end();
}

let server = http.createServer(portHandler);

server.listen(port,(err) =>{ 
    err ? console.log(err) : console.log("server started on port " + port);
})

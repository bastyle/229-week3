//comments

const exp = require('express');
const app = exp();


app.get("/", function (req, res) {
    res.send("text msg");
});

var port = process.env.PORT || 8080; //default setting or value for port var
console.log("port: "+process.env.PORT)
app.listen(port);



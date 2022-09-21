//comments

const exp = require('express');
const app = exp();
const path = require("path")
const bodyParser = require('body-parser');
const { nextTick } = require('process');

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.use("/about_us", function (req, res) {//doesn care the http method that are using
    res.sendFile(path.join(__dirname, "about_us.html"));
});

// params past & callback function
// next because we have to pass the control to the next function

/*app.get("/login", function(req, pos){
})
app.post("/login", function(req, pos){
})*/

app.route("/login")
    .get(function (req, res) {
        res.sendFile(path.join(__dirname, "login.html"));
    })
    .post(function (req, res) {
        console.log("req: " + (req.body))
        console.log("username:" + req.body.username);
        console.log("password:" + req.body.password);
        res.sendFile(path.join(__dirname, "loged.html"));
    });

//
app.get("/product/:id", function (req, res) {
    var product_id=req.params.id;
    console.log("product_id: "+product_id);
    res.send("product_id: "+product_id);
})

var port = process.env.PORT || 8080; //default setting or value for port var
console.log("port: " + process.env.PORT)
app.listen(port);



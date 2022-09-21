//comments

const exp = require('express');
const app = exp();


app.get("/", function (req, res) {
    res.send("text msg");
});

app.use("/about_us", function(req, res){//doesn care the http method that are using
    res.send("about us");
});

// params past & callback function
// next because we have to pass the control to the next function

/*app.get("/login", function(req, pos){
})
app.post("/login", function(req, pos){
})*/

app.route("/plogin")
    .get(function(req, pos){

    })
    .post(function(req, pos){

    });

var port = process.env.PORT || 8080; //default setting or value for port var
console.log("port: "+process.env.PORT)
app.listen(port);



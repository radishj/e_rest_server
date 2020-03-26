var express = require("express");
var bodyParser = require("body-parser");
//var couchbase = require("couchbase");
var cors = require('cors')
var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
/*
var cluster = new couchbase.Cluster("couchbase://localhost", {
    username: 'admin',
    password: 'asdfaf'});
var bucket = cluster.bucket('rest');
module.exports.bucket = bucket;
module.exports.cluster = cluster;*/
var routes = require("./routes.js")(app);
/*
var qs = "SELECT * FROM rest where 1";
var coll = bucket.defaultCollection();
let result = coll.query(qs, function(error, result){
    if(error){
        console.log(error);
        return error;
    }
    console.log(result.rows);
    return result;
})
let rows = result.rows;
*/

var server = app.listen(process.env.PORT || 3060);
console.log("Listening on port %s...", server.address().port);

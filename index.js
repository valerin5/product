const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
var db = mongoose.connect('mongodb://valera:1147575@ds117200.mlab.com:17200/urfu');

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function callback () {
    console.log("Connected!")
});
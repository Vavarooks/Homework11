var path = require("path");
var apps = require("express").Router();
apps.get("/note", function(req, res){
   
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})
apps.get("*", function(req, res){
   
    res.sendFile(path.join(__dirname, "../public/index.html"))
})
module.exports = apps;

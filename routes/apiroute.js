var apps = require("express").Router();
var data = require("../db/data");
apps.get("/notes", function (req,res){
    data.getNotes()
    .then(notes => res.json(notes))
    .catch(error => res.json(error))
})
apps.post("/notes", function (req,res){
   
    data.addNote(req.body)
    .then(notes => res.json(notes))
    .catch(error => res.json(error))
})
apps.delete("/notes/:id", function (req,res){

    data.removeNote(req.params.id)
    .then(notes => res.json(notes))
    .catch(error => res.json(error))
})
module.exports = apps
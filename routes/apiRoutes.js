const fs = require('fs');

const db = require('../db/db.json');

console.log(db);

module.exports = function(app){
    app.get("/api/notes", function(req, res){
        res.json(db);
    });

    app.post("/api/notes", function(req, res){
        db.push(req.body)
        
    })
}
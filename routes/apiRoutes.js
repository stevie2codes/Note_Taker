const fs = require('fs');
const path = require('path');

const db = require("../db/db.json");

let dbRead = fs.readFileSync(db);

module.exports = function(app){
    app.get("/api/notes", function(req, res){
        res.json(dbRead);
    });

    app.post("/api/notes", function(req, res){
        req.json(true);
    })
}
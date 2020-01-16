const fs = require('fs');

const db = require('../db/db.json');

// console.log(db);

module.exports = function(app){
    app.get("/api/notes", function(req, res){ 
       fs.readFile("db/db.json", (err, data) => {
           if(err) throw err;
           res.json(data);
       })
       res.json(data);
    });

    app.post("/api/notes", function(req, res){
       let userNote = req.body;
       console.log(userNote);

       fs.readFile("db/db.json", (err, data) => {
           if(err) throw err;
           let newData = JSON.parse(data);
           console.log(newData);
           fs.writeFile("db/db.json", JSON.stringify(userNote, null, 3),() => {
               console.log("success");
             
           })

       })

       res.json(userNote);
        
    })
}
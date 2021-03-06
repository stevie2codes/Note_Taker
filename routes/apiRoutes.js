const fs = require("fs");

//exporting get/post/delete functionality
module.exports = function(app) {
  app.get("/api/notes", (req, res) => {
    fs.readFile("db/db.json", (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });

  //Create New Note
  app.post("/api/notes", function(req, res) {
    let userArray = [];
    let userNote = req.body;

    fs.readFile("db/db.json", (err, data) => {
      if (err) throw err;
      userArray = JSON.parse(data);
      //Give input an id
      if (userArray === 0) {
        let id = 0;
      }
      if (userArray.length > 0) {
        let newLength = userArray.length;
        userNote.id = userArray[newLength - 1].id + 1;
      } else {
        id = 0;
      }
      userNote.id = id += 1;
      userArray.push(userNote); //push new note to json

      fs.writeFile("db/db.json", JSON.stringify(userArray, null, 2), err => {
        if (err) throw err;
      });
    });
      res.json(userNote);
  });

  //Delete Note
  app.delete("/api/notes/:id", (req, res) => {
    let selected = parseInt(req.params.id);

    fs.readFile("db/db.json", (err, data) => {
      if (err) throw err;
      userArray = JSON.parse(data);

      for (let i = 0; i < userArray.length; i++) {
        if (selected === userArray[i].id) {
          res.json(userArray.splice(i, 1));
        }
      }
      fs.writeFile("db/db.json", JSON.stringify(userArray, null, 2), err => {
        if (err) throw err;
        console.log(`Deleted Note #${selected}`)
      });
    });
  });
};

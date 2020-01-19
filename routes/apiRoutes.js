const fs = require('fs');

module.exports = function (app) {

    app.get("/api/notes", (req, res) => {
        fs.readFile("db/db.json", (err, data) => {
            if (err) throw err;
            res.json(JSON.parse(data));
        });
    });

    app.post("/api/notes", function (req, res) {
        let userArray = [];
        let userNote = req.body;

        fs.readFile("db/db.json", (err, data) => {
            if (err) throw err;
            userArray = JSON.parse(data);
            userArray.push(userNote);
            console.log(userArray);
            res.json(userNote);
            fs.writeFile("db/db.json", JSON.stringify(userArray), (err) => {
                if (err) throw err;
                console.log("success");

            });
        });

    });
}
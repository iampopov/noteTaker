const fs = require('fs');
const path = require("path");
const db = path.join(__dirname, "../db/db.json");
//reads from db.json
let readNotes = fs.readFile(db, 'utf8', (err, data) => {
  if (err) throw err;
  readNotes = JSON.parse(data);
});
const shortid = require('shortid');

module.exports = function(app) {

// Displays all notes
app.get("/api/notes", function(req, res) {
    return res.json(readNotes);
});

//Create new note
app.post("/api/notes", function(req, res) {
    let newNote = req.body;
    newNote.id = shortid.generate();
    
    fs.readFile(db, 'utf8', (err, data) => {
        if (err) throw err;
            writeNote = JSON.parse(data);
            writeNote.push(newNote);
            json = JSON.stringify(writeNote);
            fs.writeFile(db, json, err => { 
            if (err) throw err
            console.log(writeNote);
            return res.json(writeNote);
        });
    });
});

//Display single note
app.get("/api/notes/:note", function(req, res) {
    const chosen = req.params.note;
    for (let i=0; i<readNotes.length; i++) {
      if (chosen === readNotes[i].noteName) {
        return res.json(readNotes[i]);
      }
    }
    return res.json(false);
  });
  
  


  //deleting note at clicked position
app.delete("/api/notes/:id", function(req, res) {
    
 fs.readFile(db, 'utf8', (err, data) => {
      if (err) throw err;
        data = JSON.parse(data)
        
        index = data.findIndex(x => x.id === req.params.id)
        
        data.splice(index, 1)
        
        json = JSON.stringify(data)
        
        fs.writeFile(db, json, cb => { 
          if (err) throw err
          res.end()
        });
    });
      
  })
};
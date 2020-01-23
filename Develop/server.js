// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const fs = require('fs');
const shortid = require('shortid');
const db = path.join(__dirname, "db/db.json");
//reads from db.json
let notes; 
fs.readFile(db, 'utf8', (err, data) => {
  if (err) throw err;
  notes = JSON.parse(data);
});

// Routes
// =============================================================
// Basic route that sends the user first to the AJAX Page

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });


// Displays all notes
app.get("/api/notes", function(req, res) {
  return res.json(notes);
});



//Display single note
app.get("/api/notes/:note", function(req, res) {
  const chosen = req.params.note;

  //console.log(chosen);

  for (let i=0; i<notes.length; i++) {
    if (chosen === notes[i].noteName) {
      return res.json(notes[i]);
    }
  }
  return res.json(false);
});

//Create new note
app.post("/api/notes", function(req, res) {
  let newNote = req.body;

  newNote.id = shortid.generate();

  console.log(newNote);
  
  // fs.appendFile(db, JSON.stringify(newNote), err => {
  //   if (err) throw err;
  //   console.log('saved!')
  // })
  notes.push(newNote);
  res.json(newNote);
})
//api/note/:id

//const chosen = req.params.id;

//splice(id)
//delete .splice() at certain location
app.delete("/api/notes/:id", function(req, res) {
  const deletingNote = req.params.id;
  console.log(deletingNote)

  //note.spice(deletingNote)


})
// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
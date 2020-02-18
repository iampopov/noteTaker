// Dependencies
// =============================================================
const express = require("express");


// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// Routes
// =============================================================
// Basic route that sends the user first to the AJAX Page
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes")(app);



// Displays all notes

// app.get("/api/notes", function(req, res) {
//   res.json(readNotes);
// });



// //Display single note
// app.get("/api/notes/:note", function(req, res) {
//   const chosen = req.params.note;
  
//   //console.log(chosen);

//   for (let i=0; i<readNotes.length; i++) {
//     if (chosen === readNotes[i].noteName) {
//       return res.json(readNotes[i]);
//     }
//   }
//   return res.json(false);
// });

////! Create new note
// app.post("/api/notes", function(req, res) {
//   let newNote = req.body;
  
//   newNote.id = shortid.generate();
  
//     fs.readFile(db, 'utf8', (err, data) => {
//     if (err) throw err;
//       writeNote = JSON.parse(data);
//       writeNote.push(newNote);
//       json = JSON.stringify(writeNote);
//       fs.writeFile(db, json, cb => { 
//         if (err) throw err
//         res.end()
//       });
//   });
// })

// //deleting note at clicked position
// app.delete("/api/notes/:id", function(req, res) {
//   const deletingNote = req.params.id;
  
//   fs.readFile(db, 'utf8', (err, data) => {
//     if (err) throw err;
//       data = JSON.parse(data)
      
//       index = data.findIndex(x => x.id === deletingNote)
      
//       data.splice(index, 1)
      
//       json = JSON.stringify(data)
      
//       fs.writeFile(db, json, cb => { 
//         if (err) throw err
//         res.end()
//       });
//       });
    
// })

// Listener
// =================    ==========================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
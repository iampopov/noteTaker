const express = require("express");
var app = express()
var PORT = 3000;


app.get("/", function(req, res) {
    res.send("index.html");
  });

app.get("/:", (req, res) => {
    
})

// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
const express = require("express");
const app = express();

// Une route = une methode + un chemin + une fonction de reponse
app.get("/", (req, res) => {
  res.json({ message: "Bonjour" }); // Express pose l en-tete ET convertit en JSON
});

app.listen(3000, () => {
  console.log("Serveur sur http://localhost:3000");
});
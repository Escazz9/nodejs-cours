const express = require("express");
const app = express();

// Une route = une methode + un chemin + une fonction de reponse
app.get("/", (req, res) => {
  res.json({ message: "Bonjour" }); // Express pose l en-tete ET convertit en JSON
});

// Nos donnees vivent dans un tableau, en memoire (provisoire !)
let produits = [
  { id: 1, nom: "Clavier", prix: 25 },
  { id: 2, nom: "Souris", prix: 15 },
  { id: 3, nom: "Ecran", prix: 120 }
];

// GET /produits -> renvoie toute la liste
app.get("/produits", (req, res) => {
  res.json(produits);
});

// GET /produits/2 -> renvoie le produit dont l id vaut 2
app.get("/produits/:id", (req, res) => {
  const id = Number(req.params.id);          // :id est recupere dans req.params
  const produit = produits.find((p) => p.id === id);
  if (!produit) {
    return res.status(404).json({ erreur: "Produit introuvable" });
  }
  res.json(produit);
});

app.listen(3000, () => {
  console.log("Serveur sur http://localhost:3000");
});
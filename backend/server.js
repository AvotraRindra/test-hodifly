require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API Hodifly OK"));

app.get("/api/user", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT id, nom FROM utilisateurs LIMIT 1");
    if (!rows.length)
      return res.status(404).json({ erreur: "Aucun utilisateur" });
    res.json(rows[0]);
  } catch (err) {
    console.error("ERREUR MYSQL :", err);

    res.status(500).json({
      erreur: "Erreur base de données",
      code: err.code,
      message: err.message,
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => console.log(`Serveur sur le port ${PORT}`));

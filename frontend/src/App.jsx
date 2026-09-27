import React from "react";
import { useEffect, useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const api = import.meta.env.VITE_API_URL || "";
    fetch(`${api}/api/user`)
      .then((res) => {
        if (!res.ok) throw new Error("Erreur API");
        return res.json();
      })
      .then(setUser)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <main className="card">
      <h1>Salut!!</h1>
      <h1>Test Hodifly 🚀</h1>
      {error ? <p className="error">{error}</p> :
       user ? <h2>Bonjour {user.nom} 👋</h2> :
       <p>Chargement depuis MySQL...</p>}
    </main>
  );
}

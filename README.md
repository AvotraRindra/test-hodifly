# Test Hodifly

Mini projet pour tester un déploiement GitHub -> Hodifly.

## Fonctionnement
MySQL contient un utilisateur. Node/Express lit son nom via `GET /api/user`.
React appelle cette API et affiche `Bonjour Rindra`.

## Local
1. Importer `database.sql` dans MySQL.
2. Dans `backend`, copier `.env.example` vers `.env` et adapter les identifiants MySQL.
3. `cd backend && npm install && npm start`
4. `cd frontend && npm install && npm run dev`

## Déploiement
Backend : définir `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`.
Frontend : définir `VITE_API_URL` avec l'URL publique du backend.
Ne pas envoyer le fichier `.env` sur GitHub.

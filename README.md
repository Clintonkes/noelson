# Noelson LLC

Marketing site and quote/contact backend for Noelson LLC (lawn care & landscaping, Palm Bay, FL).

- **Frontend** — React + Vite + Tailwind, in `src/`. Deployed to GitHub Pages by `.github/workflows/frontend.yml` on every push to `main`.
- **Backend** — FastAPI + SQLAlchemy, in `backend/`. Deployed to Render from `render.yaml` / `Dockerfile`.

The quote wizard posts to `POST /api/bookings` and the contact form to `POST /api/contacts` (see `src/lib/api.ts`).

## Repo & live site

- **Repository:** <https://github.com/Clintonkes/noelson> (install: `git@github.com:Clintonkes/noelson.git`)
- **Live site:** <https://noelsonlawncare.com/> (until DNS is pointed, the default <https://clintonkes.github.io/noelson/> also works)

## Local development

```bash
# backend (uses a local SQLite file unless DATABASE_URL is set)
cd backend
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload          # http://localhost:8000, docs at /docs

# frontend
cp .env.example .env               # VITE_API_URL=http://localhost:8000
npm install
npm run dev                        # http://localhost:5173
```

Checks: `npm run typecheck`, `npm run lint`, `npm run build`.

## Deploying

### Backend (Render)

1. Render → New → Blueprint → pick this repo. It creates `noelson-backend` from `render.yaml`.
2. Fill in the environment variables it asks for:
   - `DATABASE_URL` — a Postgres database for this project
   - `ADMIN_EMAIL`, `ADMIN_PASSWORD` — admin login, and where contact notifications are sent
   - `RESEND_API_KEY`, `EMAIL_FROM` — optional; without them emails are logged, not sent
   - `CORS_ORIGINS` — optional, comma-separated extra frontend origins
3. Check `https://<service>.onrender.com/api/health` returns `{"status":"ok"}`.

### Frontend (GitHub Pages)

1. Repo → Settings → Secrets and variables → Actions → Variables: set `VITE_API_URL` to the Render URL.
2. Actions → "Deploy Frontend to GitHub Pages" → Run workflow (or push to `main`).

The build reads GitHub's Pages configuration, so the base path is handled automatically:
`/noelson/` on the default `clintonkes.github.io` URL, `/` once the
`noelsonlawncare.com` custom domain is set.

### Custom domain (`noelsonlawncare.com`)

The codebase is already wired for it — the `og:` URLs in `index.html` and the
CORS origins in `backend/main.py` both allow it. What remains is DNS:

1. Point the domain at GitHub Pages: set the `A` record(s) to GitHub's Pages IPs
   and add `www` as a CNAME to `clintonkes.github.io`.
2. Under Repo → Settings → Pages, set **Custom domain** to `noelsonlawncare.com`.
3. Re-run the deploy workflow so the build picks up the new base path.

### Backend wiring

The frontend sends requests to `VITE_API_URL` (see `src/lib/api.ts`). Local dev
uses `http://localhost:8000`; for the deployed site, set the repo variable
`VITE_API_URL` to the Render backend URL so the forms on `noelsonlawncare.com`
reach the API (otherwise CORS/origin requests fall back to `localhost`).
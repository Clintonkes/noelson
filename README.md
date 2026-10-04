# S Amerix LLC

Marketing site and quote/contact backend for S Amerix LLC (lawn care, Rancho Mirage, CA).

- **Frontend** — React + Vite + Tailwind, in `src/`. Deployed to GitHub Pages by `.github/workflows/frontend.yml` on every push to `main`.
- **Backend** — FastAPI + SQLAlchemy, in `backend/`. Deployed to Render from `render.yaml` / `Dockerfile`.

The quote wizard posts to `POST /api/bookings` and the contact form to `POST /api/contacts` (see `src/lib/api.ts`).

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

1. Render → New → Blueprint → pick this repo. It creates `samerix-backend` from `render.yaml`.
2. Fill in the environment variables it asks for:
   - `DATABASE_URL` — a Postgres database for this project
   - `ADMIN_EMAIL`, `ADMIN_PASSWORD` — admin login, and where contact notifications are sent
   - `RESEND_API_KEY`, `EMAIL_FROM` — optional; without them emails are logged, not sent
   - `CORS_ORIGINS` — optional, comma-separated extra frontend origins
3. Check `https://<service>.onrender.com/api/health` returns `{"status":"ok"}`.

### Frontend (GitHub Pages)

1. Repo → Settings → Secrets and variables → Actions → Variables: set `VITE_API_URL` to the Render URL.
2. Actions → "Deploy Frontend to GitHub Pages" → Run workflow (or push to `main`).

The site is live at <https://samerix.org>. The old <https://clintonkes.github.io/Amerix/> address redirects there.

### Custom domain

`samerix.org` is set under Settings → Pages. DNS (Namecheap): four `A` records on `@` to GitHub's Pages IPs, and `www` as a `CNAME` to `clintonkes.github.io`.

If the domain ever changes:

1. Update Settings → Pages → Custom domain and the DNS records.
2. Re-run the deploy workflow. The build reads the Pages configuration, so it picks the right base path by itself (`/Amerix/` without a domain, `/` with one).
3. Add the new domain to `CORS_ORIGINS` on Render (e.g. `https://example.com,https://www.example.com`) and update the `og:` URLs in `index.html`.

# QuickHire

QuickHire is a full-stack job board application built with a Turborepo monorepo.

- **Frontend:** React + Vite + React Query
- **Backend:** Express + Prisma + PostgreSQL
- **Media Uploads:** Cloudinary (used for upload API and seed logos)

---

## 1) Prerequisites (new PC setup)

Install these first:

- **Git**
- **Node.js** `>= 18` (recommended: Node 20 LTS)
- **pnpm** `9.x`
- **PostgreSQL** (local or cloud, e.g. Neon/Supabase/Railway)

### Install pnpm via Corepack

```bash
corepack enable
corepack prepare pnpm@9.0.0 --activate
pnpm -v
```

---

## 2) Clone & install dependencies

```bash
git clone https://github.com/shajeebHaider/QuickHire.git
cd QuickHire
pnpm install
```

---

## 3) Environment variables

You need two env files:

- `apps/backend/.env`
- `apps/frontend/.env`

### `apps/backend/.env`

```env
# Server
PORT=3001
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
JWT_SECRET=your-super-secret-key

# Database (PostgreSQL)
DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/quickhire?schema=public

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### `apps/frontend/.env`

```env
VITE_API_URL=http://localhost:3001/api
# Optional
VITE_BASENAME=/
```

---

## 4) Cloudinary setup

1. Create/sign in to your Cloudinary account.
2. Open the dashboard.
3. Copy:
   - `Cloud name`
   - `API Key`
   - `API Secret`
4. Paste them into `apps/backend/.env`.

> Cloudinary is required for:
>
> - Upload endpoint (`POST /api/upload`)
> - Seed script logo uploads

---

## 5) Database setup (Prisma)

From repo root:

```bash
cd apps/backend
pnpm db:push
pnpm exec prisma db seed
cd ../..
```

Notes:

- `db:push` creates DB tables from `schema.prisma`.
- Seed uploads logos to Cloudinary and inserts categories/jobs/applications.

Optional DB tools:

```bash
cd apps/backend
pnpm db:studio
```

---

## 6) Run the project (frontend + backend)

From root, run everything:

```bash
pnpm dev
```

Expected local URLs:

- Frontend (Vite default): `http://localhost:5173`
- Backend API: `http://localhost:3001/api`
- Health check: `http://localhost:3001/health`

If frontend runs on `5173`, set backend env as:

```env
FRONTEND_URL=http://localhost:5173
```

---

## 7) Useful commands

### Monorepo (root)

```bash
pnpm dev
pnpm build
pnpm lint
pnpm format
```

### Backend only

```bash
pnpm --filter @quickhire/backend dev
pnpm --filter @quickhire/backend build
pnpm --filter @quickhire/backend start
```

### Frontend only

```bash
pnpm --filter frontend dev
pnpm --filter frontend build
pnpm --filter frontend preview
```

---

## 8) API quick reference

Base URL: `http://localhost:3001/api`

### Jobs

- `GET /jobs`
- `GET /job/:id`
- `POST /jobs`
- `PATCH /job/:id`
- `DELETE /job/:id`

### Applications

- `GET /applications`
- `GET /applications/:id`
- `POST /applications`
- `PATCH /applications/:id/hire-status`
- `DELETE /applications/:id`

### Categories

- `GET /categories`
- `GET /category/:id`
- `POST /categories`
- `PUT /category/:id`
- `DELETE /category/:id`

### Upload

- `POST /upload`
  - `multipart/form-data`
  - field name: `image`

---

## 9) Troubleshooting

### Prisma cannot connect to DB

- Check `DATABASE_URL` format.
- Verify PostgreSQL is running and accessible.
- Re-run:

```bash
cd apps/backend
pnpm db:push
```

### CORS issues in browser

- Ensure `FRONTEND_URL` in backend `.env` matches frontend URL.
- Default expected frontend URL is `http://localhost:3000`.

### Upload fails (Cloudinary)

- Confirm all 3 Cloudinary env vars are present.
- Restart backend after changing `.env`.

### Seed fails

- Ensure Cloudinary creds are valid (seed uploads logos).
- Ensure DB is reachable and empty enough for seed delete/create flow.

---

## 10) Fresh setup checklist (quick)

- [ ] Install Node, pnpm, PostgreSQL
- [ ] Clone repo and run `pnpm install`
- [ ] Create `apps/backend/.env`
- [ ] Create `apps/frontend/.env`
- [ ] Set Cloudinary credentials
- [ ] Run `pnpm db:push` and `pnpm prisma db seed` inside backend
- [ ] Run `pnpm dev` from root
- [ ] Open frontend in browser

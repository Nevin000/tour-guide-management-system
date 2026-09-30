# 🐳 Docker Guide - Ceylon Vidu Tours

This guide explains how to build, run, and manage the **Ceylon Vidu Tours** application using Docker and Docker Compose.

---

## 📋 Prerequisites

Ensure you have the following installed on your machine:
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (includes Docker Compose)

---

## 🚀 Quick Start (Running with Docker Compose)

### 1. Clone & Navigate to Project Root
```bash
cd d:/Projects/Tour-Guide-Management-System
```

### 2. Build and Start Containers
Run the following command to build the Next.js image and start the PostgreSQL database and Web app services:

```bash
docker compose up --build
```

To run in detached mode (background):
```bash
docker compose up -d --build
```

### 3. Access Application
- **Web Application**: Open [http://localhost:3000](http://localhost:3000)
- **PostgreSQL Database**: Accessible locally at `localhost:5432`
  - **User**: `postgres`
  - **Password**: `postgres`
  - **Database Name**: `ceylon_vidu_tours`

---

## 🛠 Container Architecture

| Service | Container Name | Image / Build | Port Mapping | Description |
| :--- | :--- | :--- | :--- | :--- |
| `db` | `ceylon_vidu_tours_db` | `postgres:16-alpine` | `5432:5432` | PostgreSQL database with healthchecks |
| `web` | `ceylon_vidu_tours_web` | Multi-stage Dockerfile (`ceylon-vidu-tours`) | `3000:3000` | Next.js 16 (standalone) web application |

### Highlights:
- **Automatic Database Migrations**: On container startup, `npx prisma migrate deploy` is automatically executed before starting Next.js.
- **Standalone Next.js Build**: Uses Next.js `output: 'standalone'` to keep container footprint minimal.
- **Persistent Data**: Database data is stored in a Docker named volume (`postgres_data`).

---

## 🧹 Useful Commands

### Viewing Logs
```bash
# View all logs
docker compose logs -f

# View web app logs only
docker compose logs -f web

# View database logs only
docker compose logs -f db
```

### Stopping Services
```bash
docker compose down
```

### Stopping Services & Removing Volumes (Fresh Reset)
> ⚠️ **Warning**: This will remove the local PostgreSQL database data.
```bash
docker compose down -v
```

### Rebuilding Web App Container
```bash
docker compose build --no-cache web
docker compose up -d web
```

---

## ⚙ Environment Variables

Environment variables are passed to the container in `docker-compose.yml`. For custom environment settings:
1. Copy `.env.docker.example` to `.env`
2. Update key values (`AUTH_SECRET`, `RESEND_API_KEY`, etc.)

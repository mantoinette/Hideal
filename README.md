# HIDEAL Website

Professional corporate website for **HIDEAL** — Real Estate Development and Technology Solutions in Rwanda.

## Stack

- **Backend:** Java 17, Spring Boot 4 (REST API)
- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS

## Project Structure

```
hideal/
├── hideal/          # Spring Boot backend
└── frontend/        # React frontend
```

## Run Locally

### 1. Start the backend

```bash
cd hideal
./mvnw spring-boot:run
```

Backend runs at `http://localhost:8888`

### 2. Start the frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/content/profile` | Company profile content |
| POST | `/api/contact` | Submit contact form |

## Company Info

- **Address:** 55 KG 656 ST KIMIHURURA KIGALI RWANDA
- **Phone:** +250 781 151 757
- **Email:** info@hideal.rw
- **Support:** support@hideal.rw
- **Website:** www.hideal.rw

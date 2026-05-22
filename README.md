+# CBC Learning Platform (Grades 10–12)
+
+Starter scaffold for an online CBC curriculum platform supporting:
+
+- **STEM**
+- **Social Sciences**
+- **Arts & Sports**
+
+This repository includes:
+
+- A **backend data model layer** using Mongoose schemas for senior school learners, competency tracking, pathways, and assessments.
+- A **frontend Next.js (App Router) dashboard shell** with Tailwind CSS styling for pathway and performance visibility.
+
+## Project Structure
+
+- `backend/models/` – Mongoose schema blueprints
+- `frontend/` – Next.js interface shell
+
+## Quick Start
+
+### 1) Frontend
+
+```bash
+cd frontend
+npm install
+npm run dev
+```
+
+Open `http://localhost:3000`.
+
+### 2) Backend
+
+```bash
+cd backend
+npm install
+npm run dev
+```
+
+> Add MongoDB URI in your environment variables before connecting in controllers/services.
+
+## Next Recommended Step
+
+Choose one implementation path:
+
+1. User Authentication API (students, teachers, admins)
+2. Database connection and CRUD routes
+3. AI-powered assessment generator module

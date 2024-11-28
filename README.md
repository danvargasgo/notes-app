# 📒 Notes App

A full-stack Notes App built with React (frontend) and NestJS (backend) to create, archive, and manage notes with category filtering.

---

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Running the Application](#running-the-application)
5. [Default Login Credentials](#default-login-credentials)
6. [Environment Variables](#environment-variables)
7. [Live Deployment](#live-deployment)
---

## 📝 Project Overview
This application allows users to:
- Create, edit, delete, archive/unarchive notes.
- Assign categories to notes and filter them by category.
- Requires login authentication, which resets on every page reload.

---

## 🛠️ Technologies Used

### Frontend:
- **React:** 18.3.1
- **Axios:** 1.7.7
- **Bootstrap:** 5.3.3
- **Node.js:** 23.3.0
- **npm:** 10.9.0

### Backend:
- **NestJS:** 10.4.8
- **PostgreSQL:** 16
- **Node.js:** 23.3.0
- **npm:** 10.9.0

---

## ⚙️ Installation

### Clone the Repository:
git clone https://github.com/ensolvers-github-challenges/Vargas-750295

### Frontend Setup:
cd frontend<br/>
npm install

### Backend Setup:
cd backend<br/>
npm install

## Running the Application
### Linux/macOS Setup Script:
Run the provided setup script to start both frontend and backend:
sh start.sh

### Manual Start:
Backend:
1. Set environment variables (see .env.example).
2. Run the server:
cd backend <br/>
npm start

Frontend:
1. Ensure the backend URL is correctly set in frontend/src/config.js. 
2. Start the React app:
cd frontend<br/>
npm start

## Default Login Credentials
Username: admin<br/>
Password: password

## 🌐 Live Deployment
Access the live version here: https://notes-app-9vvv.vercel.app/
#!/bin/bash
# Install dependencies
cd backend && npm install && cd ..
cd frontend && npm install && cd ..

# Run the backend
cd backend && npx sequelize-cli db:migrate && npm run start:dev &
# Run the frontend
cd frontend && npm start

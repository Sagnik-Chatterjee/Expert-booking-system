Expert Session Booking System

A full-stack real-time expert booking platform built using the MERN stack where users can browse experts, book sessions, and manage bookings while admins can add experts and manage booking statuses.

Features
User Features
User Registration & Login
JWT Authentication
Browse Experts
Search Experts by Name
Filter Experts by Category
Pagination Support
View Expert Details
Book Expert Sessions
Real-Time Slot Updates using Socket.io
Prevent Double Booking
View Personal Bookings
Booking Status Tracking
Pending
Confirmed
Completed
Admin Features
Admin Login
Add Experts
View All Bookings
Confirm Bookings
Mark Sessions Completed
Protected Admin Routes
Tech Stack
Frontend
React.js
React Router DOM
Axios
React Hook Form
Socket.io Client
Tailwind CSS
Backend
Node.js
Express.js
MongoDB Atlas
Mongoose
JWT Authentication
bcryptjs
Socket.io
Express Validator
Project Structure
Expert-Booking-System/
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── socket/
│   │   └── App.jsx
│   │
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── db/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   │
│   ├── .env
│   ├── package.json
│   └── index.js
│
└── README.md
Environment Variables
Backend .env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLIENT_URL=http://localhost:5173
Frontend .env
VITE_API_URL=http://localhost:5000/api

VITE_SOCKET_URL=http://localhost:5000
Installation
Clone Repository
git clone https://github.com/YOUR_USERNAME/expert-booking-system.git
Backend Setup
cd backend

Install dependencies:

npm install

Run backend:

npm run dev
Frontend Setup
cd frontend

Install dependencies:

npm install

Run frontend:

npm run dev
API Endpoints
Authentication
Register
POST /api/auth/register
Login
POST /api/auth/login
Experts
Get Experts
GET /api/experts
Get Expert Details
GET /api/experts/:id
Add Expert (Admin)
POST /api/experts
Bookings
Create Booking
POST /api/bookings
Get User Bookings
GET /api/bookings?email=
Get All Bookings (Admin)
GET /api/bookings/admin/all
Update Booking Status
PATCH /api/bookings/:id/status
Real-Time Functionality

Socket.io is used for:

Real-time slot updates
Preventing double booking
Instant booking synchronization
Double Booking Prevention

The backend prevents:

Same Expert
Same Date
Same Time Slot

from being booked more than once using database validation and booking checks.

Authentication & Authorization

JWT-based authentication is implemented.

Roles
User

Can:

View experts
Book sessions
View own bookings
Admin

Can:

Add experts
Manage bookings
Access admin dashboard
Screenshots

Add screenshots here after deployment.

Example:

![Home Page]
Future Improvements
Payment Integration
Email Notifications
Video Call Integration
Calendar Sync
Expert Availability Management
Booking Cancellation
Deployment on Render/Vercel
Author

Developed by Sagnik Chatterjee

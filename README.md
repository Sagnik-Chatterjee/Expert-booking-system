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
# Project Structure

```bash
Expert-Booking-System
│
├── backend
│   │
│   ├── src
│   │   │
│   │   ├── controllers
│   │   │   ├── auth.controller.js
│   │   │   ├── booking.controller.js
│   │   │   └── expert.controller.js
│   │   │
│   │   ├── db
│   │   │   └── db.js
│   │   │
│   │   ├── middlewares
│   │   │   ├── auth.middleware.js
│   │   │   ├── error.middleware.js
│   │   │   └── validate.middleware.js
│   │   │
│   │   ├── models
│   │   │   ├── booking.model.js
│   │   │   ├── expert.model.js
│   │   │   └── user.model.js
│   │   │
│   │   ├── routes
│   │   │   ├── auth.routes.js
│   │   │   ├── booking.routes.js
│   │   │   └── expert.routes.js
│   │   │
│   │   ├── utils
│   │   │   └── generateToken.js
│   │   │
│   │   └── app.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── index.js
│
├── frontend
│   │
│   ├── src
│   │   │
│   │   ├── api
│   │   │   └── axios.js
│   │   │
│   │   ├── components
│   │   │   ├── ExpertCard.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Pagination.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── context
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── pages
│   │   │   ├── AddExpert.jsx
│   │   │   ├── AdminBookings.jsx
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── Booking.jsx
│   │   │   ├── ExpertDetail.jsx
│   │   │   ├── Experts.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── MyBookings.jsx
│   │   │   └── Register.jsx
│   │   │
│   │   ├── socket
│   │   │   └── socket.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── vite.config.js
│
├── README.md
└── package-lock.json
```
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


# API Endpoints

## Authentication Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user/admin |

---

## Expert Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/experts` | Get all experts with pagination & filters |
| GET | `/api/experts/:id` | Get single expert details |
| POST | `/api/experts` | Add new expert (Admin only) |

---

## Booking Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/bookings` | Create booking |
| GET | `/api/bookings?email=` | Get bookings by email |
| GET | `/api/bookings/admin/all` | Get all bookings (Admin only) |
| PATCH | `/api/bookings/:id/status` | Update booking status |

---

# Booking Status Types

```text
Pending
Confirmed
Completed
```

---

# Query Parameters

## Get Experts

```http
GET /api/experts?page=1&limit=10&search=doctor&category=health
```

### Supported Query Params

| Parameter | Description |
|-----------|-------------|
| `page` | Current page number |
| `limit` | Number of experts per page |
| `search` | Search experts by name |
| `category` | Filter experts by category |

---

# Example Booking Request

```json
{
  "expert": "expertId",
  "name": "Sagnik",
  "email": "sagnik@gmail.com",
  "phone": "9876543210",
  "date": "2026-05-10",
  "timeSlot": "10:00 AM",
  "notes": "Need career guidance"
}
```


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

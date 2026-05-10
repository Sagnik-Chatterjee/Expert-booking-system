import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Experts from "./pages/Experts";

import ExpertDetail from "./pages/ExpertDetail";

import Booking from "./pages/Booking";

import Login from "./pages/Login";

import Register from "./pages/Register";

import MyBookings from "./pages/MyBookings";

import AdminDashboard from "./pages/AdminDashboard";

import AddExpert from "./pages/AddExpert";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminBookings from "./pages/AdminBookings"

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Experts />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/experts/:id"
          element={<ExpertDetail />}
        />




        <Route
          path="/book/:expertId"
          element={
            <ProtectedRoute role="user">
              <Booking />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-bookings"
          element={
            <ProtectedRoute role="user">
              <MyBookings />
            </ProtectedRoute>
          }
        />


        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/add-expert"
          element={
            <ProtectedRoute role="admin">
              <AddExpert />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/bookings"
          element={
            <ProtectedRoute role="admin">
              <AdminBookings />
            </ProtectedRoute>
          }
        />


        <Route
          path="*"
          element={
            <h1
              style={{
                textAlign: "center",
                marginTop: "50px",
              }}
            >
              404 Page Not Found
            </h1>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
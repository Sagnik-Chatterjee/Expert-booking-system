import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {

  const { user, logout } = useAuth();

  return (
    <div className="navbar">

      <Link to="/">
        Experts
      </Link>

      {user?.role === "user" && (
        <Link to="/my-bookings">
          My Bookings
        </Link>
      )}
{user?.role === "admin" && (
        <>
          <Link to="/admin">
            Dashboard
          </Link>

          <Link to="/admin/add-expert">
            Add Expert
          </Link>
        </>
      )}

      {!user ? (
        <>
          <Link to="/login">
            Login
          </Link>

          <Link to="/register">
            Register
          </Link>
        </>
      ) : (
        <button onClick={logout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Navbar;
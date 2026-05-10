import {
  Link,
} from "react-router-dom";

const AdminDashboard = () => {

  return (
    <div className="container">

      <h1 className="page-title">
        Admin Dashboard
      </h1>

      <div className="dashboard-grid">

        <div className="dashboard-card">

          <h2>
            Add Experts
          </h2>

          <p>
            Create and manage experts.
          </p>

          <Link to="/admin/add-expert">
            <button>
              Add Expert
            </button>
          </Link>
        </div>

        <div className="dashboard-card">

          <h2>
            Booking Management
          </h2>

          <p>
            Manage user bookings.
          </p>

          <Link to="/admin/bookings">

            <button>
              View Bookings
            </button>

          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
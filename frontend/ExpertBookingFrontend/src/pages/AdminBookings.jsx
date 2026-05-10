import {
  useEffect,
  useState,
} from "react";

import api from "../api/axios";

import Loader from "../components/Loader";

const AdminBookings = () => {

  const [bookings,
    setBookings] =
    useState([]);

  const [loading,
    setLoading] =
    useState(true);

  const fetchBookings =
    async () => {

      try {

        const res =
          await api.get(
            "/bookings/admin/all"
          );

        setBookings(
          res.data.bookings
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

  useEffect(() => {
    fetchBookings();
  }, []);

  const updateStatus =
    async (id, status) => {

      try {

        await api.patch(
          `/bookings/${id}/status`,
          {
            status,
          }
        );

        fetchBookings();

      } catch (error) {

        console.log(error);
      }
    };

  if (loading)
    return <Loader />;

  return (
    <div className="container">

      <h1 className="page-title">
        All Bookings
      </h1>

      <div className="booking-grid">

        {bookings.map(
          (booking) => (

            <div
              key={booking._id}
              className="booking-card"
            >

              <h2>
                {
                  booking.expert.name
                }
              </h2>

              <p>
                User:
                {" "}
                {booking.name}
              </p>

              <p>
                Email:
                {" "}
                {booking.email}
              </p>

              <p>
                Date:
                {" "}
                {booking.date}
              </p>

              <p>
                Slot:
                {" "}
                {
                  booking.timeSlot
                }
              </p>

              <p>
                Status:
                {" "}
                {
                  booking.status
                }
              </p>

              <div className="flex gap-2 mt-3">

                <button
                  onClick={() =>
                    updateStatus(
                      booking._id,
                      "Confirmed"
                    )
                  }
                >
                  Confirm
                </button>

                <button
                  onClick={() =>
                    updateStatus(
                      booking._id,
                      "Completed"
                    )
                  }
                >
                  Complete
                </button>

              </div>
            </div>
          )
        )}

      </div>
    </div>
  );
};

export default AdminBookings;
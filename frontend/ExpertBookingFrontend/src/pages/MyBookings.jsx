import {
  useEffect,
  useState,
} from "react";

import api from "../api/axios";

import Loader from "../components/Loader";

const MyBookings = () => {

  const [bookings,
    setBookings] = useState([]);

  const [loading,
    setLoading] = useState(true);

  const fetchBookings = async () => {

try {

      const user = JSON.parse(
        localStorage.getItem("user")
      );

      const res = await api.get(
        `/bookings?email=${user.email}`
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

  if (loading)
    return <Loader />;

  return (
    <div className="container">

      <h1 className="page-title">
        My Bookings
      </h1>

      <div className="booking-grid">

        {bookings.map((booking) => (

          <div
            key={booking._id}
            className="booking-card"
          >
<h2>
              {booking.expert.name}
            </h2>

            <p>
              Date: {booking.date}
            </p>

            <p>
              Slot: {booking.timeSlot}
            </p>

            <p>
              Status:
              <span className={`status ${booking.status.toLowerCase()}`}>
                {booking.status}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
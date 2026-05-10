import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  Link,
} from "react-router-dom";

import api from "../api/axios";

import socket from "../socket/socket";

import Loader from "../components/Loader";

const ExpertDetail = () => {

  const { id } = useParams();
 const [expert,
    setExpert] = useState(null);

  const [bookedSlots,
    setBookedSlots] = useState([]);

  const [loading,
    setLoading] = useState(true);

  useEffect(() => {

    const fetchExpert = async () => {

      try {

        const res = await api.get(
          `/experts/${id}`
        );
        setExpert(
          res.data.expert
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

    fetchExpert();

  }, [id]);
  useEffect(() => {

    socket.on(
      "slotBooked",
      (data) => {

        if (
          data.expertId === id
        ) {
          setBookedSlots(
            (prev) => [
              ...prev,
              data.timeSlot,
            ]
          );
        }
      }
    );
        return () =>
      socket.off("slotBooked");

  }, [id]);

  if (loading)
    return <Loader />;

  return (
    <div className="container">

      <div className="expert-detail-card">

        <h1>
          {expert.name}
        </h1>

        <p>
          Category: {expert.category}
        </p>
        <p>
          Experience: {expert.experience} years
        </p>

        <p>
          Rating: ⭐ {expert.rating}
        </p>

        <p>
          {expert.bio}
        </p>
      </div>

      <div className="slots-section">

        <h2>
          Available Slots
        </h2>
        {expert.availableSlots.map(
          (slotData, index) => (

            <div
              key={index}
              className="slot-date-block"
            >

              <h3>
                {slotData.date}
              </h3>

              <div className="slot-container">

                {slotData.slots.map(
                  (slot) => (

                    <button
                      key={slot}
                      className="slot-btn"
                      disabled={bookedSlots.includes(slot)}
                    >
                      {slot}
                    </button>
                  )
                )}
              </div>
            </div>
          )
        )}
      </div>

      <Link to={`/book/${expert._id}`}>

        <button className="book-btn">
          Book Session
        </button>
      </Link>
    </div>
  );
};

export default ExpertDetail;
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import api from "../api/axios";

const Booking = () => {

  const { expertId } =
    useParams();

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
try {

      await api.post(
        "/bookings",
        {
          ...data,
          expert: expertId,
        }
      );

      alert(
        "Booking Successful"
      );

    } catch (error) {

      alert(
        error.response.data.message
      );
    }
  };
   return (
    <div className="form-container">

      <h2>
        Book Session
      </h2>

      <form
        onSubmit={handleSubmit(
          onSubmit
        )}
        className="flex flex-col gap-3"
      >

        <input
          placeholder="Name"
          {...register("name")}
        />
<input
          placeholder="Email"
          {...register("email")}
        />

        <input
          placeholder="Phone"
          {...register("phone")}
        />

        <input
          type="date"
          {...register("date")}
        />

        <input
          placeholder="Time Slot"
          {...register(
            "timeSlot"
          )}
        />
        <textarea
          placeholder="Notes"
          {...register("notes")}
        />

        <button>
          Book
        </button>
      </form>
    </div>
  );
};

export default Booking;
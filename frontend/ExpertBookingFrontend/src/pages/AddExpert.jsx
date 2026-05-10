import { useForm } from "react-hook-form";
import api from "../api/axios";

const AddExpert = () => {

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {

    try {

      await api.post(
        "/experts",
        {
          ...data,
          availableSlots: [],
        }
      );
       alert(
        "Expert Added"
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
        Add Expert
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
          placeholder="Category"
          {...register(
            "category"
          )}
        />
        <input
          type="number"
          placeholder="Experience"
          {...register(
            "experience"
          )}
        />

        <input
          type="number"
          placeholder="Rating"
          {...register(
            "rating"
          )}
        />

        <textarea
          placeholder="Bio"
          {...register("bio")}
        />
<button>
          Add Expert
        </button>
      </form>
    </div>
  );
};

export default AddExpert;
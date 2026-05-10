import { useForm } from "react-hook-form";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {

    try {

      await api.post(
        "/auth/register",
        data
      );
alert(
        "Registration successful"
      );

      navigate("/login");

    } catch (error) {

      alert(
        error.response.data.message
      );
    }
  };

  return (
    <div className="form-container">

      <h2>Register</h2>

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
          type="password"
          placeholder="Password"
          {...register("password")}
        />

        <button>
          Register
        </button>
      </form>
      </div>
  );
};

export default Register;
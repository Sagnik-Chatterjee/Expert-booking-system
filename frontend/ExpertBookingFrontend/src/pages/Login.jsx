import { useForm } from "react-hook-form";

import api from "../api/axios";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const Login = () => {

  const navigate =
    useNavigate();

  const { login } =
    useAuth();

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async (
    data
  ) => {

    try {

      const res =
        await api.post(
          "/auth/login",
          data
        );

      login(res.data);

      alert(
        `Logged in as ${res.data.user.role}`
      );

      if (
        res.data.user.role ===
        "admin"
      ) {

        navigate("/admin");

      } else {

        navigate("/");
      }

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Login failed"
      );
    }
  };

  return (
    <div className="form-container">

      <h2>
        Login
      </h2>

      <form
        onSubmit={handleSubmit(
          onSubmit
        )}
        className="flex flex-col gap-3"
      >

        <input
          type="email"
          placeholder="Email"
          {...register("email")}
        />

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />

        <button>
          Login
        </button>

      </form>
    </div>
  );
};

export default Login;
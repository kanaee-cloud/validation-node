import React, { useState } from "react";
import Logo from "../assets/cat-logo.png";
import { Link, useNavigate } from "react-router-dom";
import Validation from "../SignupValidation";
import axios from "axios";

function Signup() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    setErrors(Validation(values));
    if (
      errors.username === "" &&
      errors.email === "" &&
      errors.password === ""
    ) {
      axios
        .post("http://localhost:8081/register_train", values)
        .then((res) => {
          navigate("/login");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <section className="my-10 lg:my-0 lg:section">
      <div className="container mx-auto">
        <div className="flex flex-col mx-auto lg:w-[80vh]">
          <form
            action=""
            className="flex-1 glassmorphism flex flex-col gap-y-6 pb-24 p-6 items-start"
            onSubmit={handleSubmit}
          >
            <img
              src={Logo}
              alt=""
              width={[80]}
              height={[80]}
              className="mx-auto"
            />
            <span className="mx-auto text-lg">Sign Up</span>

            {errors.username && (
              <span className="text-red-500 m-0">{errors.username}</span>
            )}
            <input
              type="text"
              name="username"
              className="input-style font-primary border my-0 p-2 px-3 rounded-lg outline-none w-full placeholder:opacity-70  focus:border-gradient transition-all"
              placeholder="Username"
              onChange={handleInput}
            />
            {errors.email && (
              <span className="text-red-500 m-0">{errors.email}</span>
            )}
            <input
              type="text"
              name="email"
              className="input-style font-primary border p-2 px-3 rounded-lg outline-none w-full placeholder:opacity-70  focus:border-gradient transition-all"
              placeholder="Email"
              onChange={handleInput}
            />
            {errors.password && (
              <span className="text-red-500 my-0">{errors.password}</span>
            )}
            <input
              type="password"
              name="password"
              className="input-style font-primary border p-2 px-3 rounded-lg outline-none w-full placeholder:opacity-70 focus:border-gradient transition-all"
              placeholder="Password"
              onChange={handleInput}
            />
            <button type="submit" className="btn btn-lg">
              Create Account
            </button>
            <div className="flex mx-auto gap-x-2 text-sm">
              <p className="text-sm">Already have account?</p>
              <Link to="/login" className="text-gradient">
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;

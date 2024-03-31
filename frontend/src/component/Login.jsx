import React, { useState } from "react";
import Logo from '../assets/cat-logo.png'
import { Link } from "react-router-dom";
import Validation from '../LoginValidation'

function Login() {
  const [values, setValues] = useState({
    email:'',
    password:''
  })
  const [errors, setErrors] = useState({})
  const handleInput = (event) =>{
    setValues(prev => ({
      ...prev, [event.target.name] : [event.target.value]
    }))
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    setErrors(Validation(values))
  }

  return (
    <section className="my-10 lg:my-0 lg:section">
      <div className="container mx-auto">
        <div className="flex flex-col mx-auto lg:w-[80vh]">
          <form
            action=""
            className="flex-1 glassmorphism flex flex-col gap-y-6 pb-24 p-6 items-start"
            onSubmit={handleSubmit}
          >
            <img src={Logo} alt="" width={[80]} height={[80]} className="mx-auto"/>
            <span className="mx-auto text-lg">Log In</span>
            {errors.email && <span className="text-red-600">{errors.email}</span>}
            <input
              type="text"
              name="email"
              className="input-style font-primary border p-2 px-3 rounded-lg outline-none w-full placeholder:opacity-70  focus:border-gradient transition-all"
              placeholder="Email"
              onChange={handleInput}
            />
            {errors.password && <span className="text-red-600">{errors.password}</span>}
            <input
              type="password"
              name="password"
              className="input-style font-primary border p-2 px-3 rounded-lg outline-none w-full placeholder:opacity-70 focus:border-gradient transition-all"
              placeholder="Password"
              onChange={handleInput}
            />
            <button type="submit" className="btn btn-lg mx-auto ">Log In</button>
            <div className="flex mx-auto gap-x-2 text-sm">
              <p className="text-sm">Don't have account?</p><Link to="/signup" className="text-gradient">Sign Up</Link>
            </div>
          </form>
          
        </div>
      </div>
    </section>
  );
}

export default Login;

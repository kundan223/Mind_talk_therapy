import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoginUser }) => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const login = () => {
    axios.post("http://localhost:9002/login", user)
      .then(res => {
        alert(res.data.message);
        setLoginUser(res.data.user);
        navigate("/");
      })
      .catch(err => console.error(err));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <input
          type="text"
          placeholder="Enter your Email"
          className="w-full border p-2 mb-4"
          value={user.email}
          onChange={handleChange}
          name="email"
        />
        <input
          type="password"
          placeholder="Enter your Password"
          className="w-full border p-2 mb-4"
          value={user.password}
          name="password"
          onChange={handleChange}
        />
        <div
          className="bg-blue-500 text-white py-2 px-4 cursor-pointer mb-4"
          onClick={login}
        >
          Login
        </div>
        <div className="text-center mb-4">or</div>
        <div
          className="bg-green-500 text-white py-2 px-4 cursor-pointer"
          onClick={goToRegister}
        >
          Register
        </div>
      </div>
    </div>
  );
};

export default Login;
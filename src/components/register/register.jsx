import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: "",
        dateOfBirth: "" // Adding date of birth field
    });
    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        // If the input is dateOfBirth, convert it to string format
        const formattedValue = name === 'dateOfBirth' ? value.toString() : value;
    
        setUser(prevUser => ({
            ...prevUser,
            [name]: formattedValue
        }));
    };
    
    

    const ToLogin = () => {
        navigate("/login");
    }

    const register = () => {
        const { name, email, password, reEnterPassword, dateOfBirth } = user;
        if (name && email && password && reEnterPassword && dateOfBirth && password === reEnterPassword) {
            axios.post("http://localhost:9002/register", user)
                .then(res => {
                    alert(res.data.message);
                    navigate("/login");
                })
                .catch(error => {
                    console.error('Error registering user:', error);
                    alert('Error registering user. Please try again.');
                });
        } else {
            alert("Invalid input");
        }
    };

    return (
        <div className="register min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 shadow-md rounded-md w-96">
                <h1 className="text-2xl font-semibold mb-4">Register</h1>
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    placeholder="Your Name"
                    onChange={handleChange}
                    className="w-full border p-2 mb-4"
                />
                <input
                    type="text"
                    name="email"
                    value={user.email}
                    placeholder="Your Email"
                    onChange={handleChange}
                    className="w-full border p-2 mb-4"
                />
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    placeholder="Your Password"
                    onChange={handleChange}
                    className="w-full border p-2 mb-4"
                />
                <input
                    type="password"
                    name="reEnterPassword"
                    value={user.reEnterPassword}
                    placeholder="Re-enter Password"
                    onChange={handleChange}
                    className="w-full border p-2 mb-4"
                />
                {/* Date of Birth Input Field */}
                <input
                    type="date"
                    name="dateOfBirth"
                    value={user.dateOfBirth}
                    onChange={handleChange}
                    className="w-full border p-2 mb-4"
                />
                {/* Register Button */} 
                <div
                    className="bg-blue-500 text-white py-2 px-4 cursor-pointer mb-4"
                    onClick={register}
                >
                    Register
                </div>
                <div className="text-center mb-4">or</div>
                {/* Login Button */}
                <div className="bg-green-500 text-white py-2 px-4 cursor-pointer" onClick={ToLogin}>
                    Login
                </div>
            </div>
        </div>
    );
};

export default Register;

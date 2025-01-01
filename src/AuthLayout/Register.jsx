import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const name = formData.get("name");
        const email = formData.get("email");
        const photo = formData.get("photo");
        const password = formData.get("password");
        const rPassword = formData.get("rPassword");

        // Password Validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordError(
                "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
            );
            return;
        }

        if (password !== rPassword) {
            setPasswordError("Passwords do not match!");
            return;
        }

        setPasswordError("");

        // Create User
        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                // update profile
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        navigate("/");
                    })
                    .catch((err) => {
                        // console.error("Profile update error:", err);
                    });

                toast.success("Registration successfully !");
                // form clear
                form.reset();
            })
            .catch((error) => {
                // console.error("Error creating user:", error.message);
            });

    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-700">Welcome</h2>
                <p className="text-center text-gray-500">Please create an account to continue</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Full Name</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter your full Name"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                            required
                        />
                    </div>
                    {/* email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Email Address</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                            required
                        />
                    </div>
                    {/* photo */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Photo URL</label>
                        <input
                            name="photo"
                            type="text"
                            placeholder="Enter your photo URL"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                            required
                        />
                    </div>
                    {/* password */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-600">Password</label>
                        <input
                            name="password"
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                            required
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 mt-3"
                        >
                            {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>
                    {/* valid sms */}
                    {passwordError && (
                        <label className="block text-sm text-red-500">{passwordError}</label>
                    )}
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-600">Confirm Password</label>
                        <input
                            name="rPassword"
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Confirm your password"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-gradient-to-r from-teal-500 to-green-500 rounded-lg hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    >
                        Register
                    </button>
                </form>

                <p className="text-sm text-center text-gray-600">
                    Already have an account?{" "}
                    <Link
                        to="/auth/login"
                        className="text-teal-500 hover:underline focus:text-teal-700"
                    >
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;

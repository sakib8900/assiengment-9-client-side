import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
    const { userLogin, setUser} = useContext(AuthContext)
    const [error , setError] = useState({})
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // get data
        const form = new FormData(e.target);
        const email = form.get("email")
        const password = form.get("password")
        console.log({email, password});
        userLogin(email, password)
        .then((result) =>{
            const user = result.user;
            setUser(user)
            navigate(location?.state ? location.state : "/")
            toast.success("login successfully !")
        })
        .catch((err) =>{
            setError({ ...error, login: err.code})
        })
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-700">Welcome Back!</h2>
                <p className="text-center text-gray-500">Please log in to continue</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Email Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Email Address</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-600">Password</label>
                        <input
                            name="password"
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
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
                    {
                        error.login && (
                            <label className="label text-sm text-red-600">
                                {error.login}
                            </label>
                        )
                    }
                    {/* Forgot Password */}
                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm text-gray-600">
                            <input
                                type="checkbox"
                                className="text-pink-400 form-checkbox focus:ring-pink-400"
                            />
                            <span className="ml-2">Remember me</span>
                        </label>
                        <a className="text-sm text-pink-500 hover:underline focus:text-pink-700">
                            Forgot password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-lg hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                    >
                        Login
                    </button>
                </form>
                {/* Register Link */}
                <p className="text-sm text-center text-gray-600">
                    Don't have an account?
                    <Link
                        to="/auth/register"
                        className="text-pink-500 hover:underline focus:text-pink-700">
                        Sign up here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;

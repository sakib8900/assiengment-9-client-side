import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-700">Welcome Back!</h2>
                <p className="text-center text-gray-500">Please log in to continue</p>

                <form onSubmit={handleLogin} className="space-y-5">
                    {/* Email Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm text-gray-600">
                            <input
                                type="checkbox"
                                className="text-pink-400 form-checkbox focus:ring-pink-400"
                            />
                            <span className="ml-2">Remember me</span>
                        </label>
                        <a className="text-sm text-pink-500 hover:underline focus:text-pink-700"
                        >
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
                    Don't have an account?{" "}
                    <Link
                        href="/auth/register"
                        className="text-pink-500 hover:underline focus:text-pink-700">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;

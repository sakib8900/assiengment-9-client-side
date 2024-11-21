import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {
    // icon
    const [passwordVisible, setPasswordVisible] = useState(false);

    // create data
    const {createNewUser , setUser} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        // get data
        const form = new FormData(e.target);
        const name = form.get("name")
        const email = form.get("email")
        const photo = form.get("photo")
        const password = form.get("password")
        const rPassword = form.get("rPassword")
        console.log({name,email,photo,password,rPassword});

        createNewUser(email,password)
        .then((result)=>{
            const user = result.user;
            setUser(user)
            console.log(user);
        })
        .cath((error) =>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        })
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-700">Welcome</h2>
                <p className="text-center text-gray-500">Please Create account to continue</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Email Input */}
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
                    {/* Email Input */}
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
                    {/* Photo Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Photo URL</label>
                        <input
                            name="photo"
                            type="text"
                            placeholder="Enter your URL"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
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
                    {/* Password Input */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-600">Confirm Password</label>
                        <input
                            name="rPassword"
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Confirm your password"
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
                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm text-gray-600">
                            <input
                                type="checkbox"
                                className="focus:ring-teal-400 focus:outline-none"
                            />
                            <span className="ml-2">I agree to the Terms and Conditions</span>
                        </label>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-gradient-to-r from-teal-500 to-green-500 rounded-lg hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    >
                        Register
                    </button>
                </form>
                {/* Register Link */}
                <p className="text-sm text-center text-gray-600">
                    Already have an account?
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
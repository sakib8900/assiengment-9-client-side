import React from 'react';
import { Link } from 'react-router-dom';

const Banner3 = () => {
    return (
        <div className="mt-10 bg-gradient-to-r from-red-500 via-pink-500 to-orange-400 text-white py-10 px-6 md:px-20 rounded-lg shadow-lg relative overflow-hidden">
            {/* Left Section */}
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left space-y-4 md:max-w-md">
                    <h1 className="text-4xl font-bold">
                        <span className="animate-pulse">LIMITED TIME OFFER!</span>
                    </h1>
                    <p className="text-lg">
                        Grab the best deals on your favorite brands. Discounts up to{" "}
                        <span className="font-semibold text-yellow-300">70% OFF</span>!
                    </p>
                    <ul className="text-sm text-gray-200 mt-4 space-y-2">
                        <li>🔥 Exclusive offers for premium members.</li>
                        <li>🛍️ Valid until stock lasts. Hurry up!</li>
                    </ul>
                    <Link to="/brands" className="btn btn-warning mt-4">
                        GO TO BRANDS SHOP
                    </Link>
                </div>

                {/* Right Section */}
                <div className="mt-6 md:mt-0">
                    <div className="bg-white p-8 rounded-lg text-center text-red-600 shadow-md">
                        <p className="text-lg font-semibold">Your Discount</p>
                        <h2 className="text-6xl font-bold animate-bounce">50%</h2>
                        <p className="mt-2 text-sm">On all purchases above $100</p>
                        <p className="text-xs text-gray-500">Valid until 30th Nov 2024</p>
                    </div>
                </div>
            </div>

            {/* Background */}
            <div className="absolute -top-10 -right-10 bg-yellow-400 w-32 h-32 rounded-full opacity-20 animate-spin"></div>
            <div className="absolute -bottom-10 -left-10 bg-orange-600 w-48 h-48 rounded-full opacity-20 animate-pulse"></div>
        </div>
    );
};

export default Banner3;
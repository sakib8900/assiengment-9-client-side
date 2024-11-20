import React from "react";

const AnimatedVoucher = () => {
    return (
        <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto bg-red-500 text-white rounded-lg shadow-xl overflow-hidden py-10 mt-10">
            {/* Left Section */}
            <div className="bg-white text-red-500 p-6 w-full md:w-2/3 flex flex-col justify-between">
                <div>
                    <h2 className="text-xl font-bold uppercase mb-2">The Store</h2>
                    <h1 className="text-4xl font-extrabold mb-4 animate-bounce">
                        Gift Voucher
                    </h1>
                </div>
                <ul className="text-sm text-gray-700 ml-6">
                    <li>Enjoy exclusive discounts from your favorite brands.</li>
                    <li>Get up to 50% off on selected products today.</li>
                </ul>
            </div>

            {/* Right Section */}
            <div className="relative w-full md:w-1/3 bg-gradient-to-r from-red-600 to-red-700 p-6 flex flex-col items-center justify-center">
                <h3 className="text-sm uppercase mb-4 text-white">
                    Valid until December 2024
                </h3>
                <h1 className="text-6xl  animate-pulse font-extrabold text-white hover:animate-spin">90%</h1>
                <p className="text-sm mt-4 text-white">Conditions Apply</p>
                {/* Barcode */}
                <div className="mt-6">
                    <img
                        src="https://barcode.tec-it.com/barcode.ashx?data=0000012340&code=Code128"
                        alt=""
                        className="w-32"
                    />
                </div>
            </div>
        </div>
    );
};

export default AnimatedVoucher;

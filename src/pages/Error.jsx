import React from 'react';

const Error = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-red-100">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-4xl font-bold text-red-600">Oops! Page Not Found</h1>
                <p className="mt-4 text-lg text-gray-600">The page you're looking for doesn't exist or has been moved.</p>
                <a href="/" className="mt-6 inline-block text-blue-500 hover:underline">Go Back to Home</a>
            </div>
        </div>
    );
};

export default Error;

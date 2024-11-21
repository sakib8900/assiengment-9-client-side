import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider'; // Import AuthContext

const MyProfile = () => {
  const { user } = useContext(AuthContext); // Get user data from context

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Profile</h1>
      
      {user ? (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
          {/* Profile Image */}
          <div className="flex justify-center lg:w-1/3">
            <img
              src={user.photoURL || "https://via.placeholder.com/150"} // Display user's photo or a placeholder image
              alt="User Avatar"
              className="w-32 h-32 lg:w-48 lg:h-48 rounded-full border-4 border-indigo-600"
            />
          </div>

          {/* Profile Information */}
          <div className="text-center lg:text-left lg:w-2/3">
            <p className="text-xl font-semibold text-gray-700 mb-2">
              Name: {user.displayName || "Anonymous User"}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              Email: {user.email}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-center text-xl text-gray-600">Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default MyProfile;

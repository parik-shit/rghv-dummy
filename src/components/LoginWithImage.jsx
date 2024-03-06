import React, { useState } from 'react';
import { FaGoogle, FaMicrosoft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LoginWithImage = ({ imageSrc, imageAlt }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
    // Navigate to '/googlesignin'
    navigate('/googlesignin');
  };

  const handleMicrosoftSignIn = () => {
    // Handle Microsoft sign-in logic here
    alert("Sign in with Microsoft clicked");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {/* Image Section */}
      <div className="w-3/4 h-screen">
        <img src='login.jpg' alt={imageAlt} className="h-full w-full object-cover" />
      </div>

      {/* Login Section */}
      <div className="w-1/4 h-screen flex flex-col m-8 items-center justify-center bg-white-100">
    
        <div className="max-w-md w-full p-8  "> 
          <h2 className="text-xl font-proxima-nova mb-4 text-left">Login to keka</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="form-input p-2 mt-1 block w-full h-12 border border-gray-300 rounded-sm" />
            </div>
         
            <button type="submit" className="bg-blue-400 text-white font-proxima-nova py-2 h-12 px-4 rounded hover:bg-blue-600 mr-4 w-full mb-6">Continue</button>
            
            {/* Text "Login with" */}
            <div className="flex items-center mb-6">
              <div className="border-t border-gray-300 flex-grow"></div>
              <div className="mx-4 font-proxima-nova text-xs">Login with</div>
              <div className="border-t border-gray-300 flex-grow"></div>
            </div>

            {/* Buttons with React Icons */}
            <div className="flex justify-between ">
              <button type="button" onClick={handleGoogleSignIn} className="bg-white text-black border font-semibold py-2 px-12 rounded hover:bg-gray-200 flex items-center">
                <FaGoogle className="mr-2" />
                Google
              </button>
              <button type="button" onClick={handleMicrosoftSignIn} className="bg-white text-black border font-semibold py-2 px-12 rounded hover:bg-gray-200 flex items-center">
                <FaMicrosoft className="mr-2" />
                Microsoft
              </button>
            </div>
          </form>
        </div>
        {/* SVGs for downloading on iOS and Play Store */}
        <div className="flex absolute bottom-0 mb-4">
            
          <img src="app-store.svg" alt="Download on iOS" className="w-30 mr-4" />
          <img src="google-play.svg" alt="Download on Play Store" className="w-30" />
        </div>
      </div>
    </div>
  );
};

export default LoginWithImage;

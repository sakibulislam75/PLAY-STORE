import React from 'react';
import { useNavigate } from 'react-router';
import ntFoundImg from '../../assets/images/error-404.png'
const Notfound = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      
     <img src={ntFoundImg} alt="" />

      <button
        onClick={() => navigate('/')}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Back to Home
      </button>
    </div>

    );
};

export default Notfound;
import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';





const RootLayout = () => {

    return (
        <>
            <Navbar />
            <div>

                <Outlet />
            </div>
            <ToastContainer></ToastContainer>
        </>
    )
};

export default RootLayout;
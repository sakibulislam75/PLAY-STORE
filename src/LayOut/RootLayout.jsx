import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import { useNavigation } from "react-router";
import { HiH1 } from 'react-icons/hi2';



const RootLayout = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
    return (
        <>
<Navbar     />
            <div>
                     
<Outlet />
            </div>
        </>
    )
};

export default RootLayout;
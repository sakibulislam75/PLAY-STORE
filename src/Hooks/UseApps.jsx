
import React, { useEffect, useState } from 'react';
import { FadeLoader, HashLoader } from 'react-spinners';
const UseApps = () => {
    const [apps, setApps] = useState([]);
       const [loading, setLoading] = useState(true);
       useEffect(() => {
           const data=async()=>{
               const res=await fetch('/data.json');
               const dt=await res.json();
               setTimeout(() => {
                   setApps(dt);
                   setLoading(false);
               }, 100);
           };
           data();
           }, [])
    return { apps, loading };
// Array = position-based (order matter করে)
// Object = name-based (order matter করে না)
};

export default UseApps;
import React, { useContext } from 'react';
import { InstalledAppsContext } from '../../Context/InstalledAppsContext';
import { FaDownload, FaStar } from 'react-icons/fa';
const Installation = () => {
    const { installedApps, setInstalledApps } = useContext(InstalledAppsContext);
    console.log(installedApps);
    return (
       <div className=' w-11/12 mx-auto grid grid-cols-1 gap-6 my-12'>
        {installedApps.map(isadded=> <div className="w-full bg-white shadow-md rounded-2xl p-8 flex items-center justify-between">
        <div className=" flex gap-15 items-center">
          <img
            src={isadded.image}
            alt=""
            className="h-15 w-auto object-contain"
          />
          <span className="">
            <h1 className="text-3xl font-bold">{isadded.title}</h1>
            <span className="flex items-center gap-3 ">
                <div className="flex items-center gap-1 mt-4 ">
                     <FaDownload className="text-green-500 text-md" />
                                 <p className="text-green-500 text-md">{isadded.downloads} </p>
                </div>
                  <div className="flex items-center gap-1 mt-4 ">
                          <FaStar className="text-yellow-500 text-md" />
                                       <p className=" color-[#001931] text-md">{isadded.ratingAvg}</p>
                </div>
                <div className="flex items-center gap-1 mt-4 ">
                    <p className="text-gray-400 text-md">{isadded.size} MB</p>
                </div>
            </span>
          </span>
        </div>
        <div>
          <button className="btn text-green-600" >
            Unistall
          </button>
        </div>
      </div>)}
       </div>
    );
};

export default Installation;
import React, { useContext } from 'react';
import { InstalledAppsContext } from '../../Context/InstalledAppsContext';
import { FaDownload, FaStar } from 'react-icons/fa';
import UseApps from '../../Hooks/UseApps';
import { Link } from 'react-router';
import appimg from '../../assets/images/App-Error.png'
import { toast } from 'react-toastify';
const Installation = () => {
  const { installedApps, setInstalledApps } = useContext(InstalledAppsContext);
  console.log(installedApps);


  const handleUninstall = (app) => {
    const filterApp = installedApps.filter(installApp => installApp.id != app.id);
    setInstalledApps(filterApp);
    toast.error(`Successfully Uninstall ${app.title}`)
  }


  if (installedApps.length == 0) {
    return <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">

      <img src={appimg} alt="" />



      <Link
        to='/'
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>
  }
  else

    return (
      <div className=' w-11/12 mx-auto grid grid-cols-1 gap-6 my-12'>
        {installedApps.map(app => <div className="w-full bg-white shadow-md rounded-2xl p-8 flex items-center justify-between">
          <div className=" flex gap-15 items-center">
            <img
              src={app.image}
              alt=""
              className="h-15 w-auto object-contain"
            />
            <span className="">
              <h1 className="text-3xl font-bold">{app.title}</h1>
              <span className="flex items-center gap-3 ">
                <div className="flex items-center gap-1 mt-4 ">
                  <FaDownload className="text-green-500 text-md" />
                  <p className="text-green-500 text-md">{app.downloads} </p>
                </div>
                <div className="flex items-center gap-1 mt-4 ">
                  <FaStar className="text-yellow-500 text-md" />
                  <p className=" color-[#001931] text-md">{app.ratingAvg}</p>
                </div>
                <div className="flex items-center gap-1 mt-4 ">
                  <p className="text-gray-400 text-md">{app.size} MB</p>
                </div>
              </span>
            </span>
          </div>
          <div>
            <button className="btn text-green-600" onClick={() => handleUninstall(app)} >
              Unistall
            </button>
          </div>
        </div>)}
        <div className='text-center mt-10'>
          <Link className='btn btn-success px-10 text-white font-semibold' to='/'>Home</Link>
        </div>
      </div>
    );
};

export default Installation;
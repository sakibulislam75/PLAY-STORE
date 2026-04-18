
import { HashLoader } from 'react-spinners';
import UseApps from '../../Hooks/UseApps';
import { useParams } from 'react-router';
import { FaDownload, FaRegCommentDots, FaStar } from 'react-icons/fa';
import { useContext } from 'react';
import { InstalledAppsContext } from '../../Context/InstalledAppsContext';
import { toast } from 'react-toastify';

const AppDetails = () => {
    // const appDeta =useLoaderData();
    // console.log(appDeta);
    const { id } = useParams();
    console.log('id:', id);
    const { apps, loading } = UseApps();
    console.log('apps:', apps);
    const expectedApp = apps.find(item => item.id === parseInt(id));//normal params id string আকারে আসে, তাই parseInt দিয়ে integer এ convert করে দেওয়া হয়েছে
    console.log('expectedApp:', expectedApp);
    
    const { installedApps, setInstalledApps } = useContext(InstalledAppsContext)
    const handleInstall = () => {
        if (expectedApp && !installedApps.find(item => item.id === parseInt(id))) {
            setInstalledApps([...installedApps, expectedApp]);
        toast.success('App installed successfully!');
        }
    }
    console.log('installedApps:', installedApps.length);
/*
1. data আসতে সময় লাগে, তাই প্রথম render এ expectedApp = undefined/null থাকে
2. যদি সরাসরি expectedApp.title ব্যবহার করা হয়, তাহলে data না থাকায় error আসবে 
3. spinner দিলে loading অবস্থায় UI safe থাকে, তাই data আসা পর্যন্ত blank/error না দেখিয়ে loader দেখায়
4. optional chaining (?) error আটকায়, কিন্তু data না থাকলে শুধু undefined দেখায় +এটা data fetch করে না, শুধু safe access দেয়
5. তাই proper data show করতে হলে loader/fetch + state management ব্যবহার করতে হয়(মানে spinner দেখানো Data loading এর সময়, আর data আসার পর show করা)
*/if (loading) {
        return <div className='flex justify-center items-center min-h-[75vh]'>
            <span className=" "><HashLoader color='#632ee3' /></span>
        </div>
    }


    return (
        <div className="flex flex-col gap-3.5 md: flex-row gap-6  bg-white shadow-md rounded-md w-11/12 mx-auto p-8 mt-10 hover:scale-[1.01] transition-transform duration-1000 ease-in-out

">

            {/* Left Image */}
            <div className="w-48 h-48 mr-3">
                <img
                    src={expectedApp?.image}
                    alt="app"
                    className="w-full h-full object-cover rounded-md mr-3"
                />
            </div>

            {/* Right Content */}
            <div className="flex-1 space-y-3">

                {/* Title */}
                <h1 className="text-2xl font-bold text-slate-800">
                    {expectedApp?.title}
                </h1>

                {/* Developer */}
                <p className="text-sm text-slate-500">
                    Developed by
                    <span className="text-indigo-500 ml-0.5">
                        {expectedApp?.companyName}
                    </span>
                </p>

                <hr className='text-gray-300' />

                {/* Stats */}
                <div className="flex gap-8 py-2 pt-3">

                    <div className="flex flex-col  gap-2">
                        <FaDownload className="text-green-500 text-2xl" />
                        <div>
                            <p className="text-xs text-gray-500">Downloads</p>
                            <p className="font-bold color-[#001931] text-2xl">{expectedApp?.downloads}</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <FaStar className="text-yellow-500 text-2xl" />
                        <div>
                            <p className="text-xs text-gray-500">Average Ratings</p>
                            <p className="font-bold color-[#001931] text-2xl">{expectedApp?.ratingAvg}</p>
                        </div>
                    </div>

                    <div className="flex flex-col  gap-2">
                        <FaRegCommentDots className="text-purple-500 text-2xl" />
                        <div>
                            <p className="text-xs text-gray-500">Total Reviews</p>
                            <p className="font-bold color-[#001931] text-2xl">{expectedApp?.reviews}</p>
                        </div>
                    </div>

                </div>

                {/* Button */}
                <button onClick={handleInstall}  className="btn bg-emerald-500 text-white px-4 py-2 rounded-md text-sm hover:scale-[1.01]">
                    Install Now ({expectedApp?.size})
                </button>

            </div>
        </div>

    );
};

export default AppDetails;
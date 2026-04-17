import React from 'react';
import { CiStar } from 'react-icons/ci';
import { RxDownload } from 'react-icons/rx';
import { useLoaderData, useNavigation } from 'react-router';

const TredndingApp = () => {
    const data = useLoaderData();
    const navigation = useNavigation();

    return (
        <>
        <div className='text-center space-y-2 my-8 '>
            <h1 className='text-4xl font-bold text-center mt-10'>Trending Apps</h1>
            <p>Explore All Trending Apps on the Market developed by us</p>
        </div>

        <div className='w-11/12 mx-auto '>
            <h1>Total Apps : {data.length}</h1>

            {/* ✅ Spinner */}
            {navigation.state === "loading" ? (
                <div className='flex justify-center items-center h-40'>
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : (
                <div className='mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mt-8'>
                    {data.map(item => (
                        <div key={item.id} className='card-body card-border bg-white rounded-md shadow-sm gap-3 w-fit'>
                            <img src={item.image} alt='loading' className='h-75 w-full rounded-md' />
                            <p className='text-left text-lg font-semibold'>{item.title}</p>

                            <div className='flex justify-between text-sm '>
                                <span className='text-green-400 flex items-center gap-0.5 p-0.5'>
                                    <RxDownload className='text-green-500'/> {item.downloads}
                                </span>
                                <span className='text-amber-400 flex items-center gap-0.5 p-0.5'>
                                    <CiStar /> {item.ratingAvg}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
        </>
    );
};

export default TredndingApp;

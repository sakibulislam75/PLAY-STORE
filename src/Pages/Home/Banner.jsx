import React from 'react';
import bannerImg from '../../assets/images/hero.png';
import { BiLogoPlayStore } from 'react-icons/bi';
import { FaAppStore } from 'react-icons/fa';
const Banner = () => {    
  return (
  <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-100 pt-7  ">

  {/* 1st DIV: Text + Buttons */}
  <div>
    <h1 className="text-5xl md:text-5xl font-bold text-gray-800  ">
      We Build <br />
      <span className="text-purple-500">Productive</span> Apps
    </h1>

    <p className="mt-2 text-gray-500  mx-auto">
     At,HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/> Our goal is to turn your ideas into digital experiences that truly make an impact.
    </p>

    <div className="mt-6 flex justify-center gap-4">
      <button className="px-5 py-2 bg-white border rounded-lg flex items-center gap-2">
   <span>    <BiLogoPlayStore className='text-xl'/></span>
   <span> Google Play</span>
      </button>

      <button className="px-5 py-2 bg-white border rounded-lg flex gap-1.5 items-center">
        <span><FaAppStore className='text-xl'></FaAppStore></span>
        <span>App Store</span>
      </button>
    </div>
  </div>

  {/* 2nd DIV: Image */}
  <div className="mt-9">
    <img
      src={bannerImg}
      alt="phone"
      className="w-[260px] md:w-fit mx-auto"
    />
  </div>

</div>

  );
}

 

export default Banner;
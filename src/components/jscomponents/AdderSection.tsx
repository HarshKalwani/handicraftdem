import React from 'react'
import { HiOutlineTrophy } from 'react-icons/hi2'
import { HiOutlineCurrencyRupee } from 'react-icons/hi'

const AdderSection = () => {
    return (
      <div className="p-12  sm:h-[30rem] lg:flex md:flex sm:flex sm:flex-col w-screen h-[16.875rem] md:py-[6.25rem] px-0 justify-center items-center  bg-[#FFF3E3]">
        <div className="w-screen flex justify-center items-center ">
          <HiOutlineTrophy className="text-black w-[4.75rem] h-[4.75rem] mx-2" />
          <div className="flex items-start flex-col gap-[0.125rem]">
            <p className="text-[1.5625rem] font-semibold leading-[2.34375rem] text-[#242424]">
              High Quality
            </p>
            <p className="text-[1.25rem] font-medium leading-[1.875rem] text-[#898989]">
              crafted from top materials
            </p>
          </div>
        </div>
  
        <div className="lg:flex sm:flex sm:flex-col justify-center items-center ">
          <HiOutlineCurrencyRupee className="text-black w-[4.75rem] h-[4.75rem] mx-2" />
          <div className="flex items-start flex-col gap-[0.125rem]">
            <p className="text-[1.5625rem] font-semibold leading-[2.34375rem] text-[#242424]">
              Affordable Prices
            </p>
            <p className="text-[1.25rem] font-medium leading-[1.875rem] text-[#898989]">
              Because we want to spread Happiness
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default AdderSection;
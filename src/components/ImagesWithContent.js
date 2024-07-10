
import React from "react";
import { ReactComponent as SvgImage } from "../assets/images/image-bg-1.svg";
import mobileImage from "../assets/images/headPhoneMobile.svg"; // Assuming this is the path to your mobile image

const ImagesWithContent = () => {
  return (
    <div className="flex justify-center  mt-[100px]">
      <div className="relative w-full ">
        {/* Desktop Image */}
        <div className="hidden md:block h-auto rounded-lg overflow-hidden border-10 border-gray-500 relative">
          <SvgImage className="w-full h-full object-cover object-center" />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden h-full rounded-lg overflow-hidden border-10 border-gray-500 relative">
          <img
            src={mobileImage}
            alt="Mobile view"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Text and button centered on Image */}
        <div className="absolute inset-0 flex items-center justify-start md:justify-start">
          <div className=" text-white px-4 flex flex-start flex-col  text-left md:text-left">
            <h1 className=" xs:w-[221px] text-2xl md:text-4xl font-bold mb-2 md:max-sm:text-left md:mb-4">
              Premium Sound, Premium Savings
            </h1>
            <p className="text-left mb-4 md:mb-8">
              Limited offer, hop on and get yours now
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesWithContent;

import React from "react";
import { ReactComponent as SvgImage } from "../assets/images/image-bg-1.svg";

const ImagesWithContent = () => {
  return (
    <div className="flex justify-center mt-[100px]">
      <div className="relative w-full">
        <div className="  h-auto  rounded-lg overflow-hidden border-10 border-gray-500 relative">
          <SvgImage className="w-full h-full object-cover object-center" />
        </div>

        {/* Text and button centered on Image 1 */}
        <div className="absolute inset-0 flex items-center justify-start md:justify-start">
          <div className="text-center text-white px-4 md:px-8 text-left md:text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
              Premium Sound, Premium Savings
            </h1>
            <p className="text-left mb-4 md:mb-8">
              Limited offer, hop on and get yours now
            </p>
            <button className="mb-4 md:mb-8 bg-gray-200 bg-opacity-35 hover:bg-gray-300 hover:bg-opacity-50 transition-colors duration-300 ease-in-out text-white border border-white px-4 py-2 md:px-6 md:py-4 rounded-full flex items-center">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesWithContent;

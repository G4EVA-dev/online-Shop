import React from "react";
import image1 from "../assets/images/image-bg-1.png";
import image2 from "../assets/images/image-bg-2.png";
import image3 from "../assets/images/image-bg-3.png";

const ImagesWithContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[120px] ">
      {/* Left section (Image 1) */}
      <div className="md:col-span-1">
        <img
          src={image1}
          alt="Image 1"
          className="w-full h-auto md:h-[769px] rounded-lg"
        />
        {/* Additional content or buttons related to Image 1 */}
        <div className="text-center mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Button 1
          </button>
        </div>
      </div>

      {/* Right section (Images 2 and 3) */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:row-gap-4 md:col-gap-4 md:col-span-1">
        {/* Image 2 */}
        <div>
          <img
            src={image2}
            alt="Image 2"
            className="w-full h-auto md:h-[374px] rounded-lg"
          />
          {/* Additional content or buttons related to Image 2 */}
          <div className="text-center mt-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Button 2
            </button>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-green-500 opacity-80 rounded-lg z-0"></div>
          <img
            src={image3}
            alt="Image 3"
            className="w-full h-auto md:h-[374px] rounded-lg z-10"
          />
          {/* Additional content or buttons related to Image 3 */}
          <div className="text-center mt-4">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
              Button 3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesWithContent;


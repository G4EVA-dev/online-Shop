import React from "react";
import { ReactComponent as SvgImage } from "../assets/images/image-bg-1.svg";

const ImagesWithContent = () => {
  return (
    <div className="flex justify-center mt-[100px]">
      {/* Single Image Section */}
      <div className="relative">
        <div className=" w-full h-auto md:w-[1240px] md:h-[780px] rounded-lg overflow-hidden border-10 border-gray-500 relative">
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
              Get 30% Discount
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesWithContent;

// export default ImagesWithContent;

// const ImagesWithContent = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[120px] ">
//       {/* Left section (Image 1) */}
//       <div className="md:col-span-1">
//         <img
//           src={image1}
//           alt="Image 1"
//           className="w-full h-auto md:h-[769px] rounded-lg"
//         />
//         {/* Additional content or buttons related to Image 1 */}
//         <div className="absolute inset-0 flex flex-col justify-center items-center">
//           <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
//             Image 1 Title
//           </h2>
//           <p className="text-white text-lg md:text-xl mb-6">
//             Image 1 Description Lorem ipsum dolor sit amet.
//           </p>
//           <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
//             Button 1
//           </button>
//         </div>
//       </div>

//       {/* Right section (Images 2 and 3) */}
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:row-gap-4 md:col-gap-4 md:col-span-1">
//         {/* Image 2 */}
//         <div>
//           <img
//             src={image2}
//             alt="Image 2"
//             className="w-full h-auto md:h-[374px] rounded-lg"
//           />
//           {/* Additional content or buttons related to Image 2 */}
//           <div className="text-center mt-4">
//             <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
//               Button 2
//             </button>
//           </div>
//         </div>

//         {/* Image 3 */}
//         <div className="relative">
//           <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-green-500 opacity-80 rounded-lg z-0"></div>
//           <img
//             src={image3}
//             alt="Image 3"
//             className="w-full h-auto md:h-[374px] rounded-lg z-10"
//           />

//           {/* Additional content or buttons related to Image 3 */}
//           <div className="text-center mt-4">
//             <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
//               Button 3
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

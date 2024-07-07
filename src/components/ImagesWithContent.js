import React from "react";
import image1 from "../assets/images/image-bg-1.png";
import image2 from "../assets/images/image-bg-2.png";
import image3 from "../assets/images/image-bg-3.png";
import arrowIcon from '../assets/images/arrow-right.png';
import heartIcon from "../assets/images/iconWishlist.png";

const ImagesWithContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[130px] ">
      {/* Left section (Image 1) */}
      <div className="relative md:col-span-1">
        <img
          src={image1}
          alt="Image 1"
          className="w-full h-auto md:h-[769px] rounded-lg"
        />
        {/* Text and button centered on Image 1 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white mb-[20px] ">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Premium Sound, Premium Savings</h1>
            <p className="text-left mb-[20px]" >Limited offer, hope on and get yours now</p>
            <button className="mb-[20px]  bg-gray-200 bg-opacity-35 hover:bg-gray-300 hover:bg-opacity-50 transition-colors duration-300 ease-in-out text-white border border-white px-4 py-4 rounded-3xl flex items-center  ">Get 30% Discount</button>
          </div>
        </div>
      </div>

      {/* Right section (Images 2 and 3) */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:row-gap-4 md:col-gap-4 md:col-span-1 relative">
        {/* Image 2 */}
        <div className="relative">
          <img
            src={image2}
            alt="Image 2"
            className="w-full h-auto md:h-[374px] rounded-lg"
          />
          {/* Text and icons on Image 2 */}
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <p className="text-xl md:text-2xl font-bold">Image 2 Text</p>
            <div className="flex items-center justify-between mt-2">
              <img src={heartIcon} alt="Heart Icon" className="w-6 md:w-8" />
              <button className="bg-transparent text-white border border-white px-4 py-2 rounded-md flex items-center">
                Button <img src={arrowIcon} alt="Arrow Icon" className="w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-green-500 opacity-80 rounded-lg"></div>
          <img
            src={image3}
            alt="Image 3"
            className="w-full h-auto md:h-[374px] rounded-lg"
          />
          {/* Text and icons on Image 3 */}
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <p className="text-xl md:text-2xl font-bold">Image 3 Text</p>
            <div className="flex items-center justify-between mt-2">
              <img src={heartIcon} alt="Heart Icon" className="w-6 md:w-8 mx-0" />
              <button className="bg-transparent text-white border border-white px-4 py-2 rounded-md flex items-center">
                Button <img src={arrowIcon} alt="Arrow Icon" className="w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesWithContent;









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



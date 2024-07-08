
// import React, { useState } from "react";
// import { ReactComponent as SvgImage } from "../assets/images/paymentCard.svg";

// const Checkout = () => {
//   return (
//     <div className="container w-full mt-[70px] mx-auto p-4">
//       <div className="mb-12">
//         <h1 className="text-3xl font-bold">Check Out</h1>
//       </div>

//       <div className="flex flex-col lg:flex-row gap-5">
//         <div className="left w-full lg:w-1/2 border border-black p-10 rounded-lg">
//           <h1 className="text-xl font-medium mb-8">
//             Select how to receive your package(s)
//           </h1>

//           <fieldset className="flex flex-col">
//             <legend className="text-lg mb-5">Pickup</legend>
//             <div className="mb-5">
//               <input
//                 id="choice1"
//                 type="radio"
//                 value="Old Secreteriat Complex, Area 1, Garki Abaji Abji"
//                 className="mr-2"
//               />
//               <label htmlFor="choice1">
//                 Old Secreteriat Complex, Area 1, Garki Abaji Abji
//               </label>
//             </div>

//             <div className="mb-5">
//               <input
//                 id="choice2"
//                 type="radio"
//                 value="Sokoto Street, Area 1, Garki Area 1 AMAC"
//                 className="mr-2"
//               />
//               <label htmlFor="choice2">
//                 Sokoto Street, Area 1, Garki Area 1 AMAC
//               </label>
//             </div>
//           </fieldset>

//           <div className="delivery flex flex-col mb-8">
//             <label htmlFor="delivery" className="text-lg mb-5">
//               Delivery
//             </label>
//             <input
//               id="delivery"
//               type="text"
//               placeholder="House Address"
//               className="border border-gray-300 w-full p-4 rounded-lg"
//             />
//           </div>

//           <div className="contact flex flex-col">
//             <label htmlFor="contact1" className="mb-5">
//               Contact
//             </label>
//             <input
//               id="contact1"
//               type="phone"
//               placeholder="Phone nos 1"
//               className="border border-gray-300 lg:w-[50%] p-2 mb-5 rounded-lg"
//             />
//             <input
//               id="contact2"
//               type="phone"
//               placeholder="Phone nos 2"
//               className="border border-gray-300 lg:w-[50%] p-2 mb-8 rounded-lg"
//             />
//           </div>
//         </div>

//         {/* Payment Section */}
//         <div className="right w-full lg:w-1/2 bg-paymentBg p-10 rounded-lg">
//           <h1 className="text-white font-semibold mb-5 text-2xl">Payment</h1>

//           <div className="mb-5">
//             <SvgImage
//               alt="PaymentCard"
//               className="w-full h-full object-cover object-center"
//             />
//           </div>

//           <div>
//             <div className="mb-8">
//               <label
//                 htmlFor="cardNumber"
//                 className="block text-white mb-2 text-sm font-medium"
//               >
//                 Card Number
//               </label>
//               <input
//                 id="cardNumber"
//                 type="number"
//                 placeholder="0000 0000 0000 0000"
//                 className="border border-paymentBorder w-full p-4 rounded-lg bg-transparent"
//               />
//             </div>

//             <div className="flex flex-col lg:flex-row gap-5 mb-8">
//               <div>
//                 <label
//                   htmlFor="expirationDate"
//                   className="block text-white mb-2 text-sm font-medium"
//                 >
//                   Expiration Date
//                 </label>
//                 <input
//                   id="expirationDate"
//                   type="number"
//                   placeholder="MM/YY"
//                   className="border border-paymentBorder w-full lg:w-64 p-4 rounded-lg bg-transparent"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="cvc"
//                   className="block text-white mb-2 text-sm font-medium"
//                 >
//                   CVC
//                 </label>
//                 <input
//                   id="cvc"
//                   type="number"
//                   placeholder="000"
//                   className="border border-paymentBorder w-full lg:w-64 p-4 rounded-lg bg-transparent"
//                 />
//               </div>
//             </div>

//             <button className="text-black text-sm font-medium w-full lg:w-36 bg-customPink p-4 rounded-lg hover:bg-white">
//               Make Payment
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;




import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SvgImage } from "../assets/images/paymentCard.svg";

const Checkout = () => {
  return (
    <div className="container w-full mt-12 mx-auto p-4">
      <div className="mb-12">
        <h1 className="text-3xl font-bold">Check Out</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        <div className="left w-full lg:w-1/2 border border-black p-10 rounded-lg">
          <h1 className="text-xl font-medium mb-8">
            Select how to receive your package(s)
          </h1>

          <fieldset className="flex flex-col">
            <legend className="text-lg mb-5">Pickup</legend>
            <div className="mb-5">
              <input
                id="choice1"
                type="radio"
                value="Old Secreteriat Complex, Area 1, Garki Abaji Abji"
                className="mr-2"
              />
              <label htmlFor="choice1">
                Old Secreteriat Complex, Area 1, Garki Abaji Abji
              </label>
            </div>

            <div className="mb-5">
              <input
                id="choice2"
                type="radio"
                value="Sokoto Street, Area 1, Garki Area 1 AMAC"
                className="mr-2"
              />
              <label htmlFor="choice2">
                Sokoto Street, Area 1, Garki Area 1 AMAC
              </label>
            </div>
          </fieldset>

          <div className="delivery flex flex-col mb-8">
            <label htmlFor="delivery" className="text-lg mb-5">
              Delivery
            </label>
            <input
              id="delivery"
              type="text"
              placeholder="House Address"
              className="border border-gray-300 w-full p-4 rounded-lg"
            />
          </div>

          <div className="contact flex flex-col">
            <label htmlFor="contact1" className="mb-5">
              Contact
            </label>
            <input
              id="contact1"
              type="phone"
              placeholder="Phone nos 1"
              className="border border-gray-300 w-full lg:w-[50%] p-2 mb-5 rounded-lg"
            />
            <input
              id="contact2"
              type="phone"
              placeholder="Phone nos 2"
              className="border border-gray-300 w-full lg:w-[50%] p-2 mb-8 rounded-lg"
            />
          </div>
        </div>

        {/* Conditional Rendering for Payment Section */}
        <div className="right w-full lg:w-1/2 bg-paymentBg p-10 rounded-lg hidden lg:block">
          <h1 className="text-white font-semibold mb-5 text-2xl">Payment</h1>

          <div className="mb-5">
            <SvgImage
              alt="PaymentCard"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div>
            <div className="mb-8">
              <label
                htmlFor="cardNumber"
                className="block text-white mb-2 text-sm font-medium"
              >
                Card Number
              </label>
              <input
                id="cardNumber"
                type="number"
                placeholder="0000 0000 0000 0000"
                className="border border-paymentBorder w-full p-4 rounded-lg bg-transparent"
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-5 mb-8">
              <div>
                <label
                  htmlFor="expirationDate"
                  className="block text-white mb-2 text-sm font-medium"
                >
                  Expiration Date
                </label>
                <input
                  id="expirationDate"
                  type="number"
                  placeholder="MM/YY"
                  className="border border-paymentBorder w-full lg:w-64 p-4 rounded-lg bg-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="cvc"
                  className="block text-white mb-2 text-sm font-medium"
                >
                  CVC
                </label>
                <input
                  id="cvc"
                  type="number"
                  placeholder="000"
                  className="border border-paymentBorder w-full lg:w-64 p-4 rounded-lg bg-transparent"
                />
              </div>
            </div>

            <button className="text-black text-sm font-medium w-full lg:w-36 bg-customPink p-4 rounded-lg hover:bg-white">
              Make Payment
            </button>
          </div>
        </div>

        {/* Link to Payment Page on Mobile */}
        <div className="lg:hidden w-full">
          <Link to="/payment">
            <button className="text-black text-sm font-medium w-full bg-customPink p-4 rounded-lg hover:bg-white">
              Proceed to Payment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;




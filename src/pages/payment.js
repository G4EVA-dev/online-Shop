import React from "react";
import { ReactComponent as SvgImage } from "../assets/images/cardMobileView.svg";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div className="container max-w-4xl mt-12 mx-auto p-4">
      <div className="right w-full  p-2 rounded-lg">
        <h1 className="mb-5 text-3xl font-bold">Payment</h1>

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
              className="block mb-2 text-black font-normak mb-5 text-[14px]"
            >
              Card Number
            </label>
            <input
              id="cardNumber"
              type="number"
              placeholder="0000 0000 0000 0000"
              className="border border-paymentMobileBorder w-full p-4 rounded-lg bg-transparent"
            />
          </div>

          <div className="flex flex-col xs:flex-row md:flex-col  lg:flex-col lg:w-full gap-5 mb-8">
            <div className="  " >
              <label
                htmlFor="expirationDate"
                className="block  mb-2 text-black font-normak mb-5 text-[14px]"
              >
                Expiration Date
              </label>
              <input
                id="expirationDate"
                type="number"
                placeholder="MM/YY"
                className="border border-paymentMobileBorder w-full lg:w-64 p-4 rounded-lg bg-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="cvc"
                className="block mb-2 text-black font-normak mb-5 text-[14px]"
              >
                CVC
              </label>
              <input
                id="cvc"
                type="number"
                placeholder="000"
                className="border border-paymentMobileBorder w-full lg:w-64 p-4 rounded-lg bg-transparent"
              />
            </div>
          </div>

          <Link to="/">
            <button className="text-black text-sm font-medium w-full lg:w-36 bg-customPink p-4 rounded-lg hover:bg-white">
              Make Payment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;

import React from "react";
import { ReactComponent as SvgImage } from "../assets/images/paymentCard.svg";

const Payment = () => {
  return (
    <div className="container max-w-4xl mt-12 mx-auto p-4">
      <div className="right w-full bg-paymentBg p-10 rounded-lg">
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
    </div>
  );
};

export default Payment;

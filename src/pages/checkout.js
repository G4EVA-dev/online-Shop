
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SvgImage } from "../assets/images/paymentCard.svg";

const Checkout = () => {
  const [selectedRadio, setSelectedRadio] = useState("");

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  return (
    <div className="container w-full mt-20 mx-auto p-4">
      <div className="mb-12">
        <h1 className="text-3xl font-bold">Check Out</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        <div className="left w-full lg:w-1/2 border border-black p-10 rounded-lg">
          <h2 className="text-xl font-medium mb-8">Select how to receive your package(s)</h2>

          <fieldset className="flex flex-col">
            <legend className="text-lg mb-5">Pickup</legend>
            <div className="mb-5">
              <input
                id="choice1"
                type="radio"
                value="Old Secreteriat Complex, Area 1, Garki Abaji Abji"
                className="mr-2"
                checked={selectedRadio === "Old Secreteriat Complex, Area 1, Garki Abaji Abji"}
                onChange={handleRadioChange}
                aria-checked={selectedRadio === "Old Secreteriat Complex, Area 1, Garki Abaji Abji"}
              />
              <label htmlFor="choice1" className={`radio-label ${selectedRadio === "Old Secreteriat Complex, Area 1, Garki Abaji Abji" ? "radio-selected" : ""}`}>
                <span className="radio-custom"></span>
                Old Secreteriat Complex, Area 1, Garki Abaji Abji
              </label>
            </div>

            <div className="mb-5">
              <input
                id="choice2"
                type="radio"
                value="Sokoto Street, Area 1, Garki Area 1 AMAC"
                className="mr-2"
                checked={selectedRadio === "Sokoto Street, Area 1, Garki Area 1 AMAC"}
                onChange={handleRadioChange}
                aria-checked={selectedRadio === "Sokoto Street, Area 1, Garki Area 1 AMAC"}
              />
              <label htmlFor="choice2" className={`radio-label ${selectedRadio === "Sokoto Street, Area 1, Garki Area 1 AMAC" ? "radio-selected" : ""}`}>
                <span className="radio-custom"></span>
                Sokoto Street, Area 1, Garki Area 1 AMAC
              </label>
            </div>
          </fieldset>

          <div className="delivery flex flex-col mb-8">
            <label htmlFor="delivery" className="text-lg mb-5">Delivery</label>
            <input
              id="delivery"
              type="text"
              placeholder="House Address"
              className="border border-gray-300 w-full p-4 rounded-lg"
            />
          </div>

          <div className="contact flex flex-col">
            <label htmlFor="contact1" className="mb-5">Contact</label>
            <input
              id="contact1"
              type="tel"
              placeholder="Phone nos 1"
              className="border border-gray-300 w-full lg:w-[50%] p-2 mb-5 rounded-lg"
            />
            <input
              id="contact2"
              type="tel"
              placeholder="Phone nos 2"
              className="border border-gray-300 w-full lg:w-[50%] p-2 mb-8 rounded-lg"
            />
          </div>
        </div>

        {/* Conditional Rendering for Payment Section */}
        <div className="right w-full lg:w-1/2 bg-paymentBg p-10 rounded-lg hidden lg:block">
          <h2 className="text-white font-semibold mb-5 text-2xl">Payment</h2>

          <div className="mb-5">
            <SvgImage
              alt="PaymentCard"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div>
            <div className="mb-8">
              <label htmlFor="cardNumber" className="block text-white mb-2 text-sm font-medium">Card Number</label>
              <input
                id="cardNumber"
                type="text"
                placeholder="0000 0000 0000 0000"
                className="border border-paymentBorder w-full p-4 rounded-lg bg-transparent"
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-5 mb-8">
              <div className="mr-auto">
                <label htmlFor="expirationDate" className="block text-white mb-2 text-sm font-medium">Expiration Date</label>
                <input
                  id="expirationDate"
                  type="text"
                  placeholder="MM/YY"
                  className="border border-paymentBorder w-full lg:w-64 p-4 rounded-lg bg-transparent"
                />
              </div>

              <div>
                <label htmlFor="cvc" className="block text-white mb-2 text-sm font-medium">CVC</label>
                <input
                  id="cvc"
                  type="text"
                  placeholder="000"
                  className="border border-paymentBorder w-full lg:w-64 p-4 rounded-lg bg-transparent"
                />
              </div>
            </div>

            <Link to="/paymentSuccess">
              <button className="text-black text-sm font-medium w-full lg:w-36 bg-customPink p-4 rounded-lg hover:bg-white">Make Payment</button>
            </Link>
          </div>
        </div>

        {/* Link to Payment Page on Mobile */}
        <div className="lg:hidden w-full">
          <Link to="/payment">
            <button className="text-black text-sm font-medium w-full bg-customPink p-4 rounded-lg hover:bg-white">Proceed to Payment</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

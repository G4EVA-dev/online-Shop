

import React from "react";
import { Link } from "react-router-dom";

const FooterForCart = () => {
  return (
    <footer className="bg-footerBackground text-white w-full  rounded-[10px] mt-auto">
      <div className="flex flex-col md:flex-row lg:flex-row p-10">
        <div className="left mr-auto">
          <h1 className="text-[24px] font-semibold mb-[27px]">
            Shopping Summary
          </h1>
          <label htmlFor="discount" className="text-[16px] font-normal">
            Discount Code
          </label>
          <div className="flex gap-[48px] items-center mt-[21px] md:flex-col mb-[21px]">
            <input
              id="discount"
              type="text"
              className="w-full lg:w-[281px] border border-paymentBorder h-[44px] rounded-[12px] bg-transparent"
            />
            <button className="w-full lg:w-[66px] h-[45px] rounded-[10px] bg-customPink lg:w-[281px] text-[12px] text-black font-normal hover:bg-white">
              Apply
            </button>
          </div>
        </div>
        <div className="right w-307px text-footerColor">
          <div className="border-b-1 border-dashed border-gray-500 w-full mb-[20px]">
            <div className="sub-total flex mb-[20px]">
              <h1 className="mr-auto">Sub Total</h1>
              <span>N1,234</span>
            </div>
            <div className="delivery-fee flex mb-[20px]">
              <h1 className="mr-auto">Delivery Fee</h1>
              <span>N1,234</span>
            </div>
            <div className="discount-amount flex mb-[20px]">
              <h1 className="mr-auto">Discount Amount</h1>
              <span>N1,234</span>
            </div>
            <div className="border-t-2 border-dashed border-gray-500 w-full"></div>
          </div>
          <div className="total-amount flex md:w-[307px] lg:w-[307px]">
            <h1 className="mr-auto">Total Amount</h1>
            <span>N1,234</span>
          </div>
          <Link to="/checkout">
            <button className="w-full h-[45px] rounded-[10px] bg-customPink text-[12px] font-normal text-black mt-[21px] hover:bg-white ">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterForCart;

// src/components/FooterForCart.js

import React from "react";

const FooterForCart = () => {
  return (
    <footer className="bg-footerBackground text-white py-4 px-6 flex flex-between w-full rounded-[10px] ">
      <div className="w-full flex-between flex p-10 ">
        <div className="left mr-auto ">
          <h1 className="text-[24px] font-semibold mb-[27px] ">
            Shopping Summary
          </h1>

          <label htmlFor="discount" className="text-[16px] font-normal ">
            Discount Code
          </label>

          <div className="left flex gap-[38px] items-center mt-[21px]  ">
            <input
              id="discount"
              type="text"
              className="w-[281px] border border-paymentBorder h-[44px] rounded-[12px] bg-transparent "
            />
            <button className="w-[66px] h-[45px] rounded-[10px] bg-customPink text-[12px] text-black font-normal">
              Apply
            </button>
          </div>
        </div>

        <div className="right w-307px text-footerColor ">
          <div className="border-b-1 border-dashed border-gray-500 w-full mb-[20px]  ">
            <div className="sub-total flex mb-[20px] ">
              <h1 className="mr-auto">Sub Total</h1>
              <span>N1234</span>
            </div>

            <div className="delivery-fee flex mb-[20px]">
              <h1 className="mr-auto">Delivery Fee</h1>
              <span>N1234</span>
            </div>

            <div className="disount-amount flex mb-[20px] ">
              <h1 className="mr-auto">Discount Amount</h1>
              <span>N1234</span>
            </div>

            <div className="border-t-2 border-dashed border-gray-500 w-full"></div>
          </div>

          <div className="total-amount flex w-[307px] ">
            <h1 className="mr-auto">Total Amount</h1>
            <span>N1234</span>
          </div>

          <button className="w-full h-[45px] rounded-[10px] bg-customPink text-[12px] font-normal text-black mt-[21px] "  >Checkout</button>

        </div>
      </div>
    </footer>
  );
};

export default FooterForCart;

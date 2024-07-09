 import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/cartItem";
import FooterForCart from "../components/footerForCart"; // Import the new footer component
import { toggleStatusTab } from "../stores/cart";

const MyCart = () => {
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container w-[1400px] mt-[45px] px-4 flex-grow">
        <div className="flex justify-between mt-[45px]">
          <div className=" w-full flex items-center text-3xl font-bold " >
            <h1 className="text-3xl font-bold mr-auto ">My Shopping Cart</h1>
            <h1>{`${carts.length - 1} Items`} </h1>
          </div>
        </div>

        <div className="h-full w-full grid grid-rows-[60px_1fr_60px] p-5 rounded-lg">
          <h2 className="p-2 text-white text-2xl">Shopping Cart</h2>
          <div className="p-5 ">
            {carts.map((item, key) => (
              <CartItem key={key} data={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Conditionally render the FooterForCart component */}
      {carts.length > 0 && <FooterForCart />}
    </div>
  );
};

export default MyCart;
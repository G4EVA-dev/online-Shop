import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/cartItem";
import { toggleStatusTab } from "../stores/cart";

const MyCart = () => {
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <div className="w-[1400px] container mt-[45px]  p-4">
      <div className="flex justify-between  mt-[45px] ">
        <div>
          <h1 className="text-3xl font-bold">My Shopping Cart</h1>
        </div>
      </div>

      <div className=" h-full w-full grid grid-rows-[60px_1fr_60px] p-5 rounded-lg">
        <h2 className="p-5 text-white text-2xl">Shopping Cart</h2>
        <div className=" p-5 overflow-y-auto">
          {carts.map((item, key) => (
            <CartItem key={key} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCart;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./cartItem";
import { toggleStatusTab } from "../stores/cart";

const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);
  const dispatch = useDispatch();
  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <div
      className={`fixed top-0 right-0 bg-gray-700 shadow-2xl h-full grid grid-rows-[60px_1fr_60px] transform transition-transform duration-500 z-50
        ${statusTab === false ? "translate-x-full" : ""}
        md:w-96 w-full sm:w-80`}
      aria-hidden={statusTab === false}
    >
      <h2 className="p-5 text-white text-2xl">Shopping Cart</h2>
      <div className="p-5 overflow-y-auto">
        {carts.map((item, key) => (
          <CartItem key={key} data={item} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 p-2">
        <button className="bg-black text-white py-2 px-4 rounded" onClick={handleCloseTabCart}>
          CLOSE
        </button>
        <button className="bg-amber-600 text-white py-2 px-4 rounded">CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartTab;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import iconCart from "../assets/images/iconCart.png";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab } from "../stores/cart";

const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <header className="flex justify-between items-center mb-5 ">
      <Link
        to="/"
        className="bg-sky-500 text-white text-3xl md:text-4xl lg:text-5xl p-4 rounded transition duration-300 ease-in-out hover:bg-sky-700 hover:shadow-lg">
      
        Home.
      </Link>
      <div
        className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative cursor-pointer"
        onClick={handleOpenTabCart}
      >
        <img src={iconCart} alt="Icon Cart" className="w-6" />
        <span className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center ">
          {totalQuantity}
        </span>
      </div>
    </header>
  );
};

export default Header;

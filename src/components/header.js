
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab } from "../stores/cart";

import logo from "../assets/images/logo.png"; // Replace with actual path
import searchIcon from "../assets/images/searchIcon.png"; // Replace with actual path

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
    <header className="flex justify-between items-center p-5 bg-white  fixed top-0 left-0 w-full z-10">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 md:h-12 lg:h-14" />
      </Link>

      

      <div className="flex items-center space-x-4 text-[13.5px] ">
        <div className=" flex justify-center items-center cursor-pointer">
          <Link to='/' className="font-bold text-customPink " >
            Product Listing
          </Link>
        </div>

        <div
          className="flex justify-center items-center relative cursor-pointer"
          onClick={handleOpenTabCart}
        >
          <Link to='/my-cart'  className="font-bold">
            My Cart
          </Link>
        </div>

        <div className="flex justify-center items-center cursor-pointer">
        <Link to='/checkout' className="font-bold">
            Checkout
          </Link>
        </div>

        

      </div>
    </header>
  );
};

export default Header;

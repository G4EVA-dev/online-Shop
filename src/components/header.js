import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/images/logo.png"; // Replace with actual path
import cartImage from "../assets/images/cart.png";
import arrow from "../assets/images/arrow-right.png";

const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const location = useLocation();

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  return (
    <header className="m-auto flex justify-between items-center py-2 bg-white fixed top-0 left-0 right-0 z-10  ">
      <div className="container mx-auto flex justify-between items-center  ">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 md:h-12 lg:h-14 " />
        </Link>

        <nav className="hidden md:flex items-center space-x-4 text-sm">
          <Link
            to="/"
            className={`font-bold ${
              location.pathname === "/" ? "text-customPink" : ""
            }`}
          >
            Product Listing
          </Link>
          <Link
            to="/my-cart"
            className={`font-bold hidden md:inline ${
              location.pathname === "/my-cart" ? "text-customPink" : ""
            }`}
          >
            My Cart
          </Link>
          <Link
            to="/checkout"
            className={`font-bold hidden md:inline ${
              location.pathname === "/checkout" ? "text-customPink" : ""
            }`}
          >
            Checkout
          </Link>
        </nav>

        <div className="md:hidden flex items-center space-x-6">
          {/* Mobile view: Replace links with images */}
          <Link to="/my-cart">
            <div className="w-[35px] h-[35px] border border-black rounded-[50%] flex justify-center items-center ">
              <img src={cartImage} alt="Cart" className="w-[18pxpx] h-[18px]" />
            </div>
          </Link>

          <Link to="/checkout">
            <div className="w-[35px] h-[35px] border border-black rounded-[50%] flex justify-center items-center flex-col">
              <img
                src={arrow}
                alt="Cart"
                className="h-[12px] w-[12px] text-black"
              />
              <img src={cartImage} alt="Cart" className="w-[18pxpx] h-[18px]" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

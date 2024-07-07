// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import iconCart from "../assets/images/iconCart.png";
// import { useSelector, useDispatch } from "react-redux";
// import { toggleStatusTab } from "../stores/cart";

// const Header = () => {
//   const [totalQuantity, setTotalQuantity] = useState(0);
//   const carts = useSelector((store) => store.cart.items);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     let total = 0;
//     carts.forEach((item) => (total += item.quantity));
//     setTotalQuantity(total);
//   }, [carts]);

//   const handleOpenTabCart = () => {
//     dispatch(toggleStatusTab());
//   };

//   return (
//     <header className="flex justify-between items-center mb-5 ">
//       <Link
//         to="/"
//         className="bg-sky-500 text-white text-3xl md:text-4xl lg:text-5xl p-4 rounded transition duration-300 ease-in-out hover:bg-sky-700 hover:shadow-lg">

//         Home
//       </Link>
//       <div
//         className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative cursor-pointer"
//         onClick={handleOpenTabCart}
//       >
//         <img src={iconCart} alt="Icon Cart" className="w-6" />
//         <span className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center ">
//           {totalQuantity}
//         </span>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab } from "../stores/cart";
import iconCart from "../assets/images/iconCart.png";
import iconUser from "../assets/images/iconUser.png"; // Replace with actual path
import iconWishlist from "../assets/images/iconWishlist.png"; // Replace with actual path
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
    <header className="flex justify-between items-center p-5 bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 md:h-12 lg:h-14" />
      </Link>

      <div className="flex-grow flex justify-center mx-5 ">
        <div className="flex items-center bg-[#EDEDEDAB] rounded-md p-2 w-full max-w-[675px] p-3">
          <img src={searchIcon} alt="Search Icon" className="w-6 h-6 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent border-none focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center cursor-pointer">
          <img src={iconUser} alt="User Icon" className="w-6" />
        </div>
        <div className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center cursor-pointer">
          <img src={iconWishlist} alt="Settings Icon" className="w-6" />
        </div>
        <div
          className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative cursor-pointer"
          onClick={handleOpenTabCart}
        >
          <img src={iconCart} alt="Cart Icon" className="w-6" />
          <span className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">
            {totalQuantity}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/cartItem";
import FooterForCart from "../components/footerForCart";
import { toggleStatusTab } from "../stores/cart";

const MyCart = () => {
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container w-full mx-auto lg:w-full md:w-full mt-[45px] md:px-4 lg:px-4 flex-grow md:overflow-y-auto md:h-full md:mb-[40px]">
        <div className="flex justify-between mt-[45px]">
          <div className="text-1xl w-full flex items-center lg:text-3xl font-bold md:text-2xl">
            <h1 className="font-bold mr-auto" aria-label="Shopping Cart Title">My Shopping Cart</h1>
            <h1 aria-live="polite">{`${carts.length} Items`}</h1>
          </div>
        </div>

        <div className="h-full w-full grid lg:grid-rows-[60px_1fr_60px] rounded-lg">
          <div className="mt-5 w-full">
            {carts.length === 0 ? (
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <p className="text-[24px] md:text-[40px] font-normal" role="alert">
                  No Item in Cart
                </p>
              </div>
            ) : (
              carts.map((item, key) => <CartItem key={key} product={item} />)
            )}
          </div>
        </div>
      </div>

      <div>
        {carts.length > 0 && <FooterForCart />}
      </div>
    </div>
  );
};

export default MyCart;





// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import CartItem from "../components/cartItem";
// import FooterForCart from "../components/footerForCart"; // Import the new footer component
// import { toggleStatusTab } from "../stores/cart";

// const MyCart = () => {
//   const carts = useSelector((store) => store.cart.items);
//   const dispatch = useDispatch();

//   const handleCloseTabCart = () => {
//     dispatch(toggleStatusTab());
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="container w-full mx-auto lg:w-full md:w-full mt-[45px] md:px-4 lg:px-4 flex-grow md:overflow-y-auto md:h-ful md:mb-[40px]">
//         <div className="flex justify-between mt-[45px]">
//           <div className="text-1xl w-full flex items-center lg:text-3xl font-bold md:text-2xl">
//             <h1 className="font-bold mr-auto" aria-label="Shopping Cart Title">My Shopping Cart</h1>
//             <h1 aria-live="polite">{`${carts.length} Items`}</h1>
//           </div>
//         </div>

//         <div className="h-full w-full grid lg:grid-rows-[60px_1fr_60px] rounded-lg">
//           <div className="mt-5 w-full">
//             {carts.length === 0 ? (
//               <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                 <p className="text-[24px] md:text-[40px] font-normal" role="alert">
//                   No Item in Cart
//                 </p>
//               </div>
//             ) : (
//               carts.map((item, key) => <CartItem key={key} data={item} />)
//             )}
//           </div>
//         </div>
//       </div>

//       <div>
//         {/* Conditionally render the FooterForCart component */}
//         {carts.length > 0 && <FooterForCart />}
//       </div>
//     </div>
//   );
// };

// export default MyCart;







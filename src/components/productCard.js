import React from "react";
import { Link } from "react-router-dom";
import iconCart from "../assets/images/iconCart.png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";

const ProductCard = (props) => {
  const carts = useSelector((store) => store.cart.items);
  const { id, name, price, image, info, stars, slug } = props.data;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
  };

  return (
    <div className=" bg-opacity-70 p-5 rounded-xl shadow-sm m-4 w-full max-w-[385px]  flex flex-col justify-between ">
      <div className="bg-gray-300  mb-24px rounded-[10px] ">
        <Link to={slug}>
          <img
            src={image}
            alt=""
            className="w-full h-48 object-cover  object-center rounded-lg "
          />
        </Link>
      </div>

      <div className="">
        <div className="flex justify-between mb-[10px] items-center ">
          <h3 className="text-[18px]  font-semibold ">{name}</h3>
          <p className="text-[14px] font-medium text-customPink text-[14px] ">
            N {price}
          </p>
        </div>

        <div>
          <p className="text-[14px] font-normal mb-[10px] ">{info}</p>
        </div>

        <div>
          <img
            className="w-[104px] h-[20px] mb-[23px] "
            src={stars}
            alt="Review"
          />
        </div>

        <div className="flex justify-between items-center mb-2">
          <button
            className="border border-colorAddToCard bg-white  p-2 rounded-[14px] text-[12px] hover:bg-colorAddToCard w-[104px] h-[44px] "
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

// ProductCard.js
// import React from "react";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { addToCart } from "../stores/cart";
// import iconCart from "../assets/images/iconCart.png";

// const ProductCard = (props) => {
//   const carts = useSelector((store) => store.cart.items);
//   console.log(carts);

//   const { id, name, price, image, slug } = props.data;

//   const dispatch = useDispatch();
//   const handleAddToCart = () => {
//     dispatch(addToCart({
//       productId: id,
//       quantity: 1
//     }));
//   }

//   return (
//     <div className="bg-gray-300 bg-opacity-70 p-5 rounded-xl shadow-sm m-4 w-full max-w-[385px] h-[563px] flex flex-col justify-between">
//       <Link to={slug} className="flex-grow">
//         <img
//           src={image}
//           alt=""
//           className="w-full h-full object-cover rounded-lg"
//         />
//       </Link>
//       <div className="text-center mt-4">
//         <h3 className="text-2xl py-3 font-medium">{name}</h3>
//         <div className="flex justify-between items-center mt-2">
//           <p className="text-lg font-medium">${price}</p>
//           <button
//             className="bg-transparent border border-red-500 text-red-500 p-2 rounded-md text-sm hover:bg-red-500 hover:text-white flex items-center gap-2 transition-colors duration-300"
//             onClick={handleAddToCart}
//           >
//             <img src={iconCart} alt="Icon Cart" className="w-5" />
//             Add To Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

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
    <div className="w-full sm:w-[365px] md:w-[385px] lg:w-[385px] xl:w-[305px]  bg-opacity-70 p-5 rounded-xl shadow-sm mt-[46px] mx-2 ">
      <div className="bg-gray-300 w-auto mb-24px ">
        <Link to={slug}>
          <img
            src={image}
            alt=""
            className="w-full h-48 object-cover rounded-lg mb-3"
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
          <p className="text-[14px] font-normal mb-[10px] " >{info}</p>
        </div>

        <div>
          <img className="w-[104px] h-[20px] mb-[23px] " src={stars} alt="Review" />
        </div>

        <div className="flex justify-between items-center mb-2">
          <button
            className="border-colorAddToCard bg-white  p-2 rounded-[14px] text-[12px] hover:bg-colorAddToCard w-[104px] h-[44px] "
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

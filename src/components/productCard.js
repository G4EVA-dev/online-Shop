
import React from "react";
import { Link } from "react-router-dom";
import iconCart from "../assets/images/iconCart.png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";
import { toast } from "react-toastify";

const ProductCard = (props) => {
  const { id, name, price, image, info, stars, slug } = props.data;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
    toast.success(`${name} has been added to your cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div
      className="bg-opacity-70 mt-[21px] rounded-xl w-[185px] md:w-[320px] lg:w-[360px] flex flex-col m-auto"
      role="group"
      aria-labelledby={`product-title-${id}`}
    >
      <Link to={slug} aria-labelledby={`product-title-${id}`}>
        <div
          className="max-w-full flex items-center justify-center bg-gray-300 h-[174px] md:h-[395.13px] cursor-pointer border hover:border-customPink mb-24px rounded-[10px]"
        >
          <img
            src={image}
            alt={`${name} product image`}
            className="h-[50%] m-auto object-cover object-center rounded-lg"
          />
        </div>
      </Link>

      <div>
        <div className="flex flex-start flex-col md:flex-row md:justify-between mb-[10px] md:items-center">
          <h3
            id={`product-title-${id}`}
            className="text-[12px] md:text-[18px] mb-[5px] font-semibold"
          >
            {name}
          </h3>
          <p className="text-[13px] md:text-[14px] font-medium text-customPink">
            N {price}
          </p>
        </div>

        <div>
          <p className="text-[12px] md:text-[18px] font-normal mb-[10px]">
            {info}
          </p>
        </div>

        <div>
          <img
            className="w-[88px] h-[16.72px] md:w-[104px] md:h-[20px] mb-[23px]"
            src={stars}
            alt={`Rated ${stars} stars`}
          />
        </div>

        <div className="flex justify-between items-center mb-2">
          <button
            className="border border-colorAddToCard bg-white p-2 rounded-[14px] text-[12px] hover:bg-colorAddToCard w-[104px] h-[44px]"
            onClick={handleAddToCart}
            aria-label={`Add ${name} to cart`}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";
import { menFashion, womenFashion, techGadget } from "../pages/products";

const Detail = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    // Function to find product detail based on slug
    const findDetail = findProductBySlug(slug);
    if (findDetail) {
      setDetail(findDetail);
    } else {
      // Handle if product not found, you can redirect or handle differently
      window.location.href = "/"; // Redirect to home page if product not found
    }
  }, [slug]);

  // Function to find product by slug in the correct category
  const findProductBySlug = (slug) => {
    let product;

    // Check in deals of the day
    product = techGadget.find((item) => item.slug === slug);
    if (product) return product;

    // Check in men's fashion
    product = menFashion.find((item) => item.slug === slug);
    if (product) return product;

    // Check in women's fashion
    product = womenFashion.find((item) => item.slug === slug);
    if (product) return product;

    return null; // Handle if product is not found
  };

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: detail.id,
        quantity: quantity,
      })
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl text-center md:mt-[65px] mt-[45px]">
        PRODUCT DETAIL
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <img src={detail.image} alt="" className="w-full max-w-full h-auto" />
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-2xl md:text-4xl uppercase font-bold">
            {detail.name}
          </h1>
          <p className="font-bold text-xl md:text-3xl">${detail.price}</p>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex gap-2 items-center">
              <button
                className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                onClick={handleMinusQuantity}
              >
                -
              </button>
              <span className="bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">
                {quantity}
              </span>
              <button
                className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                onClick={handlePlusQuantity}
              >
                +
              </button>
            </div>
            <button
              className="bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl mt-3 md:mt-0"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
          <p className="mt-5 md:mt-0">{detail.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;

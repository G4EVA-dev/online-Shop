import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../stores/cart";
import { menFashion, womenFashion, techGadget } from "../pages/products";
import trash from "../assets/images/delete.png";

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState(null); // Initialize as null or an empty object
  const dispatch = useDispatch();

  useEffect(() => {
    // Find detail based on productId in the appropriate product array
    const findDetail = [...techGadget, ...menFashion, ...womenFashion].find(
      (product) => product.id === productId
    );
    setDetail(findDetail); // Set detail if found
  }, [productId]);

  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      })
    );
  };

  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };

  if (!detail) {
    return null; // Handle case when detail is not found
  }

  return (
    <div className="container flex flex-between gap-[130px] items-center bg-shopItem text-black  h-[155px] mb-[20px]  rounded-[7px] ">
      <div className="flex flex-around gap-[15px] mr-auto ">
        <div className="image w-[100px] h-full ml-4 ">
          <img
            src={detail.image}
            alt="Iamge of Product"
            className="w-[150px] h-[5%] object-cover object-contain"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="name flex-grow text-left">{detail.name}</h3>
          <h3 className="info flex-grow text-left">{detail.info}</h3>
        </div>
      </div>

      <div>
        <p className="">{`N ${detail.price}`} </p>
      </div>

      <div className="buttons w-20 flex justify-between items-center">
        <button
          className="bg-white  w-6 h-6 text-black border border-black flex items-center justify-center"
          onClick={handleMinusQuantity}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="bg-white  w-6 h-6 text-black border border-black flex items-center justify-center"
          onClick={handlePlusQuantity}
        >
          +
        </button>
      </div>

      <div>
        <p  className="total w-20 text-center">{`N ${detail.price * quantity}`}</p>
      </div>

      <div>
        <p className=" hover:bg-red cursor-pointer " >
          <img className="mr-[40px] " src={trash} alt="Delete Item" />
        </p>
      </div>
    </div>
  );
};

export default CartItem;


import React from "react";
import { products } from "./products";
import ImagesWithContent from '../components/ImagesWithContent';
import ProductCart from "../components/productCard";

const Home = () => {
  return (
    <div>
      <ImagesWithContent/>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-col-2 gap-5">
        {products.map((product, key) => (
          <ProductCart key={key} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;

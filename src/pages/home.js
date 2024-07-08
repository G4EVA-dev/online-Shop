import React from "react";
import { menFashion, womenFashion, techGadget } from "../pages/products";
import ImagesWithContent from "../components/ImagesWithContent";
import ProductCard from "../components/productCard";

const CategorySection = ({ title, products }) => (
  <div className="category mb-10 mt-[74px] ">
    <h1 className="text-3xl font-bold mb-5">{title}</h1>
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
      {products.map((product, key) => (
        <ProductCard key={key} data={product} />
      ))}
    </div>
  </div>
);

const Home = () => {
  return (
    <div>
      <ImagesWithContent />
      <CategorySection title="Tech Gadget" products={techGadget} />
      <CategorySection title="Men Fashion" products={menFashion} />
      <CategorySection title="Women Fashion" products={womenFashion} />
    </div>
  );
};

export default Home;

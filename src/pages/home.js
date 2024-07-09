import React from "react";
import { menFashion, womenFashion, techGadget } from "../pages/products";
import ImagesWithContent from "../components/ImagesWithContent";
import ProductCard from "../components/productCard";
import Footer from "../components/footer";
import stroke from "../assets/images/borderLeft.png";

const CategorySection = ({ title, products }) => (
  <div className="category mb-10 mt-[74px] ">
    <div className="w-full flex gap-[20px] items-center">
      <img src={stroke} alt="Bordereft" />

      <h1 className="text-3xl font-bold">{title}</h1>
    </div>

    <div className=" grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-2 gap-5 w-full   ">
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

      <div className="w-full " >
        <Footer />
      </div>
    </div>
  );
};

export default Home;

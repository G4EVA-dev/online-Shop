import React from "react";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";
import borderLeft from "../assets/images/borderLeft.png";

const Category = ({ title, products }) => {
  return (
    <div className="category ">
      <div class>
        <image src={borderLeft} alt={title} />
        <h1 className="text-4xl font-bold mb-5 border border-customPink ">
          {title}
        </h1>
      </div>

      <div className=" grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-[75px]">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

Category.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Category;

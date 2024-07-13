// import React from "react";
// import { menFashion, womenFashion, techGadget } from "../pages/products";
// import ImagesWithContent from "../components/ImagesWithContent";
// import ProductCard from "../components/productCard";
// import Footer from "../components/footer";
// import stroke from "../assets/images/borderLeft.png";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const CategorySection = ({ title, products }) => (
//   <div className="category mb-10 mt-[74px] ">
//     <div className="w-full flex gap-[20px] items-center">
//       <img src={stroke} alt="Bordereft" />

//       <h1 className="text-3xl font-bold">{title}</h1>
//     </div>

//     <div className=" grid grid-cols-2 lg:grid-cols-3 xs:grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-5 w-full ">
//       {products.map((product, key) => (
//         <ProductCard key={key} data={product} />
//       ))}
//     </div>
//   </div>
// );

// const Home = () => {
//   return (
//     <div>
//       <ToastContainer />
//       <ImagesWithContent />
//       <CategorySection title="Tech Gadget" products={techGadget} />
//       <CategorySection title="Men Fashion" products={menFashion} />
//       <CategorySection title="Women Fashion" products={womenFashion} />

//       <div className="w-full " >
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import ProductCard from "../components/productCard"; // Assume you have a ProductCard component
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImagesWithContent from "../components/ImagesWithContent";
import Footer from "../components/footer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  useEffect(() => {
    fetchProducts(page, size);
  }, [page, size]);

  const fetchProducts = async (page, size) => {
    try {
      const response = await fetch(`/api/products?page=${page}&size=${size}`);
      const data = await response.json();
      setProducts(data.items);
      console.log(data);
      setTotal(data.total);
      setNextPage(data.next_page);
      setPrevPage(data.previous_page);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleNextPage = () => {
    if (nextPage) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (prevPage) {
      setPage(page - 1);
    }
  };

  return (
    <div className=" ">
      <ToastContainer />
      <ImagesWithContent />
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[75px] ">
        {products.map((product) => (
          <ProductCard key={product.unique_id} product={product} />
        ))}
        
      </div>

      <div className="flex justify-center gap-[20px] mb-[25px] ">
        {prevPage && (
          <button
            onClick={handlePrevPage}
            className="mt-4 p-4 bg-blue-500 text-white"
          >
            Previous Page
          </button>
        )}

        {nextPage && (
          <button
            onClick={handleNextPage}
            className="mt-4 p-4 bg-blue-500 text-white"
          >
            Next Page
          </button>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;

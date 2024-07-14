import React, { useEffect, useState } from "react";
import ProductCard from "../components/productCard"; // Assuming you have a ProductCard component
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImagesWithContent from "../components/ImagesWithContent";
import Footer from "../components/footer";
import { fetchProducts } from "../apiServices/timbuService"; // Adjust the import path as necessary

const Home = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [error, setError] = useState(null); // State to store error object

  useEffect(() => {
    fetchProducts(page, size)
      .then((data) => {
        setProducts(data.items);
        setTotal(data.total);
        setNextPage(data.next_page);
        setPrevPage(data.previous_page);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError(error); // Set error state
        toast.error("Failed to fetch products. Please try again later.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }, [page, size]);

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

  const totalPages = Math.ceil(total / size); // Calculate total pages

  return (
    <div className="">
      <ToastContainer />
      <ImagesWithContent />
      {error ? ( // Conditional rendering for error message
        <div className="error-message">
          <p>Failed to fetch products. Please try again later.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[65px]">
          {products.map((product) => (
            <ProductCard key={product.unique_id} product={product} />
          ))}
        </div>
      )}

      <div className="flex justify-center gap-[10px] md:gap-[20px] mb-[25px]">
        <button
          onClick={handlePrevPage}
          className="mt-4 p-2 bg-blue-500 text-white rounded-5 "
          disabled={!prevPage}
        >
          Previous Page
        </button>

        {/* Display current page and total pages */}
        <span className="mt-4 p-2 text-gray-700">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          className="mt-4 p-2 bg-blue-500 text-white rounded-5"
          disabled={!nextPage}
        >
          Next Page
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Home;






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


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";
import { fetchProducts } from "../apiServices/timbuService";

const Detail = () => {
  const { slug: url_slug } = useParams();
  const [detail, setDetail] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        if (!url_slug) {
          throw new Error("URL slug is undefined");
        }

        const productData = await fetchProducts(1, 30); // Fetching product list
        if (productData && productData.items && productData.items.length > 0) {
          const selectedProduct = productData.items.find(
            (item) => item.url_slug === url_slug
          );
          if (selectedProduct) {
            setDetail(selectedProduct);
          } else {
            throw new Error("Product not found in fetched data");
          }
        } else {
          throw new Error("Product data not found");
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [url_slug]);

  if (!detail) {
    return <div>Loading...</div>; // Handle loading state while fetching product details
  }

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

  const getPrice = () => {
    if (
      detail.current_price &&
      detail.current_price.length > 0 &&
      detail.current_price[0].NGN &&
      detail.current_price[0].NGN.length > 0
    ) {
      return `N ${quantity * detail.current_price[0].NGN[0]}`;
    }
    return "Price not available";
  };

  return (
    <div className="p-4 mt-[55px] ">
      <h2
        id="product-detail-title"
        className="text-3xl text-center md:mt-[65px] "
      >
        PRODUCT DETAIL
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          {detail.photos && detail.photos[0] && (
            <img
              src={`https://api.timbu.cloud/images/${detail.photos[0].url}`}
              alt={detail.name}
              className="h-[50%] m-auto object-cover object-center rounded-lg"
            />
          )}
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <h1
            id="product-name"
            className="text-2xl md:text-4xl uppercase font-bold"
          >
            {detail.name}
          </h1>
          <p className="font-bold text-xl md:text-3xl">
            {getPrice()}
          </p>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex gap-2 items-center">
              <button
                className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                onClick={handleMinusQuantity}
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span
                className="bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                aria-live="polite"
              >
                {quantity}
              </span>
              <button
                className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                onClick={handlePlusQuantity}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <button
              className="bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl mt-3 md:mt-0"
              onClick={handleAddToCart}
              aria-label={`Add ${detail.name} to cart`}
            >
              Add To Cart
            </button>
          </div>
          <p
            className="mt-5 md:mt-0 text-3"
            aria-describedby="product-detail-description"
          >
            {detail.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;

// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../stores/cart";
// import { fetchProducts } from "../apiServices/timbuService"; // Import fetchProducts function

// const Detail = ({ url_slug }) => {
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     // Fetch products based on url_slug from API
//     const fetchProduct = async () => {
//       try {
//         const productData = await fetchProducts(`/api/products/${url_slug}`);
//         if (productData && productData.items && productData.items.length > 0) {
//           setProducts(productData.items);
//           setSelectedProduct(productData.items[0]); // Selecting the first product initially
//         } else {
//           throw new Error("Products not found in fetched data");
//         }
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         // Handle error state or redirect as needed
//       }
//     };

//     fetchProduct();
//   }, [url_slug]);

//   const handleProductSelect = (product) => {
//     setSelectedProduct(product);
//   };

//   const handleMinusQuantity = () => {
//     setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
//   };

//   const handlePlusQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleAddToCart = () => {
//     if (selectedProduct) {
//       dispatch(
//         addToCart({
//           productId: selectedProduct.id,
//           quantity: quantity,
//         })
//       );
//     }
//   };

//   if (!selectedProduct) {
//     return <div>Loading...</div>; // Handle loading state while fetching product details
//   }

//   return (
//     <div className="p-4 mt-[55px]">
//       <h2 id="product-detail-title" className="text-3xl text-center md:mt-[65px]">
//         PRODUCT DETAIL
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//         <div>
//           <img
//             src={`https://api.timbu.cloud/images/${selectedProduct.photos && selectedProduct.photos[0] && selectedProduct.photos[0].url}`}
//             alt={`${selectedProduct.name} product image`}
//             className="w-full max-w-full h-auto"
//           />
//         </div>
//         <div className="flex flex-col items-center justify-center gap-5">
//           <h1 id="product-name" className="text-2xl md:text-4xl uppercase font-bold">
//             {selectedProduct.name}
//           </h1>
//           <p className="font-bold text-xl md:text-3xl">
//             {selectedProduct.current_price &&
//             selectedProduct.current_price.length > 0 &&
//             selectedProduct.current_price[0].NGN &&
//             selectedProduct.current_price[0].NGN.length > 0
//               ? `N ${quantity * selectedProduct.current_price[0].NGN[0]}`
//               : "Price not available"}
//           </p>
//           <div className="flex flex-col md:flex-row gap-5">
//             <div className="flex gap-2 items-center">
//               <button
//                 className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
//                 onClick={handleMinusQuantity}
//                 aria-label="Decrease quantity"
//               >
//                 -
//               </button>
//               <span
//                 className="bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
//                 aria-live="polite"
//               >
//                 {quantity}
//               </span>
//               <button
//                 className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
//                 onClick={handlePlusQuantity}
//                 aria-label="Increase quantity"
//               >
//                 +
//               </button>
//             </div>
//             <button
//               className="bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl mt-3 md:mt-0"
//               onClick={handleAddToCart}
//               aria-label={`Add ${selectedProduct.name} to cart`}
//             >
//               Add To Cart
//             </button>
//           </div>
//           <p className="mt-5 md:mt-0" aria-describedby="product-detail-description">
//             {selectedProduct.description}
//           </p>
//         </div>
//       </div>

//       {/* Render product selection buttons if there are multiple products */}
//       {products.length > 1 && (
//         <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
//           {products.map((product) => (
//             <button
//               key={product.id}
//               onClick={() => handleProductSelect(product)}
//               className={`bg-gray-200 text-gray-800 p-3 rounded-lg ${
//                 product.id === selectedProduct.id ? "bg-gray-400" : ""
//               }`}
//             >
//               {product.name}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Detail;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../stores/cart";
// import { menFashion, womenFashion, techGadget } from "../pages/products";

// const Detail = () => {
//   const { slug } = useParams();
//   const [detail, setDetail] = useState({});
//   const [quantity, setQuantity] = useState(1);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     // Function to find product detail based on slug
//     const findDetail = findProductBySlug(slug);
//     if (findDetail) {
//       setDetail(findDetail);
//     } else {
//       // Handle if product not found, you can redirect or handle differently
//       window.location.href = "/"; // Redirect to home page if product not found
//     }
//   }, [slug]);

//   // Function to find product by slug in the correct category
//   const findProductBySlug = (slug) => {
//     let product;

//     // Check in deals of the day
//     product = techGadget.find((item) => item.slug === slug);
//     if (product) return product;

//     // Check in men's fashion
//     product = menFashion.find((item) => item.slug === slug);
//     if (product) return product;

//     // Check in women's fashion
//     product = womenFashion.find((item) => item.slug === slug);
//     if (product) return product;

//     return null; // Handle if product is not found
//   };

//   const handleMinusQuantity = () => {
//     setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
//   };

//   const handlePlusQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleAddToCart = () => {
//     dispatch(
//       addToCart({
//         productId: detail.id,
//         quantity: quantity,
//       })
//     );
//   };

//   return (
//     <div className="p-4 mt-[55px] ">
//       <h2 id="product-detail-title" className="text-3xl text-center md:mt-[65px] ">
//         PRODUCT DETAIL
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//         <div>
//           <img src={detail.image} alt={`${detail.name} product image`} className="w-full max-w-full h-auto" />
//         </div>
//         <div className="flex flex-col items-center justify-center gap-5">
//           <h1 id="product-name" className="text-2xl md:text-4xl uppercase font-bold">
//             {detail.name}
//           </h1>
//           <p className="font-bold text-xl md:text-3xl">${detail.price}</p>
//           <div className="flex flex-col md:flex-row gap-5">
//             <div className="flex gap-2 items-center">
//               <button
//                 className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
//                 onClick={handleMinusQuantity}
//                 aria-label="Decrease quantity"
//               >
//                 -
//               </button>
//               <span className="bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center" aria-live="polite">
//                 {quantity}
//               </span>
//               <button
//                 className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
//                 onClick={handlePlusQuantity}
//                 aria-label="Increase quantity"
//               >
//                 +
//               </button>
//             </div>
//             <button
//               className="bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl mt-3 md:mt-0"
//               onClick={handleAddToCart}
//               aria-label={`Add ${detail.name} to cart`}
//             >
//               Add To Cart
//             </button>
//           </div>
//           <p className="mt-5 md:mt-0" aria-describedby="product-detail-description">{detail.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Detail;

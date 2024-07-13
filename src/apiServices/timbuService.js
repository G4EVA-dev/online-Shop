export const fetchProducts = async (page = 1, size = 10) => {
  try {
    const response = await fetch(`/api/products?page=${page}&size=${size}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      return data;
    } else {
      const text = await response.text();
      console.error("Non-JSON response received:", text);
      throw new Error("Response is not JSON");
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};





// // timbuService.js
// export const fetchProducts = async (page = 1, size = 10) => {
//   try {
//     const response = await fetch(`http://localhost:5000/api/products`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const contentType = response.headers.get("content-type");
//     if (contentType && contentType.includes("application/json")) {
//       const data = await response.json();
//       return data;
//     } else {
//       const text = await response.text();
//       console.error("Non-JSON response received:", text);
//       throw new Error("Response is not JSON");
//     }
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     throw error;
//   }
// };




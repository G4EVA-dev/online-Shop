const BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://api.timbu.cloud' 
  : 'http://localhost:5000';

export const fetchProducts = async (page = 1, size = 10) => {
  try {
    const response = await fetch(`${BASE_URL}/products?organization_id=3e60fab9119a4ceeb7363bfc44d629c0&reverse_sort=false&page=${page}&size=${size}&Appid=Y8ZE73OSI3STWFA&Apikey=0b05a82548ab4104bd5e007e7bfcacd620240712130521270028`, {
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




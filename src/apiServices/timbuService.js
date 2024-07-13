// timbuService.js
export const fetchProducts = async (page = 1, size = 10) => {
  try {
    const response = await fetch(`http://localhost:5000/api/products`, {
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




// apiServices/timbuService.js
// export const fetchProductDetail = async (productId) => {
//   try {
//     const response = await fetch(`https://api.timbu.cloud/products/${productId}`);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching product details:", error);
//     throw error;
//   }
// };






// const API_KEY = "0b05a82548ab4104bd5e007e7bfcacd620240712130521270028";

// const API_ID = "Y8ZE73OSI3STWFA";
// const BASE_URL = 'https://api.timbu.cloud';
// const ORGANISATION_ID = "3e60fab9119a4ceeb7363bfc44d629c0";

// export const fetchProducts = async (page = 2, size = 10) => {
//   try {
//     const response = await fetch(`${BASE_URL}/products?organization_id=${ORGANISATION_ID}&reverse_sort=false&page=${page}&size=${size}&Appid=${API_ID}&Apikey=${API_KEY}`, {
//       method: 'GET',
//       mode: 'no-cors',
//       headers: {
//         'Authorization': `Bearer ${API_KEY}`,
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     throw error;
//   }
// };

// // timbuService.js
// const API_KEY = "0b05a82548ab4104bd5e007e7bfcacd620240712130521270028";
// const API_ID = "Y8ZE73OSI3STWFA";
// const BASE_URL = 'https://api.timbu.cloud';
// const ORGANISATION_ID = "3e60fab9119a4ceeb7363bfc44d629c0";

// export const fetchProducts = async (page = 1, size = 10) => {
//   try {
//     const response = await fetch(`${BASE_URL}/products?organization_id=${ORGANISATION_ID}&reverse_sort=false&page=${page}&size=${size}`, {
//       method: 'GET',  // Assuming GET method, use POST, PUT, DELETE as required
//       headers: {
//         'Authorization': `Bearer ${API_KEY}`,
//         'Content-Type': 'application/json',  // Adjust the Content-Type as needed
//         'Appid': API_ID,
//         'Apikey': API_KEY,
//       }
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     throw error;
//   }
// };

// export const fetchProducts = async (page = 1, limit = 10) => {
//   const response = await fetch(`${BASE_URL}/products?page=${page}&limit=${limit}`, {
//     headers: {
//       'Authorization': `Bearer ${API_KEY}`
//     }
//   });
//   const data = await response.json();
//   return data;
// };

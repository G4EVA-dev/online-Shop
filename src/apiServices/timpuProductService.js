export const fetchProductDetails = async (productId) => {
  const ORGANISATION_ID = "3e60fab9119a4ceeb7363bfc44d629c0";
    
    const apiUrl = `https://api.timbu.cloud/products/${productId}?organization_id=${ORGANISATION_ID}`;
  
    try {
      const response = await fetch(apiUrl, {
        headers: {
          "Appid": "Y8ZE73OSI3STWFA",
          "Apikey": "0b05a82548ab4104bd5e007e7bfcacd620240712130521270028"
        }
      });
  
      if (!response.ok) {
        throw new Error(`Error fetching product details: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  



// // const BASE_URL = "https://api.timbu.cloud";
// const BASE_URL = "https://timbu-get-single-product.reavdev.workers.dev";
// const API_KEY = "0b05a82548ab4104bd5e007e7bfcacd620240712130521270028";
// const API_ID = "Y8ZE73OSI3STWFA";
// const ORGANISATION_ID = "3e60fab9119a4ceeb7363bfc44d629c0";

// export const fetchProductById = async (productId) => {
//   try {
//     const response = await fetch(
//       // `${BASE_URL}/products/${productId}?Appid=${API_ID}&Apikey=${API_KEY}`

//       `${BASE_URL}/${productId}?organization_id=${ORGANISATION_ID}&Appid=${API_ID}&Apikey=${API_KEY}`,

//       // https://timbu-get-single-product.reavdev.workers.dev/e2fcb10e02334319857a4197c1d4c79b?organization_id=3e60fab9119a4ceeb7363bfc44d629c0&Appid=Y8ZE73OSI3STWFA&Apikey=0b05a82548ab4104bd5e007e7bfcacd620240712130521270028

//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

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
//     console.error("Error fetching product:", error);
//     throw error;
//   }
// };




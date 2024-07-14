const BASE_URL = "https://api.timbu.cloud";
const API_KEY = "0b05a82548ab4104bd5e007e7bfcacd620240712130521270028";
const API_ID = "Y8ZE73OSI3STWFA";
const ORGANISATION_ID = "3e60fab9119a4ceeb7363bfc44d629c0";

export const fetchProductById = async (productId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/products/${productId}?Appid=${API_ID}&Apikey=${API_KEY}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

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
    console.error("Error fetching product:", error);
    throw error;
  }
};

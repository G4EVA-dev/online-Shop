// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const path = require('path');
// const fetch = require('node-fetch');

// const app = express();

// // Enable CORS for all origins
// app.use(cors());

// // Middleware to parse JSON bodies
// app.use(bodyParser.json());

// const API_KEY = "0b05a82548ab4104bd5e007e7bfcacd620240712130521270028";
// const API_ID = "Y8ZE73OSI3STWFA";
// const BASE_URL = 'https://api.timbu.cloud';
// const ORGANISATION_ID = "3e60fab9119a4ceeb7363bfc44d629c0";

// // API route
// app.get('/api/products', async (req, res) => {
//   try {
//     const page = req.query.page || 1;
//     const size = req.query.size || 10;
//     const response = await fetch(`${BASE_URL}/products?organization_id=${ORGANISATION_ID}&reverse_sort=false&page=${page}&size=${size}&Appid=${API_ID}&Apikey=${API_KEY}`, {
//       method: 'GET',
//       headers: {
//         'Authorization': `Bearer ${API_KEY}`,
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     res.status(500).json({ error: 'Error fetching products' });
//   }
// });

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'build')));

// // Catch-all handler to serve the frontend app for any other routes
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });








// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const cors = require('cors');



// // const app = express();

// // // Enable CORS for all origins
// // app.use(cors());

// // // Middleware to parse JSON bodies
// // app.use(bodyParser.json());

// // const API_KEY = "0b05a82548ab4104bd5e007e7bfcacd620240712130521270028";
// // const API_ID = "Y8ZE73OSI3STWFA";
// // const BASE_URL = 'https://api.timbu.cloud';
// // const ORGANISATION_ID = "3e60fab9119a4ceeb7363bfc44d629c0";

// // app.get('/api/products', async (req, res) => {
// //   try {
// //     // Dynamic import of node-fetch
// //     const fetch = (await import('node-fetch')).default;

// //     const page = req.query.page || 1;
// //     const size = req.query.size || 10;
// //     const response = await fetch(`${BASE_URL}/products?organization_id=${ORGANISATION_ID}&reverse_sort=false&page=${page}&size=${size}&Appid=${API_ID}&Apikey=${API_KEY}`, {
// //       method: 'GET',
// //       headers: {
// //         'Authorization': `Bearer ${API_KEY}`,
// //         'Content-Type': 'application/json',
// //       },
// //     });

// //     if (!response.ok) {
// //       throw new Error(`HTTP error! Status: ${response.status}`);
// //     }

// //     const data = await response.json();
// //     res.json(data);
// //   } catch (error) {
// //     console.error('Error fetching products:', error);
// //     res.status(500).json({ error: 'Error fetching products' });
// //   }
// // });

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });

// const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');
// const app = express();

// const API_SERVICE_URL = 'https://api.timbu.cloud';

// app.use('/api', createProxyMiddleware({
//   target: API_SERVICE_URL,
//   changeOrigin: true,
//   pathRewrite: {
//     '^/api': '', // remove /api from the request path
//   },
// }));

// app.listen(3001, () => {
//   console.log('CORS Proxy Server running on port 3001');
// });



const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

const API_SERVICE_URL = 'https://api.timbu.cloud';

app.use('/api', (req, res, next) => {
  console.log('Proxying request:', req.url);
  next();
}, createProxyMiddleware({
  target: API_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // remove /api from the request path
  },
  onProxyRes: (proxyRes, req, res) => {
    let data = [];
    proxyRes.on('data', (chunk) => {
      data.push(chunk);
    });
    proxyRes.on('end', () => {
      const buffer = Buffer.concat(data);
      console.log('Response from target:', buffer.toString());
    });
  },
}));

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`CORS Proxy Server running on port ${PORT}`);
});

const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(cors());

// Define CORS headers middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'maxdataserviceversion');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();

});

// Create reverse proxy
app.use('/V2', createProxyMiddleware({
    target: 'https://services.odata.org',
    changeOrigin: true,
    pathRewrite: {
        '^/V2': '/V2'
    }
}));

// Start the server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const app = express();

// Middleware to handle JSON data
app.use(express.json());

// Your root route handler
app.get('/', (req, res) => {
    res.send('<h1>CBC Backend is officially live and running!</h1>');
});

// Single Port listener at the very bottom
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server is actively running on port ${PORT}`);
});

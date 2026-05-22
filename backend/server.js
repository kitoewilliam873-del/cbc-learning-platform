const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Main STEM API check route
app.get('/', (req, res) => {
    res.json({ 
        success: true, 
        message: "CBC Senior School Science Engine Online" 
    });
});

app.listen(PORT, () => {
    console.log(`Server executing securely on port ${PORT}`);
});

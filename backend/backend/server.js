console.log('Backend scaffold ready. Implement DB connection and API routes next.');

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Your existing scaffold console log code can stay here
console.log("Backend scaffold ready. Implement DB connection and API routes next.");

// --- ADD THIS PORT LISTENER TO KEEP THE SERVER ALIVE ---
const PORT = process.env.PORT || 10000; 
app.listen(PORT, () => {
    console.log(`Server is actively running on port ${PORT}`);
});

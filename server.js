const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'https://cbc-learning-platform-1.onrender.com',
    credentials: true
}));

app.use(express.json());

// Your main website connection check
app.get('/', (req, res) => {
    res.send('<h1>CBC Backend is officially live and running</h1>');
});

// Your API Engine endpoint
app.get('/api/assessment', (req, res) => {
    res.json({ message: "Gas Laws Assessment Engine is Ready!" });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server is actively running on port ${PORT}`);
});

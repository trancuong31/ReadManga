const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// Route chính
app.get(['/','/index'], (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


// API test
app.get('/api/test', (req, res) => {
    res.json({ message: 'API is working!', status: 'success' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});

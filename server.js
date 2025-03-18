const express = require('express');
const app = express();
const path = require('path');
const { connectDB } = require('./src/config/database');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// Route chính
app.get(['/','/index'], (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/filter', (req, res)=>{
    const name =req.query.name;
    const category = req.query.category;
});

app.get('/data', async (req, res) => {
    try {
      const pool = await connectDB();  
      const result = await pool.request().query('SELECT * FROM users');      ~
      res.json(result.recordset);
    } catch (err) {
      console.error('Lỗi khi thực hiện truy vấn:', err);
      res.status(500).json({ message: 'Lỗi khi truy vấn dữ liệu' });
    }
  });

app.post('/register', async (req, res) => {
const { username, email, password } = req.body;

// Kiểm tra các trường đầu vào
if (!username || !email || !password) {
    return res.status(400).json({ message: 'Vui lòng cung cấp đầy đủ thông tin' });
}

try {
    const pool = await connectDB();
    const result = await pool.request()
        .input('username', username)
        .input('email', email)
        .input('password', password)
        .input('role', 'user')
        .input('status', 1)
        .query('INSERT INTO users (username, email, password, role, status) VALUES (@username, @email, @password, @role, @status)');
    
    res.status(201).json({ message: 'Đăng ký thành công' });
} catch (err) {
    console.error('Lỗi khi thực hiện truy vấn:', err);
    res.status(500).json({ message: 'Lỗi khi đăng ký người dùng' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

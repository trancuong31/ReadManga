const sql = require('mssql');
const config= {
    user : "sa",
    password : "123456",
    server : "DESKTOP-PUHV449",
    database : "MET",
    options: {
        encrypt: true, 
        trustServerCertificate: true 
    }
}
async function connectDB() {
    try {
        const pool = await sql.connect(config);
        console.log("Connected to database successfully!");
        return pool; 
    } catch (err) {
        console.error("Error connecting to database:", err);
        throw err;  
    }
}
module.exports= {connectDB};
const express = require("express");
const mysql = require("mysql2/promise");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "portfolio_db",
  waitForConnections: true,
  connectionLimit: 10
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    await pool.execute(
      "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)",
      [name.trim(), email.trim(), message.trim()]
    );

    res.json({ message: "Message saved successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error." });
  }
});

app.get("/api/health", (req, res) => {
  res.json({ status: "Portfolio backend is running." });
});

app.listen(PORT, () => {
  console.log(`Portfolio running at http://localhost:${PORT}`);
});

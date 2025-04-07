require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');      // Existing auth routes
const dashboardRoutes = require('./routes/dashboardRoutes'); // Existing dashboard routes
const chatRoutes = require('./routes/chatRoutes');      // New chat routes

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);         // Assuming this is the prefix for auth routes
app.use('/api/dashboard', dashboardRoutes); // Assuming this is the prefix for dashboard routes
app.use('/api/chat', chatRoutes);         // New prefix for chat routes

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
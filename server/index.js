require('dotenv').config();
const express = require('express');
const chalk = require('chalk');
const cors = require('cors');
const helmet = require('helmet');

const keys = require('./config/keys');
const routes = require('./routes');
const setupDB = require('./utils/db');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  helmet({
    contentSecurityPolicy: false,
    frameguard: true
  })
);

app.use(
  cors({
    origin: "https://ecommerce-mern-37yt.vercel.app",
    credentials: true
  })
);

// Connect DB
setupDB();

// Passport
require('./config/passport')(app);

// Routes
app.use(routes);

// ✅ IMPORTANT: Export app for Vercel
module.exports = app;
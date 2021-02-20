//! SERVER.JS
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import products from './data/products.js';

// INITIALIZE ENVIROMENT VARIABLES:
dotenv.config();

// CONNECT DATABASE:
connectDB();

// INITIALIZE EXPRESS:
const app = express();

// ROUTES:
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id);

  res.json(product);
});

// ENV VAR:
const PORT = process.env.PORT || 5000;

// LISTEN PORT:
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .underline.bold
  )
);

//! SERVER.JS
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

// IMPORTED ROUTES:
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

// INITIALIZE ENVIROMENT VARIABLES:
dotenv.config();

// CONNECT DATABASE:
connectDB();

// INITIALIZE EXPRESS:
const app = express();

// BODY PARSER:
app.use(express.json());

// ROUTES:
app.get('/', (req, res) => {
  res.send('API is running...');
});

//! MOUNTED ROUTES:
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// ERROR CUSTOM MIDDLEWARE:
app.use(notFound);
app.use(errorHandler);

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

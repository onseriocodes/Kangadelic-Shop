//! SERVER.JS
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

// IMPORTED ROUTES:
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

// INITIALIZE ENVIROMENT VARIABLES:
dotenv.config();

// CONNECT DATABASE:
connectDB();

// INITIALIZE EXPRESS:
const app = express();

// BODY PARSER:
app.use(express.json());

// ROUTE:
app.get('/', (req, res) => {
  res.send('API is running...');
});

//! MOUNTED ROUTES:
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

// PAYPAL ROUTE:
app.use('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

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

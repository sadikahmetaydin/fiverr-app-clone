import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// Route Connections
import authRoute from './routes/auth.route.js';
import userRoute from './routes/user.route.js';
import gigRoute from './routes/gig.route.js';
import orderRoute from './routes/order.route.js';
import conversationRoute from './routes/conversation.route.js';
import messageRoute from './routes/message.route.js';
import reviewRoute from './routes/review.route.js';

const app = express();

// .dotenv
dotenv.config();

// mongoDB Connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);

    console.log('Connected to mongoDB!');
  } catch (error) {
    console.log(error);
  }
};

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/gigs', gigRoute);
app.use('/api/orders', orderRoute);
app.use('/api/conversation', conversationRoute);
app.use('/api/messages', messageRoute);
app.use('/api/reviews', reviewRoute);

// localhost Syntax
app.listen(8800, () => {
  connect();
  console.log('Backend server is running!');
});

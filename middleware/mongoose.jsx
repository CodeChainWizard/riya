import mongoose from 'mongoose';

const connectDb = (handler) => async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    return handler(req, res);
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;

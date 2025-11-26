import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log('Successfully Connected MongoDB', conn.connection.host);
  } catch (err) {
    console.log('There is an error connecting', err);
    process.exit(1);
  }
};

export default connectDB;

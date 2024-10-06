import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        //Try and connect to db here
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1); // 1 code is failure and exits and o means success
    }
};
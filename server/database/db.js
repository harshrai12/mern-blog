import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://harshpayal3252:nikond3200@cluster0.rmibn8d.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
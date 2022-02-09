import mongoose from 'mongoose';
export default async function connectDB(){
    try {
        await mongoose.connect('mongodb+srv://gahangir:misho123456@cluster0.qkmeu.mongodb.net/recent?retryWrites=true&w=majority');
        console.log('DB CONNECT')
    } catch (error) {
        console.log( error);
    }
}
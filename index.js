import express from 'express';
import Home from './Controllers/Home.js'
import Customer from './Controllers/Customer.js';
import connectDB from './config/db.js';
import customerValidation from './Validations/customer.js';

const app=express();
connectDB();




app.get('/',Home.get)
app.post('/customer',Customer.add)
app.get('/customers',Customer.getAll)
app.put('/customer/:id',Customer.updateOne)
app.delete('/customer/:id',Customer.deleteOne)
app.listen(5000,()=>console.log('port in http://localhost:5000'))

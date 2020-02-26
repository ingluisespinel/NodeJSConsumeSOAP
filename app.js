const express=require('express');
const convertNumberController=require('./controllers/convert_numbers');

var app=express();

app.use(express.json());

app.route('/convert_number').get(convertNumberController.convertNumber);

module.exports=app;
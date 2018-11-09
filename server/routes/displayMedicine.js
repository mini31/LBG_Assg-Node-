const displaMedicine =  require('express').Router(),
      fs = require('fs');

displaMedicine.get('/view', (req,res)=>{
    console.log('GET / ',res.statusCode);
    const medicineRecords = require('./../medicineRecords/medicineRecords.js');
    res.send(medicineRecords);
});

module.exports = displaMedicine;

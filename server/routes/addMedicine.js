const addMedicine =  require('express').Router(),
      fs = require('fs'),
      medicineRecords = require('./../medicineRecords/medicineRecords.js'),
      removeDuplicate = require('./../modules/removeDuplicates.js');

addMedicine.post('/add', (req,res)=>{
    var data = JSON.parse(req.query.data);
    medicineRecords.push(data);
    console.log('POST / ',res.statusCode);
    var writeData = 'module.exports = ' + JSON.stringify(medicineRecords)
    fs.writeFile(__dirname+"./../medicineRecords/medicineRecords.js", writeData, function(err) {
      if(err) {
          return console.log(err);
      }
      res.send('add successfull');
  });
});

module.exports = addMedicine;

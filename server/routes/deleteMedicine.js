const deleteMedicine =  require('express').Router(),
      fs = require('fs'),
      medicineRecords = require('./../medicineRecords/medicineRecords.js'),
      removeDuplicate = require('./../modules/removeDuplicates.js');

deleteMedicine.post('/delete', (req,res)=>{
    var data = JSON.parse(req.query.data),temp=[];

    var writeData = 'module.exports = ' + JSON.stringify(removeDuplicate(data))

    console.log('POST / ',res.statusCode);

    fs.writeFile(__dirname+"./../medicineRecords/medicineRecords.js", writeData, function(err) {
      if(err) {
          return console.log(err);
      }
      res.send('delete successfull');
  })
});

module.exports = deleteMedicine;

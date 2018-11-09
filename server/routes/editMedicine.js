const editMedicine =  require('express').Router(),
      fs = require('fs'),
      medicineRecords = require('./../medicineRecords/medicineRecords.js'),
      editModule = require('./../modules/editModule.js');

editMedicine.post('/edit', (req,res)=>{
    var data = JSON.parse(req.query.data);
    console.log('POST / ',res.statusCode);
    var writeData = 'module.exports = ' + JSON.stringify(editModule(data,medicineRecords))
    fs.writeFile(__dirname+"./../medicineRecords/medicineRecords.js", writeData, function(err) {
      if(err) {
          return console.log(err);
      }
      res.send('add successfull');
  })
});

module.exports = editMedicine;

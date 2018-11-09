var medicineRecords = require('./../medicineRecords/medicineRecords.js')

module.exports = function (arr){
  var temp = medicineRecords.filter(function(objFromA) {
    return !arr.find(function(objFromB) {
      return objFromA.id === objFromB.id
    })
  })

  return temp;
}

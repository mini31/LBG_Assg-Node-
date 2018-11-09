module.exports = function(arr,medicineRecords){

  medicineRecords.map((item)=>{
    if(arr.id == item.id)
    {
      item.Name = arr.Name;
      item.Manufacturer = arr.Manufacturer;
      item.Price = arr.Price;
      item.batch = arr.batch;
      item.ExpirationDate = arr.ExpirationDate;
      item.Type = arr.Type
    }
  })
  return medicineRecords;
}

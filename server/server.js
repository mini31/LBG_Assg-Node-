const http = require('http')
    , express = require('express')
    , app = express()
    , server = http.createServer(app)
    , path = require('path')
    , PORT = process.env.PORT || 1100 ;

//creating server routes
const displayMedicine = require('./routes/displayMedicine.js'),
      deleteMedicine = require('./routes/deleteMedicine.js'),
      addMedicine = require('./routes/addMedicine.js'),
      editMedicine = require('./routes/editMedicine.js');


app.use(function(req, res, next) {
 	res.header("Access-Control-Allow-Origin", "*");
 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 	next();
 	});

app.use(express.static('./../'));

app.use('/',(req,res,next)=>{
  next();

},displayMedicine,deleteMedicine,addMedicine,editMedicine);



//App server ---------->
module.exports = server.listen(PORT, err => {
  if(err){
    throw err
  }
  console.log('Server running on 1100')
})

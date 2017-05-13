var mysql = require('mysql');
var express = require('express');
var app = express();
var a = (process.env.PORT || 3000)

var connection = mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'',
  database:"example"
});

connection.connect(function (err) {
  if (!err) {
    console.log('connected')
  } else {
    console.log("error connection");
  }
});


// connection.query("INSERT INTO `db` (`ID`, `NAME`, `address`) VALUES ('3', 'ali', 'xyz');",function(err,result){
//    if(!err){
//      console.log("insertd")
//    }
//    else{
//      console.log("error in insert ")
//    }
// })

app.get('/', function (req, res) {
  console.log(req.param('id'));
 connection.query("SELECT * FROM db WHERE ID='"+req.param('id')+"'",function(err,result){
     if(!err){
       console.log("chal gya",result);
       res.send(JSON.stringify(result));
     }
     else{
       console.log("No Data")
     }
})

// res.send(""+res.toString());
});

// var server = app.listen(5000, function () {
//   console.log('Server is running..');
// });

app.listen(a,function(){
    console.log("your app is running"+a+"port")
}
);



// app.get('/', function (req, res) {
//   var sql = require("mssql");
//   // var config = {user:'user',host:'localhost',database:'db'};
//   var config = {
//     host: 'localhost',
//     user: 'root',
//     database: "example",
//     server:'myServer'
//   }
//   sql.connect(config, function (err) {
//     if (err) console.log(err);
//     var request = new sql.Request();
//     request.query('SELECT * FROM db', function (err, recordset) {
//       if (err) console.log(err)
//       res.send('helloworld');
//       console.log(recordset)
//     });
//   });
// });



var MongoClient = require("mongodb").MongoClient;
var DB_CONN_STR = "mongodb://localhost:27017/";


module.exports = {
  mongoConnect: function(dbName,sucessCb,failCb){
    MongoClient.connect(DB_CONN_STR + dbName,(err,db) => {
      if(err){
//      console.log(err)
        failCb(err)
      }else{
//      console.log("数据库链接成功")
        sucessCb(db)
      }
    })
  }
}



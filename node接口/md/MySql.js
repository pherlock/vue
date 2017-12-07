
var MySql = {
  //插入数据
  insertOneData: function (db,collectionName,data,callback){//data为{}
     db.collection(collectionName).insertOne(data, function(err,result){
      if(err){
        console.log(err)
      }else{
        console.log("ok")
        callback(result);
      }
      
    })
  },
  insertManyData: function (db,collectionName,data,callback){//data为[{}]
     db.collection(collectionName).insertMany(data, function(err,result){
      if(err){
        console.log(err)
      }else{
        console.log("ok")
        callback(result);
      }
      
    })
  },
  findData: function(db,collectionName,searchObj,showObj,callback){
    db.collection(collectionName).find(searchObj,showObj).toArray(function(err,result){
      if(err){
        console.log(err)
      }else{
//      console.log(result)
        callback(result);
      }
    })
  },
  findLimitSkipData: function(db,collectionName,searchObj,showObj,limitNum,skipNum,callback){
    db.collection(collectionName).find(searchObj,showObj).skip(skipNum).limit(limitNum).toArray(function(err,result){
      if(err){
        console.log(err)
      }else{
//      console.log(result)
        callback(result);
      }
    })
  },
  updateData: function(db,collectionName,whereObj,updateObj,callback){
     db.collection(collectionName).update(whereObj,updateObj,function(err,result){
       if(err){
        console.log(err)
      }else{
//      console.log("update ok")
        callback(result);
      }
     })
  },
   updateManyData: function(db,collectionName,whereObj,updateObj,callback){
     db.collection(collectionName).updateMany(whereObj,updateObj,function(err,result){
       if(err){
        console.log(err)
      }else{
        console.log("update ok")
        callback(result);
      }
     })
  },
  deleteData: function(db,collectionName,deleteObj,callback){
    db.collection(collectionName).deleteOne(deleteObj, function(err,result){
        if(err){
        console.log(err)
      }else{
//      console.log("delete ok")
      callback(result);
      }
    })
  },
   deleteManyData: function(db,collectionName,deleteObj, callback){
     db.collection(collectionName).deleteMany(deleteObj, function(err,result){
        if(err){
        console.log(err)
      }else{
//      console.log("delete ok");
        callback(result);
      }
    })
  }
}

module.exports = MySql;
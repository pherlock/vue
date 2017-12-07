var express = require('express');
var router = express.Router();
var url=require("url")
var http=require("http")

var MongoClient=require("./../md/MongoClient")
var MySql=require("./../md/MySql")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', function(req, res, next) {
	var adminObj=url.parse(req.url,true).query;
	console.log(adminObj)
	console.log(adminObj.iid)
	var options={
		hostname:"m.meilishuo.com",
		port:80,
		path:"/detail/mls/v1/h5?iid="+adminObj.iid+"&_ajax=1&cparam=",
		methods:"GET"
	}
	var reqData=http.request(options,(resData)=>{
		var str=""
		resData.on("data",(data)=>{
			str+=data;
		})
		resData.on("end",function(){
			res.send(str);
//			console.log(str)
		})
		resData.on("error",function(){

		})
	})
	reqData.on("error",function(){
		
	})
	reqData.end();
//	MongoClient.mongoConnect("lens",(db)=>{
//		console.log("数据库链接成功")
//		MySql.findData(db,"list",{},{},(result)=>{
//			if(result.length=="0"){
//				res.send("0")
//				db.close();
//			}else{
////					res.send(result)
////		res.write(result)
//console.log(result[0].iid)
//
//
//				db.close();
//			}
//		})
//	},(err)=>{
//		console.log(err)
//	})
	
	
	
	
	
});

module.exports = router;

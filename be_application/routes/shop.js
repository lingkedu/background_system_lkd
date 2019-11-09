const express=require('express');

const router=express.Router()

const path=require("path")

const { shop } = require( '../db/index' )

var multer = require('multer');
// 关于图片的磁盘处理
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join( __dirname,'../public/upload'))
  },
  filename: function (req, file, cb) {
    console.log("兵哥: file", file)
    cb(null, file.fieldname + '-' + Date.now())
  }
})
 
var upload = multer({ storage: storage })

/*
  post请求-数据添加
  delete-店铺删除
  get-店铺查询
  put-店铺修改
*/ 

router.route('/')
.post( upload.any(),async ( req,res,next ) => {
  //1. 接收前端发来的数据     req.body 
  console.log("零刻度: req.body", req.body)
  //2. 进行数据库操作
    const result = await shop.add( req.body )
    console.log('result',result)
  //3. 将数据库操作结果返回给前端 

  res.render('shop',{
    data: JSON.stringify({
      info: result.info,
      status: result.status,
      result: result.result
    })
  })
})
.delete(async ( req,res,next ) => {
  //1. 接收前端发来的数据     req.body 
  const { _id } = req.query 
  //2. 进行数据库操作
  const result = await shop.del( _id )
  //3. 将数据库操作结果返回给前端 
  res.render('shop',{
    data: JSON.stringify({
      info: result.info,
      status: result.status,
      result: result.result
    })
  })
})
.put(upload.any(),async ( req,res,next ) => {
  //1. 接收前端发来的数据     req.body 
  // const { _id } = req.query 
  //2. 进行数据库操作
  const result = await shop.modify( req.body )
  // //3. 将数据库操作结果返回给前端 
  res.render('shop',{
    data: JSON.stringify({
      info: result.info,
      status: result.status,
      result: result.result
    })
  })

  // res.send('fsdfs')
})
.get(async ( req,res,next ) => {
  //1. 接收前端发来的数据     req.query 
  //2. 进行数据库操作
  const result = await shop.query()
  //3. 将数据库操作结果返回给前端 
  res.render('shop',{
    data: JSON.stringify({
      info: result.info,
      status: result.status,
      result: result.result
    })
  })
})


module.exports = router
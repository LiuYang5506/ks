const express=require('express');
const router=express.Router();
const pool=require('../pool');

router.get('/newhouse',(req,res)=>{
    var sql='SELECT * FROM newhouse';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

module.exports=router;
const express=require("express");
const cors=require('cors');
const pool=require('./pool');

var newhouse=require('./routers/newhouse');

var ks=express();
ks.listen(3000);

ks.use(express.static("public"));
ks.use(cors({origin:'http://localhost:8080',credentials:true}));

ks.use('/',newhouse);

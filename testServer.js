const express = require('express');//express
const app = express();
const fs = require('fs');
const urlLib = require('url');
const queryString = require('querystring');

app.set('port',process.env.port||3000);//设置端口 - 环境变量或者默认3000

app.get('/api/get/:gets',(req,res)=>{ //get请求集合
    let obj = urlLib.parse(req.url,true);
    let url = obj.pathname;
    let GET = obj.query;
    res.send({url,GET});
    console.log(url,GET,'get');
});

app.post('/api/post/:posts',(req,res)=>{//post请求集合
    let str = '';
    req.on('data',(value)=>{
        str+=value;
    });
    req.on('end',(value)=>{
        str = queryString.parse(str);
        res.send({str});
        console.log(str,'post');
    });
});

app.listen(app.get('port'),()=>{//监听
   console.log('Server Start!');
});
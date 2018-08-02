let express = require('express');//express
let fs = require('fs');//fs模块
let handlebars = require('express3-handlebars').create({defaultLayout:'main'});//模板引擎
let fortune = require('./lib/fortune.js');//QA
let urlLib = require('url');//url模块
let app = express();
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.set('port',process.env.PORT||3000);
app.use(express.static(__dirname + '/public'));

// fs.readFile(__dirname + '/public/about.html',(err,data)=>{
//     console.log(data.toString())
// });

app.use((req,res,next)=>{
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1'; // 当请求参数中test=1时,测试页面
    next();
});

app.get('/',(req,res)=>{
    // let obj = urlLib.parse(req.url,true);

    res.render('home');
});


app.get('/about',(req,res)=>{
    res.type('.html');
    res.render('about',{
        fortune:fortune.getFourtune(),
        pageTestScript:'/qa/tests-about.js',
        message:'asd',
        style:req.query.style,
        userid:'2',
        username:'3'
    });
});

app.get('/about/:group', function(req, res) {
    console.log(req.params.group);
    res.send("1");
});

app.get('/api/tours',(req,res)=>{
    let s = {a:1};
   res.json(s)
});

app.use((req,res)=>{
    res.status(404);
    res.render('404')
});

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500);
    res.render('500')
});


app.listen(app.get('port'),()=>{
    console.log('express started')
});
var express = require("express");
var bodyParser = require("body-parser");
const path = require('path');
// var dbEntry = require('./saveData.js');
// var compare = require('./compare.js');

var app = new express();

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

app.get('/', (req,res)=>{
    res.render('index')
})
app.get('/shop', (req,res)=>{
   res.render('shop')
})
app.get('/sproduct', (req,res)=>{
    res.render('sproduct')
})

app.get('/login', (req,res)=>{
    res.render('login')
})

app.get('/signup', (req,res)=>{
    res.render('signup')
 }) 

 app.get('/home', (req,res)=>{
    res.render('signup')
 }) 

app.get('/cart', (req,res)=>{
    res.render('cart')
})
app.listen(5000, ()=>{ console.log("server running.. "); })
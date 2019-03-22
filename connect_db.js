require('babel-register');
const express = require('express')
const bodyParser =require('body-parser')
const morgan = require('morgan')
const app = express()

const config =require('./config')
app.use(morgan('dev'))

const mysql = require('mysql')
const db = mysql.createConnection({
    host:'localhost',
    database:'nodejs',
    user:'root',
    password:''
    
    
})

db.connect((err)=>{
    if(err){
        console.log('error')
    }else{
        console.log('connected') 

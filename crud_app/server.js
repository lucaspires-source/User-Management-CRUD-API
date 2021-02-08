const express = require('express');
const dotenv = require ('dotenv');
const morgan = require('morgan');

const app = express()

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 5000;


app.use(morgan('tiny'));

app.get('/',(req,res) =>{
    res.send('Testando')
})

app.listen(PORT,()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
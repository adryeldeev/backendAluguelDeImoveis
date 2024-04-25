const express = require('express');
const { router } = require('./src/routes.js');
const cors = require('cors');
const path = require('path');
const app = express();

app.use('/uploads', express.static(path.resolve(__dirname,'../', 'uploads')))
app.use(express.json())

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    app.use(cors())
    next()
})

app.use(router)
const port = process.env.PORT || 8000

app.listen(port,()=>{
    console.log(`Server port ${port}`)
})


import express from 'express'
import { router } from './routes'
import cors from 'cors'
import path from 'path'
const app = express()

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
app.listen(8000,()=>{
    console.log('Server is running 8000')
})


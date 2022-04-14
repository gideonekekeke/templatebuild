require('dotenv').config()
require('./dbConfig/db')
const express = require('express')
const port = process.env.PORT || 7000
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors({origin : "*"}))
app.use('/api', require('./Routes/TemplateRoute'))
app.use('/api', require('./Routes/RegisterUser'))


app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})
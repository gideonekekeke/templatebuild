const mongoose = require('mongoose')

const url_offline = 'mongodb+srv://gideon:NTp46J2P7Efieni@cluster0.7rupp.mongodb.net/templateDB?retryWrites=true&w=majority'
const DB_ONLINE = process.env.URL
mongoose.connect(url_offline).then(()=>{
    console.log('connect to database successfully');
})
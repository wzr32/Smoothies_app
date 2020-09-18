const mongoose = require('mongoose');
let uri = process.env.MONGODB_URI || 'mongodb://localhost/nodetestapi' 

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

let conn = mongoose.connection

conn.on('open', () => {
    console.log(`Database connected on ${uri}`)
})
require('dotenv').config();
const express = require('express');
const connectDatabase = require('./utils/database-connection.js');
const indexRouter = require('./routes/index.route');


const app = express();
const port = parseInt(process.env.PORT) || 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(indexRouter)

connectDatabase().then( () => {
    app.listen(port, () => {
        console.log(`server is up and listen on ${port}`)
    })
})
.catch(err => {
    console.log('something went wrong');
    process.exit(1);
})

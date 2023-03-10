const express = require('express');
const database = require('./utils/database');
const expenseRoute = require('./routes/route');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());


app.use('/expense', expenseRoute);

database.sync()
.then()
.catch(err=>{
    console.log(err);
});

app.listen(5000);
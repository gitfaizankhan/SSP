const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./utils/databaseFunc');
const cors = require('cors');
const mainRouter = require('./routers/mainRouter');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/user', mainRouter);

sequelize.sync().then().catch(err=>{
    console.log(err);
})
app.listen(4000);

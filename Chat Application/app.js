const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const adminRoute = require('./route/login');
const shopRoute = require('./route/message');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoute);
app.use(shopRoute);

// 404 Page

app.use((req, res, next)=>{
    res.send('<h1>Page Not Found</h1>');

});



app.listen(5000);
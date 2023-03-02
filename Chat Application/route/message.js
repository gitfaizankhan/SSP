const express = require('express');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const route = express.Router();



route.use(cookieParser());

route.get('/', (req, res, next)=>{
    fs.readFile('data.txt', 'utf8', function(_err, data){
        res.send(`
            <p>${data}</p>
            <form class="product-form" action="/addChat" method="POST">
                    <input type="text" name="title" id="title">
                <button type="submit">Send</button>
            </form>`
        );
    });
});

route.post('/addChat', (req, res, next)=>{
    const username = req.cookies.username;
    const message = req.body.title;
    const data = `${username}: ${message}\n`;
        return fs.appendFile('data.txt',data, err=>{
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    });
});


module.exports = route;
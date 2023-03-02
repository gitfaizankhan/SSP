const express = require('express');
const route = express.Router();

route.get('/login', (req, res, next)=>{
    res.send(`
    <form class="product-form" action="/add-user" method="POST">
                <input type="text" name="title" id="title" placeholder="username">
            <button type="submit">Login</button>
        </form>
    `);
});

route.post('/add-user', (req, res, next)=>{
    res.cookie('username', req.body.title);
    res.redirect('/');
});

module.exports = route;
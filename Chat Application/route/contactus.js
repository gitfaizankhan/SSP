const express = require('express');
const route = express.Router();

route.get('/contactus', (req, res, next)=>{
    res.send(`
    <form class="product-form" action="/success" method="POST">
            <input type="text" name="name" placeholder="name">
            <input type="text" name="email" placeholder="email">
            <button type="submit">Login</button>
    </form>
    `);
});

route.post('/success', (req, res, next)=>{
    res.send('<h1>Form successfuly filled</h1>')
});

module.exports = route;
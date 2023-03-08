const express = require('express');
const Data = require('../model/userData');



// Get User

exports.getUser = (req, res, next)=>{
    Data.findAll()
    .then(data=>{
        res.json(data);
    })
    .catch(err=>{
        console.log(err);
    });
}

// Add Data
exports.addUser = (req, res, next)=>{
    const name = req.body.name;
    const mobile = req.body.mobile;
    const email = req.body.email;
    Data.create({
        name: name,
        mobile: mobile,
        email: email
    }).then(result=>{
        res.json(result);
    }).catch(err=>{
        console.log("hello ", err);
    });
}


exports.editUser = (req, res, next)=>{
    const id = req.params.id;
    const name = req.body.nam;
    const mobile = req.body.mobile;
    const email = req.body.email;
    Data.findByPk(id)
    .then(user=>{
        user.name = name;
        user.mobile = mobile;
        user.email = email
        return user.save();
    })
    .then(updateData=>{
        res.json(updateData);
    })
    .catch(err=>{
        console.log(err);
    });
};


// delete user
exports.deleteUser = (req, res, next)=>{
    const id = req.params.id;
    Data.findByPk(id)
    .then(user=>{
        return user.destroy();
    })
    .then(result=>{
        res.json(result);
    })
    .catch(err=>{
        console.log(err);
    });
}
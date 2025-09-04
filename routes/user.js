const express = require('express');
const router = express.Router();
const User = require('../models/User');
const req = require('express/lib/request');

router.post('/user', async (req, res) => {
    try{
        const user = new User(req.body);
        const userDB = await user.save();
        res.status(201).json(userDB);
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

router.get('/user/:id', async (req, res) =>{
    try{
        const user = await User.findById(req.params.id);
         res.status(200).json(user);
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

router.delete('/user/:id', async (req, res) =>{
    try{
        const result = await User.deleteOne({ _id: req.params.id });
        res.sendStatus(204);
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

router.put('/user/:id', async(req, res) =>{
    try{
        const user = await User.findByIdAndUpdate(
            req.params.id, { firstName: req.body.firstName},
            {new: true}
        )
        res.status(200).json(user);
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

module.exports = router;
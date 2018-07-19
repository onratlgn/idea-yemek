const express = require('express');
const router = express.Router();
const Siparis = require('../models/siparis');

router.post('/test', (req,res,next)=> {

    console.log(req);
    res.json({success: true});

});
router.post('/getByFood', (req,res,next)=> {

    desiredFood = req.body.food;
    Siparis.getSiparisByFood(desiredFood, (err, foundSiparis) => {
        if(err) throw err;
        if(!foundSiparis){
            return res.json({success: false, msg: "siparis may not found"})
        }else{
            res.json({siparis:foundSiparis});
        }
    });

});
router.post('/yenisiparis', (req,res,next)=> {

    let newSiparis = new Siparis({
        username : req.body.username,
        food : req.body.food,
        drink: req.body.drink
    });
    console.log(req.body);
    Siparis.addSiparis(newSiparis,(err, siparis) => {
        if(err){
            res.json({success: false, msg: "failed to add siparis"});
        }else{
            res.json({success: true, msg: "  siparis hazir"});
        }
    });


});

module.exports = router;
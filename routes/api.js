const express = require('express');
const router = express.Router();
const Siparis = require('../models/siparis');

router.post('/test', (req,res,next)=> {

    console.log(req);
    res.json({success: true});

});
router.post('/getByFood', (req,res,next)=> {

    console.log(req.body);
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
router.post('/getToday', (req,res,next)=> {
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth(); 	
    Siparis.getSiparisByToday(day, month, (err, foundSiparis) => {
        if(err) throw err;
        if(!foundSiparis){
            return res.json({success: false, msg: "siparis may not found"})
        }else{
            res.json({siparis:foundSiparis});
        }
    });

});
router.post('/yenisiparis', (req,res,next)=> {
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth();
    let newSiparis = new Siparis({
        username : req.body.username,
        food : req.body.food,
        drink: req.body.drink,
        day: day,
        month: month
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

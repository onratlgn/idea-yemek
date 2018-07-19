const mongoose = require('mongoose');


const SiparisSchema = mongoose.Schema({

    username:{  type:String},
        food: {type:String},
        drink: {type: String}
});

const Siparis = module.exports = mongoose.model('Siparis', SiparisSchema);

module.exports.addSiparis = function(newSiparis, callback){
    newSiparis.save(callback);
}

module.exports.getSiparisByFood = function(desiredFood , callback){
    const query = {food: desiredFood};
    Siparis.find(query,callback);
}
const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');

module.exports = function(app){
    var PetSchema = new mongoose.Schema({
        name: {type: String, required: [true, "Name is required"], unique:[true, "That pet is already here!"], minlength:[3,"Please enter a pet name with at least 3 characters"]},
        type: {type: String, required: [true,"Type is required"], minlength:[3,"Please enter a pet type at least than 3 characters"]},
        description: {type: String, required: [true,"Description is required"], minlength:[3,"Please enter  description at least 3 characters"]},
        skill1: {type: String},
        skill2: {type: String},
        skill3: {type: String},
        likes : {type: Number, default: 0}
    })
    PetSchema.plugin(unique, {message: "That pet is already here!"})
    mongoose.model('Pet', PetSchema);
}
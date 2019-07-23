const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

Pet = mongoose.model('Pet');
app.use(bodyParser.json());

module.exports = {
    add : function(req,res){
        Pet.create(req.body,function(err,pet){
            if(err){
                res.json({error:err});
            }else{
                res.json({created: pet})
            }
        })
    },
    edit : function(req,res){
        Pet.findOneAndUpdate({_id: req.params.id}, {$set: {name:req.body.name, type: req.body.type, description: req.body.description, skill1: req.body.skill1, skill2: req.body.skill2, skill3: req.body.skill3 }},{runValidators:true, context:'query'},function(err,pet){
            if(err){
                res.json({error:err});
            }else{
                res.json({edited:pet});
            }
        })
    },
    adopt : function(req,res){
        Pet.remove({_id: req.params.id},function(err){
            if(err){
                res.json({error:err});
            }else{
                res.json({success:"Pet Adopted!"})
            }
        })
    },

    like : function(req,res){
        Pet.findOneAndUpdate({_id: req.params.id}, {$set: {likes : req.body.likes}},function(err,pet){
            if(err){
                res.json({error:err});
            }else{
                res.json({Liked: pet});
            }
        })
    },

    getPets : function(req,res){
        Pet.find({},function(err,pets){
            if(err){
                res.json({error:err});
            }else{
                res.json({pets:pets});
            }
        })
    },

    getPet : function(req,res){
        Pet.findOne({_id:req.params.id},function(err,pet){
            if(err){
                res.json({error:err});
            }else{
                res.json({pet:pet});
            }
        })
    }

}
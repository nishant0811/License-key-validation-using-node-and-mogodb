//Calling all the required modules

const express = require('express');
const mongoose = require("mongoose");
const crypto = require('crypto');
const License  = require('../models/license.js')
const router= express.Router();




router.get("/:id",async (req,res)=>{
  try{
    const key = await crypto.createHash('sha256').update(req.params.id).digest('hex'); //encrypting the key
    let keyy = await License.findOne({key}) //searching for the hashed key in db
    if(keyy) return res.json({message : "Valid Key"}); //if found
    res.json({message:"Invalid Key"})//if not found
  }
  catch(e){
    res.send({message : e.message}) // if there is an error
  }

})

module.exports = router;

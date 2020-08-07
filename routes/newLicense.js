// Calling all the required packages

const express = require('express');
const mongoose = require("mongoose");
const crypto = require('crypto');
const router= express.Router();
const License  = require('../models/license.js')

router.get("/:id",async (req,res)=>{
  try{
    const key = await crypto.createHash('sha256').update(req.params.id).digest('hex'); // hashing the key
    let keyy = await License.findOne({key}) // searching the key in database
    if(keyy) return res.json({message : "Key already exists"}); // if exists

    keyy = new License({
      key : key
    })
    await keyy.save(); // adding key to database
    res.json({message:"Key Added"}) // Sucess message on adding
  }
  catch(e){
    res.send({message : e.message}) // If something goes bad
  }

})

module.exports = router;

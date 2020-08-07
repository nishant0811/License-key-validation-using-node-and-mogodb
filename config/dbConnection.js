const mongoose = require('mongoose');

module.exports = function connrect(){
  try{
    mongoose.connect("mongodb+srv://test:test123@cluster0.63q6h.mongodb.net/license?retryWrites=true&w=majority",{ useNewUrlParser: true ,useUnifiedTopology: true , useCreateIndex : true })
    .then(()=>{
      console.log("Database Connected ")
    });
  }
  catch(e){
    console.log(e.message);
    process.exit(1);
  }
}

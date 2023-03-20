const mongoose = require('mongoose')

const fun =async ()=>{
    try{
    await mongoose.connect('mongodb://127.0.0.1:27017/')
    }
    catch(err){
        console.log(err)
    }
}

module.exports = fun
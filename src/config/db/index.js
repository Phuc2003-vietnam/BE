const mongoose = require("mongoose");
async function connect() {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev');
        console.log("connect successfuly");
    }
    catch(error){
        console.log("connect failure");
    }
}
module.exports = { connect };

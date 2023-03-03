const mongoose = require("mongoose");
async function connect() {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect('mongodb+srv://phuc53226:thien226@phuc-15-02-2023.b48httj.mongodb.net/web?retryWrites=true&w=majority');
        console.log("connect successfuly");
    }
    catch(error){
        console.log("connect failure2");
    }
}
module.exports = { connect };

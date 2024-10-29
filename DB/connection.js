const mongoose = require('mongoose');
const connection_String = process.env.MONGO_URL
mongoose.connect(connection_String).then((res) => {
    console.log("MongoDb connected successfully");

}).catch((err) => {
    console.log(err);
})

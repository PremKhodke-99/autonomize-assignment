const mongoose = require('mongoose');

const dbConnect = async () => {
    const MongoDb_URI = "mongodb://localhost:27017/autonomize";
    mongoose.connect(MongoDb_URI)
        .then(() => console.log("Database Connected"))
        .catch(() => console.error("Database connection failed"));
}

module.exports = dbConnect;
const mongoose = require('mongoose')

require('dotenv').config();

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL)

    .then(()=>{console.log("DB is Connected Successfully")})
    .catch((err)=>{
        console.log("Issue in DATABASE Connection")
        console.error(err.message);
        process.exit(1); // Node.js process ko immediately band kar deta hai (1 means failure code).
    })
}

module.exports = dbConnect;
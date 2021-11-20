const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;             // dotenv DTABASE connect kiya hai.

mongoose.connect(DB).then(() => {            // promise returning
    console.log('Database Connected!');
}).catch((error)=>{
    console.log('Not Connected!');
})
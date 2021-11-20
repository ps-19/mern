const dotenv = require('dotenv');
const express = require('express');
const app = express();
const User = require('./models/userSchema');
// require('./db/connection.js');

// dotenv{

dotenv.config({ path: './config.env' });      // called once no need to call anymore in any other file.
const PORT = process.env.PORT;

//}

app.use(express.json());                      // json file reading middleware
const middleware=(req,res,next)=>{
    console.log('Hello middleware');
    next();
}


//routes declaration
app.use(require('./router/auth'));

app.get('/', (req,res)=>{
    res.send('Hello World');
})

app.get('/register', middleware, (req,res)=>{
    res.send('About Register page from app.js');
})

app.get('/login', (req,res)=>{
    res.send('Welcome to login page /get UI');
})

app.listen(PORT,()=>{
    console.log('Server is running on '+PORT);
})
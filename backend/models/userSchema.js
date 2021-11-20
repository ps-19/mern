const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    tokens: [
        {
            token:{
                type: String,
                required: true
            }
        }
    ]
})

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        console.log("Hi! i am pre password "+this.password);
        this.password = await bcrypt.hash(this.password,12);
        this.cpassword = await bcrypt.hash(this.cpassword,12);
    }
    next();
});

userSchema.methods.generateAuthToken = async function() {   // userSchema -> instance and methods -> for calling them
    try{
        let new_token = jwt.sign({_id: this._id}, process.env.SECRETE_KEY);
        this.tokens = this.tokens.concat({token: new_token});
        await this.save();
        return new_token;
    } catch(error) {
        console.log("error while generating jwt token!");
        console.log(error);
    }
}

const User = mongoose.model('USER',userSchema);

module.exports = User;
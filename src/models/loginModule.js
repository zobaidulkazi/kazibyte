import mongoose from "mongoose";


const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        require: [true, 'Please provide a email'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'Please provide your password'],
        unique: true,
        max: [70, 'Password length cannot exceed 30 characters'],
        min: [18, 'Password length must be at least 8 characters']
    }
})



const LoginUser = mongoose.model('LoginUser', userSchema);

module.exports = LoginUser;
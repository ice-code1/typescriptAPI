import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },

    email:{
        type:String,
        required:false,
        unique:true
    },

    password:{
        type:String,
        required:true
    },

    role: {
        type:String,
        enum:['guest','admin'],
        default:'guest'
    }
})

const UserModel = mongoose.model('User_2',userSchema)

export default UserModel
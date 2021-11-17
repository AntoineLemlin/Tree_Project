const mongoose = require('mongoose')
const {isEmail} = require('validator')
// const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema(
{
color: {
type:String,
minLength: 3,
maxlength: 6
},
email: {
    type: String,
    required: true,
    validate:[isEmail],
    minLength:3,
    maxLength: 55,
    unique: true,
    trim: true, 
},
username:{
    type: String,
    required: true,
    minLength:3,
    maxLength: 55,
    unique: true,
    trim: true,
},
password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 1024,
    trim: true, 
}
},
{
    timestamps: true
}



)
// play function before save into db
// userSchema.pre("save", async  function(next){
//     const salt =await bcrypt.genSalt()
//     this.password = await bcrypt.hash(this.password, salt)
//     next()
// })

userSchema.statics.login = async function (email,password){
    const  user =  await this.findOne({email})
    if(user){  
         
        if (password = user.password){
        return user
         }
         throw Error('pass wrong')
    }
    throw Error ("email wrong")
}
const UserModel = mongoose.model('users',userSchema);

module.exports = UserModel
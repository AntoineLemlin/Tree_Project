import userModel from'../models/user.model'


module.exports.signUp = async (req,res) =>{
const { username,email,password} = req.body
console.log(req.body)
try{
    const user = await userModel.create({username,email,password});
    res.status(201).json({user: user._id})
}
catch(err){
    res.status(200).send({err})
}
}
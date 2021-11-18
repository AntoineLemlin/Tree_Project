import userModel from'../models/user.model'
const jwt = require('jsonwebtoken')
import {signUpErrors,signInErrors} from '../utils/error.utils'

module.exports.signUp = async (req,res) =>{
const { username,email,password} = req.body
console.log(req.body)
try{
    const user = await userModel.create({username,email,password});
    res.status(201).json({user: user._id})
}
catch(err){
    const errors = signUpErrors(err)
    res.status(200).send({errors})
}
}
const maxage =  3 * 60 * 60 * 1000;
const createToken = (id) => {
    return jwt.sign({id}, "TOKEN_SECRET", {
        expiresIn: maxage
    })
};

module.exports.signIn = async (req,res) => {
    const {email,password} = req.body
    try{
        const user = await userModel.login(email,password);
        const token = createToken(user._id)
        res.cookie('jwt',token, {httpOnly: true, maxage})
        res.send(token)
        res.status(200).json({user: user._id})
    }catch(err){
        const errors = signInErrors(err);
        res.status(200).json({ errors });
    }
}
module.exports.logout = async (req,res)=> {
    res.clearCookie("jwt");
    res.redirect("/")
}
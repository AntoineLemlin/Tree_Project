const jwt = require('jsonwebtoken')
import UserModel from '../models/user.model';


module.exports.checkuser = (req,res,next) => {
    const token = req.cookies.jwt
    if (token){
        jwt.verify(token,"TOKEN_SECRET",async(err,decodedToken)=>{
            if(err){
                res.locals.user = null;
            res.clearCookie('jwt') ;
        next()  
     }
     else{
            console.log('decoded token'+ decodedToken.id )

            let user = await UserModel.findById(decodedToken.id);
            res.locals.user =user
        console.log(res.locals.user)  
        next()  
        }
       
        }
        )
    }else{
        res.locals.user = null;
        next()
    }
}

module.exports.requireauth = (req,res,next) => {
    const token = req.cookies.jwt
    if(token){
        jwt.verify(token,"TOKEN_SECRET",async (err,decodedToken)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log(decodedToken.id)
                next()
            }
        })
    }
    else {
        console.log('no token')
    }
}
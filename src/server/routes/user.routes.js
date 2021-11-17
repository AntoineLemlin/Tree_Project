const router = require('express').Router();
import  {signUp,signIn,logout} from '../controller/auth.controller';
import userController, {deleteUser,updateUser, userInfo } from '../controller/user.controller'


//auth
router.post('/register', signUp);
router.post('/login',signIn);
router.post('/logout',logout)

//user db
router.get('/',userController.getAllUsers)
router.get ('/:id',userInfo)
router.put('/:id',updateUser) 
router.delete('/:id',deleteUser)


module.exports = router; 
const router = require('express').Router();
import  {signUp} from '../controller/auth.controller';
import userController, {deleteUser,updateUser, userInfo } from '../controller/user.controller'


//auth
router.post('/register', signUp);

//user db
router.get('/',userController.getAllUsers)
router.get ('/:id',userInfo)
router.put('/:id',updateUser) 
router.delete('/:id',deleteUser)


module.exports = router; 
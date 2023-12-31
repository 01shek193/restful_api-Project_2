const {Router} = require('express')
const userController = require ('../../../controllers/userController')
const router  = Router()
router.get('/', userController.getAllUsers);
router.get('/:userId', userController.getUser);
router.post ('/', userController.CreateUser);
router.put ('/:userId',userController.updateUser);
router.delete ('/:userId',userController.deleteUser);
module.exports = router;
const {Router} = require('express');
const UserController = require('./controller/UserController.js');


const router = Router();

router.post('/user-create', UserController.createUser);
router.put('/user-update/:id', UserController.updateUser);
router.get('/user-list', UserController.listUsers);
router.delete('/delete-user/:id', UserController.deleteUser);

module.exports = router;
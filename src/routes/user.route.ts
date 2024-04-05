const router = require('express').Router()

import userControllers from '../controllers/userControllers'

router.post('/register', userControllers.userRegistration)
router.post('/login',userControllers.userLogin)
router.get('/:id',userControllers.fetchUser)
router.put('/:id',userControllers.updateUser)
router.delete('/:id',userControllers.deleteUser)

export default router
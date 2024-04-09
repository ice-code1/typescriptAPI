//const router = require('express').Router()
import { Router } from 'express';

import UserControlers from '../controllers/userControllers'

const router = Router();


router.post('/register', UserControlers.userRegistration)
router.post('/login',UserControlers.userLogin)
router.get('/:id',UserControlers.fetchUser)
router.put('/:id',UserControlers.updateUser)
router.delete('/:id',UserControlers.deleteUser)

export default router
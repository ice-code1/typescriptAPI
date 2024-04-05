const router = require('express').Router()


import userRouter from './user.route'

import hotelRouter from './hotel.route'



const testmiddleware = require('../middlewares/test.middlewares')

router.use('/hotel', testmiddleware,hotelRouter)
router.use('/users', testmiddleware,userRouter)

export default router
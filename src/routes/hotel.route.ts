import { Router } from 'express';
import authenticate from '../middlewares/auth.authorise';
import authorise from '../middlewares/auth.authorise';
import validateRequest from '../middlewares/validation';
import Joi, { Schema } from 'joi';

import hotelControlers from '../controllers/hotelControllers'

const router = Router();

const roomSchema: Schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required()
});

router.post('/', validateRequest(roomSchema), authenticate, authorise, hotelControlers.createHotelRoom);
router.patch('/:id', authenticate, authorise, hotelControlers.updateHotelRoom);
router.delete('/:id', authenticate, authorise, hotelControlers.deleteHotelRoom);
router.get('/:id', authenticate, hotelControlers.fetchOneHotelRoom);
router.get('/', authenticate, hotelControlers.fetchMany);

export default router;

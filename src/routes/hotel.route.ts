import { Router } from 'express';
import authenticate from '../middlewares/auth.authorise';
import authorise from '../middlewares/auth.authorise';
import validateRequest from '../middlewares/validation';
import Joi, { Schema } from 'joi';

import {
    createHotelRoom,
    updateHotelRoom,
    deleteHotelRoom,
    fetchOneHotelRoom,
    fetchMany
} from '../controllers/hotelControllers';

const router = Router();

const roomSchema: Schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required()
});

router.post('/', validateRequest(roomSchema), authenticate, authorise, createHotelRoom);
router.patch('/:id', authenticate, authorise, updateHotelRoom);
router.delete('/:id', authenticate, authorise, deleteHotelRoom);
router.get('/:id', authenticate, fetchOneHotelRoom);
router.get('/', authenticate, fetchMany);

export default router;

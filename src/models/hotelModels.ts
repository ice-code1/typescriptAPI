import mongoose from 'mongoose'
import constants from "../constants/hotelConstants"
//import { USER_TYPES, DATABASE } from '../constants/hotelConstants'

const Hotel = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },

        room_type:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            enum:['user',constants.USER_TYPES.AGENT],
        },

        price:{
            type:Number,
            required: true,
        }

    },
    {
        timestamps:true
    }
)

const HotelModel1 = mongoose.model('Hotel', Hotel )

export default  HotelModel1
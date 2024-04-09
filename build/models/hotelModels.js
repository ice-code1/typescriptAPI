"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const hotelConstants_1 = __importDefault(require("../constants/hotelConstants"));
//import { USER_TYPES, DATABASE } from '../constants/hotelConstants'
const Hotel = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    room_type: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        enum: ['user', hotelConstants_1.default.USER_TYPES.AGENT],
    },
    price: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
});
const HotelModel1 = mongoose_1.default.model('Hotel', Hotel);
exports.default = HotelModel1;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const user_route_1 = __importDefault(require("./user.route"));
const hotel_route_1 = __importDefault(require("./hotel.route"));
const testmiddleware = require('../middlewares/test.middlewares');
router.use('/hotel', testmiddleware, hotel_route_1.default);
router.use('/users', testmiddleware, user_route_1.default);
exports.default = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_authorise_1 = __importDefault(require("../middlewares/auth.authorise"));
const auth_authorise_2 = __importDefault(require("../middlewares/auth.authorise"));
const validation_1 = __importDefault(require("../middlewares/validation"));
const joi_1 = __importDefault(require("joi"));
const hotelControllers_1 = __importDefault(require("../controllers/hotelControllers"));
const router = (0, express_1.Router)();
const roomSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    description: joi_1.default.string().required()
});
router.post('/', (0, validation_1.default)(roomSchema), auth_authorise_1.default, auth_authorise_2.default, hotelControllers_1.default.createHotelRoom);
router.patch('/:id', auth_authorise_1.default, auth_authorise_2.default, hotelControllers_1.default.updateHotelRoom);
router.delete('/:id', auth_authorise_1.default, auth_authorise_2.default, hotelControllers_1.default.deleteHotelRoom);
router.get('/:id', auth_authorise_1.default, hotelControllers_1.default.fetchOneHotelRoom);
router.get('/', auth_authorise_1.default, hotelControllers_1.default.fetchMany);
exports.default = router;

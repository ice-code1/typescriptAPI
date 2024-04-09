"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const userControllers_1 = __importDefault(require("../controllers/userControllers"));
router.post('/register', userControllers_1.default.userRegistration);
router.post('/login', userControllers_1.default.userLogin);
router.get('/:id', userControllers_1.default.fetchUser);
router.put('/:id', userControllers_1.default.updateUser);
router.delete('/:id', userControllers_1.default.deleteUser);
exports.default = router;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const UserServices = require('../services/userServices');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');
const hotelServices = require('../services/hotelServices');
const userServices = require('../services/userServices');
//const userServices = require('../services/userServices')
require('dotenv').config();
class UserController {
    userRegistration(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = yield UserServices.fetchOne({
                password: yield bcrypt.hash(req.body.password, 10)
            });
            const NewUser = yield UserServices.create(req.body);
            yield NewUser.save();
            res.status(201).json({
                success: true,
                message: " user registered successfully",
                data: NewUser
            });
            if (!NewUser)
                res.status(500).json({
                    success: false,
                    message: ' invalid user',
                });
        });
    }
    userLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = req.body;
            const user = yield userServices.fetchOne({ username: username });
            if (!user) {
                return res.status(401).json({
                    message: "Invalid credentials"
                });
            }
            const passwordMatch = yield bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({
                    message: "Invalid credentials"
                });
            }
            const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '1hr' });
            res.status(200).json({
                success: true,
                message: "user login successfully",
                data: user,
                token
            });
        });
    }
    fetchUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UserModel.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'user not found' });
            }
            res.status(200).json(user);
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedUser = yield UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedUser) {
                return res.status(404).json({ message: 'user not found' });
            }
            res.status(200).json({
                success: true,
                message: 'user updated successfully',
                data: updatedUser
            });
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedUser = UserServices.delete();
            if (!deletedUser) {
                return res.status(404).json({ message: 'user not found' });
            }
            res.status(200).json({
                message: 'User deleted successfully',
                user: deletedUser,
                data: deletedUser
            });
        });
    }
}
module.exports = new UserController();

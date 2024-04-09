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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("../models/userModel"));
class UserServices {
    //create a user
    create(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userModel_1.default.create(userData);
        });
    }
    update(id, userupdate) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userModel_1.default.findByIdAndUpdate(id, userupdate, { new: true });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userModel_1.default.findByIdAndDelete(id);
        });
    }
    fetchOne(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userModel_1.default.findOne(filter);
        });
    }
    findAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userModel_1.default.find(filter);
        });
    }
}
exports.default = new UserServices();

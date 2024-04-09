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
const hotelModels_1 = __importDefault(require("../models/hotelModels"));
class HotelService {
    //create  a room
    create(hotelData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield hotelModels_1.default.create(hotelData);
        });
    }
    //edit a room
    update(id, roomupdate) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield hotelModels_1.default.findByIdAndUpdate(id, roomupdate, { new: true });
        });
    }
    //delete a room
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield hotelModels_1.default.findByIdAndDelete(id);
        });
    }
    //get a single room
    fetchOne(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield hotelModels_1.default.findOne(filter);
        });
    }
    //get all rooms
    findAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield hotelModels_1.default.find(filter);
        });
    }
}
exports.default = new HotelService();

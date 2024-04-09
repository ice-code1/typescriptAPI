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
const hotelServices_1 = __importDefault(require("../services/hotelServices"));
class HotelController {
    // Create a room
    createHotelRoom(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reqBody = req.body;
            console.log(reqBody);
            // Check if HotelRoom exists
            const existingHotelRoom = yield hotelServices_1.default.fetchOne({
                name: reqBody.name.toLowerCase()
            });
            if (existingHotelRoom) {
                res.status(403).json({
                    success: false,
                    message: "Hotel Rooms already exist"
                });
                return;
            }
            const newHotelRoom = yield hotelServices_1.default.create(reqBody);
            res.status(201).json({
                success: true,
                message: "HotelRoom created successfully",
                data: newHotelRoom
            });
        });
    }
    // Update a Hotel Room
    updateHotelRoom(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const hotelRoomId = req.params.id;
            const updateData = req.body;
            // Check if HotelRoom to edit is not in database
            const existingHotelRoom = yield hotelServices_1.default.fetchOne({
                _id: hotelRoomId
            });
            if (!existingHotelRoom) {
                res.status(403).json({
                    success: false,
                    message: "HotelRoom to edit do not exist"
                });
                return;
            }
            // Name is a unique key and should be consistent
            if (updateData.name) {
                const existingHotelRoomWithUpdateName = yield hotelServices_1.default.fetchOne({
                    name: updateData.name.toLowerCase()
                });
                if ((existingHotelRoomWithUpdateName === null || existingHotelRoomWithUpdateName === void 0 ? void 0 : existingHotelRoomWithUpdateName._id.toString()) !== updateData._id.toString()) {
                    res.status(403).json({
                        success: false,
                        message: 'HotelRoom with updated name already exists'
                    });
                    return;
                }
            }
            const updatedData = yield hotelServices_1.default.update(hotelRoomId, updateData);
            res.status(200).json({
                success: true,
                message: "HotelRoom updated successfully",
                data: updatedData
            });
        });
    }
    // Delete a HotelRoom
    deleteHotelRoom(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const hotelRoomId = req.params.id;
            // Check to see if a deleted HotelRoom is in database
            const existingHotelRoom = yield hotelServices_1.default.fetchOne({
                _id: hotelRoomId
            });
            if (!existingHotelRoom) {
                res.status(403).json({
                    success: false,
                    message: "HotelRoom to delete does not exist"
                });
                return;
            }
            const deletedHotelRoom = yield hotelServices_1.default.delete(hotelRoomId);
            res.status(200).json({
                status: true,
                message: 'HotelRoom deleted successfully',
                data: deletedHotelRoom
            });
        });
    }
    // Fetch (find) a HotelRoom
    fetchOneHotelRoom(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const hotelRoomId = req.params.id;
            // Check if HotelRoom to be fetched is in database
            const existingHotelRoom = yield hotelServices_1.default.fetchOne({
                _id: hotelRoomId
            });
            if (!existingHotelRoom) {
                res.status(401).json({
                    success: false,
                    message: "HotelRoom to be fetched is not found"
                });
                return;
            }
            res.status(200).json({
                success: true,
                message: "HotelRoom fetched successfully",
                data: existingHotelRoom
            });
        });
    }
    fetchMany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const fetchedHotelRoom = yield hotelServices_1.default.findAll({});
            res.status(200).json({
                success: true,
                message: "Hotel Rooms fetched Successfully",
                data: fetchedHotelRoom
            });
        });
    }
}
exports.default = new HotelController();

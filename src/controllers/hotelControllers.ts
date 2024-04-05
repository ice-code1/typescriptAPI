import { Request, Response } from 'express';
import HotelRoomService from '../services/hotelServices';

class HotelController {
    // Create a room
    async createHotelRoom(req: Request, res: Response): Promise<void> {
        const reqBody = req.body;
        console.log(reqBody);
        
        // Check if HotelRoom exists
        const existingHotelRoom = await HotelRoomService.fetchOne({
            name: reqBody.name.toLowerCase()
        });

        if (existingHotelRoom) {
            res.status(403).json({
                success: false,
                message: "Hotel Rooms already exist"
            });
            return;
        }

        const newHotelRoom = await HotelRoomService.create(reqBody);

        res.status(201).json({
            success: true,
            message: "HotelRoom created successfully",
            data: newHotelRoom
        });
    }

    // Update a Hotel Room
    async updateHotelRoom(req: Request, res: Response): Promise<void> {
        const hotelRoomId = req.params.id;
        const updateData = req.body;

        // Check if HotelRoom to edit is not in database
        const existingHotelRoom = await HotelRoomService.fetchOne({
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
            const existingHotelRoomWithUpdateName = await HotelRoomService.fetchOne({
                name: updateData.name.toLowerCase()
            });
            if (existingHotelRoomWithUpdateName?._id.toString() !== updateData._id.toString()) {
                res.status(403).json({
                    success: false,
                    message: 'HotelRoom with updated name already exists'
                });
                return;
            }
        }

        const updatedData = await HotelRoomService.update(hotelRoomId, updateData);
        res.status(200).json({
            success: true,
            message: "HotelRoom updated successfully",
            data: updatedData
        });
    }

    // Delete a HotelRoom
    async deleteHotelRoom(req: Request, res: Response): Promise<void> {
        const hotelRoomId = req.params.id;

        // Check to see if a deleted HotelRoom is in database
        const existingHotelRoom = await HotelRoomService.fetchOne({
            _id: hotelRoomId
        });

        if (!existingHotelRoom) {
            res.status(403).json({
                success: false,
                message: "HotelRoom to delete does not exist"
            });
            return;
        }

        const deletedHotelRoom = await HotelRoomService.delete(hotelRoomId);

        res.status(200).json({
            status: true,
            message: 'HotelRoom deleted successfully',
            data: deletedHotelRoom
        });
    }

    // Fetch (find) a HotelRoom
    async fetchOneHotelRoom(req: Request, res: Response): Promise<void> {
        const hotelRoomId = req.params.id;

        // Check if HotelRoom to be fetched is in database
        const existingHotelRoom = await HotelRoomService.fetchOne({
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
    }

    async fetchMany(req: Request, res: Response): Promise<void> {
        const fetchedHotelRoom = await HotelRoomService.findAll({});

        res.status(200).json({
            success: true,
            message: "Hotel Rooms fetched Successfully",
            data: fetchedHotelRoom
        });
    }
}

export default new  HotelController() ;

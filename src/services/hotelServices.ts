import { FilterQuery, UpdateQuery } from 'mongoose'
import HotelModel from '../models/hotelModels'

class HotelService{
    //create  a room
    async create(hotelData: hotel){
        return await HotelModel.create(hotelData)
    }

    //edit a room
    async update(id:string,roomupdate:UpdateQuery<hotel>){
        return await HotelModel.findByIdAndUpdate(id,roomupdate,{new:true})
    }

    //delete a room
    async delete(id:string){
        return await HotelModel.findByIdAndDelete(id)
    }

    //get a single room
    async fetchOne(filter:FilterQuery<hotel>){
        return await HotelModel.findOne(filter)
    }
    //get all rooms

 async findAll(filter:FilterQuery<hotel>){
    return await HotelModel.find(filter)
    }
}

export default new HotelService()
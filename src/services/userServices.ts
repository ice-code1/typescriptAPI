import { FilterQuery, UpdateQuery } from 'mongoose'
import UserModel from '../models/userModel'
import { defaults } from 'joi'

class UserServices{
    //create a user
    async create(userData:user){
        return await UserModel.create(userData) 
    }

    async update(id:string,userupdate:UpdateQuery<user>){
        return await UserModel.findByIdAndUpdate(id,userupdate,{new:true})
    }

    async delete(id:string){
        return await UserModel.findByIdAndDelete(id)
    }

    async fetchOne(filter:FilterQuery<user>){
        return await UserModel.findOne(filter)
    }

    async findAll(filter:FilterQuery<user>){
        return await UserModel.find(filter)
        }
}

export default  new UserServices()
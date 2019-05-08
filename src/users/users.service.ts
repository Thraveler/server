import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserDto } from './users.dto';
import { Users } from './users.interface';

@Injectable()
export class UsersService {

  constructor(@InjectModel('User') private userModel: Model<Users>) { }
  
  async createUser(userDto: UserDto): Promise<Users> {
    console.log(userDto);
    const user = new this.userModel(userDto);
    return await user.save;
  }

  async getUsers(): Promise<Users> {
    return await this.userModel.find().exec();
  }

  async getUser(id): Promise<Users> {
    return await this.userModel.findOne({_id: id});
  }

}

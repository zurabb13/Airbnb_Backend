import { BadRequestException, Injectable } from '@nestjs/common';
import { User, UserDocument } from '../schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { UpdateUser } from 'src/core/entity/update.user.entity';
import { CreateUser } from 'src/core/entity/create.user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getById(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async create(user: CreateUser): Promise<User> {
    const users = await this.userModel.findOne({ email: user.email }).exec();
    if (users) {
      throw new BadRequestException('email is exist');
    }
    const newUser = new this.userModel(user);
    return await newUser.save();
  }

  async update(id: string, user: UpdateUser): Promise<User> {
    return this.userModel
      .findByIdAndUpdate(id, user, {
        new: true,
      })
      .exec();
  }

  async delete(id: string) {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}

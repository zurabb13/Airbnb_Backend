import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Search, SearchDocument } from '../schema/search.schema';
import { SearchEntity } from '../entity/search.entity';

@Injectable()
export class SearchService {
  constructor(
    @InjectModel(Search.name) private searchModel: Model<SearchDocument>,
  ) {}

  async getAll(): Promise<Search[]> {
    return this.searchModel.find().exec();
  }

  async searchById(id: string): Promise<Search> {
    return this.searchModel.findById(id).exec();
  }

  async create(body: SearchEntity): Promise<Search> {
    const newSearch = new this.searchModel(body);
    return await newSearch.save();
  }

  async update(id: string, body: SearchEntity): Promise<Search> {
    return this.searchModel.findByIdAndUpdate(id, body);
  }
  async delete(id: string): Promise<Search> {
    return this.searchModel.findByIdAndDelete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Builder } from './models/builder.models';
import { CreateBuilderDto } from './dto/create-builder.dto';

@Injectable()
export class BuilderService {
  constructor(@InjectModel(Builder) private builderRepo: typeof Builder) {}

  async createBuilder(createBuilderDto: CreateBuilderDto): Promise<Builder> {
    const builder = await this.builderRepo.create(createBuilderDto);
    return builder;
  }

  async getAllBuilder(): Promise<Builder[]> {
    const companies = await this.builderRepo.findAll({
      include: { all: true },
    });
    return companies;
  }

  async getBuilderByID(id: number): Promise<Builder> {
    // const builder= await this.builderRepo.findByPk(id)
    const builder = await this.builderRepo.findOne({
      where: { id },
      include: { all: true },
    });
    return builder;
  }

  async deleteBuilderById(id: number): Promise<number> {
    return this.builderRepo.destroy({ where: { id } });
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Driver } from './models/driver.models';
import { CreateDriverDto } from './dto/create-driver.dto';

@Injectable()
export class DriverService {
  constructor(@InjectModel(Driver) private driverRepo: typeof Driver) {}

  async createDriver(createDriverDto: CreateDriverDto): Promise<Driver> {
    const driver = await this.driverRepo.create(createDriverDto);
    return driver;
  }

  async getAllDriver(): Promise<Driver[]> {
    const companies = await this.driverRepo.findAll({
      include: { all: true },
    });
    return companies;
  }

  async getDriverByID(id: number): Promise<Driver> {
    // const driver= await this.driverRepo.findByPk(id)
    const driver = await this.driverRepo.findOne({
      where: { id },
      include: { all: true },
    });
    return driver;
  }

  async deleteDriverById(id: number): Promise<number> {
    return this.driverRepo.destroy({ where: { id } });
  }
}

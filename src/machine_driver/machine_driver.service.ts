import { Injectable } from '@nestjs/common';
import { CreateMachineDriverDto } from './dto/create-machine_driver.dto';
import { UpdateMachineDriverDto } from './dto/update-machine_driver.dto';
import { InjectModel } from '@nestjs/sequelize';
import { MachineDriver } from './model/machine_driver.model';

@Injectable()
export class MachineDriverService {
  constructor(
    @InjectModel(MachineDriver) private mdRepo: typeof MachineDriver,
  ) {}

  create(createMachineDriverDto: CreateMachineDriverDto) {
    return 'This action adds a new machineDriver';
  }

  findAll() {
    return this.mdRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.mdRepo.findByPk(id);
  }

  update(id: number, updateMachineDriverDto: UpdateMachineDriverDto) {
    return `This action updates a #${id} machineDriver`;
  }

  remove(id: number) {
    return `This action removes a #${id} machineDriver`;
  }
}

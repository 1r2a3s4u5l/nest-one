import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Machine } from './models/machine.models';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/updata-machine.dto';

@Injectable()
export class MachineService {
  constructor(@InjectModel(Machine) private machineRepo: typeof Machine) {}

  async createMachine(createMachineDto: CreateMachineDto): Promise<Machine> {
    const machine = await this.machineRepo.create(createMachineDto);
    return machine;
  }

  async getAllMachine(): Promise<Machine[]> {
    const companies = await this.machineRepo.findAll({
      include: { all: true },
    });
    return companies;
  }

  async getMachineByID(id: number): Promise<Machine> {
    // const machine= await this.machineRepo.findByPk(id)
    const machine = await this.machineRepo.findOne({
      where: { id },
      include: { all: true },
    });
    return machine;
  }

  async getMachineByName(name: string): Promise<Machine> {
    const machine = await this.machineRepo.findOne({ where: { name } });
    return machine;
  }

  async deleteMachineById(id: number): Promise<number> {
    return this.machineRepo.destroy({ where: { id } });
  }
}

import { Module } from '@nestjs/common';
import { MachineController } from './machine.controller';
import { MachineService } from './machine.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Machine } from './models/machine.models';

@Module({
  imports: [SequelizeModule.forFeature([Machine])],
  controllers: [MachineController],
  providers: [MachineService],
  exports: [MachineService],
})
export class MachineModule {}

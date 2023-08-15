import { Module } from '@nestjs/common';
import { MachineDriverService } from './machine_driver.service';
import { MachineDriverController } from './machine_driver.controller';
import { MachineDriver } from './model/machine_driver.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([MachineDriver])],
  controllers: [MachineDriverController],
  providers: [MachineDriverService],
  exports: [MachineDriverService]
})
export class MachineDriverModule {}

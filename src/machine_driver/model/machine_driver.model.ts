import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Driver } from '../../driver/models/driver.models';
import { Machine } from '../../machine/models/machine.models';

interface MachineDriverAttr {
  companyId: number;
  driverId: number;
}

@Table({ tableName: 'machine_driver', createdAt: false, updatedAt: false })
export class MachineDriver extends Model<MachineDriver, MachineDriverAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Machine)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    onDelete: 'CASCADE',
  })
  machineId: number;

  @ForeignKey(() => Driver)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    onDelete: 'CASCADE',
  })
  driverId: number;
}

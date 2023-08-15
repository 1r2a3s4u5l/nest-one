import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,BelongsToMany
} from 'sequelize-typescript';
import { Machine } from '../../machine/models/machine.models';
import { MachineDriver } from '../../machine_driver/model/machine_driver.model';

interface DriverAttr {
  first_name: string;
  last_name: string;
}

@Table({ tableName: 'driver' })
export class Driver extends Model<Driver, DriverAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    primaryKey: true,
  })
  first_name: string;

  @Column({ 
    type: DataType.STRING
   })
  last_name: string;

  @BelongsToMany(() => Machine,()=>MachineDriver)
   machines:Machine[]
}

import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,BelongsToMany
} from 'sequelize-typescript';
import { Company } from '../../company/models/company.models';
import { Driver } from '../../driver/models/driver.models';
import { MachineDriver } from '../../machine_driver/model/machine_driver.model';

interface MachineAttr {
  name: string;
  companyId: number;
}

@Table({ tableName: 'machine' })
export class Machine extends Model<Machine, MachineAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
  })
  name: string;

  @ForeignKey(() => Company)
  @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  companyId: number;

  @BelongsTo(() => Company)
  company: Company;

  @BelongsToMany(()=>Driver,()=>MachineDriver)
  drivers:Driver[]
}

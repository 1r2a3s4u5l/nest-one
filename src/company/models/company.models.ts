import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Builder } from '../../builder/models/builder.models';
import { Machine } from '../../machine/models/machine.models';

interface CompanyAttr {
  name: string;
  address: string;
  phone: string;
}

@Table({ tableName: 'company' })
export class Company extends Model<Company, CompanyAttr> {
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
  name: string;

  @Column({
    type: DataType.STRING,
  })
  address: string;

  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @HasMany(() => Machine)
  machine: Machine[];

  @HasMany(() => Builder)
  builder: Builder[];
}

import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './models/role.model';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRepo: typeof Role) {}

  async createRole(createRoleDto: CreateRoleDto) {
    const newRole = await this.roleRepo.create(createRoleDto);
    return newRole;
  }
  async getRoleByValue(value: string) {
    const newRole = await this.roleRepo.findOne({ where: { value } });
    return newRole;
  }

  async getRoles() {
    const newRole = await this.roleRepo.findAll({ include: { all: true } });
    return newRole;
  }
}

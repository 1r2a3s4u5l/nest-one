import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('roleslar')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}
  
  @ApiOperation({summary:"rolesni yaratish"})
  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.createRole(createRoleDto);
  }
  @ApiOperation({summary:"roleslarni korish"})
  @Get()
  getRoles() {
    return this.rolesService.getRoles();
  }
  @ApiOperation({summary:"rolesni value bo'yicha korish"})
  @Get(':value')
  getRolesByValue(@Param('value') value: string) {
    return this.rolesService.getRoleByValue(value);
  }
}

import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { MachineService } from './machine.service';
import { CreateMachineDto } from './dto/create-machine.dto';
import { Machine } from './models/machine.models';
import { UpdateMachineDto } from './dto/updata-machine.dto';
import {  ApiOperation } from '@nestjs/swagger';
import {  ApiTags } from '@nestjs/swagger';
@ApiTags('machinelar')
@Controller('machine')
export class MachineController {
  constructor(private readonly machineService: MachineService) {}
  @ApiOperation({summary:"machineni yaratish"})
  @Post('create')
  async createMachine(
    @Body() createMachineDto: CreateMachineDto,
  ): Promise<Machine> {
    return this.machineService.createMachine(createMachineDto);
  }
  @ApiOperation({summary:"machinelarni korish"})
  @Get('all')
  async getAllMachine(): Promise<Machine[]> {
    return this.machineService.getAllMachine();
  }
  @ApiOperation({summary:"machineni id bo'yicha korish"})
  @Get(':id')
  async getMachineByID(@Param('id') id: string): Promise<Machine> {
    return this.machineService.getMachineByID(+id);
  }
  @ApiOperation({summary:"machineni ismi bo'yicha korish"})
  @Get('name/:name')
  async getMachineByName(@Param('name') name: string): Promise<Machine> {
    return this.machineService.getMachineByName(name);
  }
  @ApiOperation({summary:"machineni o'chirish"})
  @Delete(':id')
  async deleteMachineById(@Param('id') id: string): Promise<number> {
    return this.machineService.deleteMachineById(+id);
  }
}

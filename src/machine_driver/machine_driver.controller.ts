import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { MachineDriverService } from './machine_driver.service';
import { CreateMachineDriverDto } from './dto/create-machine_driver.dto';
import { UpdateMachineDriverDto } from './dto/update-machine_driver.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('machine_driverlar')
@Controller('machine-driver')
export class MachineDriverController {
  constructor(private readonly machineDriverService: MachineDriverService) {}
  @ApiOperation({ summary: 'machine_driverni yaratish' })
  @Post()
  create(@Body() createMachineDriverDto: CreateMachineDriverDto) {
    return this.machineDriverService.create(createMachineDriverDto);
  }
  @ApiOperation({ summary: 'machine_driverlarni korish' })
  @Get()
  findAll() {
    return this.machineDriverService.findAll();
  }
  @ApiOperation({ summary: 'machine_driverni id boyicha korish' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.machineDriverService.findOne(+id);
  }
  @ApiOperation({ summary: "machine_driverni o'zgartirish" })
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateMachineDriverDto: UpdateMachineDriverDto,
  ) {
    return this.machineDriverService.update(+id, updateMachineDriverDto);
  }
  @ApiOperation({ summary: "machine_driverni o'chirish" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.machineDriverService.remove(+id);
  }
}

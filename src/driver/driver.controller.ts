import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { Driver } from './models/driver.models';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('driverlar')
@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}
  @ApiOperation({ summary: 'driverni yaratish' })
  @Post('create')
  async createDriver(
    @Body() createDriverDto: CreateDriverDto,
  ): Promise<Driver> {
    return this.driverService.createDriver(createDriverDto);
  }
  @ApiOperation({ summary: 'driverlarni korish' })
  @Get('all')
  async getAllDriver(): Promise<Driver[]> {
    return this.driverService.getAllDriver();
  }
  @ApiOperation({ summary: "driverni id bo'yicha korish" })
  @Get(':id')
  async getDriverByID(@Param('id') id: string): Promise<Driver> {
    return this.driverService.getDriverByID(+id);
  }
  @ApiOperation({ summary: "driverni o'chirish" })
  @Delete(':id')
  async deleteDriverById(@Param('id') id: string): Promise<number> {
    return this.driverService.deleteDriverById(+id);
  }
}

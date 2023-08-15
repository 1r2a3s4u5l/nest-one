import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { BuilderService } from './builder.service';
import { CreateBuilderDto } from './dto/create-builder.dto';
import { Builder } from './models/builder.models';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('builderlar')
@Controller('builder')
export class BuilderController {
  constructor(private readonly builderService: BuilderService) {}
  @ApiOperation({ summary: 'builderni yaratish' })
  @Post('create')
  async createBuilder(
    @Body() createBuilderDto: CreateBuilderDto,
  ): Promise<Builder> {
    return this.builderService.createBuilder(createBuilderDto);
  }
  @ApiOperation({ summary: 'builderlarni korish' })
  @Get('all')
  async getAllBuilder(): Promise<Builder[]> {
    return this.builderService.getAllBuilder();
  }
  @ApiOperation({ summary: 'builderni id boyicha korish' })
  @Get(':id')
  async getBuilderByID(@Param('id') id: string): Promise<Builder> {
    return this.builderService.getBuilderByID(+id);
  }
  @ApiOperation({ summary: "builderni o'chirish" })
  @Delete(':id')
  async deleteBuilderById(@Param('id') id: string): Promise<number> {
    return this.builderService.deleteBuilderById(+id);
  }
}

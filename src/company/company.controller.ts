import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './models/company.models';
import { UpdateCompanyDto } from './dto/updata-company.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('companylar')
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}
  @ApiOperation({ summary: 'companyni yaratish' })
  @Post('create')
  async createCompany(
    @Body() createCompanyDto: CreateCompanyDto,
  ): Promise<Company> {
    return this.companyService.createCompany(createCompanyDto);
  }
  @ApiOperation({ summary: 'companyni korish' })
  @Get('all')
  async getAllCompany(): Promise<Company[]> {
    return this.companyService.getAllCompany();
  }
  @ApiOperation({ summary: "companyni id bo'yicha korish" })
  @Get(':id')
  async getCompanyByID(@Param('id') id: string): Promise<Company> {
    return this.companyService.getCompanyByID(+id);
  }
  @ApiOperation({ summary: "companyni nomi bo'yicha korish" })
  @Get('name/:name')
  async getCompanyByName(@Param('name') name: string): Promise<Company> {
    return this.companyService.getCompanyByName(name);
  }
  @ApiOperation({ summary: "companyni o'chirish" })
  @Delete(':id')
  async deleteCompanyById(@Param('id') id: string): Promise<number> {
    return this.companyService.deleteCompanyById(+id);
  }
  @ApiOperation({ summary: 'companyni korish' })
  @Put(':id')
  async updateCompanyById(
    @Param('id') id: string,
    @Body() updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company> {
    return this.companyService.updateCompanyById(+id, updateCompanyDto);
  }
}

import { Body, Controller, Post, Get, Param, Delete, Put } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './models/company.models';
import { UpdateCompanyDto } from './dto/updata-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post('create')
  async createCompany(
    @Body() createCompanyDto: CreateCompanyDto,
  ): Promise<Company> {
    return this.companyService.createCompany(createCompanyDto);
  }

  @Get('all')
  async getAllCompany(): Promise<Company[]> {
    return this.companyService.getAllCompany();
  }

  @Get(':id')
  async getCompanyByID(@Param('id') id: string): Promise<Company> {
    return this.companyService.getCompanyByID(+id);
  }

  @Get('name/:name')
  async getCompanyByName(@Param('name') name: string): Promise<Company> {
    return this.companyService.getCompanyByName(name);
  }

  @Delete(':id')
  async deleteCompanyById(@Param('id') id: string): Promise<number> {
    return this.companyService.deleteCompanyById(+id);
  }

  @Put(":id")
  async updateCompanyById(@Param("id")id:string,@Body() updateCompanyDto:UpdateCompanyDto):Promise<Company>{
    return this.companyService.updateCompanyById(+id,updateCompanyDto)
  }
}


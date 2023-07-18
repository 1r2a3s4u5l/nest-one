import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Company } from './models/company.models';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/updata-company.dto';

@Injectable()
export class CompanyService {
  constructor(@InjectModel(Company) private companyRepo: typeof Company) {}

  async createCompany(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const company = await this.companyRepo.create(createCompanyDto);
    return company;
  }

  async getAllCompany(): Promise<Company[]> {
    const companies = await this.companyRepo.findAll();
    return companies;
  }

  async getCompanyByID(id: number): Promise<Company> {
    // const company= await this.companyRepo.findByPk(id)
    const company = await this.companyRepo.findOne({ where: { id } });
    return company;
  }

  async getCompanyByName(name: string): Promise<Company> {
    const company = await this.companyRepo.findOne({ where: { name } });
    return company;
  }

  async deleteCompanyById(id: number): Promise<number> {
    return this.companyRepo.destroy({ where: { id } });
  }

  async updateCompanyById(
    id: number,
    updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company> {
    const company = await this.companyRepo.update(updateCompanyDto, {
      where: { id },
      returning:true
    });

    console.log(company[1][0].dataValues);
    
    return company[1][0].dataValues
  }
}

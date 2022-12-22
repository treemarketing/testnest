import { CreateCatDto } from 'src/dto/create-cat.dto';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from 'src/interfaces/cat/cat.interface';
import { Delete } from '@nestjs/common/decorators';

@Controller('cats')
export class CatsController {
constructor(private readonly catsService: CatsService){}
    @Post()
    async create(@Body() createCatDto: CreateCatDto){
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]>{
        return this.catsService.findAll();
    }

    @Get(':name')
    async findByName(@Param('name') name: string){
        return this.catsService.findByName(name);
    }

    @Put(':name')
    async updateByName(@Param('name') name: string, @Body()createCatDto: CreateCatDto){
        return this.catsService.updateByName(name, createCatDto);
    }

    @Delete(':name')
    async deleteByName(@Param('name') name: string){
        return this.catsService.deleteByName(name);
    }
}

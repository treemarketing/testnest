import { Injectable } from '@nestjs/common';
import { CreateCatDto } from 'src/dto/create-cat.dto';
import { Cat } from 'src/interfaces/cat/cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat){
        this.cats.push(cat)
    }

    async findAll() {
        return this.cats;
    }
}

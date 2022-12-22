import { CreateCatDto } from './../dto/create-cat.dto';
import { Injectable } from '@nestjs/common';
import { Cat } from 'src/interfaces/cat/cat.interface';

@Injectable()
export class CatsService {
    private cats: Cat[] = [];

    create(cat: Cat){
        this.cats.push(cat)
    }

    async findAll() {
        return this.cats;
    }

    async findByName(name: string) : Promise<Cat> {
       return this.cats.find((e) => e.name == name);
    }
    
    async updateByName(name: string, createCatDto: CreateCatDto) : Promise<boolean> {
       const catIndex = this.cats.findIndex((e) => e.name == name);
       if (catIndex >= 0) {
        this.cats[catIndex] = {... this.cats[catIndex], ... createCatDto};
        return true;
       }else{
        return false;
       }
    }
    findIndex(arg0: (e: any) => boolean) {
        throw new Error('Method not implemented.');
    }

    async deleteByName(name: string) : Promise<any> {
        const catIndex = this.cats.findIndex((e) => e.name == name);
        if (catIndex >= 0) {
         this.cats = this.cats.filter((e) => e.name != name)
         return {"succes": true};
        }else{
         return {"error": false};
        }
    }
}

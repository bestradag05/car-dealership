import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interface/car.interface';
import { v4 as uuid } from "uuid";

@Injectable()
export class CarsService {

    private cars : Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        },
    ];


    findAll() {
        return this.cars;
    }

    findOneById( id: string ){
        const car = this.cars.find(item => item.id === id);

        if(!car)  throw new NotFoundException(`Car with id '${id}' not found`);
        return   car;
    }
}

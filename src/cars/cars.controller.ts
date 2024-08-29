import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCardDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {

    constructor( private readonly carsService: CarsService){}

    @Get()
    getAllcars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id',  ParseUUIDPipe) id : string) {

        console.log({id});

        return this.carsService.findOneById(id);
    }

    @Post()
    createCar( @Body() createCardDto: CreateCardDto){
        return createCardDto;
    }

    @Patch(':id')
    updateCar(@Param ('id', ParseIntPipe) id: number , @Body() body: any){
        return body;
    }

    @Delete(':id')
    daleteCar(@Param('id', ParseIntPipe) id: number){
        return {
            method: 'delete',
            id
        };
    }
}

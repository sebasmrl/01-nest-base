import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`El id: '${id}' no fue encontrado`);

    return car;
  }

  create( createCarDto: CreateCarDto ) {
    const car: Car  = {
      id: uuid(),
      ...createCarDto
    }
    this.cars.push(car);
    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto){

    let carDB: Car = this.findOneById(id);
    if(updateCarDto.id && updateCarDto.id !== id) 
      throw new BadRequestException(`<Id> isn't valid inside body`);
    
    this.cars = this.cars.map((car) => {
      if(car.id === id){
        carDB = {
          ...carDB, 
          ...updateCarDto,
          id, //evitar que el id sea otro valor
        }
        return carDB; 
      }
      return car;
    });

    return carDB;
  }

  delete(id: string){
    const carDB: Car = this.findOneById(id);
    this.cars = this.cars.filter(car => car.id !== id);

    return carDB;
  }

}//End Service

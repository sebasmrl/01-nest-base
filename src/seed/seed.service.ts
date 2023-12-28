import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { BRANDS_SEED, CARS_SEED } from './data';


@Injectable()
export class SeedService {
 
  constructor( private readonly brandService: BrandsService, private readonly carsService: CarsService){}

  

  populateDB() {
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandService.fillBrandsWithSeedData(BRANDS_SEED);

    return `Seed Service Successfully`;
  }

 
}

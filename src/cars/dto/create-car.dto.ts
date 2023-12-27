import { IsString, MinLength } from "class-validator";

export class CreateCarDto {
   @IsString({message: 'Campo <brand> es obligatorio'}) 
   public readonly brand: string;

   @IsString()
   @MinLength(3)
   public readonly model: string
}
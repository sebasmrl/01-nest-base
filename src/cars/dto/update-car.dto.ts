import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCarDto {
   @IsString()
   @IsUUID()
   @IsOptional()
   public readonly id?: string;

   @IsString({message: 'Campo <brand> es obligatorio'}) 
   @IsOptional()
   public readonly brand?: string;

   @IsString()
   @IsOptional()
   @MinLength(3)
   public readonly model?: string
}
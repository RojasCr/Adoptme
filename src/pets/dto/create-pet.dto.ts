import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator"


export class CreatePetDto {
    @IsString()
    @IsNotEmpty()
    name!: string
    
    @IsInt()
    @IsNotEmpty()
    @Min(18)
    age!: number

    @IsString()
    @IsOptional()
    ownerId?: number
}

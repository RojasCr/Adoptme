import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { PetsService } from '../pets/pets.service';

@Injectable()
export class OwnerService {

  constructor(
    private readonly usersService: UsersService,
    private readonly petsService: PetsService,
  ){}

  findPetsByUser(userId:number){

    const user = this.usersService.findOne(userId);

    const pets = this.petsService.findAll()
        .filter(pet => pet.ownerId === user.id);

    if(pets.length === 0){
      throw new NotFoundException("Este usuario no tiene mascotas")
    }

    return pets;
  }

  findOwnerByPet(petId:number){

    const pet = this.petsService.findOne(petId);

    if(!pet.ownerId){
      throw new NotFoundException("Esta mascota no tiene dueño")
    }

    return this.usersService.findOne(pet.ownerId);

  }

}

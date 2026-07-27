import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsService {

  private pets: Pet[] = [];

  create(pet: CreatePetDto) {
    this.pets.push({
      ...pet,
      id: this.pets.length + 1
    });
    return pet;
  }

  findAll(): Pet[] {
    let pets: Pet[] = this.pets;

    if(pets.length === 0){
      throw new NotFoundException("No hay mascotas registradas")
    }
    return pets;
  }

  findOne(id: number): Pet {
    let pet = this.pets.find(p=>p.id === id);
    
    if(!pet){
      throw new NotFoundException("La mascota no existe");
    }
    
    return pet;
  }
  
  update(id: number, pet: UpdatePetDto) {
    let petToUpdate: Pet|undefined = this.findOne(id);
    
    if(!petToUpdate){
      throw new NotFoundException("La mascota no existe");
    }
    
    let newPetInfo: Pet = {
      ...petToUpdate,
      ...pet
    };
    
    let indexPetToUpdate: number = this.pets.indexOf(petToUpdate);
    this.pets[indexPetToUpdate] = newPetInfo;
    
    return this.pets[indexPetToUpdate];
  }
  
  remove(id: number) {
    let pet: Pet|undefined = this.pets.find(p=>p.id === id);
    
    if(!pet){
      throw new NotFoundException("La mascota no existe");
    }

    let indexPetToDelete: number = this.pets.indexOf(pet);
    this.pets.splice(indexPetToDelete, 1);
    return this.pets;
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OwnerService } from './owner.service';

@Controller()
export class OwnerController {
  constructor(
    private readonly ownerService: OwnerService,
  ) {}

  @Get('users/:id/pets')
  findPetsByUser(@Param('id') id: string){
    return this.ownerService.findPetsByUser(+id);
  }

  @Get('pets/:id/user')
  findOwnerByPet(@Param('id') id: string){
    return this.ownerService.findOwnerByPet(+id);
  }

}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  private users: User[] = [];

  create(user: CreateUserDto) {
    this.users.push({
      id: this.users.length + 1,
      ...user,
    });

    return user;
  }

  findAll(): User[] {
    let users: User[] = this.users;
    
    if(users.length === 0){
      throw new NotFoundException("No hay usuarios registrados")
    }
    
    return users;
  }

  findOne(id: number): User {
    let user: User|undefined = this.users.find(u => u.id === id);

    if(!user){
      throw new NotFoundException("Usuario no encontrado");
    }

    return user;
  }

  findOwnerPet(id: number): User{
    let user: User|undefined = this.users.find(u => u.id === id);

    if(!user){
      throw new NotFoundException("Esta mascota no tiene dueño");
    }

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    let userToUpdate: User|undefined = this.findOne(id);

    if(!userToUpdate){
      throw new NotFoundException("Usuario no encontrado");
    }

    let newUserInfo: User = {
      ...userToUpdate,
      ...updateUserDto
    };

    let indexUserToUpdate: number = this.users.indexOf(userToUpdate);
    this.users[indexUserToUpdate] = newUserInfo;

    return this.users[indexUserToUpdate];
  }

  remove(id: number) {
    let user: User|undefined = this.users.find(u => u.id === id);

    if(!user){
      throw new NotFoundException("Usuario no encontrado");
    }

    let indexUserToDelete: number = this.users.indexOf(user);
    this.users.splice(indexUserToDelete, 1);

    return this.users;
  }
}

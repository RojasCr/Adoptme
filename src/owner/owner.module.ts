import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';
import { PetsModule } from '../pets/pets.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [PetsModule, UsersModule],
  controllers: [OwnerController],
  providers: [OwnerService],
})
export class OwnerModule {}

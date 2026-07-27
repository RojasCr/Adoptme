import { Module } from '@nestjs/common';
import { PetsModule } from './pets/pets.module';
import { UsersModule } from './users/users.module';
import { OwnerModule } from './owner/owner.module';

@Module({
  imports: [PetsModule, UsersModule, OwnerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

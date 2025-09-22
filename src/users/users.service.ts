import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: string[] = ['Asma', 'Hichame'];

  findAll(): string[] {
    return this.users;
  }

  create(user: string): string {
    this.users.push(user);
    return `Utilisateur ${user} ajouté avec succès`;
  }
}

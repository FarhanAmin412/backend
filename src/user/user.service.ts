import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/createUserDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly user: Repository<User>) { }

    async findOne(id: number) {
        return await this.user.findOne({ where: { id } });
    }

    findAll() {
        return 'all Users Farhan';
    }

    async addUser(createUserDto: CreateUserDto) {
        const user = this.user.create(createUserDto);
        return await this.user.save(user);
    }

    async updateUser(id: number, updateUserDto: UpdateUserDto) {
        return await this.user.update(id, updateUserDto);
    }
}

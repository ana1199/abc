import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserRequestDto } from './dto/create-user-request.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private readonly userRepo;
    constructor(userRepo: Repository<User>);
    create(createUserDto: CreateUserRequestDto): Promise<{
        role: string;
        isEmailConfirmed: false;
        password: string;
        firstName: string;
        lastName: string;
        email: string;
    } & User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
    findByEmail(email: string): Promise<User>;
    confirm(email: string): Promise<User>;
    reset(userData: {
        email: string;
        password: string;
    }): Promise<User>;
}

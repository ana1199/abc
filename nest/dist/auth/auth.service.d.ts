import { UsersService } from '../users/users.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: AuthLoginDto): Promise<{
        success: boolean;
        access_token: string;
    }>;
}

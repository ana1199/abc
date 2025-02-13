import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
export declare class ConfirmationService {
    private configService;
    private usersService;
    private jwtService;
    constructor(configService: ConfigService, usersService: UsersService, jwtService: JwtService);
    sendEmail(email: string, type: string): Promise<void>;
}

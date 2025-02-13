import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth-login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(authLoginDto: AuthLoginDto): Promise<{
        success: boolean;
        access_token: string;
    }>;
}

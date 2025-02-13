import { ConfirmationService } from './confirmation.service';
export declare class ConfirmationController {
    private readonly confirmationService;
    constructor(confirmationService: ConfirmationService);
    confirm(email: string): Promise<void>;
    reset(email: string): Promise<void>;
}

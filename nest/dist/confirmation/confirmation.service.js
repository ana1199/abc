"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmationService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
let ConfirmationService = class ConfirmationService {
    constructor(configService, usersService, jwtService) {
        this.configService = configService;
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async sendEmail(email, type) {
        const user1 = await this.usersService.findByEmail(email);
        if (type === 'confirm' && user1)
            throw new common_1.BadRequestException('User already exists');
        if (type === 'reset' && !user1)
            throw new common_1.BadRequestException('User Not Found' + email);
        const payload = { email: email };
        const token = this.jwtService.sign(payload);
        const transporter = nodemailer_1.default.createTransport({
            service: 'yahoo',
            auth: {
                user: this.configService.get('YAHOO_MAIL'),
                pass: this.configService.get('YAHOO_PASS'),
            },
        });
        const subject = type === 'confirm' ? 'Confirm Your Email Address' : 'Reset password';
        const message = type === 'confirm'
            ? `Click the following button to confirm your email: <button><a href="http://localhost:3000/confirm/${token}">Confirm</a></button>`
            : `Click the following button to reset your password: <button><a href="http://localhost:3000/auth/reset-password/${token}">RESET</a></button>`;
        const mailOptions = {
            from: 'gavra.anamaria@yahoo.com',
            to: [email],
            subject: subject,
            html: message,
        };
        await transporter.sendMail(mailOptions);
    }
};
ConfirmationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        users_service_1.UsersService,
        jwt_1.JwtService])
], ConfirmationService);
exports.ConfirmationService = ConfirmationService;
//# sourceMappingURL=confirmation.service.js.map
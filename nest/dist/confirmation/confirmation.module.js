"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmationModule = void 0;
const common_1 = require("@nestjs/common");
const confirmation_controller_1 = require("./confirmation.controller");
const confirmation_service_1 = require("./confirmation.service");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const users_module_1 = require("../users/users.module");
let ConfirmationModule = class ConfirmationModule {
};
ConfirmationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.registerAsync({
                inject: [config_1.ConfigService],
                useFactory: (config) => {
                    return {
                        secret: config.get('JWT_SECRET'),
                        signOptions: { expiresIn: '6000s' },
                    };
                },
            }),
            users_module_1.UsersModule,
        ],
        controllers: [confirmation_controller_1.ConfirmationController],
        providers: [confirmation_service_1.ConfirmationService],
        exports: [confirmation_service_1.ConfirmationService],
    })
], ConfirmationModule);
exports.ConfirmationModule = ConfirmationModule;
//# sourceMappingURL=confirmation.module.js.map
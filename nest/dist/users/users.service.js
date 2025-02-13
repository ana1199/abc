"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
const bcrypt = __importStar(require("bcrypt"));
let UsersService = class UsersService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async create(createUserDto) {
        const foundUser = await this.findByEmail(createUserDto.email);
        if (foundUser) {
            throw new common_1.BadRequestException('User already exists');
        }
        const passwordHash = await bcrypt.hash(createUserDto.password, 10);
        const hashedUser = Object.assign(Object.assign({}, createUserDto), { password: passwordHash });
        return await this.userRepo.save(Object.assign(Object.assign({}, hashedUser), { role: 'client', isEmailConfirmed: false }));
    }
    findAll() {
        return this.userRepo.find();
    }
    findOne(id) {
        return this.userRepo.findOne({
            where: {
                id,
            },
        });
    }
    async update(id, updateUserDto) {
        await this.userRepo.update(id, updateUserDto);
        return this.findOne(id);
    }
    async delete(id) {
        return this.userRepo.delete(id);
    }
    findByEmail(email) {
        return this.userRepo.findOne({
            where: {
                email,
            },
        });
    }
    async confirm(email) {
        const user = await this.findByEmail(email);
        await this.userRepo.update(user.id, { isEmailConfirmed: true });
        return this.findOne(user.id);
    }
    async reset(userData) {
        const user = await this.findByEmail(userData.email);
        const passwordHash = await bcrypt.hash(userData.password, 10);
        await this.userRepo.update(user.id, { password: passwordHash });
        return this.findOne(user.id);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map
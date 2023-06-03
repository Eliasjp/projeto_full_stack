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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const create_client_dto_1 = require("./dto/create-client.dto");
const update_client_dto_1 = require("./dto/update-client.dto");
const client_repository_1 = require("./repository/client.repository");
let ClientService = class ClientService {
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }
    async create(createClientDto) {
        const byEmail = await this.clientRepository.findByEmail(createClientDto.email);
        const byPhone = await this.clientRepository.findByPhone(createClientDto.phone);
        if (byEmail) {
            throw new common_1.ConflictException('Email already registered');
        }
        else if (byPhone) {
            throw new common_1.ConflictException('Phone already registered');
        }
        const client = await this.clientRepository.create(createClientDto);
        return client;
    }
    async findAll() {
        const clients = await this.clientRepository.findAll();
        return clients;
    }
    async findOne(id) {
        const client = await this.clientRepository.findOne(id);
        return client;
    }
    async findByEmail(email) {
        const client = await this.clientRepository.findByEmail(email);
        return client;
    }
    async update(id, updateClientDto, request_id) {
        const client = await this.clientRepository.update(id, updateClientDto, request_id);
        return client;
    }
    async delete(id, request_id) {
        await this.clientRepository.delete(id, request_id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_client_dto_1.CreateClientDto]),
    __metadata("design:returntype", Promise)
], ClientService.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClientService.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientService.prototype, "findOne", null);
__decorate([
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientService.prototype, "findByEmail", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_client_dto_1.UpdateClientDto, String]),
    __metadata("design:returntype", Promise)
], ClientService.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ClientService.prototype, "delete", null);
ClientService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [client_repository_1.ClientRepository])
], ClientService);
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map
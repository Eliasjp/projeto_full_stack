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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientPrismaRepository = void 0;
const common_1 = require("@nestjs/common");
const client_entity_1 = require("../../entities/client.entity");
const prisma_service_1 = require("../../../../database/prisma.service");
const class_transformer_1 = require("class-transformer");
let ClientPrismaRepository = class ClientPrismaRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const client = new client_entity_1.Client();
        Object.assign(client, Object.assign({}, data));
        const new_client = await this.prisma.client.create({ data: Object.assign({}, client) });
        return (0, class_transformer_1.plainToInstance)(client_entity_1.Client, new_client);
    }
    async findAll() {
        const all_clients = await this.prisma.client.findMany();
        return (0, class_transformer_1.plainToInstance)(client_entity_1.Client, all_clients);
    }
    async findOne(id) {
        const find_client = await this.prisma.client.findUnique({
            where: { id },
        });
        return (0, class_transformer_1.plainToInstance)(client_entity_1.Client, find_client);
    }
    async findByEmail(email) {
        const find_client = await this.prisma.client.findUnique({
            where: { email },
        });
        return find_client;
    }
    async findByPhone(phone) {
        const find_client = await this.prisma.client.findUnique({
            where: { phone },
        });
        return find_client;
    }
    update(id, data) {
        const updated_client = this.prisma.client.update({
            where: { id },
            data: Object.assign({}, data),
        });
        return (0, class_transformer_1.plainToInstance)(client_entity_1.Client, updated_client);
    }
    async delete(id) {
        await this.prisma.client.delete({ where: { id } });
    }
};
ClientPrismaRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientPrismaRepository);
exports.ClientPrismaRepository = ClientPrismaRepository;
//# sourceMappingURL=client-prisma.repository.js.map
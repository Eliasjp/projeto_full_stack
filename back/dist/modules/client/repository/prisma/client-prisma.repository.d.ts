import { ClientRepository } from '../client.repository';
import { CreateClientDto } from '../../dto/create-client.dto';
import { UpdateClientDto } from '../../dto/update-client.dto';
import { Client } from '../../entities/client.entity';
import { PrismaService } from 'src/database/prisma.service';
export declare class ClientPrismaRepository implements ClientRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateClientDto): Promise<Client>;
    findAll(): Promise<Client[]>;
    findOne(id: string): Promise<Client>;
    findByEmail(email: string): Promise<Client>;
    findByPhone(phone: string): Promise<Client>;
    update(id: string, data: UpdateClientDto): Client | Promise<Client>;
    delete(id: string): Promise<void>;
}

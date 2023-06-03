import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientRepository } from './repository/client.repository';
export declare class ClientService {
    private clientRepository;
    constructor(clientRepository: ClientRepository);
    create(createClientDto: CreateClientDto): Promise<import("./entities/client.entity").Client>;
    findAll(): Promise<import("./entities/client.entity").Client[]>;
    findOne(id: string): Promise<import("./entities/client.entity").Client>;
    findByEmail(email: string): Promise<import("./entities/client.entity").Client>;
    update(id: string, updateClientDto: UpdateClientDto, request_id: string): Promise<import("./entities/client.entity").Client>;
    delete(id: string, request_id: string): Promise<void>;
}

import { PrismaService } from 'src/database/prisma.service';
import { ContactRepository } from '../contact.repository';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { Contact } from '../../entities/contact.entity';
import { UpdateContactDto } from '../../dto/update-contact.dto';
export declare class ContactPrismaRepository implements ContactRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateContactDto, id_client: string): Promise<Contact>;
    findAll(): Promise<Contact[]>;
    findOne(id: string): Promise<Contact>;
    update(id: string, data: UpdateContactDto): Promise<Contact>;
    delete(id: string): Promise<void>;
}

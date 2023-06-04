import { CreateContactDto } from '../dto/create-contact.dto';
import { UpdateContactDto } from '../dto/update-contact.dto';
import { Contact } from '../entities/contact.entity';

export abstract class ContactRepository {
  abstract create(data: CreateContactDto, id_client: string): Promise<Contact>;
  abstract findOne(id: string): Promise<Contact>;
  abstract findAll(): Promise<Contact[]>;
  abstract update(id: string, data: UpdateContactDto): Promise<Contact>;
  abstract delete(id: string): Promise<void>;
}

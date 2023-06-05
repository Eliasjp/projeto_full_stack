import { CreateContactDto } from '../dto/create-contact.dto';
import { UpdateContactDto } from '../dto/update-contact.dto';
import { Contact } from '../entities/contact.entity';

export abstract class ContactRepository {
  abstract create(data: CreateContactDto, id_client: string, request_id: string): Promise<Contact>;
  abstract findOne(id: string, request_id: string): Promise<Contact>;
  abstract findAll(request_id: string): Promise<Contact[]>;
  abstract update(id: string, data: UpdateContactDto, request_id: string): Promise<Contact>;
  abstract delete(id: string, request_id: string): Promise<void>;
}

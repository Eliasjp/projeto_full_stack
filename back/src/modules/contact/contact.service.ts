import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactRepository } from './repository/contact.repository';

@Injectable()
export class ContactService {
  constructor(private contactRepository: ContactRepository) {}
  async create(createContactDto: CreateContactDto, id_client: string, request_id: string) {
    const contact = await this.contactRepository.create(
      createContactDto,
      id_client,
      request_id
    );
    return contact;
  }

  async findAll(request_id: string) {
    const contacts = await this.contactRepository.findAll(request_id);
    return contacts;
  }

  async findOne(id: string, request_id: string) {
    const find_contact = await this.contactRepository.findOne(id, request_id);
    return find_contact;
  }

  async update(id: string, updateContactDto: UpdateContactDto, request_id: string) {
    const update_contact = await this.contactRepository.update(
      id,
      updateContactDto,
      request_id
    );
    return update_contact;
  }

  async remove(id: string, request_id: string) {
    await this.contactRepository.delete(id, request_id);
  }
}

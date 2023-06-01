import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactRepository } from './repository/contact.repository';

@Injectable()
export class ContactService {
  constructor(private contactRepository: ContactRepository) {}
  async create(createContactDto: CreateContactDto, id_client: string) {
    const contact = await this.contactRepository.create(
      createContactDto,
      id_client,
    );
    return contact;
  }

  async findAll() {
    const contacts = await this.contactRepository.findAll();
    return contacts;
  }

  async findOne(id: string) {
    const find_contact = await this.contactRepository.findOne(id);
    return find_contact;
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const update_contact = await this.contactRepository.update(
      id,
      updateContactDto,
    );
    return update_contact;
  }

  async remove(id: string) {
    await this.contactRepository.delete(id);
  }
}

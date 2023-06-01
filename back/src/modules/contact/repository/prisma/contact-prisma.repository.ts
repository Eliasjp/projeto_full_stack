import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';
import { ContactRepository } from '../contact.repository';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { Contact } from '../../entities/contact.entity';
import { UpdateContactDto } from '../../dto/update-contact.dto';

@Injectable()
export class ContactPrismaRepository implements ContactRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateContactDto, id_client: string): Promise<Contact> {
    const new_contact = await this.prisma.contact.create({
      data: {
        full_name: data.full_name,
        email: data.email,
        phone: data.phone,
        client_id: id_client,
      },
    });

    return plainToInstance(Contact, new_contact);
  }

  async findAll(): Promise<Contact[]> {
    const all_contact: Contact[] = await this.prisma.contact.findMany();

    return plainToInstance(Contact, all_contact);
  }

  async findOne(id: string): Promise<Contact> {
    const find_contact = await this.prisma.contact.findUnique({
      where: { id },
    });

    return plainToInstance(Contact, find_contact);
  }

  async update(id: string, data: UpdateContactDto): Promise<Contact> {
    const updated_contact = await this.prisma.contact.update({
      where: { id },
      data: { ...data },
    });

    return plainToInstance(Contact, updated_contact);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.contact.delete({ where: { id } });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';
import { ContactRepository } from '../contact.repository';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { Contact } from '../../entities/contact.entity';
import { UpdateContactDto } from '../../dto/update-contact.dto';
import { NotFoundException, UnauthorizedException } from '@nestjs/common/exceptions';

@Injectable()
export class ContactPrismaRepository implements ContactRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateContactDto, id_client: string, request_id: string): Promise<Contact> {
    if (request_id != id_client) throw new UnauthorizedException()

    const find_contact = await this.prisma.contact.findUnique({
      where: { id: id_client },
    });
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

  async findAll(request_id: string): Promise<Contact[]> {
    const all_contact: Contact[] = await this.prisma.contact.findMany({where: {client_id: request_id}});

    return plainToInstance(Contact, all_contact);
  }

  async findOne(id: string): Promise<Contact> {
    const find_contact = await this.prisma.contact.findUnique({
      where: { id },
    });
    if (!find_contact) throw new NotFoundException()

    return plainToInstance(Contact, find_contact);
  }

  async update(id: string, data: UpdateContactDto, request_id: string): Promise<Contact> {
    const find_contact = await this.prisma.contact.findUnique({
      where: { id },
    });
    if (!find_contact) throw new NotFoundException()
    if (request_id != find_contact.client_id) throw new UnauthorizedException()

    const updated_contact = await this.prisma.contact.update({
      where: { id },
      data: { ...data },
    });

    return plainToInstance(Contact, updated_contact);
  }

  async delete(id: string, request_id: string): Promise<void> {
    const find_contact = await this.prisma.contact.findUnique({
      where: { id },
    });

    if (!find_contact) throw new NotFoundException()
    if (request_id != find_contact.client_id) throw new UnauthorizedException()

    await this.prisma.contact.delete({ where: { id } });
  }
}

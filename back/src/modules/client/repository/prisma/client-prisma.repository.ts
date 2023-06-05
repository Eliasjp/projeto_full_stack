import { Injectable } from '@nestjs/common';
import { NotFoundException, UnauthorizedException } from '@nestjs/common/exceptions';
import { ClientRepository } from '../client.repository';
import { CreateClientDto } from '../../dto/create-client.dto';
import { UpdateClientDto } from '../../dto/update-client.dto';
import { Client } from '../../entities/client.entity';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ClientPrismaRepository implements ClientRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateClientDto): Promise<Client> {
    const client = new Client();
    Object.assign(client, {
      ...data,
    });
    const new_client = await this.prisma.client.create({ data: { ...client } });

    return plainToInstance(Client, new_client);
  }

  async findAll(): Promise<Client[]> {
    const all_clients: Client[] = await this.prisma.client.findMany();

    return plainToInstance(Client, all_clients);
  }

  async findOne(id: string): Promise<Client> {
    const find_client = await this.prisma.client.findUnique({
      where: { id },
    });
    if (!find_client) throw new NotFoundException()

    return plainToInstance(Client, find_client);
  }

  async findByEmail(email: string): Promise<Client> {
    const find_client = await this.prisma.client.findUnique({
      where: { email },
    });
    if (!find_client) throw new NotFoundException()

    return find_client;
  }

  async findByPhone(phone: string): Promise<Client> {
    const find_client = await this.prisma.client.findUnique({
      where: { phone },
    });
    if (!find_client) throw new NotFoundException()

    return find_client;
  }

  async update(id: string, data: UpdateClientDto, request_id: string): Promise<Client> {
    if (id != request_id){
      throw new UnauthorizedException()
    }
    const find_client = await this.prisma.client.findUnique({
      where: { id },
    });
    if (!find_client) throw new NotFoundException()

    const updated_client = await this.prisma.client.update({
      where: { id },
      data: { ...data },
    });

    return plainToInstance(Client, updated_client);
  }

  async delete(id: string, request_id: string): Promise<void> {
    if (id != request_id){
      throw new UnauthorizedException()
    }

    const find_client = await this.prisma.client.findUnique({
      where: { id },
    });
    if (!find_client) throw new NotFoundException()

    await this.prisma.client.delete({
      where: { id },
    });
  }
}

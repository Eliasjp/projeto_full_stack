import {
  Body,
  ConflictException,
  Delete,
  Get,
  Injectable,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientRepository } from './repository/client.repository';

@Injectable()
export class ClientService {
  constructor(private clientRepository: ClientRepository) {}

  @Post()
  async create(@Body() createClientDto: CreateClientDto) {
    const byEmail = await this.clientRepository.findByEmail(
      createClientDto.email,
    );
    const byPhone = await this.clientRepository.findByPhone(
      createClientDto.phone,
    );
    if (byEmail) {
      throw new ConflictException('Email already registered');
    } else if (byPhone) {
      throw new ConflictException('Phone already registered');
    }
    const client = await this.clientRepository.create(createClientDto);
    return client;
  }

  @Get()
  async findAll() {
    const clients = await this.clientRepository.findAll();
    return clients;
  }

  @Get()
  async findOne(@Param('id') id: string) {
    const client = await this.clientRepository.findOne(id);
    return client;
  }

  async findByEmail(@Param('email') email: string){
    const client = await this.clientRepository.findByEmail(email)
    return client
  }

  @Patch()
  async update(
    @Param('id') id: string, @Body() updateClientDto: UpdateClientDto, request_id: string) {
    const client = await this.clientRepository.update(id, updateClientDto, request_id);
    return client;
  }

  @Delete()
  async delete(@Param('id') id: string, request_id: string) {
    await this.clientRepository.delete(id, request_id);
  }
}

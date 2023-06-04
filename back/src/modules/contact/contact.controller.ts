import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Contact")
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post(':client_id')
  create(@Body() createContactDto: CreateContactDto, @Param('client_id') client_id: string) {
    return this.contactService.create(createContactDto, client_id);
  }

  @Get()
  findAll() {
    return this.contactService.findAll();
  }

  @Get(':contact_id')
  findOne(@Param('contact_id') id: string) {
    return this.contactService.findOne(id);
  }

  @Patch(':contact_id')
  update(@Param('contact_id') id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactService.update(id, updateContactDto);
  }

  @Delete(':contact_id')
  remove(@Param('contact_id') id: string) {
    return this.contactService.remove(id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags("Contact")
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post(':client_id')
  @UseGuards(JwtAuthGuard)
  create(@Body() createContactDto: CreateContactDto,
    @Param('client_id') client_id: string,
    @Request() req: any
  ) {
    return this.contactService.create(createContactDto, client_id, req.user.id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Request() req: any) {
    return this.contactService.findAll(req.user.id);
  }

  @Get(':contact_id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('contact_id') id: string, @Request() req: any) {
    return this.contactService.findOne(id, req.user.id);
  }

  @Patch(':contact_id')
  @UseGuards(JwtAuthGuard)
  update(@Param('contact_id') id: string,
    @Body() updateContactDto: UpdateContactDto,
    @Request() req: any    
  ) {
    return this.contactService.update(id, updateContactDto, req.user.id);
  }

  @Delete(':contact_id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('contact_id') id: string, @Request() req: any) {
    return this.contactService.remove(id, req.user.id);
  }
}

import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { ContactRepository } from './repository/contact.repository';
import { PrismaService } from 'src/database/prisma.service';
import { ContactPrismaRepository } from './repository/prisma/contact-prisma.repository';

@Module({
  controllers: [ContactController],
  providers: [
    ContactService,
    PrismaService,
    {
      provide: ContactRepository,
      useClass: ContactPrismaRepository,
    },
  ],
})
export class ContactModule {}

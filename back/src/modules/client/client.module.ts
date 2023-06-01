import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { ClientRepository } from './repository/client.repository';
import { PrismaService } from 'src/database/prisma.service';
import { ClientPrismaRepository } from './repository/prisma/client-prisma.repository';

@Module({
  controllers: [ClientController],
  providers: [
    ClientService,
    PrismaService,
    {
      provide: ClientRepository,
      useClass: ClientPrismaRepository,
    },
  ],
})
export class ClientModule {}

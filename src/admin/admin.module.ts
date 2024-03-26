import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { PrismaClient } from '@prisma/client';
import { Module } from '@nestjs/common';
import { EthereumService } from '../ethereum/ethereum.service';
@Module({
  controllers: [AdminController],
  providers: [AdminService, PrismaClient,EthereumService],
})
export class AdminModule {}

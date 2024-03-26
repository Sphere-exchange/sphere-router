import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EthereumModule } from './ethereum/ethereum.module';
import { AdminModule } from './admin/admin.module';
import { ConfigModule } from '@nestjs/config';
import { SchedulerModule } from './scheduler/scheduler.module';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaModule } from './prisma/prisma.module';
import { EthereumService } from './ethereum/ethereum.service';
@Module({
  imports: [
    SchedulerModule,
    ScheduleModule.forRoot(),
    EthereumModule,
    PrismaModule,
    AdminModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [EthereumService],
})
export class AppModule {}

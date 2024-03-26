import { Module } from '@nestjs/common';
import { SchedulerService } from './scheduler.service';
import { EthereumService } from '../ethereum/ethereum.service';

@Module({
  providers: [SchedulerService, EthereumService],
})
export class SchedulerModule {}

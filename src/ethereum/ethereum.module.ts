import { EthereumService } from './ethereum.service';
import { Module, Global } from '@nestjs/common';

@Global()
@Module({
  providers: [EthereumService],
  exports: [EthereumService],
})
export class EthereumModule {}

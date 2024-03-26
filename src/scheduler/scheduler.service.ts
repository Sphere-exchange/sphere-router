import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule';
import { LiquidityPool } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { EthereumService } from '../ethereum/ethereum.service';
import { BigNumberish, ethers } from 'ethers';

@Injectable({})
export class SchedulerService {
  private logger: Logger = new Logger(SchedulerService.name);

  constructor(
    private prisma: PrismaService,
    private ethereum: EthereumService,
  ) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  async computeBalances() {
    this.logger.debug(`updateBalances() started`);
    const liquidityPool = await this.prisma.liquidityPool.findMany({});
    for (const item of liquidityPool) {
      try {
        const data = await this.ethereum.getBalancePool(item.pool_address);
        console.log('pool_address', item.pool_address);
        console.log('token0_reserve -->>', ethers.utils.formatEther(data[0]));
        console.log('token1_reserve -->>', ethers.utils.formatEther(data[1]));

        await this.prisma.liquidityPool
          .update({
            where: {
              pool_address: item.pool_address,
            },
            data: {
              token0_reserve: ethers.utils.formatEther(data[0]),
              token1_reserve: ethers.utils.formatEther(data[1]),
            },
          })
          .catch((error) => this.logger.error(error));
      } catch (error) {
        this.logger.error(`getBalancePool error address: ${item.pool_address}`);
      }
    }

    this.logger.log(`computeBalances() ran for ${liquidityPool.length} items `);
  }

  //   @Interval(2000)
  //   handleInterval() {
  //     console.log('interval is running');
  //   }

  //   @Timeout(5000) // run afer init app bootstrap
  //   handleTimeout() {
  //     console.log('app start');
  //   }
}

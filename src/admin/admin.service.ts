import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { CreatePathDataDto } from './dto/create-path-data.dto';
import { CreateLiquidityPoolDto } from './dto/create-liquidity-pool.dto';
import { UpdateLiquidityPoolDto } from './dto/update-liquidity-pool.dto';

import { PrismaClient, LiquidityPool } from '@prisma/client'; //

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaClient) {}

  async findAll() {
    try {
      return this.prisma['liquidityPool'].findMany();
    } catch (error) {
      throw new BadRequestException(
        'Failed to retrieve all data from LiquidityPool table',
      );
    }
  }

  async findLiquidityPool(pool_address: string): Promise<LiquidityPool | null> {
    try {
      return this.prisma.liquidityPool.findUnique({ where: { pool_address } });
    } catch (error) {
      throw new BadRequestException(
        'Failed to retrieve data from LiquidityPool table',
      );
    }
  }

  async createLiquidityPool(
    createLiquidityPoolDto: CreateLiquidityPoolDto,
  ): Promise<LiquidityPool> {
    try {
      return this.prisma.liquidityPool.create({ data: createLiquidityPoolDto });
    } catch (error) {
      throw new BadRequestException(
        'Failed to create data in LiquidityPool table',
      );
    }
  }

  async updateLiquidityPool(
    pool_address: string,
    updateLiquidityPoolDto: UpdateLiquidityPoolDto,
  ): Promise<LiquidityPool> {
    const item = await this.prisma.liquidityPool.findFirst({
      where: {
        pool_address: pool_address,
      },
    });
    if (!item)
      throw new NotFoundException('Item Update Resource does not exist');

    const updatedItem = await this.prisma.liquidityPool.update({
      where: {
        pool_address,
      },
      data: updateLiquidityPoolDto,
    });

    return updatedItem;
  }

  async deleteLiquidityPool(pool_address: string): Promise<LiquidityPool> {
    const item = await this.prisma.liquidityPool.findFirst({
      where: {
        pool_address: pool_address,
      },
    });

    if (!item) throw new NotFoundException('Item Del Resource does not exist');

    const deleteItem = await this.prisma.liquidityPool.delete({
      where: {
        pool_address,
      },
    });

    return deleteItem;
  }

  async allDeleteLiquidityPool(): Promise<String> {
    const items = await this.prisma.liquidityPool.findMany();

    if (!items)
      throw new NotFoundException('Item Del All Resource does not exist');

    for (const item of items) {
      const deleteItem = await this.prisma.liquidityPool.delete({
        where: {
          pool_address: item.pool_address,
        },
      });
    }

    return 'del all success';
  }
}

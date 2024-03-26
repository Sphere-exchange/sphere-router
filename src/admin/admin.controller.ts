import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { CreatePathDataDto } from './dto/create-path-data.dto';
import { GetOrderBook } from './dto/get-orderbook.dto';
import { CreateLiquidityPoolDto } from './dto/create-liquidity-pool.dto';
import { UpdateLiquidityPoolDto } from './dto/update-liquidity-pool.dto';
import { EthereumService } from '../ethereum/ethereum.service';
@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private ethereum: EthereumService,
  ) {}

  @Get('liquidityPool/all')
  async findAll() {
    try {
      const entries = await this.adminService.findAll();
      return { entries };
    } catch (error) {
      if (error instanceof BadRequestException) {
        return { error: error.message };
      }
      throw error;
    }
  }

  @Get('liquidityPool/:pool_address') // Define route to retrieve liquidity pool by pool_address
  async findLiquidityPool(@Param('pool_address') pool_address: string) {
    try {
      const liquidityPool = await this.adminService.findLiquidityPool(
        pool_address,
      );
      return { liquidityPool };
    } catch (error) {
      if (error instanceof BadRequestException) {
        return { error: error.message };
      }
      throw error;
    }
  }

  @Post('liquidityPool')
  async createLiquidityPool(
    @Body() createLiquidityPoolDto: CreateLiquidityPoolDto,
  ) {
    try {
      const createdLiquidityPool = await this.adminService.createLiquidityPool(
        createLiquidityPoolDto,
      );
      return { entry: createdLiquidityPool };
    } catch (error) {
      if (error instanceof BadRequestException) {
        return { error: error.message };
      }
      throw error;
    }
  }

  @Patch('liquidityPool/:pool_address')
  async updateLiquidityPool(
    @Param('pool_address') pool_address: string,
    @Body() updateLiquidityPoolDto: UpdateLiquidityPoolDto,
  ) {
    try {
      const updatedLiquidityPool = await this.adminService.updateLiquidityPool(
        pool_address,
        updateLiquidityPoolDto,
      );
      return { entry: updatedLiquidityPool };
    } catch (error) {
      if (error instanceof BadRequestException) {
        return { error: error.message };
      }
      throw error;
    }
  }

  @Delete('liquidityPool/:pool_address')
  async deleteLiquidityPool(@Param('pool_address') pool_address: string) {
    try {
      const deleteLiquidityPool = await this.adminService.deleteLiquidityPool(
        pool_address,
      );
      return deleteLiquidityPool;
    } catch (error) {
      if (error instanceof BadRequestException) {
        return { error: error.message };
      }
      throw error;
    }
  }

  @Delete('liquidityPool')
  async deleteALLLiquidityPool() {
    try {
      const deleteLiquidityPool =
        await this.adminService.allDeleteLiquidityPool();
      return deleteLiquidityPool;
    } catch (error) {
      if (error instanceof BadRequestException) {
        return { error: error.message };
      }
      throw error;
    }
  }

  @Post('orderbook')
  async getOrderBook(@Body() bodyOrderBook: GetOrderBook) {
    try {
      const data = await this.ethereum.getOrderBook(bodyOrderBook);
      return { data };
    } catch (error) {
      if (error) {
        return { error: error.message };
      }
      throw error;
    }
  }
}

import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
const name = 'sphere';
const version = '0.0.1';
import { EthereumService } from './ethereum/ethereum.service';
//Default
@Controller()
export class AppController {
  constructor(private ethereum: EthereumService) {}
  @Get('/status')
  getStatus() {
    return {
      name,
      version,
    };
  }
}

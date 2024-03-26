import { Injectable } from '@nestjs/common';
import { BigNumber, ethers } from 'ethers'
import { ConfigService } from '@nestjs/config';
import artifactPair from './artifacts/contracts/Pair.sol/Pair.json'
import artifactFactoryPair from './artifacts/contracts/FactoryPair.sol/FactoryPair.json'
import {
  Pair,
  Pair__factory,
  FactoryPair,
  FactoryPair__factory,
} from './typechain-types'
import {
  Pair as PairType,
} from './typechain-types/contracts/Pair'
import { GetOrderBook } from 'src/admin/dto/get-orderbook.dto';
import {
  BadRequestException,
} from '@nestjs/common'

const toString = (bytes32) => ethers.utils.parseBytes32String(bytes32)
export const toWei = (ether: string | number) => ethers.utils.parseEther(String(ether))
export const toEther = (wei: string | number | ethers.BigNumber) =>
  ethers.utils.formatEther(wei)
export const toFixUnits = (amount: number, decimal: string) =>
  ethers.utils.formatUnits(amount, decimal)
 export const toEtherandFixFloatingPoint = (amount: ethers.BigNumber) =>
  Number(ethers.utils.formatEther(amount)).toFixed(4)
 export const toEtherFloatingPoint = (amount: ethers.BigNumber, point: number) =>
   Number(ethers.utils.formatEther(amount)).toFixed(point)

  export const FloatingPoint = 4
  
@Injectable()
export class EthereumService {
  private provider: ethers.providers.JsonRpcProvider;

  constructor(config: ConfigService) {
    this.provider = new ethers.providers.JsonRpcProvider(config.getOrThrow('RPC'));
  } 

  public async getBalancePool(adressPool: string): Promise<any> {
    try {
      // Query the state of the blockchain
      const ABI_Contract = [
        'function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)',
      ];
      const contract = new ethers.Contract(
        adressPool,
        ABI_Contract,
        this.provider,
      );
  
      const dataReserves = await contract.getReserves();
  
      return dataReserves;
    } catch (error) {
      console.log('error',error)
    }
  }
  
  public async getOrderBook( bodyOrderBook: GetOrderBook): Promise<any> {
    try {
 
      const contractFactoryPair  = new ethers.Contract(
        '0x35061bdF778411DB67915e2D113Edd5A651566A8', //  FactoryPair 
        artifactFactoryPair.abi,
        this.provider,
      ) as FactoryPair;

      if( bodyOrderBook.token0 == undefined || bodyOrderBook.token1 == undefined ){
        throw new BadRequestException('undefined address token0,1');
      }
      if( bodyOrderBook.token0.length != 42 || bodyOrderBook.token1.length !=42 ){
        throw new BadRequestException('Invalid address length token0,1');
      }
      const pair = await contractFactoryPair.getPair(bodyOrderBook.token0,bodyOrderBook.token1)
      const contractPair  = new ethers.Contract(
        pair, //  pair 
        artifactPair.abi,
        this.provider,
      ) as Pair;

      const [listSizeBuy,listSizeSell] = await Promise.all([
        await contractPair.listSize(0),
        await contractPair.listSize(1)
      ])

      // console.log('pair',pair)
      // console.log('listSizeBuy',ethers.utils.formatEther(listSizeBuy))
      // console.log('listSizeSell',ethers.utils.formatEther(listSizeSell))
      const [dataOrderBookBuy,dataOrderBookSell] = await Promise.all([
        await contractPair.getOrderBook(0,0,listSizeBuy ),
        await contractPair.getOrderBook(1,0,listSizeSell)
      ])

      let OrderBuy: Order[] = []
      let OrderSell: Order[] = []
      await Promise.all(
        dataOrderBookBuy[0].map((order) => {
          const structOrder: Order = {
            amount:  ethers.utils.formatEther(order.amount.sub(order.filled)),
            price: ethers.utils.formatEther(order.price) ,
          }
          OrderBuy.push(structOrder)
        }))
      await Promise.all(
        dataOrderBookSell[0].map((order ) => {
          const structOrder: Order = {
            amount:  ethers.utils.formatEther(order.amount.sub(order.filled)),
            price: ethers.utils.formatEther(order.price) ,
          }
          OrderSell.push(structOrder)
        }))

      return {
        OrderBuy,
        OrderSell
      };
      
    } catch (error) {
      throw new BadRequestException(
        error,
      );
    }
  }
}

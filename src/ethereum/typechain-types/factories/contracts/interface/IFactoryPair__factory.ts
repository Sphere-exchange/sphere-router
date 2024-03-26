/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IFactoryPair,
  IFactoryPairInterface,
} from "../../../contracts/interface/IFactoryPair";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "getPair",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IFactoryPair__factory {
  static readonly abi = _abi;
  static createInterface(): IFactoryPairInterface {
    return new utils.Interface(_abi) as IFactoryPairInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFactoryPair {
    return new Contract(address, _abi, signerOrProvider) as IFactoryPair;
  }
}

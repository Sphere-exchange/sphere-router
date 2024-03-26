/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Chat, ChatInterface } from "../../contracts/Chat";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allChat",
    outputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "string",
        name: "messageData",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "allChatsLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "chat",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountChat",
        type: "uint256",
      },
    ],
    name: "getLatestMessageChat",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "string",
            name: "messageData",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
        ],
        internalType: "struct Chat.infoChat[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610b77806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063021ca562146100515780631be322a01461008157806337e698b01461009f578063de8caa1e146100d1575b600080fd5b61006b600480360381019061006691906106e2565b6100ed565b60405161007891906108d0565b60405180910390f35b610089610362565b60405161009691906108f2565b60405180910390f35b6100b960048036038101906100b491906106e2565b61036e565b6040516100c893929190610892565b60405180910390f35b6100eb60048036038101906100e6919061069d565b610450565b005b606081600080549050116101045760008054905091505b60008267ffffffffffffffff811115610146577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561017f57816020015b61016c610564565b8152602001906001900390816101645790505b509050600060016000805490506101969190610973565b905060005b8481101561035757600082815481106101dd577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461025c90610a40565b80601f016020809104026020016040519081016040528092919081815260200182805461028890610a40565b80156102d55780601f106102aa576101008083540402835291602001916102d5565b820191906000526020600020905b8154815290600101906020018083116102b857829003601f168201915b50505050508152602001600282015481525050838281518110610321577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181905250600082111561034457818061034090610a16565b9250505b808061034f90610a72565b91505061019b565b508192505050919050565b60008080549050905090565b6000818154811061037e57600080fd5b90600052602060002090600302016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010180546103c790610a40565b80601f01602080910402602001604051908101604052809291908181526020018280546103f390610a40565b80156104405780601f1061041557610100808354040283529160200191610440565b820191906000526020600020905b81548152906001019060200180831161042357829003601f168201915b5050505050908060020154905083565b600060405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200184848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101908051906020019061055392919061059b565b506040820151816002015550505050565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001600081525090565b8280546105a790610a40565b90600052602060002090601f0160209004810192826105c95760008555610610565b82601f106105e257805160ff1916838001178555610610565b82800160010185558215610610579182015b8281111561060f5782518255916020019190600101906105f4565b5b50905061061d9190610621565b5090565b5b8082111561063a576000816000905550600101610622565b5090565b60008083601f84011261065057600080fd5b8235905067ffffffffffffffff81111561066957600080fd5b60208301915083600182028301111561068157600080fd5b9250929050565b60008135905061069781610b2a565b92915050565b600080602083850312156106b057600080fd5b600083013567ffffffffffffffff8111156106ca57600080fd5b6106d68582860161063e565b92509250509250929050565b6000602082840312156106f457600080fd5b600061070284828501610688565b91505092915050565b60006107178383610824565b905092915050565b610728816109a7565b82525050565b610737816109a7565b82525050565b60006107488261091d565b6107528185610940565b9350836020820285016107648561090d565b8060005b858110156107a05784840389528151610781858261070b565b945061078c83610933565b925060208a01995050600181019050610768565b50829750879550505050505092915050565b60006107bd82610928565b6107c78185610951565b93506107d78185602086016109e3565b6107e081610b19565b840191505092915050565b60006107f682610928565b6108008185610962565b93506108108185602086016109e3565b61081981610b19565b840191505092915050565b600060608301600083015161083c600086018261071f565b506020830151848203602086015261085482826107b2565b91505060408301516108696040860182610874565b508091505092915050565b61087d816109d9565b82525050565b61088c816109d9565b82525050565b60006060820190506108a7600083018661072e565b81810360208301526108b981856107eb565b90506108c86040830184610883565b949350505050565b600060208201905081810360008301526108ea818461073d565b905092915050565b60006020820190506109076000830184610883565b92915050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600061097e826109d9565b9150610989836109d9565b92508282101561099c5761099b610abb565b5b828203905092915050565b60006109b2826109b9565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015610a015780820151818401526020810190506109e6565b83811115610a10576000848401525b50505050565b6000610a21826109d9565b91506000821415610a3557610a34610abb565b5b600182039050919050565b60006002820490506001821680610a5857607f821691505b60208210811415610a6c57610a6b610aea565b5b50919050565b6000610a7d826109d9565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610ab057610aaf610abb565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b610b33816109d9565b8114610b3e57600080fd5b5056fea26469706673582212205d17f0fbe357633f17cc18a339c1a9f24886431c5d6ca18ed00d0981d7e42b4b64736f6c63430008000033";

type ChatConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChatConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Chat__factory extends ContractFactory {
  constructor(...args: ChatConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Chat> {
    return super.deploy(overrides || {}) as Promise<Chat>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Chat {
    return super.attach(address) as Chat;
  }
  override connect(signer: Signer): Chat__factory {
    return super.connect(signer) as Chat__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChatInterface {
    return new utils.Interface(_abi) as ChatInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Chat {
    return new Contract(address, _abi, signerOrProvider) as Chat;
  }
}

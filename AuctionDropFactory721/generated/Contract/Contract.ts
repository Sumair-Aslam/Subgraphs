// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AuctionDropCreated extends ethereum.Event {
  get params(): AuctionDropCreated__Params {
    return new AuctionDropCreated__Params(this);
  }
}

export class AuctionDropCreated__Params {
  _event: AuctionDropCreated;

  constructor(event: AuctionDropCreated) {
    this._event = event;
  }

  get cloneId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get cloneAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get caller(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class BidAccepted extends ethereum.Event {
  get params(): BidAccepted__Params {
    return new BidAccepted__Params(this);
  }
}

export class BidAccepted__Params {
  _event: BidAccepted;

  constructor(event: BidAccepted) {
    this._event = event;
  }

  get _dropId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _nftAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _bidId(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class BidSubmitted extends ethereum.Event {
  get params(): BidSubmitted__Params {
    return new BidSubmitted__Params(this);
  }
}

export class BidSubmitted__Params {
  _event: BidSubmitted;

  constructor(event: BidSubmitted) {
    this._event = event;
  }

  get _dropId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _bidId(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get _nftAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _bidValue(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Contract__createAuctionDropInput_dataStruct extends ethereum.Tuple {
  get nftContractAddress(): Address {
    return this[0].toAddress();
  }

  get tokenIds(): Array<BigInt> {
    return this[1].toBigIntArray();
  }

  get prices(): Array<BigInt> {
    return this[2].toBigIntArray();
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  beaconOwner(): Address {
    let result = super.call("beaconOwner", "beaconOwner():(address)", []);

    return result[0].toAddress();
  }

  try_beaconOwner(): ethereum.CallResult<Address> {
    let result = super.tryCall("beaconOwner", "beaconOwner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  cloneAddresses(param0: Bytes): Address {
    let result = super.call(
      "cloneAddresses",
      "cloneAddresses(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return result[0].toAddress();
  }

  try_cloneAddresses(param0: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "cloneAddresses",
      "cloneAddresses(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createAuctionDrop(
    _cloneId: Bytes,
    _auctionStartTime: BigInt,
    _auctionEndTime: BigInt,
    _data: Array<Contract__createAuctionDropInput_dataStruct>
  ): Address {
    let result = super.call(
      "createAuctionDrop",
      "createAuctionDrop(bytes32,uint256,uint256,(address,uint256[],uint256[])[]):(address)",
      [
        ethereum.Value.fromFixedBytes(_cloneId),
        ethereum.Value.fromUnsignedBigInt(_auctionStartTime),
        ethereum.Value.fromUnsignedBigInt(_auctionEndTime),
        ethereum.Value.fromTupleArray(_data)
      ]
    );

    return result[0].toAddress();
  }

  try_createAuctionDrop(
    _cloneId: Bytes,
    _auctionStartTime: BigInt,
    _auctionEndTime: BigInt,
    _data: Array<Contract__createAuctionDropInput_dataStruct>
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createAuctionDrop",
      "createAuctionDrop(bytes32,uint256,uint256,(address,uint256[],uint256[])[]):(address)",
      [
        ethereum.Value.fromFixedBytes(_cloneId),
        ethereum.Value.fromUnsignedBigInt(_auctionStartTime),
        ethereum.Value.fromUnsignedBigInt(_auctionEndTime),
        ethereum.Value.fromTupleArray(_data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  dropSellers(param0: Bytes): Address {
    let result = super.call("dropSellers", "dropSellers(bytes32):(address)", [
      ethereum.Value.fromFixedBytes(param0)
    ]);

    return result[0].toAddress();
  }

  try_dropSellers(param0: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "dropSellers",
      "dropSellers(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  implementation(): Address {
    let result = super.call("implementation", "implementation():(address)", []);

    return result[0].toAddress();
  }

  try_implementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "implementation",
      "implementation():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paymentToken(): Address {
    let result = super.call("paymentToken", "paymentToken():(address)", []);

    return result[0].toAddress();
  }

  try_paymentToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("paymentToken", "paymentToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tokenBeacon(): Address {
    let result = super.call("tokenBeacon", "tokenBeacon():(address)", []);

    return result[0].toAddress();
  }

  try_tokenBeacon(): ethereum.CallResult<Address> {
    let result = super.tryCall("tokenBeacon", "tokenBeacon():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class __AuctionDropFactory721_initCall extends ethereum.Call {
  get inputs(): __AuctionDropFactory721_initCall__Inputs {
    return new __AuctionDropFactory721_initCall__Inputs(this);
  }

  get outputs(): __AuctionDropFactory721_initCall__Outputs {
    return new __AuctionDropFactory721_initCall__Outputs(this);
  }
}

export class __AuctionDropFactory721_initCall__Inputs {
  _call: __AuctionDropFactory721_initCall;

  constructor(call: __AuctionDropFactory721_initCall) {
    this._call = call;
  }

  get _paymentToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class __AuctionDropFactory721_initCall__Outputs {
  _call: __AuctionDropFactory721_initCall;

  constructor(call: __AuctionDropFactory721_initCall) {
    this._call = call;
  }
}

export class AcceptBidCall extends ethereum.Call {
  get inputs(): AcceptBidCall__Inputs {
    return new AcceptBidCall__Inputs(this);
  }

  get outputs(): AcceptBidCall__Outputs {
    return new AcceptBidCall__Outputs(this);
  }
}

export class AcceptBidCall__Inputs {
  _call: AcceptBidCall;

  constructor(call: AcceptBidCall) {
    this._call = call;
  }

  get _dropId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _nftAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _bidId(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class AcceptBidCall__Outputs {
  _call: AcceptBidCall;

  constructor(call: AcceptBidCall) {
    this._call = call;
  }
}

export class AcceptBidLazyMintCall extends ethereum.Call {
  get inputs(): AcceptBidLazyMintCall__Inputs {
    return new AcceptBidLazyMintCall__Inputs(this);
  }

  get outputs(): AcceptBidLazyMintCall__Outputs {
    return new AcceptBidLazyMintCall__Outputs(this);
  }
}

export class AcceptBidLazyMintCall__Inputs {
  _call: AcceptBidLazyMintCall;

  constructor(call: AcceptBidLazyMintCall) {
    this._call = call;
  }

  get _dropId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _nftAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _uri(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _bidId(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get _signature(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class AcceptBidLazyMintCall__Outputs {
  _call: AcceptBidLazyMintCall;

  constructor(call: AcceptBidLazyMintCall) {
    this._call = call;
  }
}

export class BidCall extends ethereum.Call {
  get inputs(): BidCall__Inputs {
    return new BidCall__Inputs(this);
  }

  get outputs(): BidCall__Outputs {
    return new BidCall__Outputs(this);
  }
}

export class BidCall__Inputs {
  _call: BidCall;

  constructor(call: BidCall) {
    this._call = call;
  }

  get _dropId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _bidId(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _nftAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _bidValue(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class BidCall__Outputs {
  _call: BidCall;

  constructor(call: BidCall) {
    this._call = call;
  }
}

export class CreateAuctionDropCall extends ethereum.Call {
  get inputs(): CreateAuctionDropCall__Inputs {
    return new CreateAuctionDropCall__Inputs(this);
  }

  get outputs(): CreateAuctionDropCall__Outputs {
    return new CreateAuctionDropCall__Outputs(this);
  }
}

export class CreateAuctionDropCall__Inputs {
  _call: CreateAuctionDropCall;

  constructor(call: CreateAuctionDropCall) {
    this._call = call;
  }

  get _cloneId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _auctionStartTime(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _auctionEndTime(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Array<CreateAuctionDropCall_dataStruct> {
    return this._call.inputValues[3].value.toTupleArray<
      CreateAuctionDropCall_dataStruct
    >();
  }
}

export class CreateAuctionDropCall__Outputs {
  _call: CreateAuctionDropCall;

  constructor(call: CreateAuctionDropCall) {
    this._call = call;
  }

  get cloneAddress(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class CreateAuctionDropCall_dataStruct extends ethereum.Tuple {
  get nftContractAddress(): Address {
    return this[0].toAddress();
  }

  get tokenIds(): Array<BigInt> {
    return this[1].toBigIntArray();
  }

  get prices(): Array<BigInt> {
    return this[2].toBigIntArray();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetPaymentTokenCall extends ethereum.Call {
  get inputs(): SetPaymentTokenCall__Inputs {
    return new SetPaymentTokenCall__Inputs(this);
  }

  get outputs(): SetPaymentTokenCall__Outputs {
    return new SetPaymentTokenCall__Outputs(this);
  }
}

export class SetPaymentTokenCall__Inputs {
  _call: SetPaymentTokenCall;

  constructor(call: SetPaymentTokenCall) {
    this._call = call;
  }

  get _paymentToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetPaymentTokenCall__Outputs {
  _call: SetPaymentTokenCall;

  constructor(call: SetPaymentTokenCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

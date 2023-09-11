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

export class BatchOrderCancelled extends ethereum.Event {
  get params(): BatchOrderCancelled__Params {
    return new BatchOrderCancelled__Params(this);
  }
}

export class BatchOrderCancelled__Params {
  _event: BatchOrderCancelled;

  constructor(event: BatchOrderCancelled) {
    this._event = event;
  }

  get _dropId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _nftAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _tokenIds(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }
}

export class DropCreated extends ethereum.Event {
  get params(): DropCreated__Params {
    return new DropCreated__Params(this);
  }
}

export class DropCreated__Params {
  _event: DropCreated;

  constructor(event: DropCreated) {
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

export class OrderCancelled extends ethereum.Event {
  get params(): OrderCancelled__Params {
    return new OrderCancelled__Params(this);
  }
}

export class OrderCancelled__Params {
  _event: OrderCancelled;

  constructor(event: OrderCancelled) {
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
}

export class OrderExecuted extends ethereum.Event {
  get params(): OrderExecuted__Params {
    return new OrderExecuted__Params(this);
  }
}

export class OrderExecuted__Params {
  _event: OrderExecuted;

  constructor(event: OrderExecuted) {
    this._event = event;
  }

  get _dropId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _nftAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _tokenIds(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }

  get _amounts(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get _prices(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
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

export class Contract__createDropInput_ordersStruct extends ethereum.Tuple {
  get nftContractAddress(): Address {
    return this[0].toAddress();
  }

  get tokenIds(): Array<BigInt> {
    return this[1].toBigIntArray();
  }

  get amounts(): Array<BigInt> {
    return this[2].toBigIntArray();
  }

  get prices(): Array<BigInt> {
    return this[3].toBigIntArray();
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

  createDrop(
    _cloneId: Bytes,
    _dropStartTime: BigInt,
    _dropEndTime: BigInt,
    _orders: Array<Contract__createDropInput_ordersStruct>
  ): Address {
    let result = super.call(
      "createDrop",
      "createDrop(bytes32,uint256,uint256,(address,uint256[],uint256[],uint256[])[]):(address)",
      [
        ethereum.Value.fromFixedBytes(_cloneId),
        ethereum.Value.fromUnsignedBigInt(_dropStartTime),
        ethereum.Value.fromUnsignedBigInt(_dropEndTime),
        ethereum.Value.fromTupleArray(_orders)
      ]
    );

    return result[0].toAddress();
  }

  try_createDrop(
    _cloneId: Bytes,
    _dropStartTime: BigInt,
    _dropEndTime: BigInt,
    _orders: Array<Contract__createDropInput_ordersStruct>
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createDrop",
      "createDrop(bytes32,uint256,uint256,(address,uint256[],uint256[],uint256[])[]):(address)",
      [
        ethereum.Value.fromFixedBytes(_cloneId),
        ethereum.Value.fromUnsignedBigInt(_dropStartTime),
        ethereum.Value.fromUnsignedBigInt(_dropEndTime),
        ethereum.Value.fromTupleArray(_orders)
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

  getCloneAddress(_id: Bytes): Address {
    let result = super.call(
      "getCloneAddress",
      "getCloneAddress(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(_id)]
    );

    return result[0].toAddress();
  }

  try_getCloneAddress(_id: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getCloneAddress",
      "getCloneAddress(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(_id)]
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

export class __DropFactory_initCall extends ethereum.Call {
  get inputs(): __DropFactory_initCall__Inputs {
    return new __DropFactory_initCall__Inputs(this);
  }

  get outputs(): __DropFactory_initCall__Outputs {
    return new __DropFactory_initCall__Outputs(this);
  }
}

export class __DropFactory_initCall__Inputs {
  _call: __DropFactory_initCall;

  constructor(call: __DropFactory_initCall) {
    this._call = call;
  }

  get _paymentToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class __DropFactory_initCall__Outputs {
  _call: __DropFactory_initCall;

  constructor(call: __DropFactory_initCall) {
    this._call = call;
  }
}

export class CancelBatchOrderCall extends ethereum.Call {
  get inputs(): CancelBatchOrderCall__Inputs {
    return new CancelBatchOrderCall__Inputs(this);
  }

  get outputs(): CancelBatchOrderCall__Outputs {
    return new CancelBatchOrderCall__Outputs(this);
  }
}

export class CancelBatchOrderCall__Inputs {
  _call: CancelBatchOrderCall;

  constructor(call: CancelBatchOrderCall) {
    this._call = call;
  }

  get _dropId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _nftAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenIds(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class CancelBatchOrderCall__Outputs {
  _call: CancelBatchOrderCall;

  constructor(call: CancelBatchOrderCall) {
    this._call = call;
  }
}

export class CancelOrderCall extends ethereum.Call {
  get inputs(): CancelOrderCall__Inputs {
    return new CancelOrderCall__Inputs(this);
  }

  get outputs(): CancelOrderCall__Outputs {
    return new CancelOrderCall__Outputs(this);
  }
}

export class CancelOrderCall__Inputs {
  _call: CancelOrderCall;

  constructor(call: CancelOrderCall) {
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
}

export class CancelOrderCall__Outputs {
  _call: CancelOrderCall;

  constructor(call: CancelOrderCall) {
    this._call = call;
  }
}

export class CreateDropCall extends ethereum.Call {
  get inputs(): CreateDropCall__Inputs {
    return new CreateDropCall__Inputs(this);
  }

  get outputs(): CreateDropCall__Outputs {
    return new CreateDropCall__Outputs(this);
  }
}

export class CreateDropCall__Inputs {
  _call: CreateDropCall;

  constructor(call: CreateDropCall) {
    this._call = call;
  }

  get _cloneId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _dropStartTime(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _dropEndTime(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _orders(): Array<CreateDropCall_ordersStruct> {
    return this._call.inputValues[3].value.toTupleArray<
      CreateDropCall_ordersStruct
    >();
  }
}

export class CreateDropCall__Outputs {
  _call: CreateDropCall;

  constructor(call: CreateDropCall) {
    this._call = call;
  }

  get cloneAddress(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class CreateDropCall_ordersStruct extends ethereum.Tuple {
  get nftContractAddress(): Address {
    return this[0].toAddress();
  }

  get tokenIds(): Array<BigInt> {
    return this[1].toBigIntArray();
  }

  get amounts(): Array<BigInt> {
    return this[2].toBigIntArray();
  }

  get prices(): Array<BigInt> {
    return this[3].toBigIntArray();
  }
}

export class ExecuteBatchOrderCall extends ethereum.Call {
  get inputs(): ExecuteBatchOrderCall__Inputs {
    return new ExecuteBatchOrderCall__Inputs(this);
  }

  get outputs(): ExecuteBatchOrderCall__Outputs {
    return new ExecuteBatchOrderCall__Outputs(this);
  }
}

export class ExecuteBatchOrderCall__Inputs {
  _call: ExecuteBatchOrderCall;

  constructor(call: ExecuteBatchOrderCall) {
    this._call = call;
  }

  get _dropId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _nftAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenIds(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get _amounts(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get _prices(): Array<BigInt> {
    return this._call.inputValues[4].value.toBigIntArray();
  }
}

export class ExecuteBatchOrderCall__Outputs {
  _call: ExecuteBatchOrderCall;

  constructor(call: ExecuteBatchOrderCall) {
    this._call = call;
  }
}

export class ExecuteOrderCall extends ethereum.Call {
  get inputs(): ExecuteOrderCall__Inputs {
    return new ExecuteOrderCall__Inputs(this);
  }

  get outputs(): ExecuteOrderCall__Outputs {
    return new ExecuteOrderCall__Outputs(this);
  }
}

export class ExecuteOrderCall__Inputs {
  _call: ExecuteOrderCall;

  constructor(call: ExecuteOrderCall) {
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

  get _amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class ExecuteOrderCall__Outputs {
  _call: ExecuteOrderCall;

  constructor(call: ExecuteOrderCall) {
    this._call = call;
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

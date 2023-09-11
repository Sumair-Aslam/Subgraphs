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

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
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

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ERC721 extends ethereum.SmartContract {
  static bind(address: Address): ERC721 {
    return new ERC721("ERC721", address);
  }

  BURNER_ROLE(): Bytes {
    let result = super.call("BURNER_ROLE", "BURNER_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_BURNER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("BURNER_ROLE", "BURNER_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  MINTER_ROLE(): Bytes {
    let result = super.call("MINTER_ROLE", "MINTER_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_MINTER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("MINTER_ROLE", "MINTER_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  PAUSER_ROLE(): Bytes {
    let result = super.call("PAUSER_ROLE", "PAUSER_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_PAUSER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("PAUSER_ROLE", "PAUSER_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  URI_SETTER_ROLE(): Bytes {
    let result = super.call(
      "URI_SETTER_ROLE",
      "URI_SETTER_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_URI_SETTER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "URI_SETTER_ROLE",
      "URI_SETTER_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getMyTokenIds(): Array<BigInt> {
    let result = super.call("getMyTokenIds", "getMyTokenIds():(uint256[])", []);

    return result[0].toBigIntArray();
  }

  try_getMyTokenIds(): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getMyTokenIds",
      "getMyTokenIds():(uint256[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isAutoIncrementalId(): boolean {
    let result = super.call(
      "isAutoIncrementalId",
      "isAutoIncrementalId():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_isAutoIncrementalId(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isAutoIncrementalId",
      "isAutoIncrementalId():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isFeatureEnabled(feature: Bytes): boolean {
    let result = super.call(
      "isFeatureEnabled",
      "isFeatureEnabled(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(feature)]
    );

    return result[0].toBoolean();
  }

  try_isFeatureEnabled(feature: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isFeatureEnabled",
      "isFeatureEnabled(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(feature)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isTokenAvailable(_tokenId: BigInt): boolean {
    let result = super.call(
      "isTokenAvailable",
      "isTokenAvailable(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );

    return result[0].toBoolean();
  }

  try_isTokenAvailable(_tokenId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isTokenAvailable",
      "isTokenAvailable(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isURIAvailable(_tokenURI: string): boolean {
    let result = super.call("isURIAvailable", "isURIAvailable(string):(bool)", [
      ethereum.Value.fromString(_tokenURI)
    ]);

    return result[0].toBoolean();
  }

  try_isURIAvailable(_tokenURI: string): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isURIAvailable",
      "isURIAvailable(string):(bool)",
      [ethereum.Value.fromString(_tokenURI)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  safeMint(_tokenURI: string, _tokenId: BigInt): BigInt {
    let result = super.call("safeMint", "safeMint(string,uint256):(uint256)", [
      ethereum.Value.fromString(_tokenURI),
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);

    return result[0].toBigInt();
  }

  try_safeMint(
    _tokenURI: string,
    _tokenId: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "safeMint",
      "safeMint(string,uint256):(uint256)",
      [
        ethereum.Value.fromString(_tokenURI),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  safeMint1(_tokenURI: string): BigInt {
    let result = super.call("safeMint", "safeMint(string):(uint256)", [
      ethereum.Value.fromString(_tokenURI)
    ]);

    return result[0].toBigInt();
  }

  try_safeMint1(_tokenURI: string): ethereum.CallResult<BigInt> {
    let result = super.tryCall("safeMint", "safeMint(string):(uint256)", [
      ethereum.Value.fromString(_tokenURI)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  supportsInterface(_interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(_interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(_interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(_interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class __Collectible721_initCall extends ethereum.Call {
  get inputs(): __Collectible721_initCall__Inputs {
    return new __Collectible721_initCall__Inputs(this);
  }

  get outputs(): __Collectible721_initCall__Outputs {
    return new __Collectible721_initCall__Outputs(this);
  }
}

export class __Collectible721_initCall__Inputs {
  _call: __Collectible721_initCall;

  constructor(call: __Collectible721_initCall) {
    this._call = call;
  }

  get _admin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _isAutoIncrementalId(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class __Collectible721_initCall__Outputs {
  _call: __Collectible721_initCall;

  constructor(call: __Collectible721_initCall) {
    this._call = call;
  }
}

export class AddFeatureCall extends ethereum.Call {
  get inputs(): AddFeatureCall__Inputs {
    return new AddFeatureCall__Inputs(this);
  }

  get outputs(): AddFeatureCall__Outputs {
    return new AddFeatureCall__Outputs(this);
  }
}

export class AddFeatureCall__Inputs {
  _call: AddFeatureCall;

  constructor(call: AddFeatureCall) {
    this._call = call;
  }

  get feature(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class AddFeatureCall__Outputs {
  _call: AddFeatureCall;

  constructor(call: AddFeatureCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class GiveAccessToExchangeToSaleCall extends ethereum.Call {
  get inputs(): GiveAccessToExchangeToSaleCall__Inputs {
    return new GiveAccessToExchangeToSaleCall__Inputs(this);
  }

  get outputs(): GiveAccessToExchangeToSaleCall__Outputs {
    return new GiveAccessToExchangeToSaleCall__Outputs(this);
  }
}

export class GiveAccessToExchangeToSaleCall__Inputs {
  _call: GiveAccessToExchangeToSaleCall;

  constructor(call: GiveAccessToExchangeToSaleCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class GiveAccessToExchangeToSaleCall__Outputs {
  _call: GiveAccessToExchangeToSaleCall;

  constructor(call: GiveAccessToExchangeToSaleCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class GrantRoleBurnerCall extends ethereum.Call {
  get inputs(): GrantRoleBurnerCall__Inputs {
    return new GrantRoleBurnerCall__Inputs(this);
  }

  get outputs(): GrantRoleBurnerCall__Outputs {
    return new GrantRoleBurnerCall__Outputs(this);
  }
}

export class GrantRoleBurnerCall__Inputs {
  _call: GrantRoleBurnerCall;

  constructor(call: GrantRoleBurnerCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class GrantRoleBurnerCall__Outputs {
  _call: GrantRoleBurnerCall;

  constructor(call: GrantRoleBurnerCall) {
    this._call = call;
  }
}

export class GrantRoleMinterCall extends ethereum.Call {
  get inputs(): GrantRoleMinterCall__Inputs {
    return new GrantRoleMinterCall__Inputs(this);
  }

  get outputs(): GrantRoleMinterCall__Outputs {
    return new GrantRoleMinterCall__Outputs(this);
  }
}

export class GrantRoleMinterCall__Inputs {
  _call: GrantRoleMinterCall;

  constructor(call: GrantRoleMinterCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class GrantRoleMinterCall__Outputs {
  _call: GrantRoleMinterCall;

  constructor(call: GrantRoleMinterCall) {
    this._call = call;
  }
}

export class GrantRolePauserCall extends ethereum.Call {
  get inputs(): GrantRolePauserCall__Inputs {
    return new GrantRolePauserCall__Inputs(this);
  }

  get outputs(): GrantRolePauserCall__Outputs {
    return new GrantRolePauserCall__Outputs(this);
  }
}

export class GrantRolePauserCall__Inputs {
  _call: GrantRolePauserCall;

  constructor(call: GrantRolePauserCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class GrantRolePauserCall__Outputs {
  _call: GrantRolePauserCall;

  constructor(call: GrantRolePauserCall) {
    this._call = call;
  }
}

export class GrantRoleURISetterCall extends ethereum.Call {
  get inputs(): GrantRoleURISetterCall__Inputs {
    return new GrantRoleURISetterCall__Inputs(this);
  }

  get outputs(): GrantRoleURISetterCall__Outputs {
    return new GrantRoleURISetterCall__Outputs(this);
  }
}

export class GrantRoleURISetterCall__Inputs {
  _call: GrantRoleURISetterCall;

  constructor(call: GrantRoleURISetterCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class GrantRoleURISetterCall__Outputs {
  _call: GrantRoleURISetterCall;

  constructor(call: GrantRoleURISetterCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class RemoveFeatureCall extends ethereum.Call {
  get inputs(): RemoveFeatureCall__Inputs {
    return new RemoveFeatureCall__Inputs(this);
  }

  get outputs(): RemoveFeatureCall__Outputs {
    return new RemoveFeatureCall__Outputs(this);
  }
}

export class RemoveFeatureCall__Inputs {
  _call: RemoveFeatureCall;

  constructor(call: RemoveFeatureCall) {
    this._call = call;
  }

  get feature(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class RemoveFeatureCall__Outputs {
  _call: RemoveFeatureCall;

  constructor(call: RemoveFeatureCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleBurnerCall extends ethereum.Call {
  get inputs(): RevokeRoleBurnerCall__Inputs {
    return new RevokeRoleBurnerCall__Inputs(this);
  }

  get outputs(): RevokeRoleBurnerCall__Outputs {
    return new RevokeRoleBurnerCall__Outputs(this);
  }
}

export class RevokeRoleBurnerCall__Inputs {
  _call: RevokeRoleBurnerCall;

  constructor(call: RevokeRoleBurnerCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RevokeRoleBurnerCall__Outputs {
  _call: RevokeRoleBurnerCall;

  constructor(call: RevokeRoleBurnerCall) {
    this._call = call;
  }
}

export class RevokeRoleMinterCall extends ethereum.Call {
  get inputs(): RevokeRoleMinterCall__Inputs {
    return new RevokeRoleMinterCall__Inputs(this);
  }

  get outputs(): RevokeRoleMinterCall__Outputs {
    return new RevokeRoleMinterCall__Outputs(this);
  }
}

export class RevokeRoleMinterCall__Inputs {
  _call: RevokeRoleMinterCall;

  constructor(call: RevokeRoleMinterCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RevokeRoleMinterCall__Outputs {
  _call: RevokeRoleMinterCall;

  constructor(call: RevokeRoleMinterCall) {
    this._call = call;
  }
}

export class RevokeRolePauserCall extends ethereum.Call {
  get inputs(): RevokeRolePauserCall__Inputs {
    return new RevokeRolePauserCall__Inputs(this);
  }

  get outputs(): RevokeRolePauserCall__Outputs {
    return new RevokeRolePauserCall__Outputs(this);
  }
}

export class RevokeRolePauserCall__Inputs {
  _call: RevokeRolePauserCall;

  constructor(call: RevokeRolePauserCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RevokeRolePauserCall__Outputs {
  _call: RevokeRolePauserCall;

  constructor(call: RevokeRolePauserCall) {
    this._call = call;
  }
}

export class RevokeRoleURISetterCall extends ethereum.Call {
  get inputs(): RevokeRoleURISetterCall__Inputs {
    return new RevokeRoleURISetterCall__Inputs(this);
  }

  get outputs(): RevokeRoleURISetterCall__Outputs {
    return new RevokeRoleURISetterCall__Outputs(this);
  }
}

export class RevokeRoleURISetterCall__Inputs {
  _call: RevokeRoleURISetterCall;

  constructor(call: RevokeRoleURISetterCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RevokeRoleURISetterCall__Outputs {
  _call: RevokeRoleURISetterCall;

  constructor(call: RevokeRoleURISetterCall) {
    this._call = call;
  }
}

export class SafeMintCall extends ethereum.Call {
  get inputs(): SafeMintCall__Inputs {
    return new SafeMintCall__Inputs(this);
  }

  get outputs(): SafeMintCall__Outputs {
    return new SafeMintCall__Outputs(this);
  }
}

export class SafeMintCall__Inputs {
  _call: SafeMintCall;

  constructor(call: SafeMintCall) {
    this._call = call;
  }

  get _tokenURI(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SafeMintCall__Outputs {
  _call: SafeMintCall;

  constructor(call: SafeMintCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SafeMint1Call extends ethereum.Call {
  get inputs(): SafeMint1Call__Inputs {
    return new SafeMint1Call__Inputs(this);
  }

  get outputs(): SafeMint1Call__Outputs {
    return new SafeMint1Call__Outputs(this);
  }
}

export class SafeMint1Call__Inputs {
  _call: SafeMint1Call;

  constructor(call: SafeMint1Call) {
    this._call = call;
  }

  get _tokenURI(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SafeMint1Call__Outputs {
  _call: SafeMint1Call;

  constructor(call: SafeMint1Call) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetExchangeContractAddressCall extends ethereum.Call {
  get inputs(): SetExchangeContractAddressCall__Inputs {
    return new SetExchangeContractAddressCall__Inputs(this);
  }

  get outputs(): SetExchangeContractAddressCall__Outputs {
    return new SetExchangeContractAddressCall__Outputs(this);
  }
}

export class SetExchangeContractAddressCall__Inputs {
  _call: SetExchangeContractAddressCall;

  constructor(call: SetExchangeContractAddressCall) {
    this._call = call;
  }

  get _exchangeAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetExchangeContractAddressCall__Outputs {
  _call: SetExchangeContractAddressCall;

  constructor(call: SetExchangeContractAddressCall) {
    this._call = call;
  }
}

export class SetTokenURICall extends ethereum.Call {
  get inputs(): SetTokenURICall__Inputs {
    return new SetTokenURICall__Inputs(this);
  }

  get outputs(): SetTokenURICall__Outputs {
    return new SetTokenURICall__Outputs(this);
  }
}

export class SetTokenURICall__Inputs {
  _call: SetTokenURICall;

  constructor(call: SetTokenURICall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _tokenURI(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class SetTokenURICall__Outputs {
  _call: SetTokenURICall;

  constructor(call: SetTokenURICall) {
    this._call = call;
  }
}

export class TransferAdminRoleCall extends ethereum.Call {
  get inputs(): TransferAdminRoleCall__Inputs {
    return new TransferAdminRoleCall__Inputs(this);
  }

  get outputs(): TransferAdminRoleCall__Outputs {
    return new TransferAdminRoleCall__Outputs(this);
  }
}

export class TransferAdminRoleCall__Inputs {
  _call: TransferAdminRoleCall;

  constructor(call: TransferAdminRoleCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferAdminRoleCall__Outputs {
  _call: TransferAdminRoleCall;

  constructor(call: TransferAdminRoleCall) {
    this._call = call;
  }
}

export class TransferAssetAndPriceCall extends ethereum.Call {
  get inputs(): TransferAssetAndPriceCall__Inputs {
    return new TransferAssetAndPriceCall__Inputs(this);
  }

  get outputs(): TransferAssetAndPriceCall__Outputs {
    return new TransferAssetAndPriceCall__Outputs(this);
  }
}

export class TransferAssetAndPriceCall__Inputs {
  _call: TransferAssetAndPriceCall;

  constructor(call: TransferAssetAndPriceCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferAssetAndPriceCall__Outputs {
  _call: TransferAssetAndPriceCall;

  constructor(call: TransferAssetAndPriceCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

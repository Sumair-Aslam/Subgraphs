// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string | null {
    let value = this.get("owner");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set owner(value: string | null) {
    if (!value) {
      this.unset("owner");
    } else {
      this.set("owner", Value.fromString(<string>value));
    }
  }

  get uri(): string | null {
    let value = this.get("uri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uri(value: string | null) {
    if (!value) {
      this.unset("uri");
    } else {
      this.set("uri", Value.fromString(<string>value));
    }
  }

  get transfers(): Array<string> {
    let value = this.get("transfers");
    return value!.toStringArray();
  }

  set transfers(value: Array<string>) {
    this.set("transfers", Value.fromStringArray(value));
  }

  get contract(): string | null {
    let value = this.get("contract");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set contract(value: string | null) {
    if (!value) {
      this.unset("contract");
    } else {
      this.set("contract", Value.fromString(<string>value));
    }
  }
}

export class Owner extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Owner entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Owner must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Owner", id.toString(), this);
    }
  }

  static load(id: string): Owner | null {
    return changetype<Owner | null>(store.get("Owner", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ownedTokens(): Array<string> {
    let value = this.get("ownedTokens");
    return value!.toStringArray();
  }

  set ownedTokens(value: Array<string>) {
    this.set("ownedTokens", Value.fromStringArray(value));
  }

  get balance(): BigInt | null {
    let value = this.get("balance");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set balance(value: BigInt | null) {
    if (!value) {
      this.unset("balance");
    } else {
      this.set("balance", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class Contract extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Contract entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Contract must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Contract", id.toString(), this);
    }
  }

  static load(id: string): Contract | null {
    return changetype<Contract | null>(store.get("Contract", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get symbol(): string | null {
    let value = this.get("symbol");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set symbol(value: string | null) {
    if (!value) {
      this.unset("symbol");
    } else {
      this.set("symbol", Value.fromString(<string>value));
    }
  }

  get mintedTokens(): Array<string> {
    let value = this.get("mintedTokens");
    return value!.toStringArray();
  }

  set mintedTokens(value: Array<string>) {
    this.set("mintedTokens", Value.fromStringArray(value));
  }
}

export class Transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Transfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Transfer must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Transfer", id.toString(), this);
    }
  }

  static load(id: string): Transfer | null {
    return changetype<Transfer | null>(store.get("Transfer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get from(): string | null {
    let value = this.get("from");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set from(value: string | null) {
    if (!value) {
      this.unset("from");
    } else {
      this.set("from", Value.fromString(<string>value));
    }
  }

  get to(): string | null {
    let value = this.get("to");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set to(value: string | null) {
    if (!value) {
      this.unset("to");
    } else {
      this.set("to", Value.fromString(<string>value));
    }
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value!.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value!.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }
}

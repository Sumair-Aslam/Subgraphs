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

export class AuctionDrop extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AuctionDrop entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AuctionDrop must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AuctionDrop", id.toString(), this);
    }
  }

  static load(id: string): AuctionDrop | null {
    return changetype<AuctionDrop | null>(store.get("AuctionDrop", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get cloneId(): Bytes | null {
    let value = this.get("cloneId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set cloneId(value: Bytes | null) {
    if (!value) {
      this.unset("cloneId");
    } else {
      this.set("cloneId", Value.fromBytes(<Bytes>value));
    }
  }

  get cloneAddress(): Bytes | null {
    let value = this.get("cloneAddress");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set cloneAddress(value: Bytes | null) {
    if (!value) {
      this.unset("cloneAddress");
    } else {
      this.set("cloneAddress", Value.fromBytes(<Bytes>value));
    }
  }

  get caller(): Bytes | null {
    let value = this.get("caller");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set caller(value: Bytes | null) {
    if (!value) {
      this.unset("caller");
    } else {
      this.set("caller", Value.fromBytes(<Bytes>value));
    }
  }
}

export class Bid extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Bid entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Bid must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Bid", id.toString(), this);
    }
  }

  static load(id: string): Bid | null {
    return changetype<Bid | null>(store.get("Bid", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _dropId(): Bytes | null {
    let value = this.get("_dropId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set _dropId(value: Bytes | null) {
    if (!value) {
      this.unset("_dropId");
    } else {
      this.set("_dropId", Value.fromBytes(<Bytes>value));
    }
  }

  get _bidId(): Bytes | null {
    let value = this.get("_bidId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set _bidId(value: Bytes | null) {
    if (!value) {
      this.unset("_bidId");
    } else {
      this.set("_bidId", Value.fromBytes(<Bytes>value));
    }
  }

  get _tokenId(): BigInt | null {
    let value = this.get("_tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set _tokenId(value: BigInt | null) {
    if (!value) {
      this.unset("_tokenId");
    } else {
      this.set("_tokenId", Value.fromBigInt(<BigInt>value));
    }
  }

  get _bidValue(): BigInt | null {
    let value = this.get("_bidValue");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set _bidValue(value: BigInt | null) {
    if (!value) {
      this.unset("_bidValue");
    } else {
      this.set("_bidValue", Value.fromBigInt(<BigInt>value));
    }
  }

  get _nftAddress(): Bytes | null {
    let value = this.get("_nftAddress");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set _nftAddress(value: Bytes | null) {
    if (!value) {
      this.unset("_nftAddress");
    } else {
      this.set("_nftAddress", Value.fromBytes(<Bytes>value));
    }
  }

  get eventType(): string | null {
    let value = this.get("eventType");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set eventType(value: string | null) {
    if (!value) {
      this.unset("eventType");
    } else {
      this.set("eventType", Value.fromString(<string>value));
    }
  }
}

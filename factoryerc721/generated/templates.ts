// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext
} from "@graphprotocol/graph-ts";

export class CollectibleErc721 extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("CollectibleErc721", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "CollectibleErc721",
      [address.toHex()],
      context
    );
  }
}

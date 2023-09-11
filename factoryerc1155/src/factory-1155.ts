import { BigInt } from '@graphprotocol/graph-ts';

import {
	CloneCreated,
	// OwnershipTransferred,
} from '../generated/Factory1155/Factory1155';
import { Clone, CollectibleErc1155 } from '../generated/schema';

import { CollectibleErc1155 as template } from '../generated/templates';
// let defaultCount = new BigInt(0);
export function handleCloneCreated(event: CloneCreated): void {
	// Entities can be loaded from the store using a string ID; this ID
	// needs to be unique across all entities of the same type
	// let entity = Clone.load(event.transaction.from.toHex())

	// Entities only exist after they have been saved to the store;
	// `null` checks allow to create entities on demand
	// if (!entity) {
	//   entity = new Clone(event.transaction.from.toHex())

	//   // Entity fields can be set using simple assignments
	//   entity.count = BigInt.fromI32(0)
	// }
	let count = new BigInt(0);

	let clone = Clone.load(event.transaction.from.toHex());
	if (clone === null) {
		clone = new Clone(event.transaction.from.toHex());

		// BigInt and BigDecimal math are supported
		// clone.count = defaultCount.plus(BigInt.fromI32(1));

		// Entity fields can be set based on event parameters
		clone.cloneId = event.params.cloneId;
		clone.cloneAddress = event.params.cloneAddress;
		clone.caller = event.params.caller;
		count = count.plus(BigInt.fromI32(1));
		clone.collectibleCount = count;
	}
	let collectibleErc1155 = new CollectibleErc1155(
		event.params.cloneAddress.toHex()
	);
	collectibleErc1155.isLikelyERC1155 = true;
	// Entities can be written to the store with `.save()`
	collectibleErc1155.save();
	clone.save();
	template.create(event.params.cloneAddress);
	// Note: If a handler doesn't require existing field values, it is faster
	// _not_ to load the entity from the store. Instead, create it fresh with
	// `new Entity(...)`, set the fields that should be updated and save the
	// entity back to the store. Fields that were not set or unset remain
	// unchanged, allowing for partial updates to be applied.

	// It is also possible to access smart contracts from mappings. For
	// example, the contract that has emitted the event can be connected to
	// with:
	//
	// let contract = Contract.bind(event.address)
	//
	// The following functions can then be called on this contract to access
	// state variables and other data:
	//
	// - contract.ERC1155ContractImplementation(...)
	// - contract.createNFT1155(...)
	// - contract.getCloneAddress(...)
	// - contract.owner(...)
}

// export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

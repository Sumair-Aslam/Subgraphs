import { BigInt } from '@graphprotocol/graph-ts';

import { CloneCreated } from '../generated/Factory721/Factory721';
import { CollectibleErc721 as template } from '../generated/templates';
import { Clone, Contract } from '../generated/schema';
// let defaultCount = new BigInt(0);
export function handleCloneCreated(event: CloneCreated): void {
	let count = new BigInt(0);
	let clone = Clone.load(event.transaction.from.toHexString());
	// let clone = new Clone(event.transaction.from.toHex());

	if (clone === null) {
		clone = new Clone(event.transaction.from.toHexString());

		clone.cloneId = event.params.cloneId;
		clone.cloneAddress = event.params.cloneAddress;
		clone.caller = event.params.caller;
		count = count.plus(BigInt.fromI32(1));
		clone.collectibleCount = count;
	}
	let CollectibleErc721 = new Contract(event.params.cloneAddress.toHexString());
	// CollectibleErc721.name = event.params.caller;
	CollectibleErc721.save();
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

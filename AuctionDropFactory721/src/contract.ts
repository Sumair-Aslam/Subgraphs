import {
	AuctionDropCreated,
	BidSubmitted,
	BidAccepted,
} from '../generated/Contract/Contract';
import { AuctionDrop, Bid } from '../generated/schema';

export function handleAuctionDropCreated(event: AuctionDropCreated): void {
	// Entities can be loaded from the store using a string ID; this ID
	// needs to be unique across all entities of the same type
	let entity = new AuctionDrop(event.transaction.from.toHex());

	// BigInt and BigDecimal math are supported
	// entity.count = entity.count.add(BigInt.fromI32(1));

	// Entity fields can be set based on event parameters
	entity.cloneId = event.params.cloneId;
	entity.cloneAddress = event.params.cloneAddress;
	entity.caller = event.params.caller;

	// Entities can be written to the store with `.save()`
	entity.save();

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
	// - contract.admin(...)
	// - contract.implementation(...)
}

export function handleBidSubmitted(event: BidSubmitted): void {
	let entity = new Bid(event.transaction.from.toHex());
	entity._bidId = event.params._bidId;
	entity._dropId = event.params._dropId;
	entity._nftAddress = event.params._nftAddress;
	entity._tokenId = event.params._tokenId;
	entity._bidValue = event.params._bidValue;
	entity.eventType = 'BidSubmitted';
	entity.save();
}

export function handleBidAccepted(event: BidAccepted): void {
	let entity = new Bid(event.transaction.from.toHex());
	entity._bidId = event.params._bidId;
	entity._dropId = event.params._dropId;
	entity._nftAddress = event.params._nftAddress;
	entity._tokenId = event.params._tokenId;
	entity.eventType = 'BidAccepted';
	entity.save();
}

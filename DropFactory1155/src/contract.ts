import { BigInt } from '@graphprotocol/graph-ts';
import {
	DropCreated,
	OrderExecuted,
	OrderCancelled,
	BatchOrderCancelled,
} from '../generated/Contract/Contract';
import { Drop, Order } from '../generated/schema';

export function handleDropCreated(event: DropCreated): void {
	// Entities can be loaded from the store using a string ID; this ID
	// needs to be unique across all entities of the same type
	let drop = new Drop(event.transaction.from.toHex());

	// Entities only exist after they have been saved to the store;
	// `null` checks allow to create entities on demand

	// BigInt and BigDecimal math are supported
	drop.cloneId = event.params.cloneId;
	drop.cloneAddress = event.params.cloneAddress;

	drop.caller = event.params.caller;

	// Entities can be written to the store with `.save()`
	drop.save();

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

export function handleOrderExecuted(event: OrderExecuted): void {
	let order = Order.load(event.transaction.from.toHex());
	if (!order) {
		order = new Order(event.transaction.from.toHex());
	}

	order._dropId = event.params._dropId;
	order._nftAddress = event.params._nftAddress;
	order._tokenIds = event.params._tokenIds;
	order._price = event.params._prices;
	order.eventType = 'OrderExecuted';
	order.save();
}

export function handleOrderCancelled(event: OrderCancelled): void {
	let order = Order.load(event.transaction.from.toHex());
	if (!order) {
		order = new Order(event.transaction.from.toHex());
	}

	order._dropId = event.params._dropId;
	order._nftAddress = event.params._nftAddress;
	order._tokenId = event.params._tokenId;
	order.eventType = 'OrderCancelled';
	order.save();
}

export function handleBatchOrderCancelled(event: BatchOrderCancelled): void {
	let order = Order.load(event.transaction.from.toHex());
	if (!order) {
		order = new Order(event.transaction.from.toHex());
	}

	order._dropId = event.params._dropId;
	order._nftAddress = event.params._nftAddress;
	order._tokenIds = event.params._tokenIds;
	order.eventType = 'BatchOrderCancelled';
	order.save();
}

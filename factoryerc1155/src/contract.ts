// // import { BigInt } from "@graphprotocol/graph-ts"
// import {
//   BatchBurn,
//   BatchMint,
//   SingleBurn,
//   SingleMint,
//   TransferBatch,
//   TransferSingle,
//   URI
// } from "../generated/undefined/Contract"
// import { Token } from "../generated/schema"
// import { BigInt } from "@graphprotocol/graph-ts";

// // export function handleApprovalForAll(event: ApprovalForAll): void {
// //   // Entities can be loaded from the store using a string ID; this ID
// //   // needs to be unique across all entities of the same type
// //   let entity = ExampleEntity.load(event.transaction.from.toHex())

// //   // Entities only exist after they have been saved to the store;
// //   // `null` checks allow to create entities on demand
// //   if (!entity) {
// //     entity = new ExampleEntity(event.transaction.from.toHex())

// //     // Entity fields can be set using simple assignments
// //     entity.count = BigInt.fromI32(0)
// //   }

// //   // BigInt and BigDecimal math are supported
// //   entity.count = entity.count + BigInt.fromI32(1)

// //   // Entity fields can be set based on event parameters
// //   entity.account = event.params.account
// //   entity.operator = event.params.operator

// //   // Entities can be written to the store with `.save()`
// //   entity.save()

// //   // Note: If a handler doesn't require existing field values, it is faster
// //   // _not_ to load the entity from the store. Instead, create it fresh with
// //   // `new Entity(...)`, set the fields that should be updated and save the
// //   // entity back to the store. Fields that were not set or unset remain
// //   // unchanged, allowing for partial updates to be applied.

// //   // It is also possible to access smart contracts from mappings. For
// //   // example, the contract that has emitted the event can be connected to
// //   // with:
// //   //
// //   // let contract = Contract.bind(event.address)
// //   //
// //   // The following functions can then be called on this contract to access
// //   // state variables and other data:
// //   //
// //   // - contract.balanceOf(...)
// //   // - contract.balanceOfBatch(...)
// //   // - contract.isApprovedForAll(...)
// //   // - contract.supportsInterface(...)
// //   // - contract.uri(...)
// // }

// export function handleBatchBurn(event: BatchBurn): void {}

// export function handleBatchMint(event: BatchMint): void {
//   for(let i=0;i<event.params._id.length;i++){
//     let token = new Token(event.params._id[i].toString());
//     token.owner = event.params._owner;
//     token.tokenId = event.params._id[i]
//     token.amount = event.params._amount[i];
//     token.tokenData = event.params.data;
//     token.save();
//   }
// }

// export function handleSingleBurn(event: SingleBurn): void {}

// export function handleSingleMint(event: SingleMint): void {
//   let token = new Token(event.params._id.toString());
//     token.owner = event.params._owner;
//     token.tokenId = event.params._id;
//     token.amount = event.params._amount;
//     token.tokenData = event.params.data;
//     token.save();
// }

// export function handleTransferBatch(event: TransferBatch): void {
//   for(let i=0; i<event.params.ids.length; i++){
//     let token = Token.load(event.params.ids[i].toString());

//     if(!token){
//       token = new Token(event.params.ids[i].toString());
//       token.tokenId = event.params.ids[i];
//     }

//     if(token.amount!==null){
//       if(token.amount > event.params.values[i]){
//         let token2 = new Token(event.params.ids[i].toString());
//         token2.tokenId = event.params.ids[i];
//         token2.owner = event.params.to;
//         token2.amount = event.params.values[i];
//         token2.save();
//         let a = token.amount;
//         let b = event.params.values[i];
//         let remaining =  a - b;
//         token.amount = remaining;
//       }
//       else{
//         token.owner = event.params.to;
//       }
//     }
//      else{
//     token.amount = event.params.values[i];
//   }
//     token.save();
//   }
// }

// export function handleTransferSingle(event: TransferSingle): void {
//   let token = Token.load(event.params.id.toString());

//   if(!token){
//     token = new Token(event.params.id.toString());
//     token.tokenId = event.params.id;
//   }

//   if(token.amount!== null){
//     if(token.amount > event.params.value){
//     let token2 = new Token(event.params.id.toString());
//     token2.tokenId = event.params.id;
//     token2.owner = event.params.to;
//     token2.amount = event.params.value;
//     token2.save();
//     let a = token.amount;
//     let b = event.params.value;
//     let remaining =  a - b;
//     token.amount = remaining;
//     }
//     else{
//     token.owner = event.params.to;
//     }
//   }
//   else{
//     token.amount = event.params.value
//   }
//   token.save();

// }

// export function handleURI(event: URI): void {}

import { Address, BigInt, log } from '@graphprotocol/graph-ts';
import {
	CollectibleErc1155,
	URI,
	TransferSingle,
	TransferBatch,
} from '../generated/templates/CollectibleErc1155/CollectibleErc1155';
import {
	Owner,
	OwnerTokenLookup,
	Token,
	CollectibleErc1155 as TokenContract,
} from '../generated/schema';
import { normalize } from './helpers';
const zeroAddress = '0x0000000000000000000000000000000000000000';

export function handleURI(event: URI): void {}

export function handleTransferSingle(event: TransferSingle): void {
	let tokenId = event.params.id;
	let id = event.address.toHex() + '_' + tokenId.toString();
	let contractId = event.address.toHex();

	let contract = CollectibleErc1155.bind(event.address);
	let tokenContract = TokenContract.load(contractId);
	if (tokenContract == null) {
		tokenContract = new TokenContract(contractId);
		tokenContract.isLikelyERC1155 = false;
		// let name = contract.try_uri();
		// if (!name.reverted) {
		// 	tokenContract.name = normalize(name.value);
		// }
		// let symbol = contract.try_symbol();
		// if (!symbol.reverted) {
		// 	tokenContract.symbol = normalize(symbol.value);
		// }
		tokenContract.save();
	}

	let token = Token.load(id);
	if (token == null) {
		token = new Token(id);
		token.contract = tokenContract.id;
		token.tokenID = tokenId;
		token.mintTime = event.block.timestamp;
		let metadataURI = contract.try_uri(tokenId);
		if (!metadataURI.reverted) {
			token.tokenURI = normalize(metadataURI.value);
		} else {
			let metadataURI = contract.try_uri(tokenId);
			if (!metadataURI.reverted) {
				token.tokenURI = normalize(metadataURI.value);
			} else {
				token.tokenURI = '';
			}
		}
		token.save();
	}

	if (event.params.from != Address.zero()) {
		let from = Owner.load(event.params.from.toHex());
		if (from == null) {
			from = new Owner(event.params.from.toHex());
			from.save();
		}
	}

	if (event.params.to != Address.zero()) {
		let to = Owner.load(event.params.to.toHex());
		if (to == null) {
			to = new Owner(event.params.to.toHex());
			to.save();
		}
	}

	// Value of the transaction (generally null for single transfers, and X for minted.)
	let value = event.params.value || new BigInt(1);
	handleLookupQuantity(
		contract,
		event.params.from,
		event.params.to,
		token,
		value
	);
}

export function handleTransferBatch(event: TransferBatch): void {
	let contractId = event.address.toHex();

	let contract = CollectibleErc1155.bind(event.address);
	let tokenContract = TokenContract.load(contractId);
	if (tokenContract == null) {
		tokenContract = new TokenContract(contractId);
		tokenContract.isLikelyERC1155 = false;
		// let name = contract.try_name();
		// if (!name.reverted) {
		// 	tokenContract.name = normalize(name.value);
		// }
		// let symbol = contract.try_symbol();
		// if (!symbol.reverted) {
		// 	tokenContract.symbol = normalize(symbol.value);
		// }
		tokenContract.save();
	}

	// Grab the list of IDs in the transaction
	let tokenIds = event.params.ids;
	// Grab the quantities traded for each Ids.
	let values = event.params.values;

	for (let index = 0; index < tokenIds.length; index++) {
		// Token id
		let token_id = tokenIds[index];
		// ID of that collectible for the subgraph
		let id = event.address.toHex() + '_' + token_id.toString();
		// Quantity traded for that collectible
		let q = values[index];

		log.info('index: {}, tokenID: {}, value: {}', [
			index.toString(),
			token_id.toString(),
			q.toString(),
		]);

		let token = Token.load(id);
		if (token == null) {
			token = new Token(id);
			token.contract = tokenContract.id;
			token.tokenID = token_id;
			token.mintTime = event.block.timestamp;
			let metadataURI = contract.try_uri(token_id);
			if (!metadataURI.reverted) {
				token.tokenURI = normalize(metadataURI.value);
			} else {
				let metadataURI = contract.try_uri(token_id);
				if (!metadataURI.reverted) {
					token.tokenURI = normalize(metadataURI.value);
				} else {
					token.tokenURI = '';
				}
			}
			token.save();
		}

		handleLookupQuantity(
			contract,
			event.params.from,
			event.params.to,
			token,
			q
		);
	}
}

function handleLookupQuantity(
	contract: CollectibleErc1155,
	from: Address,
	to: Address,
	token: Token,
	quantity: BigInt = BigInt.fromI32(1)
): void {
	let wasMinted: boolean =
		from.toHex() == '0x0000000000000000000000000000000000000000';

	let isBurned: boolean =
		to.toHex() == '0x0000000000000000000000000000000000000000';

	// If it was minted, the FROM address is the Zero address, therefore we don't create a lookup for it. (it won't work)
	if (wasMinted == false) {
		// I denote look-ups with the id `UserAddress:ContractAddress_tokenId`
		let fromLookupId = from.toHex() + ':' + token.id;

		let fromLookup = OwnerTokenLookup.load(fromLookupId);
		if (fromLookup == null) {
			// Lookup doesn't exist so we create a new one.
			fromLookup = new OwnerTokenLookup(fromLookupId);
			fromLookup.owner = from.toHex();
			fromLookup.contract = token.contract;
			fromLookup.token = token.id;
			fromLookup.quantity = new BigInt(0);
			fromLookup.save();
		}

		log.debug('Getting balance of from: {}', [from.toHex()]);

		// We hit the contract of that collection and ask it how much the FROM user owns.
		let balFrom = contract.try_balanceOf(from, token.tokenID);
		// if (balFrom.reverted) {
		// 	balFrom = contract.try_balanceOf1(from);
		// 	if (balFrom.reverted) {
		// 		balFrom = contract.try_balanceOf2(from);
		// 	}
		// }

		if (!balFrom.reverted) {
			// if contract responded, set the quantity FROM user owns.
			fromLookup.quantity = balFrom.value;
		} else if (fromLookup.quantity >= quantity) {
			// if contract badly responded, we attempt to do simple math and remove the quantity sent.
			let amount = fromLookup.quantity.toI32() - quantity.toI32();
			fromLookup.quantity = new BigInt(amount);
		} else {
			// Else if the value sent is greater than previous quantity, we set it to 0.
			fromLookup.quantity = new BigInt(0);
		}
		fromLookup.save();
	}

	// If it was burned, the TO address is the Zero address, therefore we dont'  create a lookup for it. (it won't work)
	if (isBurned == false) {
		// I denote look-ups with the id `UserAddress:contractAddress_tokenId`
		let toLookupId = to.toHex() + ':' + token.id;
		// to lookup handler
		let toLookup = OwnerTokenLookup.load(toLookupId);
		if (toLookup == null) {
			toLookup = new OwnerTokenLookup(toLookupId);
			toLookup.owner = to.toHex();
			toLookup.contract = token.contract;
			toLookup.token = token.id;
			toLookup.quantity = new BigInt(0);
			toLookup.save();
		}

		// This collectible was minted and sent to this user, therefore we know the user now owns the full value.
		if (wasMinted) {
			toLookup.quantity = quantity;
		} else {
			// Else, we hit the contract of this collectible's collection to know how much TO owns.
			let balTo = contract.try_balanceOf(to, token.tokenID);
			// if (balTo.reverted) {
			// 	balTo = contract.try_balanceOf1(to);
			// 	if (balTo.reverted) {
			// 		balTo = contract.try_balanceOf2(to);
			// 	}
			// }
			if (!balTo.reverted) {
				// If replied nicely, we set the quantity that user owns for this collectible.
				toLookup.quantity = balTo.value;
			} else {
				// if contract badly responded, we attempt to do simple math and add the quantity received.
				let amount = toLookup.quantity.toI32() + quantity.toI32();
				toLookup.quantity = new BigInt(amount);
			}
			//Check the quantity is valid:
			// if (toLookup.quantity == null) {
			//   toLookup.quantity = new BigInt(1);
			// }
		}

		toLookup.save();
	}
}

import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  RequestPaid,
  RequestsCreated
} from "../generated/RandomWinnerGame/RandomWinnerGame"

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRequestPaidEvent(
  creator: Address,
  payer: Address,
  id: BigInt,
  amount: BigInt
): RequestPaid {
  let requestPaidEvent = changetype<RequestPaid>(newMockEvent())

  requestPaidEvent.parameters = new Array()

  requestPaidEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  requestPaidEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  requestPaidEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  requestPaidEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return requestPaidEvent
}

export function createRequestsCreatedEvent(
  creator: Address,
  id: BigInt,
  amount: BigInt
): RequestsCreated {
  let requestsCreatedEvent = changetype<RequestsCreated>(newMockEvent())

  requestsCreatedEvent.parameters = new Array()

  requestsCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  requestsCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  requestsCreatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return requestsCreatedEvent
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
import "@openzeppelin/contracts/access/Ownable.sol";

/*
- Create payment request from one account to other account , through alias issued 
- Can be used for both the types p-p or p-m
- log events for payment request creation and the payment complete notification
- handle payment for the same requests 
*/

contract requestHandler is Ownable {
    enum payState {
        intiated,
        sent,
        paid
    }

    struct PaymentRequest {
        address requestCreator;
        uint256 amount;
        payState _state;
        string note;
    }

    event RequestsCreated(
        address creator,
        uint256 id,
        uint256 amount
    );

    event RequestPaid(
        address creator,
        address payer,
        uint256 id,
        uint256 amount,
        string detailsURI
    );

    mapping(uint256 => PaymentRequest) public requests;
    uint32 public totalRequests;

    function createRequestDirect(
        address _payer,
        uint256 _amount,
        string note
    ) public {
        requests[totalRequests] = PaymentRequest(
            msg.sender,
            _amount,
            payState.intiated
        )
    }
}

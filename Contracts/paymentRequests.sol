// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

/*
- Create payment request from one account to other account , through alias issued 
- Can be used for both the types p-p or p-m
- log events for payment request creation and the payment complete notification
- handle payment for the same requests 
*/

/// Amount is now only accepted in USDC , Stable coin

// PUSH Comm Contract Interface
interface IPUSHCommInterface {
    function sendNotification(
        address _channel,
        address _recipient,
        bytes calldata _identity
    ) external;
}

contract requestHandler is Ownable {
    enum payState {
        intiated,
        sent,
        paid
    }

    address public EPNS_COMM_ADDRESS =
        0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa;
    address public channelAddress = 0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa;

    struct PaymentRequest {
        address requestCreator;
        uint256 amount;
        string detailsURI;
        payState _state;
    }

    event RequestsCreated(address creator, uint256 id, uint256 amount);

    event RequestPaid(
        address creator,
        address payer,
        uint256 id,
        uint256 amount
    );

    mapping(uint256 => PaymentRequest) public requests;
    uint32 public totalRequests;

    mapping(address => uint256[]) public requestsForUser;

    function sendNotViaPush(
        address _reciever,
        address creator,
        uint256 amount
    ) public {
        //"0+3+Hooray! ", msg.sender, " sent ", token amount, " PUSH to you!"
        IPUSHCommInterface(EPNS_COMM_ADDRESS).sendNotification(
            channelAddress, // from channel
            _reciever, // to recipient, put address(this) in case you want Broadcast or Subset. For Targetted put the address to which you want to send
            bytes(
                string(
                    // We are passing identity here: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations
                    abi.encodePacked(
                        "0", // this is notification identity: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations
                        "+", // segregator
                        "3", // this is payload type: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/payload (1, 3 or 4) = (Broadcast, targetted or subset)
                        "+", // segregator
                        "Payment Request Alert", // this is notificaiton title
                        "+", // segregator
                        addressToString(creator), // notification body
                        "Requested",
                        Strings.toString(amount),
                        "form you", // notification body
                        " PAY NOW !!" // notification body
                    )
                )
            )
        );
    }

    function addressToString(address _address)
        internal
        pure
        returns (string memory)
    {
        bytes32 _bytes = bytes32(uint256(uint160(_address)));
        bytes memory HEX = "0123456789abcdef";
        bytes memory _string = new bytes(42);
        _string[0] = "0";
        _string[1] = "x";
        for (uint256 i = 0; i < 20; i++) {
            _string[2 + i * 2] = HEX[uint8(_bytes[i + 12] >> 4)];
            _string[3 + i * 2] = HEX[uint8(_bytes[i + 12] & 0x0f)];
        }
        return string(_string);
    }

    //// Direct request to the user ---  CASE 1 Solved
    function createRequestDirect(
        address _payer,
        uint256 _amount,
        string memory detailsURI
    ) public returns (uint256 _id) {
        uint256 _requestId = totalRequests;
        requests[_requestId] = PaymentRequest(
            msg.sender,
            _amount,
            detailsURI,
            payState.intiated
        );

        sendNotViaPush(_payer, msg.sender, _amount);
        requestsForUser[_payer].push(_requestId);
        totalRequests += 1;
        return _requestId;
    }

    //// Create Request for the p-m -- CASE 2 Solved
    function createRequest(
        address creator,
        uint256 _amount,
        string memory detailsURI
    ) public returns (uint256 _id) {
        uint256 _requestId = totalRequests;
        requests[_requestId] = PaymentRequest(
            creator,
            _amount,
            detailsURI,
            payState.intiated
        );
        totalRequests += 1;
        return _requestId;
    }

    /// Send Request if users enters an alias to the receiver -- CASE 2-1 Solved
    function sendRequest(uint32 requestId, address reciever) public {
        require(requestId <= totalRequests, "Use a Valid request ID");
        PaymentRequest storage _request = requests[requestId];
        require(_request._state != payState.paid, "Request Already completed");

        sendNotViaPush(reciever, _request.requestCreator, _request.amount);
        requestsForUser[reciever].push(requestId);
        _request._state = payState.sent;
    }

    /// Show Qr when user selects to generate Qr , Code from the frontend , CASE 2-2 Solved

    /// call when we want to complete the request
    function payRequest(uint32 requestId) public {
        require(requestId <= totalRequests, "Use a Valid request ID");
        PaymentRequest storage _request = requests[requestId];
        require(_request._state != payState.paid, "Request Already completed");
        _request._state = payState.paid;
        emit RequestPaid(
            _request.requestCreator,
            msg.sender,
            requestId,
            _request.amount
        );
    }
}

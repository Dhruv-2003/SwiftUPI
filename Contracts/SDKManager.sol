// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
import "@openzeppelin/contracts/access/Ownable.sol";

//Create corporate profiles , and save the data
//Issue Account abstraction
//Issue Authentication tokens , for each profile registered

contract SDKManager is Ownable {
    struct Manager {
        address managerAddress;
        address SCW;
        string swiftId;
        string MerchantName;
        string qrCodeCId;
        string authToken;
    }

    mapping(address => Manager) public managers;

    /// mapping swiftId --> Manager
    mapping(string => Manager) public swiftIds;

    /// issue an SwiftAlias and add user to the data
    function createUser(
        address SCWAddress,
        string memory _swiftAlias,
        string memory merchantName,
        string memory _qrCode,
        string memory _token
    ) public {
        require(SCWAddress != address(0), "Smart Contract Wallet is not Valid");
        Manager memory _manager = Manager(
            msg.sender,
            SCWAddress,
            _swiftAlias,
            merchantName,
            _qrCode,
            _token
        );

        managers[msg.sender] = _manager;
        swiftIds[_swiftAlias] = _manager;
    }

    function addAuthToken(address managerAddress, string memory _token) public {
        Manager storage _manager = managers[managerAddress];
        _manager.authToken = _token;
    }

    function fetchUser(address user) public view returns (Manager memory) {
        return managers[user];
    }

    function fetchUserByAlias(string memory _swiftAlias)
        public
        view
        returns (Manager memory)
    {
        return swiftIds[_swiftAlias];
    }
}

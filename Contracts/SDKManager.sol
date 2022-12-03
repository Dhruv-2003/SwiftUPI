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
        string memory _name,
        string memory _qrCode
    ) public {
        require(SCWAddress != address(0), "Smart Contract Wallet is not Valid");
        User _user = User(msg.sender, SCWAddress, _swiftAlias, _name, _qrCode);

        userProfiles[msg.sender] = _user;
        swiftIds[_swiftAlias] = _user;

        emit UserCreated(msg.sender, _swiftAlias, _name);
    }

    function addAuthToken(address managerAddress, string memory _token) public {
        require(_token, "not a valid token ");
        Manager _manager = managers[managerAddress];
        _manager.authToken = _token;
    }

    function fetchUser(address user) public returns (User storage) {
        return userProfiles[user];
    }

    function fetchUserByAlias(string _swiftAlias)
        public
        returns (User storage)
    {
        return swiftIds[_swiftAlias];
    }
}

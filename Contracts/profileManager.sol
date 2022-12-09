// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
import "@openzeppelin/contracts/access/Ownable.sol";

/*
Profile Manager , Issuer of  .swift alias , or other aliases can be stored in the profile
- Issue profiles , and store user details 
- fetch and verify the user details , 
- Allow only one profile via World Coin 
- Deploy an Biconomy Smart Contract Wallet 
*/

contract profileManger is Ownable {
    /// Struct storing the user details
    struct User {
        address userAddress;
        address SCW;
        string swiftId;
        string ens;
        string lens;
        string name;
        string qrCodeCId;
    }

    event UserCreated(address _userAddres, string _swiftId, string _name);

    /// mapping userAddress --> User
    mapping(address => User) public userProfiles;

    /// mapping swiftId --> User
    mapping(string => User) public swiftIds;

    /// check for ENS or Lens and allow them to add that directly

    /// issue an SwiftAlias and add user to the data
    function createUser(
        address SCWAddress,
        string memory _swiftAlias,
        string memory _ens,
        string memory _lens,
        string memory _name,
        string memory _qrCode
    ) public {
        require(SCWAddress != address(0), "Smart Contract Wallet is not Valid");
        User memory _user = User(
            msg.sender,
            SCWAddress,
            _swiftAlias,
            _ens,
            _lens,
            _name,
            _qrCode
        );

        userProfiles[msg.sender] = _user;
        swiftIds[_swiftAlias] = _user;

        emit UserCreated(msg.sender, _swiftAlias, _name);
    }

    function updateSwiftAlias(string memory _newAlias) public {
        User storage _user = userProfiles[msg.sender];
        _user.swiftId = _newAlias;
    }

    function fetchUser(address user) public view returns (User memory) {
        return userProfiles[user];
    }

    function fetchUserByAlias(string memory _swiftAlias)
        public
        view
        returns (User memory)
    {
        return swiftIds[_swiftAlias];
    }
}

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
    }

    /// mapping userAddress --> User
    mapping(address => User) public userProfiles;

    /// mapping swiftId --> User
    mapping(string => User) public swiftIds;

    /// check for ENS or Lens and allow them to add that directly

    /// issue an SwiftAlias and add user to the data
    function createUser() public {}

    function createSwiftID() internal {}

    function fetchUser() public {}
}

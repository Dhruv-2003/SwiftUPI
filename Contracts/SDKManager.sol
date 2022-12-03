// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
import "@openzeppelin/contracts/access/Ownable.sol";

//Create corporate profiles , and save the data
//Issue Account abstraction
//Issue Authentication tokens , for each profile registered

contract SDKManager is Ownable {
    struct User {
        address userAddress;
        address SCW;
        string swiftId;
        string MerchantName;
        string qrCodeCId;
    }
}

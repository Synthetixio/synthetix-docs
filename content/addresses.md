Here is the list of all contracts within the current Synthetix system.

**Version**: 2.19.6

**Docs Built**: Thu Feb 20 2020 14:54:55 GMT+0400 (Gulf Standard Time)

!!! info "Naming Conventions"
	Within the developer ecosystem, the names of Synthetix contracts are referred to by their `source` Solidity file.If the same source is used for multiple instances of contracts with different constructor arguments - such as `Synth.sol`, `TokenState.sol` and `ProxyERC20.sol` - then the convention is to suffix the name of the differing feature to the end - be in the proxy target e.g. ProxyFeePool or ProxySynthetix or the synth's currencyKey eg: `sETH`, `iCEX`, etc

!!! tip "Handy Contract Links"
	All of the below contracts can be accessed by our contract linker utility. Simply suffix the contract name to the end of https://contracts.synthetix.io to get a link that will always redirect to the latest version of the contract on Etherscan.

	For example, try https://contracts.synthetix.io/Synthetix to get linked to the latest Synthetix underlying.

	For testnets, insert the testnet name before the contract, as in https://contracts.synthetix.io/kovan/ArbRewarder

 
## MAINNET Contracts
<table><tr><th>Name</th><th>Source</th><th>ABI</th><th>Address</th></tr>
              <tr>
                <td>AddressResolver</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/AddressResolver.sol">AddressResolver.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/AddressResolver.json">AddressResolver.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xFbB6526ed92DA8915d4843a86166020d0B7bAAd0">0xFbB6526ed92DA8915d4843a86166020d0B7bAAd0</a>
                </td>
              </tr>
              <tr>
                <td>ArbRewarder</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ArbRewarder.sol">ArbRewarder.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ArbRewarder.json">ArbRewarder.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xA6B5E74466eDc95D0b6e65c5CBFcA0a676d893a4">0xA6B5E74466eDc95D0b6e65c5CBFcA0a676d893a4</a>
                </td>
              </tr>
              <tr>
                <td>DappMaintenance</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/DappMaintenance.sol">DappMaintenance.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/DappMaintenance.json">DappMaintenance.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x778ec2d9B4baE65C57a6436a6c37AFc135baD727">0x778ec2d9B4baE65C57a6436a6c37AFc135baD727</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovals</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/DelegateApprovals.sol">DelegateApprovals.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/DelegateApprovals.json">DelegateApprovals.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x97A853e9536Cf7CF123AA14Da726b71a848290cE">0x97A853e9536Cf7CF123AA14Da726b71a848290cE</a>
                </td>
              </tr>
              <tr>
                <td>Depot</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Depot.sol">Depot.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/Depot.json">Depot.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xE1f64079aDa6Ef07b03982Ca34f1dD7152AA3b86">0xE1f64079aDa6Ef07b03982Ca34f1dD7152AA3b86</a>
                </td>
              </tr>
              <tr>
                <td>EscrowChecker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/EscrowChecker.sol">EscrowChecker.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/EscrowChecker.json">EscrowChecker.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x3b399e00AFd8201ACf8A5a0EcCF1C47d8D5E41da">0x3b399e00AFd8201ACf8A5a0EcCF1C47d8D5E41da</a>
                </td>
              </tr>
              <tr>
                <td>EtherCollateral</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/EtherCollateral.sol">EtherCollateral.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/EtherCollateral.json">EtherCollateral.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x0F3d8ad599Be443A54c7934B433A87464Ed0DFdC">0x0F3d8ad599Be443A54c7934B433A87464Ed0DFdC</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeRates</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ExchangeRates.sol">ExchangeRates.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ExchangeRates.json">ExchangeRates.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x9D7F70AF5DF5D5CC79780032d47a34615D1F1d77">0x9D7F70AF5DF5D5CC79780032d47a34615D1F1d77</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ExchangeState.sol">ExchangeState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ExchangeState.json">ExchangeState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x545973f28950f50fc6c7F52AAb4Ad214A27C0564">0x545973f28950f50fc6c7F52AAb4Ad214A27C0564</a>
                </td>
              </tr>
              <tr>
                <td>Exchanger</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Exchanger.sol">Exchanger.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/Exchanger.json">Exchanger.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x6289fd70d3Dce8DE61896959cdEfcFF3cE46A108">0x6289fd70d3Dce8DE61896959cdEfcFF3cE46A108</a>
                </td>
              </tr>
              <tr>
                <td>FeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/FeePool.sol">FeePool.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/FeePool.json">FeePool.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x1Be675c50C4cC419517219B88fE84a573cC223fA">0x1Be675c50C4cC419517219B88fE84a573cC223fA</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/FeePoolEternalStorage.sol">FeePoolEternalStorage.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/FeePoolEternalStorage.json">FeePoolEternalStorage.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xC9DFff5fA5605fd94F8B7927b892F2B57391e8bB">0xC9DFff5fA5605fd94F8B7927b892F2B57391e8bB</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/FeePoolState.sol">FeePoolState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/FeePoolState.json">FeePoolState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x11164F6a47C3f8472D19b9aDd516Fc780cb7Ee02">0x11164F6a47C3f8472D19b9aDd516Fc780cb7Ee02</a>
                </td>
              </tr>
              <tr>
                <td>Issuer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Issuer.sol">Issuer.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/Issuer.json">Issuer.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x23Bf838AF72Ee8F43870A73947d8F4Edb63adAe3">0x23Bf838AF72Ee8F43870A73947d8F4Edb63adAe3</a>
                </td>
              </tr>
              <tr>
                <td>Math</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Math.sol">Math.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/Math.json">Math.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x385e1Eb2FF28F4A637DA2C9971F8CAF5F5b1E77c">0x385e1Eb2FF28F4A637DA2C9971F8CAF5F5b1E77c</a>
                </td>
              </tr>
              <tr>
                <td>ProxyERC20</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F">0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F</a>
                </td>
              </tr>
              <tr>
                <td>ProxyERC20sUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x57Ab1ec28D129707052df4dF418D58a2D46d5f51">0x57Ab1ec28D129707052df4dF418D58a2D46d5f51</a>
                </td>
              </tr>
              <tr>
                <td>ProxyFeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/Proxy.json">Proxy.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xb440DD674e1243644791a4AdfE3A2AbB0A92d309">0xb440DD674e1243644791a4AdfE3A2AbB0A92d309</a>
                </td>
              </tr>
              <tr>
                <td>ProxySynthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/Proxy.json">Proxy.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xC011A72400E58ecD99Ee497CF89E3775d4bd732F">0xC011A72400E58ecD99Ee497CF89E3775d4bd732F</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiBNB</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xAFD870F32CE54EfdBF677466B612bf8ad164454B">0xAFD870F32CE54EfdBF677466B612bf8ad164454B</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xD6014EA05BDe904448B743833dDF07c3C7837481">0xD6014EA05BDe904448B743833dDF07c3C7837481</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiCEX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x336213e1DDFC69f4701Fc3F86F4ef4A160c1159d">0x336213e1DDFC69f4701Fc3F86F4ef4A160c1159d</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x14d10003807AC60d07BB0ba82cAeaC8d2087c157">0x14d10003807AC60d07BB0ba82cAeaC8d2087c157</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xA9859874e1743A32409f75bB11549892138BBA1E">0xA9859874e1743A32409f75bB11549892138BBA1E</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x2d7aC061fc3db53c39fe1607fB8cec1B2C162B01">0x2d7aC061fc3db53c39fe1607fB8cec1B2C162B01</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiLTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x79da1431150C9b82D2E5dfc1C68B33216846851e">0x79da1431150C9b82D2E5dfc1C68B33216846851e</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiMKR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x0794D09be5395f69534ff8151D72613077148b29">0x0794D09be5395f69534ff8151D72613077148b29</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiTRX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xC5807183a9661A533CB08CbC297594a0B864dc12">0xC5807183a9661A533CB08CbC297594a0B864dc12</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiXRP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x27269b3e45A4D3E79A3D6BFeE0C8fB13d0D711A6">0x27269b3e45A4D3E79A3D6BFeE0C8fB13d0D711A6</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiXTZ</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x8deef89058090ac5655A99EEB451a4f9183D1678">0x8deef89058090ac5655A99EEB451a4f9183D1678</a>
                </td>
              </tr>
              <tr>
                <td>ProxysAUD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xF48e200EAF9906362BB1442fca31e0835773b8B4">0xF48e200EAF9906362BB1442fca31e0835773b8B4</a>
                </td>
              </tr>
              <tr>
                <td>ProxysBNB</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x617aeCB6137B5108D1E7D4918e3725C8cEbdB848">0x617aeCB6137B5108D1E7D4918e3725C8cEbdB848</a>
                </td>
              </tr>
              <tr>
                <td>ProxysBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6">0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6</a>
                </td>
              </tr>
              <tr>
                <td>ProxysCEX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xeABACD844A196D7Faf3CE596edeBF9900341B420">0xeABACD844A196D7Faf3CE596edeBF9900341B420</a>
                </td>
              </tr>
              <tr>
                <td>ProxysCHF</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x0F83287FF768D1c1e17a42F44d644D7F22e8ee1d">0x0F83287FF768D1c1e17a42F44d644D7F22e8ee1d</a>
                </td>
              </tr>
              <tr>
                <td>ProxysDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xe1aFe1Fd76Fd88f78cBf599ea1846231B8bA3B6B">0xe1aFe1Fd76Fd88f78cBf599ea1846231B8bA3B6B</a>
                </td>
              </tr>
              <tr>
                <td>ProxysETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb">0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb</a>
                </td>
              </tr>
              <tr>
                <td>ProxysEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xD71eCFF9342A5Ced620049e616c5035F1dB98620">0xD71eCFF9342A5Ced620049e616c5035F1dB98620</a>
                </td>
              </tr>
              <tr>
                <td>ProxysGBP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x97fe22E7341a0Cd8Db6F6C021A24Dc8f4DAD855F">0x97fe22E7341a0Cd8Db6F6C021A24Dc8f4DAD855F</a>
                </td>
              </tr>
              <tr>
                <td>ProxysJPY</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xF6b1C627e95BFc3c1b4c9B825a032Ff0fBf3e07d">0xF6b1C627e95BFc3c1b4c9B825a032Ff0fBf3e07d</a>
                </td>
              </tr>
              <tr>
                <td>ProxysLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xbBC455cb4F1B9e4bFC4B73970d360c8f032EfEE6">0xbBC455cb4F1B9e4bFC4B73970d360c8f032EfEE6</a>
                </td>
              </tr>
              <tr>
                <td>ProxysLTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xC14103C2141E842e228FBaC594579e798616ce7A">0xC14103C2141E842e228FBaC594579e798616ce7A</a>
                </td>
              </tr>
              <tr>
                <td>ProxysMKR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x4140919DE11fCe58E654cC6038017Af97f810De1">0x4140919DE11fCe58E654cC6038017Af97f810De1</a>
                </td>
              </tr>
              <tr>
                <td>ProxysTRX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xf2E08356588EC5cd9E437552Da87C0076b4970B0">0xf2E08356588EC5cd9E437552Da87C0076b4970B0</a>
                </td>
              </tr>
              <tr>
                <td>ProxysUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/Proxy.json">Proxy.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x57Ab1E02fEE23774580C119740129eAC7081e9D3">0x57Ab1E02fEE23774580C119740129eAC7081e9D3</a>
                </td>
              </tr>
              <tr>
                <td>ProxysXAG</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x6A22e5e94388464181578Aa7A6B869e00fE27846">0x6A22e5e94388464181578Aa7A6B869e00fE27846</a>
                </td>
              </tr>
              <tr>
                <td>ProxysXAU</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x261EfCdD24CeA98652B9700800a13DfBca4103fF">0x261EfCdD24CeA98652B9700800a13DfBca4103fF</a>
                </td>
              </tr>
              <tr>
                <td>ProxysXRP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xa2B0fDe6D710e201d0d608e924A484d1A5fEd57c">0xa2B0fDe6D710e201d0d608e924A484d1A5fEd57c</a>
                </td>
              </tr>
              <tr>
                <td>ProxysXTZ</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x2e59005c5c0f0a4D77CcA82653d48b46322EE5Cd">0x2e59005c5c0f0a4D77CcA82653d48b46322EE5Cd</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/RewardEscrow.sol">RewardEscrow.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/RewardEscrow.json">RewardEscrow.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xb671F2210B1F6621A2607EA63E6B2DC3e2464d1F">0xb671F2210B1F6621A2607EA63E6B2DC3e2464d1F</a>
                </td>
              </tr>
              <tr>
                <td>RewardsDistribution</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/RewardsDistribution.sol">RewardsDistribution.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/RewardsDistribution.json">RewardsDistribution.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x29C295B046a73Cde593f21f63091B072d407e3F2">0x29C295B046a73Cde593f21f63091B072d407e3F2</a>
                </td>
              </tr>
              <tr>
                <td>SafeDecimalMath</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/SafeDecimalMath.sol">SafeDecimalMath.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/SafeDecimalMath.json">SafeDecimalMath.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x84D626B2BB4D0F064067e4BF80FCe7055d8F3E7B">0x84D626B2BB4D0F064067e4BF80FCe7055d8F3E7B</a>
                </td>
              </tr>
              <tr>
                <td>SupplySchedule</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/SupplySchedule.sol">SupplySchedule.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/SupplySchedule.json">SupplySchedule.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xA05e45396703BabAa9C276B5E5A9B6e2c175b521">0xA05e45396703BabAa9C276B5E5A9B6e2c175b521</a>
                </td>
              </tr>
              <tr>
                <td>Synthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synthetix.sol">Synthetix.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/Synthetix.json">Synthetix.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x153C3148A0a285A6f9F6d1996E1348832249bF7e">0x153C3148A0a285A6f9F6d1996E1348832249bF7e</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/SynthetixEscrow.sol">SynthetixEscrow.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/SynthetixEscrow.json">SynthetixEscrow.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x971e78e0C92392A4E39099835cF7E6aB535b2227">0x971e78e0C92392A4E39099835cF7E6aB535b2227</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/SynthetixState.sol">SynthetixState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/SynthetixState.json">SynthetixState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x4b9Ca5607f1fF8019c1C6A3c2f0CC8de622D5B82">0x4b9Ca5607f1fF8019c1C6A3c2f0CC8de622D5B82</a>
                </td>
              </tr>
              <tr>
                <td>SynthiBNB</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xc68b5Eb9e035b2B84568A4C6201e3b200C0236ba">0xc68b5Eb9e035b2B84568A4C6201e3b200C0236ba</a>
                </td>
              </tr>
              <tr>
                <td>SynthiBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x810425566d1d3078B15A6f035b17886F18F3c54B">0x810425566d1d3078B15A6f035b17886F18F3c54B</a>
                </td>
              </tr>
              <tr>
                <td>SynthiCEX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xf7011510572d0EFE31d1E90cd6dc1EF84e6B13b8">0xf7011510572d0EFE31d1E90cd6dc1EF84e6B13b8</a>
                </td>
              </tr>
              <tr>
                <td>SynthiDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xaE7D62Fb6a305E6d9E9F8c43bbb41093c2bE52f6">0xaE7D62Fb6a305E6d9E9F8c43bbb41093c2bE52f6</a>
                </td>
              </tr>
              <tr>
                <td>SynthiETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xc0bA711B4E128425Be9245ce750D82c90b42D6D2">0xc0bA711B4E128425Be9245ce750D82c90b42D6D2</a>
                </td>
              </tr>
              <tr>
                <td>SynthiLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x8c6680412e914932A9abC02B6c7cbf690e583aFA">0x8c6680412e914932A9abC02B6c7cbf690e583aFA</a>
                </td>
              </tr>
              <tr>
                <td>SynthiLTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xfca2e82E5414c695c81b99D753b0b11c50bDC93D">0xfca2e82E5414c695c81b99D753b0b11c50bDC93D</a>
                </td>
              </tr>
              <tr>
                <td>SynthiMKR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x10A0532DE3C86D9cE810F004FaBcf5a1EA464390">0x10A0532DE3C86D9cE810F004FaBcf5a1EA464390</a>
                </td>
              </tr>
              <tr>
                <td>SynthiTRX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x2DE37AF5BA64f5CaE3202Bf13dbEDc4D46e8046f">0x2DE37AF5BA64f5CaE3202Bf13dbEDc4D46e8046f</a>
                </td>
              </tr>
              <tr>
                <td>SynthiXRP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xccda7941aB1AC7a32F49843c0b3EDF618b20F6Ae">0xccda7941aB1AC7a32F49843c0b3EDF618b20F6Ae</a>
                </td>
              </tr>
              <tr>
                <td>SynthiXTZ</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x59D39e14cC735b39746c94351E7fbDd92C8D0d3C">0x59D39e14cC735b39746c94351E7fbDd92C8D0d3C</a>
                </td>
              </tr>
              <tr>
                <td>SynthsAUD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xACa2179a884bAC7C3D0bc4131585E1B7DbDD048e">0xACa2179a884bAC7C3D0bc4131585E1B7DbDD048e</a>
                </td>
              </tr>
              <tr>
                <td>SynthsBNB</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xaE3971E603b11dA40aea85d8c2355150c7c47683">0xaE3971E603b11dA40aea85d8c2355150c7c47683</a>
                </td>
              </tr>
              <tr>
                <td>SynthsBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xF0ac210915BD88Ea51c9EB800a4078a85927efdF">0xF0ac210915BD88Ea51c9EB800a4078a85927efdF</a>
                </td>
              </tr>
              <tr>
                <td>SynthsCEX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x2420057461bD2fb756e0A610897c51De7fB18311">0x2420057461bD2fb756e0A610897c51De7fB18311</a>
                </td>
              </tr>
              <tr>
                <td>SynthsCHF</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x64C73355FBD0274e677609E8fb372427DF975508">0x64C73355FBD0274e677609E8fb372427DF975508</a>
                </td>
              </tr>
              <tr>
                <td>SynthsDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xE725d6Ff29d0679C9Cb6Fa8972a1E8a7FB49610B">0xE725d6Ff29d0679C9Cb6Fa8972a1E8a7FB49610B</a>
                </td>
              </tr>
              <tr>
                <td>SynthsETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/MultiCollateralSynth.json">MultiCollateralSynth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x9f71b6596b2C9d357f9F04F8cA772fbD6e2c211C">0x9f71b6596b2C9d357f9F04F8cA772fbD6e2c211C</a>
                </td>
              </tr>
              <tr>
                <td>SynthsEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x57e4A2D7D9b759Cf6FA2C937D52E408c66fB6384">0x57e4A2D7D9b759Cf6FA2C937D52E408c66fB6384</a>
                </td>
              </tr>
              <tr>
                <td>SynthsGBP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x8FA7FBb0144CeA832a76547aEAB1Ad8d9e4588F1">0x8FA7FBb0144CeA832a76547aEAB1Ad8d9e4588F1</a>
                </td>
              </tr>
              <tr>
                <td>SynthsJPY</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x68043c3EAE66Ac1c28341867491E615412fc84FD">0x68043c3EAE66Ac1c28341867491E615412fc84FD</a>
                </td>
              </tr>
              <tr>
                <td>SynthsLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x3D663Dbe79fA9752815e03e129D6703eDE1C6D71">0x3D663Dbe79fA9752815e03e129D6703eDE1C6D71</a>
                </td>
              </tr>
              <tr>
                <td>SynthsLTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x79BEf89A63bE04A75F1fA42E8f42ad873B6f43e2">0x79BEf89A63bE04A75F1fA42E8f42ad873B6f43e2</a>
                </td>
              </tr>
              <tr>
                <td>SynthsMKR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x54A0326fB698c2CFACa5327550a897FA66d21f07">0x54A0326fB698c2CFACa5327550a897FA66d21f07</a>
                </td>
              </tr>
              <tr>
                <td>SynthsTRX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x3d0e7c09242b0cAd4e81cB2f6D2183EF517500EF">0x3d0e7c09242b0cAd4e81cB2f6D2183EF517500EF</a>
                </td>
              </tr>
              <tr>
                <td>SynthsUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x2A020C1ad728f1C12735bC4877CEECa4491A4a3D">0x2A020C1ad728f1C12735bC4877CEECa4491A4a3D</a>
                </td>
              </tr>
              <tr>
                <td>SynthsXAG</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xd415e342a5C7Ee189D939b4DC17E85880fE1096A">0xd415e342a5C7Ee189D939b4DC17E85880fE1096A</a>
                </td>
              </tr>
              <tr>
                <td>SynthsXAU</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x00aB7c26A5a6C4C32D0b897E4Af3CB32F92aad34">0x00aB7c26A5a6C4C32D0b897E4Af3CB32F92aad34</a>
                </td>
              </tr>
              <tr>
                <td>SynthsXRP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x4dc1E8bAcc26D563941dCB59c72BD9FE58663778">0x4dc1E8bAcc26D563941dCB59c72BD9FE58663778</a>
                </td>
              </tr>
              <tr>
                <td>SynthsXTZ</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x2CB1B47fB16013798086f267E04E6579dcb72A74">0x2CB1B47fB16013798086f267E04E6579dcb72A74</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateSynthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x5b1b5fEa1b99D83aD479dF0C222F0492385381dD">0x5b1b5fEa1b99D83aD479dF0C222F0492385381dD</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiBNB</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xc4E4c442653fDC78A71401684fd6cF9d67B3B643">0xc4E4c442653fDC78A71401684fd6cF9d67B3B643</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xa1652766155D4Debc31D01BF3f748cB46508745b">0xa1652766155D4Debc31D01BF3f748cB46508745b</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiCEX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x3Fb1F228168432688b4E851Fe909907248cf9eCD">0x3Fb1F228168432688b4E851Fe909907248cf9eCD</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x6E9BAC2827dBBa78D11b270115086CC357988928">0x6E9BAC2827dBBa78D11b270115086CC357988928</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x7b6ab32Ca02B31485fbf7265437c2853792CC5d9">0x7b6ab32Ca02B31485fbf7265437c2853792CC5d9</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x3FdF819c3665D6866b5Bb0F56E1EDA0D7f69B714">0x3FdF819c3665D6866b5Bb0F56E1EDA0D7f69B714</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiLTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x7B1010586F923CbF61e7C314146853675705751F">0x7B1010586F923CbF61e7C314146853675705751F</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiMKR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xa0c19218271F056bc10b1cDd7a5FaB48F757BC86">0xa0c19218271F056bc10b1cDd7a5FaB48F757BC86</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiTRX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xd69EabdF940174cA571A6D71dde9B9A4dbCdBb0f">0xd69EabdF940174cA571A6D71dde9B9A4dbCdBb0f</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiXRP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xa9d6aE0F9E9da6FFC357Cd155CCe18E3491e135D">0xa9d6aE0F9E9da6FFC357Cd155CCe18E3491e135D</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiXTZ</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xca0d3004f5E771A129fB94619f8867A23e8A23de">0xca0d3004f5E771A129fB94619f8867A23e8A23de</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesAUD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xCb29D2cf2C65d3Be1d00F07f3441390432D55203">0xCb29D2cf2C65d3Be1d00F07f3441390432D55203</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesBNB</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xf9bd94C6F93c1FA5F38174c5e424721e1046af07">0xf9bd94C6F93c1FA5F38174c5e424721e1046af07</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x4F6296455F8d754c19821cF1EC8FeBF2cD456E67">0x4F6296455F8d754c19821cF1EC8FeBF2cD456E67</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesCEX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xc5680d24C3086e10f618b5176A59E90D6284be9f">0xc5680d24C3086e10f618b5176A59E90D6284be9f</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesCHF</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x52496fE8a4feaEFe14d9433E00D48E6929c13deC">0x52496fE8a4feaEFe14d9433E00D48E6929c13deC</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x7Ac2D37098a65B0f711CFfA3be635F1E6aCacFaB">0x7Ac2D37098a65B0f711CFfA3be635F1E6aCacFaB</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x34A5ef81d18F3a305aE9C2d7DF42beef4c79031c">0x34A5ef81d18F3a305aE9C2d7DF42beef4c79031c</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x6568D9e750fC44AF00f857885Dfb8281c00529c4">0x6568D9e750fC44AF00f857885Dfb8281c00529c4</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesGBP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x7e88D19A79b291cfE5696d496055f7e57F537A75">0x7e88D19A79b291cfE5696d496055f7e57F537A75</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesJPY</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x4dFACfB15514C21c991ff75Bc7Bf6Fb1F98361ed">0x4dFACfB15514C21c991ff75Bc7Bf6Fb1F98361ed</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x577D4a7395c6A5f46d9981a5F83fa7294926aBB0">0x577D4a7395c6A5f46d9981a5F83fa7294926aBB0</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesLTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xe1a2C7957a4771031301f2E25b0f52039aD97270">0xe1a2C7957a4771031301f2E25b0f52039aD97270</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesMKR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xCEE0A0Dc7f393ED6AC84A3Ac2191C28d6A53AcEf">0xCEE0A0Dc7f393ED6AC84A3Ac2191C28d6A53AcEf</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesTRX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x7EC5697C724895DA7f2320bDE063BEF6215a72e2">0x7EC5697C724895DA7f2320bDE063BEF6215a72e2</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x05a9CBe762B36632b3594DA4F082340E0e5343e8">0x05a9CBe762B36632b3594DA4F082340E0e5343e8</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesXAG</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x53d244Fb46357568DBeF082225cCC87cBD94aAE8">0x53d244Fb46357568DBeF082225cCC87cBD94aAE8</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesXAU</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x20569B49d74c1EDE765382574F7F3fdC2a078A4f">0x20569B49d74c1EDE765382574F7F3fdC2a078A4f</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesXRP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xb90AafFB61dFC042e7a7AbcE069DDB4BAE9ab192">0xb90AafFB61dFC042e7a7AbcE069DDB4BAE9ab192</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesXTZ</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/mainnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x959894a82fbF99d35B12ed1EA81e783296229862">0x959894a82fbF99d35B12ed1EA81e783296229862</a>
                </td>
              </tr></table>

## ROPSTEN Contracts
<table><tr><th>Name</th><th>Source</th><th>ABI</th><th>Address</th></tr>
              <tr>
                <td>AddressResolver</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/AddressResolver.sol">AddressResolver.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/AddressResolver.json">AddressResolver.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xA1D03F7bD3e298DFA9EED24b9028777eC1965B3A">0xA1D03F7bD3e298DFA9EED24b9028777eC1965B3A</a>
                </td>
              </tr>
              <tr>
                <td>ArbRewarder</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ArbRewarder.sol">ArbRewarder.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ArbRewarder.json">ArbRewarder.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x290EBc249C558A306f17922988ef43955b955e73">0x290EBc249C558A306f17922988ef43955b955e73</a>
                </td>
              </tr>
              <tr>
                <td>DappMaintenance</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/DappMaintenance.sol">DappMaintenance.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/DappMaintenance.json">DappMaintenance.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x2b5caBB168DF00f524531BdE1515efB5F12Bb787">0x2b5caBB168DF00f524531BdE1515efB5F12Bb787</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovals</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/DelegateApprovals.sol">DelegateApprovals.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/DelegateApprovals.json">DelegateApprovals.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x7846fD796484647eFcea2417528bBC33C0a20bfA">0x7846fD796484647eFcea2417528bBC33C0a20bfA</a>
                </td>
              </tr>
              <tr>
                <td>Depot</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Depot.sol">Depot.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/Depot.json">Depot.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x6E6624355D4c1DE475EB48677fce6025d69aAf22">0x6E6624355D4c1DE475EB48677fce6025d69aAf22</a>
                </td>
              </tr>
              <tr>
                <td>EscrowChecker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/EscrowChecker.sol">EscrowChecker.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/EscrowChecker.json">EscrowChecker.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x37f2590B021f0AcfcfDEe31bF47BBffFdb89Efd3">0x37f2590B021f0AcfcfDEe31bF47BBffFdb89Efd3</a>
                </td>
              </tr>
              <tr>
                <td>EtherCollateral</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/EtherCollateral.sol">EtherCollateral.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/EtherCollateral.json">EtherCollateral.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x31b40f46Dd7b0AcA15BF8EB28f4Ea4BB3d2F653e">0x31b40f46Dd7b0AcA15BF8EB28f4Ea4BB3d2F653e</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeRates</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ExchangeRates.sol">ExchangeRates.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ExchangeRates.json">ExchangeRates.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x420a57027742E73804ecC8D2aa5315146fCdFD52">0x420a57027742E73804ecC8D2aa5315146fCdFD52</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ExchangeState.sol">ExchangeState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ExchangeState.json">ExchangeState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xE05B29E297B316CF2cA41dfcDF4040244564E474">0xE05B29E297B316CF2cA41dfcDF4040244564E474</a>
                </td>
              </tr>
              <tr>
                <td>Exchanger</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Exchanger.sol">Exchanger.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/Exchanger.json">Exchanger.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x75bD62e2e7F0b5561e50Ce27E4E68A4215FE0327">0x75bD62e2e7F0b5561e50Ce27E4E68A4215FE0327</a>
                </td>
              </tr>
              <tr>
                <td>FeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/FeePool.sol">FeePool.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/FeePool.json">FeePool.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xE6f769D97F8de8B5d32E082c450c71cB6B9460EC">0xE6f769D97F8de8B5d32E082c450c71cB6B9460EC</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/FeePoolEternalStorage.sol">FeePoolEternalStorage.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/FeePoolEternalStorage.json">FeePoolEternalStorage.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x4627995FeE8AC6968DA3857c1A85B08Fa81eDd9B">0x4627995FeE8AC6968DA3857c1A85B08Fa81eDd9B</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/FeePoolState.sol">FeePoolState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/FeePoolState.json">FeePoolState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xe141C1Fd85Ab91992729Aab9BD20bD85dd71Dba5">0xe141C1Fd85Ab91992729Aab9BD20bD85dd71Dba5</a>
                </td>
              </tr>
              <tr>
                <td>Issuer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Issuer.sol">Issuer.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/Issuer.json">Issuer.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x55a0569370D53734caBb9b48Bb9CE49a628d6A21">0x55a0569370D53734caBb9b48Bb9CE49a628d6A21</a>
                </td>
              </tr>
              <tr>
                <td>Math</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Math.sol">Math.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/Math.json">Math.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xb20c158094531F2e92F74bDBf4b78743b15E2122">0xb20c158094531F2e92F74bDBf4b78743b15E2122</a>
                </td>
              </tr>
              <tr>
                <td>ProxyERC20</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x8Ae2A0BFb3315b63Ee8e88aC7D3F6B5a68F01Cf5">0x8Ae2A0BFb3315b63Ee8e88aC7D3F6B5a68F01Cf5</a>
                </td>
              </tr>
              <tr>
                <td>ProxyERC20sUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x21718C0FbD10900565fa57C76e1862cd3F6a4d8E">0x21718C0FbD10900565fa57C76e1862cd3F6a4d8E</a>
                </td>
              </tr>
              <tr>
                <td>ProxyFeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/Proxy.json">Proxy.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x42456D7084eacF4083f1140d3229471bbA2949A8">0x42456D7084eacF4083f1140d3229471bbA2949A8</a>
                </td>
              </tr>
              <tr>
                <td>ProxySynthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/Proxy.json">Proxy.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x013AE307648f529aa72c5767A334DDd37aaB43c3">0x013AE307648f529aa72c5767A334DDd37aaB43c3</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiBNB</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x31ddCB898F22425712A07e98ad2df3bb412774e1">0x31ddCB898F22425712A07e98ad2df3bb412774e1</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xdFb8e9bA49737Cd0E235975FF164298Fc625b762">0xdFb8e9bA49737Cd0E235975FF164298Fc625b762</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiCEX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x546df3DF51979Fdf3eeb2ED2A5bB2d6883B01000">0x546df3DF51979Fdf3eeb2ED2A5bB2d6883B01000</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x5F3fDF19d9358803275E4A8F32CEC96B79d868a9">0x5F3fDF19d9358803275E4A8F32CEC96B79d868a9</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x4f8F2f82C50F562A42DED63E182c6094fFBC7485">0x4f8F2f82C50F562A42DED63E182c6094fFBC7485</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x8AAB981c4E0600eeC73Cce7195E27B134df87df6">0x8AAB981c4E0600eeC73Cce7195E27B134df87df6</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiLTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xE8600a4281a9BEAD448dC3f257722c9743dF6ea7">0xE8600a4281a9BEAD448dC3f257722c9743dF6ea7</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiMKR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x2DF2CdC0eC1AF1De91180281194B78c5F26620ef">0x2DF2CdC0eC1AF1De91180281194B78c5F26620ef</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiTRX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x6289fd70d3Dce8DE61896959cdEfcFF3cE46A108">0x6289fd70d3Dce8DE61896959cdEfcFF3cE46A108</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiXRP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x094a05CaCCF0e3ece5ba5729Ea25d92bE9D673fF">0x094a05CaCCF0e3ece5ba5729Ea25d92bE9D673fF</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiXTZ</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x04CFbc89F161EE33f4984490B1B73A2D1548fA3D">0x04CFbc89F161EE33f4984490B1B73A2D1548fA3D</a>
                </td>
              </tr>
              <tr>
                <td>ProxysAUD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x4BdDFda0E086983CD1fB400a62063aDDEBF2111B">0x4BdDFda0E086983CD1fB400a62063aDDEBF2111B</a>
                </td>
              </tr>
              <tr>
                <td>ProxysBNB</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x5fF1b87fBfDE943568C533f2a5f78F8d9C00539b">0x5fF1b87fBfDE943568C533f2a5f78F8d9C00539b</a>
                </td>
              </tr>
              <tr>
                <td>ProxysBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xC1701AbD559FC263829CA3917d03045F95b5224A">0xC1701AbD559FC263829CA3917d03045F95b5224A</a>
                </td>
              </tr>
              <tr>
                <td>ProxysCEX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x676f87A2122cc0e81443828b0d55A8817656CBc1">0x676f87A2122cc0e81443828b0d55A8817656CBc1</a>
                </td>
              </tr>
              <tr>
                <td>ProxysCHF</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x7e5c4C5f54847772690380d5ac50c59a4C374E2f">0x7e5c4C5f54847772690380d5ac50c59a4C374E2f</a>
                </td>
              </tr>
              <tr>
                <td>ProxysDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xfc107409aA984e300D5f10530Eef41221FC65B15">0xfc107409aA984e300D5f10530Eef41221FC65B15</a>
                </td>
              </tr>
              <tr>
                <td>ProxysETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x0Df1B6d92feBCA3B2793AfA3649868991CC4901D">0x0Df1B6d92feBCA3B2793AfA3649868991CC4901D</a>
                </td>
              </tr>
              <tr>
                <td>ProxysEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x2a27a3113368836b2BE598a4BB9a0d4D7A734305">0x2a27a3113368836b2BE598a4BB9a0d4D7A734305</a>
                </td>
              </tr>
              <tr>
                <td>ProxysGBP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x3DdF5dAd59F8F8e8f957709B044eE84e87B42e25">0x3DdF5dAd59F8F8e8f957709B044eE84e87B42e25</a>
                </td>
              </tr>
              <tr>
                <td>ProxysJPY</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x406555dbF02e9E4df9AdeAeC9DA76ABeED8C1BC3">0x406555dbF02e9E4df9AdeAeC9DA76ABeED8C1BC3</a>
                </td>
              </tr>
              <tr>
                <td>ProxysLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x33D1F1FeAf2Cd3cC46Ca8F04Fb0Ca7BC0A4484Fd">0x33D1F1FeAf2Cd3cC46Ca8F04Fb0Ca7BC0A4484Fd</a>
                </td>
              </tr>
              <tr>
                <td>ProxysLTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x69AD82d83c1e11D27473339B8990A6b8C7B8194C">0x69AD82d83c1e11D27473339B8990A6b8C7B8194C</a>
                </td>
              </tr>
              <tr>
                <td>ProxysMKR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xE5A2286Fd6dAd65d74CC10910f967415B1A0E2bE">0xE5A2286Fd6dAd65d74CC10910f967415B1A0E2bE</a>
                </td>
              </tr>
              <tr>
                <td>ProxysTRX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xE403013d6ac402ef5A70A4dE524d5894d0188e25">0xE403013d6ac402ef5A70A4dE524d5894d0188e25</a>
                </td>
              </tr>
              <tr>
                <td>ProxysUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/Proxy.json">Proxy.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xDDEfe42790f2dEC7b0C37D4399884eFceA5361b1">0xDDEfe42790f2dEC7b0C37D4399884eFceA5361b1</a>
                </td>
              </tr>
              <tr>
                <td>ProxysXAG</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x6b2eF4a920a0AA00298bDABf1FDDb2F1790FaA68">0x6b2eF4a920a0AA00298bDABf1FDDb2F1790FaA68</a>
                </td>
              </tr>
              <tr>
                <td>ProxysXAU</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x7aBc1EA6816424E474Ad6efCE5B9153C9B7952b0">0x7aBc1EA6816424E474Ad6efCE5B9153C9B7952b0</a>
                </td>
              </tr>
              <tr>
                <td>ProxysXRP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x4711064E2C2731463570C8C9f6717A1902B346C2">0x4711064E2C2731463570C8C9f6717A1902B346C2</a>
                </td>
              </tr>
              <tr>
                <td>ProxysXTZ</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x2E4D9524dA9Af751E776d361dd2b9bE9b6086b30">0x2E4D9524dA9Af751E776d361dd2b9bE9b6086b30</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/RewardEscrow.sol">RewardEscrow.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/RewardEscrow.json">RewardEscrow.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x92f924F1Cb4AB1d88349079DC82207B9EF67F68B">0x92f924F1Cb4AB1d88349079DC82207B9EF67F68B</a>
                </td>
              </tr>
              <tr>
                <td>RewardsDistribution</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/RewardsDistribution.sol">RewardsDistribution.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/RewardsDistribution.json">RewardsDistribution.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x43B6764C8D6eC3ed2d8Cb2006053C4b026bda255">0x43B6764C8D6eC3ed2d8Cb2006053C4b026bda255</a>
                </td>
              </tr>
              <tr>
                <td>SafeDecimalMath</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/SafeDecimalMath.sol">SafeDecimalMath.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/SafeDecimalMath.json">SafeDecimalMath.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x34A5ef81d18F3a305aE9C2d7DF42beef4c79031c">0x34A5ef81d18F3a305aE9C2d7DF42beef4c79031c</a>
                </td>
              </tr>
              <tr>
                <td>SupplySchedule</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/SupplySchedule.sol">SupplySchedule.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/SupplySchedule.json">SupplySchedule.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x9a7A5Ad48Efae2B04fa0b04f0c9bA09F0145B481">0x9a7A5Ad48Efae2B04fa0b04f0c9bA09F0145B481</a>
                </td>
              </tr>
              <tr>
                <td>Synthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synthetix.sol">Synthetix.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/Synthetix.json">Synthetix.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x139b154F1EfeDd24E7591d770d64c35C57593dfb">0x139b154F1EfeDd24E7591d770d64c35C57593dfb</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/SynthetixEscrow.sol">SynthetixEscrow.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/SynthetixEscrow.json">SynthetixEscrow.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xd8f6B6b6782632275B2B51230654f687f5b12Cde">0xd8f6B6b6782632275B2B51230654f687f5b12Cde</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/SynthetixState.sol">SynthetixState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/SynthetixState.json">SynthetixState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xf9bd94C6F93c1FA5F38174c5e424721e1046af07">0xf9bd94C6F93c1FA5F38174c5e424721e1046af07</a>
                </td>
              </tr>
              <tr>
                <td>SynthiBNB</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x47A01fa7Ed5AeBD5Aa53390387051D34500963fa">0x47A01fa7Ed5AeBD5Aa53390387051D34500963fa</a>
                </td>
              </tr>
              <tr>
                <td>SynthiBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x42a6047f302545F4DD287C2dd5EDC36Fa2b9C4A6">0x42a6047f302545F4DD287C2dd5EDC36Fa2b9C4A6</a>
                </td>
              </tr>
              <tr>
                <td>SynthiCEX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x04aE13AA58B46E8193631E5fCe9b36Dae9cf3adc">0x04aE13AA58B46E8193631E5fCe9b36Dae9cf3adc</a>
                </td>
              </tr>
              <tr>
                <td>SynthiDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xe49B0489F9d69e0F1707A1D7078A7C856Af6C6Ef">0xe49B0489F9d69e0F1707A1D7078A7C856Af6C6Ef</a>
                </td>
              </tr>
              <tr>
                <td>SynthiETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x4887bD5A5BdA7c908A5e05ebDE0c0aad9bd2c8fe">0x4887bD5A5BdA7c908A5e05ebDE0c0aad9bd2c8fe</a>
                </td>
              </tr>
              <tr>
                <td>SynthiLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x5514011f276bD01FF5AEbBBbec06Df2708547c80">0x5514011f276bD01FF5AEbBBbec06Df2708547c80</a>
                </td>
              </tr>
              <tr>
                <td>SynthiLTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x90B7aE296b1e3C307AA192693E89fE1439461A4C">0x90B7aE296b1e3C307AA192693E89fE1439461A4C</a>
                </td>
              </tr>
              <tr>
                <td>SynthiMKR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xf152bE16D6b1B4f8e714658DD7aE4bc59248D5b2">0xf152bE16D6b1B4f8e714658DD7aE4bc59248D5b2</a>
                </td>
              </tr>
              <tr>
                <td>SynthiTRX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x703921E6fd11f28f401f098e4e6f94Ca1ae093C4">0x703921E6fd11f28f401f098e4e6f94Ca1ae093C4</a>
                </td>
              </tr>
              <tr>
                <td>SynthiXRP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x63e9CBeb993288605b30d828A41Ce006b945509e">0x63e9CBeb993288605b30d828A41Ce006b945509e</a>
                </td>
              </tr>
              <tr>
                <td>SynthiXTZ</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x63df311E84Ee94590a2b401603C4902396150fC5">0x63df311E84Ee94590a2b401603C4902396150fC5</a>
                </td>
              </tr>
              <tr>
                <td>SynthsAUD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x3161b0BA2506BF727c04Fcbf1356C8613b21b233">0x3161b0BA2506BF727c04Fcbf1356C8613b21b233</a>
                </td>
              </tr>
              <tr>
                <td>SynthsBNB</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xB16DB7223937e9e8f3a2725a244F40cE0Af0B118">0xB16DB7223937e9e8f3a2725a244F40cE0Af0B118</a>
                </td>
              </tr>
              <tr>
                <td>SynthsBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x215E201df5587A6BC6c30e74182586A3335359f5">0x215E201df5587A6BC6c30e74182586A3335359f5</a>
                </td>
              </tr>
              <tr>
                <td>SynthsCEX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x67a5141160881F72dD2777Aa5006584482D19603">0x67a5141160881F72dD2777Aa5006584482D19603</a>
                </td>
              </tr>
              <tr>
                <td>SynthsCHF</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x4341A31C8b323B0bdb21b21C4A729a5740aA7D2c">0x4341A31C8b323B0bdb21b21C4A729a5740aA7D2c</a>
                </td>
              </tr>
              <tr>
                <td>SynthsDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x2a86f938B4cFEb4158f6ac1A830a7B8aE92Fa0c8">0x2a86f938B4cFEb4158f6ac1A830a7B8aE92Fa0c8</a>
                </td>
              </tr>
              <tr>
                <td>SynthsETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/MultiCollateralSynth.json">MultiCollateralSynth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xC67C052044878A457FDAFc71d62F529503ba3436">0xC67C052044878A457FDAFc71d62F529503ba3436</a>
                </td>
              </tr>
              <tr>
                <td>SynthsEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xdE7Ef338F2e61d58897c212718D5799dE67B2218">0xdE7Ef338F2e61d58897c212718D5799dE67B2218</a>
                </td>
              </tr>
              <tr>
                <td>SynthsGBP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x220B356a05CD39e8C7bD15b7Aed2bD624823aA65">0x220B356a05CD39e8C7bD15b7Aed2bD624823aA65</a>
                </td>
              </tr>
              <tr>
                <td>SynthsJPY</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x8f50ec6De5E8650728d698Cf65139BC626E1e3D8">0x8f50ec6De5E8650728d698Cf65139BC626E1e3D8</a>
                </td>
              </tr>
              <tr>
                <td>SynthsLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x3A981C759F9dDA20E06E758C643E88F61a6Ad957">0x3A981C759F9dDA20E06E758C643E88F61a6Ad957</a>
                </td>
              </tr>
              <tr>
                <td>SynthsLTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x744246290339F08FaE337B650721BD24BeE72B3e">0x744246290339F08FaE337B650721BD24BeE72B3e</a>
                </td>
              </tr>
              <tr>
                <td>SynthsMKR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x1bbD6722afbb601B6e29f5094061f21ef763c46c">0x1bbD6722afbb601B6e29f5094061f21ef763c46c</a>
                </td>
              </tr>
              <tr>
                <td>SynthsTRX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x4e86ba46dd4EA9A2f54848c26B74615bAdD30E24">0x4e86ba46dd4EA9A2f54848c26B74615bAdD30E24</a>
                </td>
              </tr>
              <tr>
                <td>SynthsUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x2Ba2F0ee1a05574EEA9aD23c44D0392bE8D1af97">0x2Ba2F0ee1a05574EEA9aD23c44D0392bE8D1af97</a>
                </td>
              </tr>
              <tr>
                <td>SynthsXAG</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xa687Af356E187E1b2686a95Ce89Ae55fa4A0B438">0xa687Af356E187E1b2686a95Ce89Ae55fa4A0B438</a>
                </td>
              </tr>
              <tr>
                <td>SynthsXAU</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xffC1750F97273C797826edF6814c7eC47770b9Df">0xffC1750F97273C797826edF6814c7eC47770b9Df</a>
                </td>
              </tr>
              <tr>
                <td>SynthsXRP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xBdd0ad1b3000199Fc1De07963fb0B13B5548B6B7">0xBdd0ad1b3000199Fc1De07963fb0B13B5548B6B7</a>
                </td>
              </tr>
              <tr>
                <td>SynthsXTZ</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x6FA340aEbcE7880460a67b831428c867114b0A79">0x6FA340aEbcE7880460a67b831428c867114b0A79</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateSynthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xb239855C0de66b1078A0eaE90d209996834faEDD">0xb239855C0de66b1078A0eaE90d209996834faEDD</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiBNB</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xbabC251FD3ce4a6830D5999Cf450a987F1A8EdE7">0xbabC251FD3ce4a6830D5999Cf450a987F1A8EdE7</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xf822f0f596De0e11309DD2942A8956eb5b2BA430">0xf822f0f596De0e11309DD2942A8956eb5b2BA430</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiCEX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x10D2E43b4B1424260a9e70a4C6F10aC6cD0f86Ba">0x10D2E43b4B1424260a9e70a4C6F10aC6cD0f86Ba</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xA53B24D534732fCFF3d0a1D195441A3e064D6330">0xA53B24D534732fCFF3d0a1D195441A3e064D6330</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xF30F72Ec89ee2491741D16Df6cF750c8202D6C3a">0xF30F72Ec89ee2491741D16Df6cF750c8202D6C3a</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x9AA5b7C93D054590B0AEd489472923E184510570">0x9AA5b7C93D054590B0AEd489472923E184510570</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiLTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x7D7617B73Db176977307248130703D1E38196b85">0x7D7617B73Db176977307248130703D1E38196b85</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiMKR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x4d18114495eFAe5f3aE94512bE867EE4Ab666512">0x4d18114495eFAe5f3aE94512bE867EE4Ab666512</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiTRX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x002Ee46c5557dF2a16BB64533012A9219c6ebBfc">0x002Ee46c5557dF2a16BB64533012A9219c6ebBfc</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiXRP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xEA68d580BDFF34FD733d468af9df9aD2F50A5d92">0xEA68d580BDFF34FD733d468af9df9aD2F50A5d92</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiXTZ</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xb90AafFB61dFC042e7a7AbcE069DDB4BAE9ab192">0xb90AafFB61dFC042e7a7AbcE069DDB4BAE9ab192</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesAUD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xF43B4931749139AB1e7a85d50df5762481d80bEC">0xF43B4931749139AB1e7a85d50df5762481d80bEC</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesBNB</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x7D9b359c97f26a0D7B5dfB9eb7b74581CD28B6a6">0x7D9b359c97f26a0D7B5dfB9eb7b74581CD28B6a6</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x159B105D8f9F1341C7aAAafF19aFb569c17297F3">0x159B105D8f9F1341C7aAAafF19aFb569c17297F3</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesCEX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x4025e0BE8D58AD7feC4744224BAF5Ffc1069Cff7">0x4025e0BE8D58AD7feC4744224BAF5Ffc1069Cff7</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesCHF</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xA3de830b5208851539De8e4FF158D635E8f36FCb">0xA3de830b5208851539De8e4FF158D635E8f36FCb</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x3347575f35De7bD8900012AE68Fb3f9189C4D6b0">0x3347575f35De7bD8900012AE68Fb3f9189C4D6b0</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x8e90f4D385677dFB3FFC6d09652eEd17D0872e17">0x8e90f4D385677dFB3FFC6d09652eEd17D0872e17</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xc4E4c442653fDC78A71401684fd6cF9d67B3B643">0xc4E4c442653fDC78A71401684fd6cF9d67B3B643</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesGBP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x22C9624c784214D53d43BDB4Bf56B3D3Bf2e773C">0x22C9624c784214D53d43BDB4Bf56B3D3Bf2e773C</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesJPY</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xb08b62e1cdfd37eCCd69A9ACe67322CCF801b3A6">0xb08b62e1cdfd37eCCd69A9ACe67322CCF801b3A6</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x1B23AB364743845d548de9517a81eA1C69740514">0x1B23AB364743845d548de9517a81eA1C69740514</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesLTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x124E59a207775f85ebd52693c6f4B5fD05baDf47">0x124E59a207775f85ebd52693c6f4B5fD05baDf47</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesMKR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x7f523c2CaDB679fc13b2557eAA8cAe526c4ADf1A">0x7f523c2CaDB679fc13b2557eAA8cAe526c4ADf1A</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesTRX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x8c27bB4f177a9B03324882f2a219B6b7B1DE45D3">0x8c27bB4f177a9B03324882f2a219B6b7B1DE45D3</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x686cbD15BBC680F8261c7502c360Aa44A2593de6">0x686cbD15BBC680F8261c7502c360Aa44A2593de6</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesXAG</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x8D63Bf72E0BE02Ad99b329B8632EA2336b472CED">0x8D63Bf72E0BE02Ad99b329B8632EA2336b472CED</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesXAU</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xBF73978808516Bbcb96D3b479617CaF89484Bc59">0xBF73978808516Bbcb96D3b479617CaF89484Bc59</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesXRP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0x8ec28C1050C45A030e119d62bF66Ba28FC264Ef4">0x8ec28C1050C45A030e119d62bF66Ba28FC264Ef4</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesXTZ</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/ropsten/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://ropsten.etherscan.io/address/0xFFFd1CE4C866D006DE65282B410EdF2268505F1e">0xFFFd1CE4C866D006DE65282B410EdF2268505F1e</a>
                </td>
              </tr></table>

## RINKEBY Contracts
<table><tr><th>Name</th><th>Source</th><th>ABI</th><th>Address</th></tr>
              <tr>
                <td>AddressResolver</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/AddressResolver.sol">AddressResolver.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/AddressResolver.json">AddressResolver.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x8C502a6fF7D8E79F97c438eC7Ada2887742090d8">0x8C502a6fF7D8E79F97c438eC7Ada2887742090d8</a>
                </td>
              </tr>
              <tr>
                <td>ArbRewarder</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ArbRewarder.sol">ArbRewarder.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ArbRewarder.json">ArbRewarder.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xe0Ee4900a91624b81402F54271c62813d4318AA8">0xe0Ee4900a91624b81402F54271c62813d4318AA8</a>
                </td>
              </tr>
              <tr>
                <td>DappMaintenance</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/DappMaintenance.sol">DappMaintenance.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/DappMaintenance.json">DappMaintenance.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xE1F613a3ECCb331C8faB1E08e366BBc5E2b1B1b8">0xE1F613a3ECCb331C8faB1E08e366BBc5E2b1B1b8</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovals</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/DelegateApprovals.sol">DelegateApprovals.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/DelegateApprovals.json">DelegateApprovals.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x04ac7508A04AE1e35592729F80D4B35C5f4E4286">0x04ac7508A04AE1e35592729F80D4B35C5f4E4286</a>
                </td>
              </tr>
              <tr>
                <td>Depot</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Depot.sol">Depot.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/Depot.json">Depot.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x7d129f02c364DF574Fa1219d11D4bD4aBCD8166c">0x7d129f02c364DF574Fa1219d11D4bD4aBCD8166c</a>
                </td>
              </tr>
              <tr>
                <td>EscrowChecker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/EscrowChecker.sol">EscrowChecker.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/EscrowChecker.json">EscrowChecker.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xa6C4299Ebe970AE5887FaEDc9357BF1F0c096170">0xa6C4299Ebe970AE5887FaEDc9357BF1F0c096170</a>
                </td>
              </tr>
              <tr>
                <td>EtherCollateral</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/EtherCollateral.sol">EtherCollateral.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/EtherCollateral.json">EtherCollateral.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xF90B2e12Ec94fAe43e52619d6329f44ccE8C233f">0xF90B2e12Ec94fAe43e52619d6329f44ccE8C233f</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeRates</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ExchangeRates.sol">ExchangeRates.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ExchangeRates.json">ExchangeRates.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x9B86bD4Fd5e1D0a30E061834c8D4F93594cd04f3">0x9B86bD4Fd5e1D0a30E061834c8D4F93594cd04f3</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ExchangeState.sol">ExchangeState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ExchangeState.json">ExchangeState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x2Ea57ec93e10489A262014b9E836D6AC47645321">0x2Ea57ec93e10489A262014b9E836D6AC47645321</a>
                </td>
              </tr>
              <tr>
                <td>Exchanger</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Exchanger.sol">Exchanger.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/Exchanger.json">Exchanger.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x66599F23cC66C4a82E414C2ed90557edA54ec7C7">0x66599F23cC66C4a82E414C2ed90557edA54ec7C7</a>
                </td>
              </tr>
              <tr>
                <td>FeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/FeePool.sol">FeePool.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/FeePool.json">FeePool.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xD1F424f1562be9911ddAaF84ecEc1ac7d473FE2c">0xD1F424f1562be9911ddAaF84ecEc1ac7d473FE2c</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/FeePoolEternalStorage.sol">FeePoolEternalStorage.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/FeePoolEternalStorage.json">FeePoolEternalStorage.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x95fC3d4EDC923a79E10b52F957c1F3Dc637D8941">0x95fC3d4EDC923a79E10b52F957c1F3Dc637D8941</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/FeePoolState.sol">FeePoolState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/FeePoolState.json">FeePoolState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x1B36b06119c43a54C74Cf52eA7C9d80f11ab7fD6">0x1B36b06119c43a54C74Cf52eA7C9d80f11ab7fD6</a>
                </td>
              </tr>
              <tr>
                <td>Issuer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Issuer.sol">Issuer.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/Issuer.json">Issuer.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xE3DDD1f8d7B91b994C12B4b2aA28443eaB9091f1">0xE3DDD1f8d7B91b994C12B4b2aA28443eaB9091f1</a>
                </td>
              </tr>
              <tr>
                <td>Math</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Math.sol">Math.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/Math.json">Math.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xB72e28336B5176D4be07A6ac946204c060438277">0xB72e28336B5176D4be07A6ac946204c060438277</a>
                </td>
              </tr>
              <tr>
                <td>ProxyERC20</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xcBBb17D9767bD57FBF4Bbf8842E916bCb3826ec1">0xcBBb17D9767bD57FBF4Bbf8842E916bCb3826ec1</a>
                </td>
              </tr>
              <tr>
                <td>ProxyERC20sUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x1150FcF21c5fb154e971fb526A0A777907F87579">0x1150FcF21c5fb154e971fb526A0A777907F87579</a>
                </td>
              </tr>
              <tr>
                <td>ProxyFeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/Proxy.json">Proxy.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x09797E9E75999b9Cf2619E3397795800ce5E3E25">0x09797E9E75999b9Cf2619E3397795800ce5E3E25</a>
                </td>
              </tr>
              <tr>
                <td>ProxySynthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/Proxy.json">Proxy.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x322A3346bf24363f451164d96A5b5cd5A7F4c337">0x322A3346bf24363f451164d96A5b5cd5A7F4c337</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiBNB</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x148892d08C25C0AbF824C458Be9fc8C0D506Eb6b">0x148892d08C25C0AbF824C458Be9fc8C0D506Eb6b</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x89E21ed2EBd6c55C28aAC0aA856483E74682FE15">0x89E21ed2EBd6c55C28aAC0aA856483E74682FE15</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiCEX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x9972F7bF1e260E978B957fe54881E4E8a6798350">0x9972F7bF1e260E978B957fe54881E4E8a6798350</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x69AD82d83c1e11D27473339B8990A6b8C7B8194C">0x69AD82d83c1e11D27473339B8990A6b8C7B8194C</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xec98BB42C8F03485bf659378da694512a16f3482">0xec98BB42C8F03485bf659378da694512a16f3482</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x9388df25901bCb7Ca7195B5503738776Cf4c6686">0x9388df25901bCb7Ca7195B5503738776Cf4c6686</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiLTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xa871889b74c9209A3a720C85CD59f60AeEF57fCC">0xa871889b74c9209A3a720C85CD59f60AeEF57fCC</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiMKR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xB200f7b1391e336Fd334D1ae90Ab7bE32b7DeABb">0xB200f7b1391e336Fd334D1ae90Ab7bE32b7DeABb</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiTRX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xA46b98474F9D0458E3adE89e3482c04D280AF06e">0xA46b98474F9D0458E3adE89e3482c04D280AF06e</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiXRP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x2481127D4E7d5EE57041aFB583A3B7506eBe78A9">0x2481127D4E7d5EE57041aFB583A3B7506eBe78A9</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiXTZ</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xE5A2286Fd6dAd65d74CC10910f967415B1A0E2bE">0xE5A2286Fd6dAd65d74CC10910f967415B1A0E2bE</a>
                </td>
              </tr>
              <tr>
                <td>ProxysAUD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x6Bc4e20EEBb433A8f25854b602ed7a9b18be4337">0x6Bc4e20EEBb433A8f25854b602ed7a9b18be4337</a>
                </td>
              </tr>
              <tr>
                <td>ProxysBNB</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x9aF5763Dc180f388A5fd20Dd7BA4B2790566f2eF">0x9aF5763Dc180f388A5fd20Dd7BA4B2790566f2eF</a>
                </td>
              </tr>
              <tr>
                <td>ProxysBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x27861E4776D162743ccD78379aDe6A876caf2203">0x27861E4776D162743ccD78379aDe6A876caf2203</a>
                </td>
              </tr>
              <tr>
                <td>ProxysCEX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x9bD2c9677492558c0eF2F30BB7c7aC694F8F62dC">0x9bD2c9677492558c0eF2F30BB7c7aC694F8F62dC</a>
                </td>
              </tr>
              <tr>
                <td>ProxysCHF</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x41b60d5E660102EB83f179D67c45901c74594F50">0x41b60d5E660102EB83f179D67c45901c74594F50</a>
                </td>
              </tr>
              <tr>
                <td>ProxysDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x3A81E343ff76d354DA567cFC54eb36FfB724b3cB">0x3A81E343ff76d354DA567cFC54eb36FfB724b3cB</a>
                </td>
              </tr>
              <tr>
                <td>ProxysETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xA83AbFdC9E8Ee990C3C6C0f56a4B06e0faAd583C">0xA83AbFdC9E8Ee990C3C6C0f56a4B06e0faAd583C</a>
                </td>
              </tr>
              <tr>
                <td>ProxysEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x6bCd1caE4A3c099c696B51f889bE2120DF62b7c0">0x6bCd1caE4A3c099c696B51f889bE2120DF62b7c0</a>
                </td>
              </tr>
              <tr>
                <td>ProxysGBP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x46824bFAaFd049fB0Af9a45159A88e595Bbbb9f7">0x46824bFAaFd049fB0Af9a45159A88e595Bbbb9f7</a>
                </td>
              </tr>
              <tr>
                <td>ProxysJPY</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x07e6869DeA314DF2e51fEf474d0FcaC5C2910190">0x07e6869DeA314DF2e51fEf474d0FcaC5C2910190</a>
                </td>
              </tr>
              <tr>
                <td>ProxysLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xF9a5E0cD6b6c98A42Ff14976469E8Ac535015ed1">0xF9a5E0cD6b6c98A42Ff14976469E8Ac535015ed1</a>
                </td>
              </tr>
              <tr>
                <td>ProxysLTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xFB3F3e87978AC23B1EE3a4Ad6B3d563a36c22fB4">0xFB3F3e87978AC23B1EE3a4Ad6B3d563a36c22fB4</a>
                </td>
              </tr>
              <tr>
                <td>ProxysMKR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x77275F2773950C715bcd9bA2a475C462919eD45D">0x77275F2773950C715bcd9bA2a475C462919eD45D</a>
                </td>
              </tr>
              <tr>
                <td>ProxysTRX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xAD7258d0054c03112a4f5489A4B24eC34a2fc787">0xAD7258d0054c03112a4f5489A4B24eC34a2fc787</a>
                </td>
              </tr>
              <tr>
                <td>ProxysUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/Proxy.json">Proxy.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xe109da5361299eD96D91146B8Cc12F682D21964e">0xe109da5361299eD96D91146B8Cc12F682D21964e</a>
                </td>
              </tr>
              <tr>
                <td>ProxysXAG</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x919b0d375F741122BB74aacC821E27fb48745107">0x919b0d375F741122BB74aacC821E27fb48745107</a>
                </td>
              </tr>
              <tr>
                <td>ProxysXAU</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x83266A95429b903cC5e954bF61c7eddf8a52b971">0x83266A95429b903cC5e954bF61c7eddf8a52b971</a>
                </td>
              </tr>
              <tr>
                <td>ProxysXRP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x4C314d7ad9A7cD19F2Ec37ACD8075EFa02e5f8A4">0x4C314d7ad9A7cD19F2Ec37ACD8075EFa02e5f8A4</a>
                </td>
              </tr>
              <tr>
                <td>ProxysXTZ</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xaD85C5B4273b73AE1514cC0569a6A783B3cB30aD">0xaD85C5B4273b73AE1514cC0569a6A783B3cB30aD</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/RewardEscrow.sol">RewardEscrow.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/RewardEscrow.json">RewardEscrow.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x61E47229C3d0445d3Dd00359F1D4C14A67511c36">0x61E47229C3d0445d3Dd00359F1D4C14A67511c36</a>
                </td>
              </tr>
              <tr>
                <td>RewardsDistribution</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/RewardsDistribution.sol">RewardsDistribution.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/RewardsDistribution.json">RewardsDistribution.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xab40980A1b32A2aaD0Af9261a355AebA2c7c1fbE">0xab40980A1b32A2aaD0Af9261a355AebA2c7c1fbE</a>
                </td>
              </tr>
              <tr>
                <td>SafeDecimalMath</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/SafeDecimalMath.sol">SafeDecimalMath.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/SafeDecimalMath.json">SafeDecimalMath.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xFe9C9FDa0dD1a07356e7bB236f9224fa3AB5a587">0xFe9C9FDa0dD1a07356e7bB236f9224fa3AB5a587</a>
                </td>
              </tr>
              <tr>
                <td>SupplySchedule</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/SupplySchedule.sol">SupplySchedule.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/SupplySchedule.json">SupplySchedule.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x2E1644C4CD362184CebB864196D139Dd91bD9eee">0x2E1644C4CD362184CebB864196D139Dd91bD9eee</a>
                </td>
              </tr>
              <tr>
                <td>Synthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synthetix.sol">Synthetix.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/Synthetix.json">Synthetix.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x89E76929cfce276b8c16813aA027f655B50466e0">0x89E76929cfce276b8c16813aA027f655B50466e0</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/SynthetixEscrow.sol">SynthetixEscrow.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/SynthetixEscrow.json">SynthetixEscrow.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xAAE0b3F1D46E60ff80245a0d35d7e63AD1B13c52">0xAAE0b3F1D46E60ff80245a0d35d7e63AD1B13c52</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/SynthetixState.sol">SynthetixState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/SynthetixState.json">SynthetixState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x244eD0655838f2f645fa4D80DBD0d445C7b06EB0">0x244eD0655838f2f645fa4D80DBD0d445C7b06EB0</a>
                </td>
              </tr>
              <tr>
                <td>SynthiBNB</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x420a57027742E73804ecC8D2aa5315146fCdFD52">0x420a57027742E73804ecC8D2aa5315146fCdFD52</a>
                </td>
              </tr>
              <tr>
                <td>SynthiBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xe1F8273418479406EF7E45E0Ab8bfBAba6DAEf27">0xe1F8273418479406EF7E45E0Ab8bfBAba6DAEf27</a>
                </td>
              </tr>
              <tr>
                <td>SynthiCEX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x31c7fC09a475dd7dde7F4113A69E6a2eCA4E5Fe5">0x31c7fC09a475dd7dde7F4113A69E6a2eCA4E5Fe5</a>
                </td>
              </tr>
              <tr>
                <td>SynthiDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x8756CdB35E418E9378b8Ec2103911Fb0D826AcC0">0x8756CdB35E418E9378b8Ec2103911Fb0D826AcC0</a>
                </td>
              </tr>
              <tr>
                <td>SynthiETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x2A69AaF9d3fFF13E2FCb58Cf640F7Aba94FDC9e7">0x2A69AaF9d3fFF13E2FCb58Cf640F7Aba94FDC9e7</a>
                </td>
              </tr>
              <tr>
                <td>SynthiLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xd58530824b4B512EA55Eb4F6aAA7AE1a2FF0eD18">0xd58530824b4B512EA55Eb4F6aAA7AE1a2FF0eD18</a>
                </td>
              </tr>
              <tr>
                <td>SynthiLTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x80a29Ea154Cf8f2cAc1b5064F2010c65C57d0851">0x80a29Ea154Cf8f2cAc1b5064F2010c65C57d0851</a>
                </td>
              </tr>
              <tr>
                <td>SynthiMKR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xdF4a245F35713825023a6bBf1DCB8D25754fddF5">0xdF4a245F35713825023a6bBf1DCB8D25754fddF5</a>
                </td>
              </tr>
              <tr>
                <td>SynthiTRX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x75bD62e2e7F0b5561e50Ce27E4E68A4215FE0327">0x75bD62e2e7F0b5561e50Ce27E4E68A4215FE0327</a>
                </td>
              </tr>
              <tr>
                <td>SynthiXRP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x6e6E49169FbDb709947866FcCcf3D85d150dD9Ce">0x6e6E49169FbDb709947866FcCcf3D85d150dD9Ce</a>
                </td>
              </tr>
              <tr>
                <td>SynthiXTZ</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xe9E2b7A23F049dA90dcD304eBA2E42Edf4c8fa59">0xe9E2b7A23F049dA90dcD304eBA2E42Edf4c8fa59</a>
                </td>
              </tr>
              <tr>
                <td>SynthsAUD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xc59f3b80B33F80D05D9b13bacCa902149b8649F6">0xc59f3b80B33F80D05D9b13bacCa902149b8649F6</a>
                </td>
              </tr>
              <tr>
                <td>SynthsBNB</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xca173bf196A2aEBcFCA86f61Cc1B3123CE2bdf7F">0xca173bf196A2aEBcFCA86f61Cc1B3123CE2bdf7F</a>
                </td>
              </tr>
              <tr>
                <td>SynthsBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x9cFd8031FAE63077B8822F30bB85cA5E48Ea0843">0x9cFd8031FAE63077B8822F30bB85cA5E48Ea0843</a>
                </td>
              </tr>
              <tr>
                <td>SynthsCEX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x98a3067A9F8a9Ec083f9f0278CC8c3E627f3F1aC">0x98a3067A9F8a9Ec083f9f0278CC8c3E627f3F1aC</a>
                </td>
              </tr>
              <tr>
                <td>SynthsCHF</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xf0EB867E43304F993c07Ae16E642057a4473891E">0xf0EB867E43304F993c07Ae16E642057a4473891E</a>
                </td>
              </tr>
              <tr>
                <td>SynthsDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x235E93f18E294cbFc6234AEfe6EF68DC5d66E8E1">0x235E93f18E294cbFc6234AEfe6EF68DC5d66E8E1</a>
                </td>
              </tr>
              <tr>
                <td>SynthsETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/MultiCollateralSynth.json">MultiCollateralSynth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x9bE8ad8171f20bea38287c8efFD2d5D0bb343944">0x9bE8ad8171f20bea38287c8efFD2d5D0bb343944</a>
                </td>
              </tr>
              <tr>
                <td>SynthsEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x6905757C4ad3A53F4c1a3Fb9050012b7467B5c27">0x6905757C4ad3A53F4c1a3Fb9050012b7467B5c27</a>
                </td>
              </tr>
              <tr>
                <td>SynthsGBP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xD71C694d1564903ABD5858177bf46adEf2403614">0xD71C694d1564903ABD5858177bf46adEf2403614</a>
                </td>
              </tr>
              <tr>
                <td>SynthsJPY</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x144D2Afdf711B66CF68Ca5D14A3ebd61F2C3858b">0x144D2Afdf711B66CF68Ca5D14A3ebd61F2C3858b</a>
                </td>
              </tr>
              <tr>
                <td>SynthsLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xAF2BA8807bB37bC9602C2e5bbF3341361dD0Fd3b">0xAF2BA8807bB37bC9602C2e5bbF3341361dD0Fd3b</a>
                </td>
              </tr>
              <tr>
                <td>SynthsLTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xAa3E453CD9d77BdaE21F5Fd0915C630532D707aa">0xAa3E453CD9d77BdaE21F5Fd0915C630532D707aa</a>
                </td>
              </tr>
              <tr>
                <td>SynthsMKR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x869Ecf5c74c70b1b3Fa1ef92B7dD096C49CAe8e3">0x869Ecf5c74c70b1b3Fa1ef92B7dD096C49CAe8e3</a>
                </td>
              </tr>
              <tr>
                <td>SynthsTRX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xB159ef1Fe1d8B3EEfFd4006a262B904efB9e0410">0xB159ef1Fe1d8B3EEfFd4006a262B904efB9e0410</a>
                </td>
              </tr>
              <tr>
                <td>SynthsUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xbb5f83Ac50561417a61F0af8aC8Ef30C23e9B83B">0xbb5f83Ac50561417a61F0af8aC8Ef30C23e9B83B</a>
                </td>
              </tr>
              <tr>
                <td>SynthsXAG</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xB8263bB03DeCaFaD54255BEBCAAad657B378f5ab">0xB8263bB03DeCaFaD54255BEBCAAad657B378f5ab</a>
                </td>
              </tr>
              <tr>
                <td>SynthsXAU</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x26661c3a9E27B424efCD6fefD676F893E1F8a72E">0x26661c3a9E27B424efCD6fefD676F893E1F8a72E</a>
                </td>
              </tr>
              <tr>
                <td>SynthsXRP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xF663d0857c799921766f17C7e08b3D7b64C6919E">0xF663d0857c799921766f17C7e08b3D7b64C6919E</a>
                </td>
              </tr>
              <tr>
                <td>SynthsXTZ</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xDb7eeE57A062F8a9F340f374C00EdedA5C13716a">0xDb7eeE57A062F8a9F340f374C00EdedA5C13716a</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateSynthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x8281E2edBbb6F430a80a5d0D745586bC35539995">0x8281E2edBbb6F430a80a5d0D745586bC35539995</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiBNB</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x9A4EA8f68E3bb806071505ADF771BEADA0033A76">0x9A4EA8f68E3bb806071505ADF771BEADA0033A76</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x33bEB088dAdd6673aeB2B51Af3850D74793370c9">0x33bEB088dAdd6673aeB2B51Af3850D74793370c9</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiCEX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x9DB386a9b9934Fee56A776E5c93d6a826F37Bc8d">0x9DB386a9b9934Fee56A776E5c93d6a826F37Bc8d</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x124E59a207775f85ebd52693c6f4B5fD05baDf47">0x124E59a207775f85ebd52693c6f4B5fD05baDf47</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x2458CB4FaD36203962616455091BA5ca6bD74cC8">0x2458CB4FaD36203962616455091BA5ca6bD74cC8</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xA190b1219c573C208F5BA7Fb203A0A56cca4305B">0xA190b1219c573C208F5BA7Fb203A0A56cca4305B</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiLTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x039BE4d0FFc81bB02C249C7538FB4D0fc5BAf317">0x039BE4d0FFc81bB02C249C7538FB4D0fc5BAf317</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiMKR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x8c27bB4f177a9B03324882f2a219B6b7B1DE45D3">0x8c27bB4f177a9B03324882f2a219B6b7B1DE45D3</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiTRX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x43408c8B64a242B2F364e80E6085aff9795B085D">0x43408c8B64a242B2F364e80E6085aff9795B085D</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiXRP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xE9D673875C2Ed7A97650242613Fb740f934249BC">0xE9D673875C2Ed7A97650242613Fb740f934249BC</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiXTZ</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x60DCbf661a8cA09AC806c5fFA40014Ed87a7F9CA">0x60DCbf661a8cA09AC806c5fFA40014Ed87a7F9CA</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesAUD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x6884DecD00682c83fEA24125DA3807ed55b284EC">0x6884DecD00682c83fEA24125DA3807ed55b284EC</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesBNB</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x9052262434101E4a660B1600b0D87280EC4a4BE4">0x9052262434101E4a660B1600b0D87280EC4a4BE4</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x12F5Abf7326309a063840Bb4223e4f67aD393871">0x12F5Abf7326309a063840Bb4223e4f67aD393871</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesCEX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xf86795273A01bdf926037baf864EE3448951d11E">0xf86795273A01bdf926037baf864EE3448951d11E</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesCHF</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x1A5799664D8c1E0296CB2ce1c080Bd68E35e9BA7">0x1A5799664D8c1E0296CB2ce1c080Bd68E35e9BA7</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x6A191c7cb66Ed19944dF38db2800E1e256732375">0x6A191c7cb66Ed19944dF38db2800E1e256732375</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x70bF68E5dBdD2f2e30d8DDB382B7B3Ee76e5ed2c">0x70bF68E5dBdD2f2e30d8DDB382B7B3Ee76e5ed2c</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xCa0117137095ccEEeE516c003E7542F19bC2b8be">0xCa0117137095ccEEeE516c003E7542F19bC2b8be</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesGBP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xE90B0f0425b86E61633134466a8C97966C7D687c">0xE90B0f0425b86E61633134466a8C97966C7D687c</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesJPY</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x68fb193EFc0eeC45E0887C648757f6d023de9fF5">0x68fb193EFc0eeC45E0887C648757f6d023de9fF5</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xb7f1C4dEb8be5a35aaE295cE2083069C818Be26A">0xb7f1C4dEb8be5a35aaE295cE2083069C818Be26A</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesLTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0xe9F88946106AE3C527001d92100319016195a33B">0xe9F88946106AE3C527001d92100319016195a33B</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesMKR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x40B3a914a63d096214Ce4C48d87E5864d67BCA3F">0x40B3a914a63d096214Ce4C48d87E5864d67BCA3F</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesTRX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x8F46D0f882027f36c04F3571B4F521689DD1BE63">0x8F46D0f882027f36c04F3571B4F521689DD1BE63</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x53A08534fe82210BBa8e07Cd0273396779116cbc">0x53A08534fe82210BBa8e07Cd0273396779116cbc</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesXAG</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x9F4F4e82e6D600090BE65446F7033e71c68be458">0x9F4F4e82e6D600090BE65446F7033e71c68be458</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesXAU</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x5D5D431159Ca065846DC38aeA5d146A541a8Ec27">0x5D5D431159Ca065846DC38aeA5d146A541a8Ec27</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesXRP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x60083460F0d9b0588711c3aDf7d3cFfD55A452c8">0x60083460F0d9b0588711c3aDf7d3cFfD55A452c8</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesXTZ</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/rinkeby/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://rinkeby.etherscan.io/address/0x7f523c2CaDB679fc13b2557eAA8cAe526c4ADf1A">0x7f523c2CaDB679fc13b2557eAA8cAe526c4ADf1A</a>
                </td>
              </tr></table>

## KOVAN Contracts
<table><tr><th>Name</th><th>Source</th><th>ABI</th><th>Address</th></tr>
              <tr>
                <td>AddressResolver</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/AddressResolver.sol">AddressResolver.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/AddressResolver.json">AddressResolver.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xee38902aFDA193c8d4EDA7F0216f645AD9350402">0xee38902aFDA193c8d4EDA7F0216f645AD9350402</a>
                </td>
              </tr>
              <tr>
                <td>ArbRewarder</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ArbRewarder.sol">ArbRewarder.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ArbRewarder.json">ArbRewarder.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x46a6123DD50eF2F82AC15E2954D7790F2edCeDc9">0x46a6123DD50eF2F82AC15E2954D7790F2edCeDc9</a>
                </td>
              </tr>
              <tr>
                <td>DappMaintenance</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/DappMaintenance.sol">DappMaintenance.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/DappMaintenance.json">DappMaintenance.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x5e758C95f4B6A76dafDec3771ed429aEE844e3d9">0x5e758C95f4B6A76dafDec3771ed429aEE844e3d9</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovals</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/DelegateApprovals.sol">DelegateApprovals.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/DelegateApprovals.json">DelegateApprovals.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xcB12d8702c5C562b7bAb681B2a55ab7C281eE90d">0xcB12d8702c5C562b7bAb681B2a55ab7C281eE90d</a>
                </td>
              </tr>
              <tr>
                <td>Depot</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Depot.sol">Depot.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/Depot.json">Depot.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xF92e70301E26AaDeCCEc5016b7D0167DAF416d72">0xF92e70301E26AaDeCCEc5016b7D0167DAF416d72</a>
                </td>
              </tr>
              <tr>
                <td>EscrowChecker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/EscrowChecker.sol">EscrowChecker.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/EscrowChecker.json">EscrowChecker.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xF778Ec504245EfE1eA010C5C3E50b6F5f5E117da">0xF778Ec504245EfE1eA010C5C3E50b6F5f5E117da</a>
                </td>
              </tr>
              <tr>
                <td>EtherCollateral</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/EtherCollateral.sol">EtherCollateral.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/EtherCollateral.json">EtherCollateral.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x575D1238a011D19704f73C57eD3242fe92b5eE9a">0x575D1238a011D19704f73C57eD3242fe92b5eE9a</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeRates</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ExchangeRates.sol">ExchangeRates.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ExchangeRates.json">ExchangeRates.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x29A74bBDFd3eBAE39BFF917AAF4dAE8D3d505cf0">0x29A74bBDFd3eBAE39BFF917AAF4dAE8D3d505cf0</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ExchangeState.sol">ExchangeState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ExchangeState.json">ExchangeState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xa3F59b8E28cABC4411198dDa2e65C380BD5d6Dfe">0xa3F59b8E28cABC4411198dDa2e65C380BD5d6Dfe</a>
                </td>
              </tr>
              <tr>
                <td>Exchanger</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Exchanger.sol">Exchanger.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/Exchanger.json">Exchanger.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xec7aE76d6d90E686c4dCC7a861491D3Df8AaA626">0xec7aE76d6d90E686c4dCC7a861491D3Df8AaA626</a>
                </td>
              </tr>
              <tr>
                <td>FeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/FeePool.sol">FeePool.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/FeePool.json">FeePool.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x39572Cad6090fc0D8908Ad90e186B002842Efc90">0x39572Cad6090fc0D8908Ad90e186B002842Efc90</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/FeePoolEternalStorage.sol">FeePoolEternalStorage.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/FeePoolEternalStorage.json">FeePoolEternalStorage.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x7bB8B3Cc191600547b9467639aD397c05AF3ce8D">0x7bB8B3Cc191600547b9467639aD397c05AF3ce8D</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/FeePoolState.sol">FeePoolState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/FeePoolState.json">FeePoolState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x78b70223d9Fa1a0abE6cD967472Fa04fEf3C7586">0x78b70223d9Fa1a0abE6cD967472Fa04fEf3C7586</a>
                </td>
              </tr>
              <tr>
                <td>Issuer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Issuer.sol">Issuer.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/Issuer.json">Issuer.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xfA9B377D1999E110F7FD87A1a21297Da2E4C83b8">0xfA9B377D1999E110F7FD87A1a21297Da2E4C83b8</a>
                </td>
              </tr>
              <tr>
                <td>Math</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Math.sol">Math.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/Math.json">Math.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x2cAaB90c2D4328E32baB3e2fAdf84cEd1DD229F6">0x2cAaB90c2D4328E32baB3e2fAdf84cEd1DD229F6</a>
                </td>
              </tr>
              <tr>
                <td>ProxyERC20</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F">0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F</a>
                </td>
              </tr>
              <tr>
                <td>ProxyERC20sUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xC674ad732Dfd4E1359ec4B18fA5472c0747E480A">0xC674ad732Dfd4E1359ec4B18fA5472c0747E480A</a>
                </td>
              </tr>
              <tr>
                <td>ProxyFeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/Proxy.json">Proxy.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xc43b833F93C3896472dED3EfF73311f571e38742">0xc43b833F93C3896472dED3EfF73311f571e38742</a>
                </td>
              </tr>
              <tr>
                <td>ProxySynthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/Proxy.json">Proxy.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x22f1ba6dB6ca0A065e1b7EAe6FC22b7E675310EF">0x22f1ba6dB6ca0A065e1b7EAe6FC22b7E675310EF</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiBNB</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xdbB1D3B58D7e101588a44E642F8c442165730289">0xdbB1D3B58D7e101588a44E642F8c442165730289</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xF418D59792E4bd9ab8cC4b733Ea60edC01abc77c">0xF418D59792E4bd9ab8cC4b733Ea60edC01abc77c</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiCEX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x5047d4FeD0805632a6d84D16C08E9899d17ef3e2">0x5047d4FeD0805632a6d84D16C08E9899d17ef3e2</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x23Db12CF9Ad1fBBdE25650D4AAA6B46AC17EAA80">0x23Db12CF9Ad1fBBdE25650D4AAA6B46AC17EAA80</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x498df32429693fE31685Da7fb9B4b65696a5508d">0x498df32429693fE31685Da7fb9B4b65696a5508d</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x21dc51Dd8BFfeCe537eFf6FbAB3D1C82340b0A40">0x21dc51Dd8BFfeCe537eFf6FbAB3D1C82340b0A40</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiLTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xcC72c855D4d5792938611Ca44Bd3A07860f64dd0">0xcC72c855D4d5792938611Ca44Bd3A07860f64dd0</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiMKR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xeEe13c7Df0Cd76d936E8477407b278C104DdBE43">0xeEe13c7Df0Cd76d936E8477407b278C104DdBE43</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiTRX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x4C3213Db129C528D97CBF48f451913071b094Af2">0x4C3213Db129C528D97CBF48f451913071b094Af2</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiXRP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x141A298596a25D86D0E6D4F8cC0eC0223ebaa938">0x141A298596a25D86D0E6D4F8cC0eC0223ebaa938</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiXTZ</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x022E3dFfDeE42eE5C9d3335c1fbC1100b29Ab9ab">0x022E3dFfDeE42eE5C9d3335c1fbC1100b29Ab9ab</a>
                </td>
              </tr>
              <tr>
                <td>ProxysAUD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x4e5D412141145767F7db90c22bd0240a85da0B73">0x4e5D412141145767F7db90c22bd0240a85da0B73</a>
                </td>
              </tr>
              <tr>
                <td>ProxysBNB</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x4D5C55a1046725a80B20296D0A98DcE02d8eAAc3">0x4D5C55a1046725a80B20296D0A98DcE02d8eAAc3</a>
                </td>
              </tr>
              <tr>
                <td>ProxysBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x3Aa2d4A15aA7F50158DEEAE0208F862a461f19Cf">0x3Aa2d4A15aA7F50158DEEAE0208F862a461f19Cf</a>
                </td>
              </tr>
              <tr>
                <td>ProxysCEX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xAE1101551c334Ed0f4c6238E7fD4Fc0fdB2b7C77">0xAE1101551c334Ed0f4c6238E7fD4Fc0fdB2b7C77</a>
                </td>
              </tr>
              <tr>
                <td>ProxysCHF</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x8E23100f9C9bd442f5bAc6A927f49B284E390Df4">0x8E23100f9C9bd442f5bAc6A927f49B284E390Df4</a>
                </td>
              </tr>
              <tr>
                <td>ProxysDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xf91b2d345838922b26c8899483be3f867eeaFAb5">0xf91b2d345838922b26c8899483be3f867eeaFAb5</a>
                </td>
              </tr>
              <tr>
                <td>ProxysETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x54c4B5cb58C880DD1734123c8b588e49eDf442Fb">0x54c4B5cb58C880DD1734123c8b588e49eDf442Fb</a>
                </td>
              </tr>
              <tr>
                <td>ProxysEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x57E8Bd85F3d8De4557739bc3C5ee0f4bfC931528">0x57E8Bd85F3d8De4557739bc3C5ee0f4bfC931528</a>
                </td>
              </tr>
              <tr>
                <td>ProxysGBP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x41d49b1ac182C9d2c8dDf8b450342DE2Ac03aC19">0x41d49b1ac182C9d2c8dDf8b450342DE2Ac03aC19</a>
                </td>
              </tr>
              <tr>
                <td>ProxysJPY</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xCcC5c7625c90FC93D2508723e60281E6DE535166">0xCcC5c7625c90FC93D2508723e60281E6DE535166</a>
                </td>
              </tr>
              <tr>
                <td>ProxysLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x3a4A90a2D8cBA26F2e32C4a6e6d01ffBfCE8DBB4">0x3a4A90a2D8cBA26F2e32C4a6e6d01ffBfCE8DBB4</a>
                </td>
              </tr>
              <tr>
                <td>ProxysLTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xCffb601E31D4f1D967Aac24f742DEEb2459a2e18">0xCffb601E31D4f1D967Aac24f742DEEb2459a2e18</a>
                </td>
              </tr>
              <tr>
                <td>ProxysMKR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xEB644334B2Adab1b5b965e0a1aC794917f1DD712">0xEB644334B2Adab1b5b965e0a1aC794917f1DD712</a>
                </td>
              </tr>
              <tr>
                <td>ProxysTRX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x0754bd514B7b41052777417217655fD7254F4528">0x0754bd514B7b41052777417217655fD7254F4528</a>
                </td>
              </tr>
              <tr>
                <td>ProxysUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/Proxy.json">Proxy.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x57Ab1ec28D129707052df4dF418D58a2D46d5f51">0x57Ab1ec28D129707052df4dF418D58a2D46d5f51</a>
                </td>
              </tr>
              <tr>
                <td>ProxysXAG</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x0Ae5a541ea8FD2e8E3b514D8706ac26e3a30272b">0x0Ae5a541ea8FD2e8E3b514D8706ac26e3a30272b</a>
                </td>
              </tr>
              <tr>
                <td>ProxysXAU</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xbc62e250AD0e6759FC104f09C4a7F8b83129346f">0xbc62e250AD0e6759FC104f09C4a7F8b83129346f</a>
                </td>
              </tr>
              <tr>
                <td>ProxysXRP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x5C59b3eFAE14Bb56c30319fbAF0413b543278382">0x5C59b3eFAE14Bb56c30319fbAF0413b543278382</a>
                </td>
              </tr>
              <tr>
                <td>ProxysXTZ</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xd39bBa8F8049674152B5439A631eEd691436b92a">0xd39bBa8F8049674152B5439A631eEd691436b92a</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/RewardEscrow.sol">RewardEscrow.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/RewardEscrow.json">RewardEscrow.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x8c6680412e914932A9abC02B6c7cbf690e583aFA">0x8c6680412e914932A9abC02B6c7cbf690e583aFA</a>
                </td>
              </tr>
              <tr>
                <td>RewardsDistribution</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/RewardsDistribution.sol">RewardsDistribution.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/RewardsDistribution.json">RewardsDistribution.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xD29160e4f5D2e5818041f9Cd9192853BA349c47E">0xD29160e4f5D2e5818041f9Cd9192853BA349c47E</a>
                </td>
              </tr>
              <tr>
                <td>SafeDecimalMath</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/SafeDecimalMath.sol">SafeDecimalMath.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/SafeDecimalMath.json">SafeDecimalMath.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x1A60E2E2A8BE0BC2B6381dd31Fd3fD5F9A28dE4c">0x1A60E2E2A8BE0BC2B6381dd31Fd3fD5F9A28dE4c</a>
                </td>
              </tr>
              <tr>
                <td>SupplySchedule</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/SupplySchedule.sol">SupplySchedule.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/SupplySchedule.json">SupplySchedule.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x3728543A1e0ca98FFC0A979cF817C95b6F8d9E7b">0x3728543A1e0ca98FFC0A979cF817C95b6F8d9E7b</a>
                </td>
              </tr>
              <tr>
                <td>Synthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synthetix.sol">Synthetix.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/Synthetix.json">Synthetix.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x7339019DC0C6d6B14bD66E662dbA66F3068Dea7a">0x7339019DC0C6d6B14bD66E662dbA66F3068Dea7a</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixAirdropper</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/SynthetixAirdropper.sol">SynthetixAirdropper.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/SynthetixAirdropper.json">SynthetixAirdropper.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x0da4be37F811a2Ce3138Bdaca65b6B23Eb85f0a4">0x0da4be37F811a2Ce3138Bdaca65b6B23Eb85f0a4</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/SynthetixEscrow.sol">SynthetixEscrow.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/SynthetixEscrow.json">SynthetixEscrow.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x548c18a49a66Ad1238e17824C18B0b9Be35fB604">0x548c18a49a66Ad1238e17824C18B0b9Be35fB604</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/SynthetixState.sol">SynthetixState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/SynthetixState.json">SynthetixState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xAfcBC491B67c01B40f6c077EF53488876a0a0D6E">0xAfcBC491B67c01B40f6c077EF53488876a0a0D6E</a>
                </td>
              </tr>
              <tr>
                <td>SynthiBNB</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x0985975b17676B37A0456aFC5CD80791f638A9F2">0x0985975b17676B37A0456aFC5CD80791f638A9F2</a>
                </td>
              </tr>
              <tr>
                <td>SynthiBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x2557cf272a55aC294E6be440d0f007e68f41b230">0x2557cf272a55aC294E6be440d0f007e68f41b230</a>
                </td>
              </tr>
              <tr>
                <td>SynthiCEX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xa079Ed64f3F287ea7c0Cf52F06a91dA4B2727028">0xa079Ed64f3F287ea7c0Cf52F06a91dA4B2727028</a>
                </td>
              </tr>
              <tr>
                <td>SynthiDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xA51815108c881C6Dd96c78bdB286460C56Ee75a2">0xA51815108c881C6Dd96c78bdB286460C56Ee75a2</a>
                </td>
              </tr>
              <tr>
                <td>SynthiETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xDb103c923C0D38f8490b21cf0fa86cfF7D050FEE">0xDb103c923C0D38f8490b21cf0fa86cfF7D050FEE</a>
                </td>
              </tr>
              <tr>
                <td>SynthiLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x045215aC5a526e197d38DdEF2D917FFb977A27Dd">0x045215aC5a526e197d38DdEF2D917FFb977A27Dd</a>
                </td>
              </tr>
              <tr>
                <td>SynthiLTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x788eee207e2d94e82A4EbCF2C73757f19816CE8b">0x788eee207e2d94e82A4EbCF2C73757f19816CE8b</a>
                </td>
              </tr>
              <tr>
                <td>SynthiMKR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xdbda401c423e74154aa0b0F64659BB3F2785F755">0xdbda401c423e74154aa0b0F64659BB3F2785F755</a>
                </td>
              </tr>
              <tr>
                <td>SynthiTRX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x1AF67BdA0B3cDB4c28919A595E4c867DfD504e6e">0x1AF67BdA0B3cDB4c28919A595E4c867DfD504e6e</a>
                </td>
              </tr>
              <tr>
                <td>SynthiXRP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x3D09beD28A21941a0188Af4b9c68E1e9289C5462">0x3D09beD28A21941a0188Af4b9c68E1e9289C5462</a>
                </td>
              </tr>
              <tr>
                <td>SynthiXTZ</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xC904D68651EcF899B90B5d71c782F4B366118fF9">0xC904D68651EcF899B90B5d71c782F4B366118fF9</a>
                </td>
              </tr>
              <tr>
                <td>SynthsAUD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x6f11DA312c04f6EF822c8083aB51391D40734B08">0x6f11DA312c04f6EF822c8083aB51391D40734B08</a>
                </td>
              </tr>
              <tr>
                <td>SynthsBNB</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x7C2f3449fAB45098886b50666cA271B6B724D2d2">0x7C2f3449fAB45098886b50666cA271B6B724D2d2</a>
                </td>
              </tr>
              <tr>
                <td>SynthsBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xb85BCf6B4c380433FC16227eB10b536D5D71aBdC">0xb85BCf6B4c380433FC16227eB10b536D5D71aBdC</a>
                </td>
              </tr>
              <tr>
                <td>SynthsCEX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x90714b472b32E9B051F0c8d30E84F0d20536DEC2">0x90714b472b32E9B051F0c8d30E84F0d20536DEC2</a>
                </td>
              </tr>
              <tr>
                <td>SynthsCHF</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x37Df8832a8aEef0cfFEDF8Fe0660C47CD720c872">0x37Df8832a8aEef0cfFEDF8Fe0660C47CD720c872</a>
                </td>
              </tr>
              <tr>
                <td>SynthsDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x9E50EFc0ad210450bb49e91495298265bc4e3931">0x9E50EFc0ad210450bb49e91495298265bc4e3931</a>
                </td>
              </tr>
              <tr>
                <td>SynthsETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/MultiCollateralSynth.json">MultiCollateralSynth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x2106A59c56468C23DA29e69D41513911D43BaDc2">0x2106A59c56468C23DA29e69D41513911D43BaDc2</a>
                </td>
              </tr>
              <tr>
                <td>SynthsEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xCd64B6D8eE3eB3B9149adEB25B1067ce6e4aE228">0xCd64B6D8eE3eB3B9149adEB25B1067ce6e4aE228</a>
                </td>
              </tr>
              <tr>
                <td>SynthsGBP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x0ff1B2FDA0b6eF2D16014dc01d9E52C9cDE0f010">0x0ff1B2FDA0b6eF2D16014dc01d9E52C9cDE0f010</a>
                </td>
              </tr>
              <tr>
                <td>SynthsJPY</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xCDB75d01ee35534620FCac3c09B205a612e3ac4d">0xCDB75d01ee35534620FCac3c09B205a612e3ac4d</a>
                </td>
              </tr>
              <tr>
                <td>SynthsLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x3d89FF8c250d3819F2AB333ac5512059075D4e9C">0x3d89FF8c250d3819F2AB333ac5512059075D4e9C</a>
                </td>
              </tr>
              <tr>
                <td>SynthsLTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x08459d49faF3383FAc619Ea20C2A0f6A45126616">0x08459d49faF3383FAc619Ea20C2A0f6A45126616</a>
                </td>
              </tr>
              <tr>
                <td>SynthsMKR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x74e148070d54CA01554E2d329df08CD6c7B95537">0x74e148070d54CA01554E2d329df08CD6c7B95537</a>
                </td>
              </tr>
              <tr>
                <td>SynthsTRX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x50999Dc83C6970B0A622B1a2D2DBFeCc600bA68b">0x50999Dc83C6970B0A622B1a2D2DBFeCc600bA68b</a>
                </td>
              </tr>
              <tr>
                <td>SynthsUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xc1EeC0fE3Ba7f7ca1620Ccb349C5537fAcbe8ccA">0xc1EeC0fE3Ba7f7ca1620Ccb349C5537fAcbe8ccA</a>
                </td>
              </tr>
              <tr>
                <td>SynthsXAG</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x5cbA2F4Be0BD782280Ef46A8298592e63d026053">0x5cbA2F4Be0BD782280Ef46A8298592e63d026053</a>
                </td>
              </tr>
              <tr>
                <td>SynthsXAU</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x40495EdA979BBA6f9989620F570275032967d9F2">0x40495EdA979BBA6f9989620F570275032967d9F2</a>
                </td>
              </tr>
              <tr>
                <td>SynthsXRP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xcCE03ce12f1C251E69577B76aCcED24858984508">0xcCE03ce12f1C251E69577B76aCcED24858984508</a>
                </td>
              </tr>
              <tr>
                <td>SynthsXTZ</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xBC17bfe5fC8c785924652E1dBf960eB44dbea813">0xBC17bfe5fC8c785924652E1dBf960eB44dbea813</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateSynthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x46824bFAaFd049fB0Af9a45159A88e595Bbbb9f7">0x46824bFAaFd049fB0Af9a45159A88e595Bbbb9f7</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiBNB</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x7fefB90141c56fBE2D55f36181b26B3Dc514d256">0x7fefB90141c56fBE2D55f36181b26B3Dc514d256</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x04CFbc89F161EE33f4984490B1B73A2D1548fA3D">0x04CFbc89F161EE33f4984490B1B73A2D1548fA3D</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiCEX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xF1B4c2A03cd37d5B9c7B908f1BE66D2f098880Ca">0xF1B4c2A03cd37d5B9c7B908f1BE66D2f098880Ca</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xfB4B52980FbdA970fcb414CF70d412F618656d71">0xfB4B52980FbdA970fcb414CF70d412F618656d71</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xe95134Cc50EADFE2C9dd950C8a86c0766a3C829F">0xe95134Cc50EADFE2C9dd950C8a86c0766a3C829F</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xC33D4644B5c6F73F34B48ABBC566BF0b62e7D647">0xC33D4644B5c6F73F34B48ABBC566BF0b62e7D647</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiLTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xdA3D35Bd84155B01a1EccD8fa96367F90675eeDc">0xdA3D35Bd84155B01a1EccD8fa96367F90675eeDc</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiMKR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x07EB4c1638e6b9fE56F90f3b9A99B0b5A74ac411">0x07EB4c1638e6b9fE56F90f3b9A99B0b5A74ac411</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiTRX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x20bf23be496fA039F5a11358DE93F9417189659b">0x20bf23be496fA039F5a11358DE93F9417189659b</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiXRP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xF356b4Fa2ff124eff4ad4a707D740F1d22c8548a">0xF356b4Fa2ff124eff4ad4a707D740F1d22c8548a</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiXTZ</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xc81CaC605D14d3eDF6BbC8ABcc3bb04B7bD96a7D">0xc81CaC605D14d3eDF6BbC8ABcc3bb04B7bD96a7D</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesAUD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xDDEfe42790f2dEC7b0C37D4399884eFceA5361b1">0xDDEfe42790f2dEC7b0C37D4399884eFceA5361b1</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesBNB</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x6289fd70d3Dce8DE61896959cdEfcFF3cE46A108">0x6289fd70d3Dce8DE61896959cdEfcFF3cE46A108</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x029E1687c7BB8ead5Ab02DB390eB82b87b2D54a2">0x029E1687c7BB8ead5Ab02DB390eB82b87b2D54a2</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesCEX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x8F70d2d9a593e28c86Ae0f1B03600310B3491C43">0x8F70d2d9a593e28c86Ae0f1B03600310B3491C43</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesCHF</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xEf58E3aC7F34649B640fb04188642B5e062Fa3Be">0xEf58E3aC7F34649B640fb04188642B5e062Fa3Be</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xa8eE3730031f28a4a4a3Ed28A3308d83cabd9Ce1">0xa8eE3730031f28a4a4a3Ed28A3308d83cabd9Ce1</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xFbB6526ed92DA8915d4843a86166020d0B7bAAd0">0xFbB6526ed92DA8915d4843a86166020d0B7bAAd0</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x4f719F0346636B9Dc23B092F637de2A66A254420">0x4f719F0346636B9Dc23B092F637de2A66A254420</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesGBP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x3DdF5dAd59F8F8e8f957709B044eE84e87B42e25">0x3DdF5dAd59F8F8e8f957709B044eE84e87B42e25</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesJPY</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x310705B7FecA92C2445D7471706e058653D9f989">0x310705B7FecA92C2445D7471706e058653D9f989</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x89656EF0A87fD947A181189209F6525E91D91f46">0x89656EF0A87fD947A181189209F6525E91D91f46</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesLTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x2E73aE701C3fd0c9856ed7fa5321938C9f753e36">0x2E73aE701C3fd0c9856ed7fa5321938C9f753e36</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesMKR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xF4c1EF59bd05Ea557BdeeDd2Be079765e395A745">0xF4c1EF59bd05Ea557BdeeDd2Be079765e395A745</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesTRX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xe34552e5E0CEBC83e742BCB11F426731EF05e34a">0xe34552e5E0CEBC83e742BCB11F426731EF05e34a</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x9aF5763Dc180f388A5fd20Dd7BA4B2790566f2eF">0x9aF5763Dc180f388A5fd20Dd7BA4B2790566f2eF</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesXAG</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x1Aa58E7823E2a4acC9B4B2A18C1e946b01D78E25">0x1Aa58E7823E2a4acC9B4B2A18C1e946b01D78E25</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesXAU</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x7E7B920857Ffa8569A90a9a94A07877f2a81514c">0x7E7B920857Ffa8569A90a9a94A07877f2a81514c</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesXRP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xd632C73752944D1d999270d4e9c33099d7C302b1">0xd632C73752944D1d999270d4e9c33099d7C302b1</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesXTZ</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/kovan/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x76870433F648ad4FDa62111381ACe0A9FAC6F413">0x76870433F648ad4FDa62111381ACe0A9FAC6F413</a>
                </td>
              </tr></table>
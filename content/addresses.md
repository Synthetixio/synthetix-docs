Here is the list of all contracts within the current Synthetix system.

**Version**: [v2.52.1-alpha](https://github.com/Synthetixio/synthetix/tree/v2.52.1-alpha)

!!! info "Naming Conventions"

    Within the developer ecosystem, the names of Synthetix contracts are referred to by their `source` Solidity file.If the same source is used for multiple instances of contracts with different constructor arguments - such as `Synth.sol`, `TokenState.sol` and `ProxyERC20.sol` - then the convention is to suffix the name of the differing feature to the end - be it the proxy target e.g. `FeePool` for `ProxyFeePool` or the synth currencyKey eg: `sETH` for `SynthsETH`

!!! tip "Handy Contract Links"

    All of the below contracts can be accessed by our [contract linker](https://github.com/Synthetixio/contract-linker) utility. Simply suffix the contract name to the end of https://contracts.synthetix.io to get a link that will always redirect to the latest version of the contract on Etherscan.

    For example, try https://contracts.synthetix.io/Synthetix to get linked to the latest Synthetix underlying.

    For testnets, insert the testnet name before the contract, as in https://contracts.synthetix.io/kovan/Synthetix

## MAINNET

<table><tr><th>Name</th><th>Source</th><th>Address</th></tr>
              <tr>
                <td>AddressResolver</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/AddressResolver.sol">AddressResolver.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x823bE81bbF96BEc0e25CA13170F5AaCb5B79ba83">0x823bE81bbF96BEc0e25CA13170F5AaCb5B79ba83</a>
                </td>
              </tr>
              <tr>
                <td>CollateralErc20</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/CollateralErc20.sol">CollateralErc20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xaa03aB31b55DceEeF845C8d17890CC61cD98eD04">0xaa03aB31b55DceEeF845C8d17890CC61cD98eD04</a>
                </td>
              </tr>
              <tr>
                <td>CollateralEth</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/CollateralEth.sol">CollateralEth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x5c8344bcdC38F1aB5EB5C1d4a35DdEeA522B5DfA">0x5c8344bcdC38F1aB5EB5C1d4a35DdEeA522B5DfA</a>
                </td>
              </tr>
              <tr>
                <td>CollateralManager</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/CollateralManager.sol">CollateralManager.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x067e398605E84F2D0aEEC1806e62768C5110DCc6">0x067e398605E84F2D0aEEC1806e62768C5110DCc6</a>
                </td>
              </tr>
              <tr>
                <td>CollateralManagerState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/CollateralManagerState.sol">CollateralManagerState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x573E5105c4B92416D1544A188F1bf77d442Bb52d">0x573E5105c4B92416D1544A188F1bf77d442Bb52d</a>
                </td>
              </tr>
              <tr>
                <td>CollateralShort</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/CollateralShort.sol">CollateralShort.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x1F2c3a1046c32729862fcB038369696e3273a516">0x1F2c3a1046c32729862fcB038369696e3273a516</a>
                </td>
              </tr>
              <tr>
                <td>CollateralStateErc20</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/CollateralState.sol">CollateralState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x8A1A00Df7aA0102497C7591912bA8301e8dB8CdB">0x8A1A00Df7aA0102497C7591912bA8301e8dB8CdB</a>
                </td>
              </tr>
              <tr>
                <td>CollateralStateEth</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/CollateralState.sol">CollateralState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xbe5B5a7c198bC156474ed5c33CBf2F3F604F8fF8">0xbe5B5a7c198bC156474ed5c33CBf2F3F604F8fF8</a>
                </td>
              </tr>
              <tr>
                <td>CollateralStateShort</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/CollateralState.sol">CollateralState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x13A114a3Fa8A6CE03a0C5488BE9e614d78eDdb0c">0x13A114a3Fa8A6CE03a0C5488BE9e614d78eDdb0c</a>
                </td>
              </tr>
              <tr>
                <td>DappMaintenance</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/DappMaintenance.sol">DappMaintenance.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xAb0B2f1Cf979cdbF4676251F35353eC5AF2732Dd">0xAb0B2f1Cf979cdbF4676251F35353eC5AF2732Dd</a>
                </td>
              </tr>
              <tr>
                <td>DebtCache</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/DebtCache.sol">DebtCache.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x08118E04F58d7863b4fCF1de0e07c83a2541b89e">0x08118E04F58d7863b4fCF1de0e07c83a2541b89e</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovals</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/DelegateApprovals.sol">DelegateApprovals.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x15fd6e554874B9e70F832Ed37f231Ac5E142362f">0x15fd6e554874B9e70F832Ed37f231Ac5E142362f</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovalsEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/EternalStorage.sol">EternalStorage.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x8F586F063ffbb89b186C8e604FC6614766f9C9d1">0x8F586F063ffbb89b186C8e604FC6614766f9C9d1</a>
                </td>
              </tr>
              <tr>
                <td>Depot</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Depot.sol">Depot.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xE1f64079aDa6Ef07b03982Ca34f1dD7152AA3b86">0xE1f64079aDa6Ef07b03982Ca34f1dD7152AA3b86</a>
                </td>
              </tr>
              <tr>
                <td>EscrowChecker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/EscrowChecker.sol">EscrowChecker.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x3b399e00AFd8201ACf8A5a0EcCF1C47d8D5E41da">0x3b399e00AFd8201ACf8A5a0EcCF1C47d8D5E41da</a>
                </td>
              </tr>
              <tr>
                <td>EternalStorageLiquidations</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/EternalStorage.sol">EternalStorage.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x0F7c200C4d3b5570C777764884Ce6DE67F31D3Ba">0x0F7c200C4d3b5570C777764884Ce6DE67F31D3Ba</a>
                </td>
              </tr>
              <tr>
                <td>EtherWrapper</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/EtherWrapper.sol">EtherWrapper.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xC1AAE9d18bBe386B102435a8632C8063d31e747C">0xC1AAE9d18bBe386B102435a8632C8063d31e747C</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeRates</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ExchangeRates.sol">ExchangeRates.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xd69b189020EF614796578AfE4d10378c5e7e1138">0xd69b189020EF614796578AfE4d10378c5e7e1138</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ExchangeState.sol">ExchangeState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x545973f28950f50fc6c7F52AAb4Ad214A27C0564">0x545973f28950f50fc6c7F52AAb4Ad214A27C0564</a>
                </td>
              </tr>
              <tr>
                <td>Exchanger</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ExchangerWithVirtualSynth.sol">ExchangerWithVirtualSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x7634F2A1741a683ccda37Dce864c187F990D7B4b">0x7634F2A1741a683ccda37Dce864c187F990D7B4b</a>
                </td>
              </tr>
              <tr>
                <td>FeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/FeePool.sol">FeePool.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x510adfDF6E7554C571b7Cd9305Ce91473610015e">0x510adfDF6E7554C571b7Cd9305Ce91473610015e</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/FeePoolEternalStorage.sol">FeePoolEternalStorage.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xC9DFff5fA5605fd94F8B7927b892F2B57391e8bB">0xC9DFff5fA5605fd94F8B7927b892F2B57391e8bB</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/FeePoolState.sol">FeePoolState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x11164F6a47C3f8472D19b9aDd516Fc780cb7Ee02">0x11164F6a47C3f8472D19b9aDd516Fc780cb7Ee02</a>
                </td>
              </tr>
              <tr>
                <td>FlexibleStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/FlexibleStorage.sol">FlexibleStorage.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xc757aCBa3c0506218b3022266a9DC7F3612d85f5">0xc757aCBa3c0506218b3022266a9DC7F3612d85f5</a>
                </td>
              </tr>
              <tr>
                <td>IssuanceEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/IssuanceEternalStorage.sol">IssuanceEternalStorage.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x631E93A0fb06B5eC6d52c0A2D89a3f9672d6Ba64">0x631E93A0fb06B5eC6d52c0A2D89a3f9672d6Ba64</a>
                </td>
              </tr>
              <tr>
                <td>Issuer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Issuer.sol">Issuer.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xF67998902EBc37d885ad310C2430C822Ca981E1E">0xF67998902EBc37d885ad310C2430C822Ca981E1E</a>
                </td>
              </tr>
              <tr>
                <td>Liquidations</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Liquidations.sol">Liquidations.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xAD95C918af576c82Df740878C3E983CBD175daB6">0xAD95C918af576c82Df740878C3E983CBD175daB6</a>
                </td>
              </tr>
              <tr>
                <td>Math</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Math.sol">Math.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x385e1Eb2FF28F4A637DA2C9971F8CAF5F5b1E77c">0x385e1Eb2FF28F4A637DA2C9971F8CAF5F5b1E77c</a>
                </td>
              </tr>
              <tr>
                <td>NativeEtherWrapper</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/NativeEtherWrapper.sol">NativeEtherWrapper.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x7A3d898b717e50a96fd8b232E9d15F0A547A7eeb">0x7A3d898b717e50a96fd8b232E9d15F0A547A7eeb</a>
                </td>
              </tr>
              <tr>
                <td>ProxyERC20</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F">0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F</a>
                </td>
              </tr>
              <tr>
                <td>ProxyERC20sUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x57Ab1ec28D129707052df4dF418D58a2D46d5f51">0x57Ab1ec28D129707052df4dF418D58a2D46d5f51</a>
                </td>
              </tr>
              <tr>
                <td>ProxyFeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xb440DD674e1243644791a4AdfE3A2AbB0A92d309">0xb440DD674e1243644791a4AdfE3A2AbB0A92d309</a>
                </td>
              </tr>
              <tr>
                <td><span style="color: #AAA; text-decoration: line-through">ProxySynthetix</span><sup>Use ProxyERC20</sup></td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F">0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F</a>
                </td>
              </tr>
              <tr>
                <td>ProxysAAVE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xd2dF355C19471c8bd7D8A3aa27Ff4e26A21b4076">0xd2dF355C19471c8bd7D8A3aa27Ff4e26A21b4076</a>
                </td>
              </tr>
              <tr>
                <td>ProxysADA</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xe36E2D3c7c34281FA3bC737950a68571736880A1">0xe36E2D3c7c34281FA3bC737950a68571736880A1</a>
                </td>
              </tr>
              <tr>
                <td>ProxysAUD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xF48e200EAF9906362BB1442fca31e0835773b8B4">0xF48e200EAF9906362BB1442fca31e0835773b8B4</a>
                </td>
              </tr>
              <tr>
                <td>ProxysBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6">0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6</a>
                </td>
              </tr>
              <tr>
                <td>ProxysCHF</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x0F83287FF768D1c1e17a42F44d644D7F22e8ee1d">0x0F83287FF768D1c1e17a42F44d644D7F22e8ee1d</a>
                </td>
              </tr>
              <tr>
                <td>ProxysDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xe1aFe1Fd76Fd88f78cBf599ea1846231B8bA3B6B">0xe1aFe1Fd76Fd88f78cBf599ea1846231B8bA3B6B</a>
                </td>
              </tr>
              <tr>
                <td>ProxysDOT</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x1715AC0743102BF5Cd58EfBB6Cf2dC2685d967b6">0x1715AC0743102BF5Cd58EfBB6Cf2dC2685d967b6</a>
                </td>
              </tr>
              <tr>
                <td>ProxysETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb">0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb</a>
                </td>
              </tr>
              <tr>
                <td>ProxysEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xD71eCFF9342A5Ced620049e616c5035F1dB98620">0xD71eCFF9342A5Ced620049e616c5035F1dB98620</a>
                </td>
              </tr>
              <tr>
                <td>ProxysGBP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x97fe22E7341a0Cd8Db6F6C021A24Dc8f4DAD855F">0x97fe22E7341a0Cd8Db6F6C021A24Dc8f4DAD855F</a>
                </td>
              </tr>
              <tr>
                <td>ProxysJPY</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xF6b1C627e95BFc3c1b4c9B825a032Ff0fBf3e07d">0xF6b1C627e95BFc3c1b4c9B825a032Ff0fBf3e07d</a>
                </td>
              </tr>
              <tr>
                <td>ProxysKRW</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x269895a3dF4D73b077Fc823dD6dA1B95f72Aaf9B">0x269895a3dF4D73b077Fc823dD6dA1B95f72Aaf9B</a>
                </td>
              </tr>
              <tr>
                <td>ProxysLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xbBC455cb4F1B9e4bFC4B73970d360c8f032EfEE6">0xbBC455cb4F1B9e4bFC4B73970d360c8f032EfEE6</a>
                </td>
              </tr>
              <tr>
                <td><span style="color: #AAA; text-decoration: line-through">ProxysUSD</span><sup>Use ProxyERC20sUSD</sup></td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x57Ab1ec28D129707052df4dF418D58a2D46d5f51">0x57Ab1ec28D129707052df4dF418D58a2D46d5f51</a>
                </td>
              </tr>
              <tr>
                <td>ReadProxyAddressResolver</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ReadProxy.sol">ReadProxy.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x4E3b31eB0E5CB73641EE1E65E7dCEFe520bA3ef2">0x4E3b31eB0E5CB73641EE1E65E7dCEFe520bA3ef2</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/RewardEscrow.sol">RewardEscrow.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xb671F2210B1F6621A2607EA63E6B2DC3e2464d1F">0xb671F2210B1F6621A2607EA63E6B2DC3e2464d1F</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrowV2</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/RewardEscrowV2.sol">RewardEscrowV2.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xDA4eF8520b1A57D7d63f1E249606D1A459698876">0xDA4eF8520b1A57D7d63f1E249606D1A459698876</a>
                </td>
              </tr>
              <tr>
                <td>RewardsDistribution</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/RewardsDistribution.sol">RewardsDistribution.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x29C295B046a73Cde593f21f63091B072d407e3F2">0x29C295B046a73Cde593f21f63091B072d407e3F2</a>
                </td>
              </tr>
              <tr>
                <td>SafeDecimalMath</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SafeDecimalMath.sol">SafeDecimalMath.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x84D626B2BB4D0F064067e4BF80FCe7055d8F3E7B">0x84D626B2BB4D0F064067e4BF80FCe7055d8F3E7B</a>
                </td>
              </tr>
              <tr>
                <td>ShortingRewardssBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ShortingRewards.sol">ShortingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xCed4055b47cfD0421f3727a35F69CE659c8bAF7a">0xCed4055b47cfD0421f3727a35F69CE659c8bAF7a</a>
                </td>
              </tr>
              <tr>
                <td>ShortingRewardssETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ShortingRewards.sol">ShortingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x12DC1273915A16ab8BD47bA7866B240c253e4c12">0x12DC1273915A16ab8BD47bA7866B240c253e4c12</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardsSNXBalancer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/StakingRewardsSNXBalancer.sol">StakingRewardsSNXBalancer.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xFBaEdde70732540cE2B11A8AC58Eb2dC0D69dE10">0xFBaEdde70732540cE2B11A8AC58Eb2dC0D69dE10</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardsiBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x167009dcDA2e49930a71712D956f02cc980DcC1b">0x167009dcDA2e49930a71712D956f02cc980DcC1b</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardsiETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x3f27c540ADaE3a9E8c875C61e3B970b559d7F65d">0x3f27c540ADaE3a9E8c875C61e3B970b559d7F65d</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssAAPLBalancer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x7af65f1740c0eB816A27FD808EaF6Ab09F6Fa646">0x7af65f1740c0eB816A27FD808EaF6Ab09F6Fa646</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssAMZNBalancer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xDC338C7544654c7dadFEb7E44076E457963113B0">0xDC338C7544654c7dadFEb7E44076E457963113B0</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssBTCCurve</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/StakingRewardssBTCCurve.sol">StakingRewardssBTCCurve.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x13C1542A468319688B89E323fe9A3Be3A90EBb27">0x13C1542A468319688B89E323fe9A3Be3A90EBb27</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssCOINBalancer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x1C1D97f6338759AB814a5A717aE359573Ab5D5d4">0x1C1D97f6338759AB814a5A717aE359573Ab5D5d4</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssETHUniswapV1</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/StakingRewardssETHUniswapV1.sol">StakingRewardssETHUniswapV1.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x48D7f315feDcaD332F68aafa017c7C158BC54760">0x48D7f315feDcaD332F68aafa017c7C158BC54760</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssEURCurve</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xc0d8994Cd78eE1980885DF1A0C5470fC977b5cFe">0xc0d8994Cd78eE1980885DF1A0C5470fC977b5cFe</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssFBBalancer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x26Fa0665660c1D3a3666584669511d3c66Ad37Cb">0x26Fa0665660c1D3a3666584669511d3c66Ad37Cb</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssGOOGBalancer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x6fB7F0E78582746bd01BcB6dfbFE62cA5F4F9175">0x6fB7F0E78582746bd01BcB6dfbFE62cA5F4F9175</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssMSFTBalancer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x9D003Cc298E7Ea141A809C241C0a703176DA3ba3">0x9D003Cc298E7Ea141A809C241C0a703176DA3ba3</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssNFLXBalancer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x8Ef8cA2AcAaAfEc19fB366C11561718357F780F2">0x8Ef8cA2AcAaAfEc19fB366C11561718357F780F2</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssTSLABalancer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xF0de877F2F9E7A60767f9BA662F10751566AD01c">0xF0de877F2F9E7A60767f9BA662F10751566AD01c</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssUSDCurve</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/StakingRewardssUSDCurve.sol">StakingRewardssUSDCurve.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xDCB6A51eA3CA5d3Fd898Fd6564757c7aAeC3ca92">0xDCB6A51eA3CA5d3Fd898Fd6564757c7aAeC3ca92</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssXAUUniswapV2</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/StakingRewardssXAUUniswapV2.sol">StakingRewardssXAUUniswapV2.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x8302FE9F0C509a996573D3Cc5B0D5D51e4FDD5eC">0x8302FE9F0C509a996573D3Cc5B0D5D51e4FDD5eC</a>
                </td>
              </tr>
              <tr>
                <td>SupplySchedule</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SupplySchedule.sol">SupplySchedule.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xA05e45396703BabAa9C276B5E5A9B6e2c175b521">0xA05e45396703BabAa9C276B5E5A9B6e2c175b521</a>
                </td>
              </tr>
              <tr>
                <td>SynthRedeemer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SynthRedeemer.sol">SynthRedeemer.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xe533139Af961c9747356D947838c98451015e234">0xe533139Af961c9747356D947838c98451015e234</a>
                </td>
              </tr>
              <tr>
                <td>SynthUtil</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SynthUtil.sol">SynthUtil.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x81Aee4EA48f678E172640fB5813cf7A96AFaF6C3">0x81Aee4EA48f678E172640fB5813cf7A96AFaF6C3</a>
                </td>
              </tr>
              <tr>
                <td>Synthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Synthetix.sol">Synthetix.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x54f25546260C7539088982bcF4b7dC8EDEF19f21">0x54f25546260C7539088982bcF4b7dC8EDEF19f21</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixBridgeEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SynthetixBridgeEscrow.sol">SynthetixBridgeEscrow.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x5Fd79D46EBA7F351fe49BFF9E87cdeA6c821eF9f">0x5Fd79D46EBA7F351fe49BFF9E87cdeA6c821eF9f</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixBridgeToOptimism</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SynthetixBridgeToOptimism.sol">SynthetixBridgeToOptimism.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xCd9D4988C0AE61887B075bA77f08cbFAd2b65068">0xCd9D4988C0AE61887B075bA77f08cbFAd2b65068</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SynthetixEscrow.sol">SynthetixEscrow.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x971e78e0C92392A4E39099835cF7E6aB535b2227">0x971e78e0C92392A4E39099835cF7E6aB535b2227</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SynthetixState.sol">SynthetixState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x4b9Ca5607f1fF8019c1C6A3c2f0CC8de622D5B82">0x4b9Ca5607f1fF8019c1C6A3c2f0CC8de622D5B82</a>
                </td>
              </tr>
              <tr>
                <td>SynthsAAVE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xaB38249f4f56Ef868F6b5E01D9cFa26B952c1270">0xaB38249f4f56Ef868F6b5E01D9cFa26B952c1270</a>
                </td>
              </tr>
              <tr>
                <td>SynthsADA</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xC22e51FA362654ea453B4018B616ef6f6ab3b779">0xC22e51FA362654ea453B4018B616ef6f6ab3b779</a>
                </td>
              </tr>
              <tr>
                <td>SynthsAUD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x37B648a07476F4941D3D647f81118AFd55fa8a04">0x37B648a07476F4941D3D647f81118AFd55fa8a04</a>
                </td>
              </tr>
              <tr>
                <td>SynthsBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xC8a5f06858a1B49A7F703EacD433A1444a5e5bd9">0xC8a5f06858a1B49A7F703EacD433A1444a5e5bd9</a>
                </td>
              </tr>
              <tr>
                <td>SynthsCHF</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xcf9bB94b5d65589039607BA66e3DAC686d3eFf01">0xcf9bB94b5d65589039607BA66e3DAC686d3eFf01</a>
                </td>
              </tr>
              <tr>
                <td>SynthsDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x46A7Af405093B27DA6DeF193C508Bd9240A255FA">0x46A7Af405093B27DA6DeF193C508Bd9240A255FA</a>
                </td>
              </tr>
              <tr>
                <td>SynthsDOT</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xfD0435A588BF5c5a6974BA19Fa627b772833d4eb">0xfD0435A588BF5c5a6974BA19Fa627b772833d4eb</a>
                </td>
              </tr>
              <tr>
                <td>SynthsETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xCFA46B4923c0E75B7b84E9FBde70ED26feFefBf6">0xCFA46B4923c0E75B7b84E9FBde70ED26feFefBf6</a>
                </td>
              </tr>
              <tr>
                <td>SynthsEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xC61b352fCc311Ae6B0301459A970150005e74b3E">0xC61b352fCc311Ae6B0301459A970150005e74b3E</a>
                </td>
              </tr>
              <tr>
                <td>SynthsGBP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xEF285D339c91aDf1dD7DE0aEAa6250805FD68258">0xEF285D339c91aDf1dD7DE0aEAa6250805FD68258</a>
                </td>
              </tr>
              <tr>
                <td>SynthsJPY</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x388fD1A8a7d36e03eFA1ab100a1c5159a3A3d427">0x388fD1A8a7d36e03eFA1ab100a1c5159a3A3d427</a>
                </td>
              </tr>
              <tr>
                <td>SynthsKRW</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xCeC4e038371d32212C6Dcdf36Fdbcb6F8a34C6d8">0xCeC4e038371d32212C6Dcdf36Fdbcb6F8a34C6d8</a>
                </td>
              </tr>
              <tr>
                <td>SynthsLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xcd980Fc5CcdAe62B18A52b83eC64200121A929db">0xcd980Fc5CcdAe62B18A52b83eC64200121A929db</a>
                </td>
              </tr>
              <tr>
                <td>SynthsUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x967968963517AFDC9b8Ccc9AD6649bC507E83a7b">0x967968963517AFDC9b8Ccc9AD6649bC507E83a7b</a>
                </td>
              </tr>
              <tr>
                <td>SystemSettings</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SystemSettings.sol">SystemSettings.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xD3C8d372bFCd36c2B452639a7ED6ef7dbFDC56F8">0xD3C8d372bFCd36c2B452639a7ED6ef7dbFDC56F8</a>
                </td>
              </tr>
              <tr>
                <td>SystemStatus</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SystemStatus.sol">SystemStatus.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x1c86B3CDF2a60Ae3a574f7f71d44E2C50BDdB87E">0x1c86B3CDF2a60Ae3a574f7f71d44E2C50BDdB87E</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateSynthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/LegacyTokenState.sol">LegacyTokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x5b1b5fEa1b99D83aD479dF0C222F0492385381dD">0x5b1b5fEa1b99D83aD479dF0C222F0492385381dD</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesAAVE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x9BcED8A8E3Ad81c9b146FFC880358f734A06f7c0">0x9BcED8A8E3Ad81c9b146FFC880358f734A06f7c0</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesADA</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x9956c5019a24fbd5B506AD070b771577bAc5c343">0x9956c5019a24fbd5B506AD070b771577bAc5c343</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesAUD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xCb29D2cf2C65d3Be1d00F07f3441390432D55203">0xCb29D2cf2C65d3Be1d00F07f3441390432D55203</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x4F6296455F8d754c19821cF1EC8FeBF2cD456E67">0x4F6296455F8d754c19821cF1EC8FeBF2cD456E67</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesCHF</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x52496fE8a4feaEFe14d9433E00D48E6929c13deC">0x52496fE8a4feaEFe14d9433E00D48E6929c13deC</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x7Ac2D37098a65B0f711CFfA3be635F1E6aCacFaB">0x7Ac2D37098a65B0f711CFfA3be635F1E6aCacFaB</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesDOT</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x73B1a2643507Cd30F11Dfcf2D974f4373E5BC077">0x73B1a2643507Cd30F11Dfcf2D974f4373E5BC077</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x34A5ef81d18F3a305aE9C2d7DF42beef4c79031c">0x34A5ef81d18F3a305aE9C2d7DF42beef4c79031c</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x6568D9e750fC44AF00f857885Dfb8281c00529c4">0x6568D9e750fC44AF00f857885Dfb8281c00529c4</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesGBP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x7e88D19A79b291cfE5696d496055f7e57F537A75">0x7e88D19A79b291cfE5696d496055f7e57F537A75</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesJPY</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x4dFACfB15514C21c991ff75Bc7Bf6Fb1F98361ed">0x4dFACfB15514C21c991ff75Bc7Bf6Fb1F98361ed</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesKRW</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x93B6e9FbBd2c32a0DC3C2B943B7C3CBC2fE23730">0x93B6e9FbBd2c32a0DC3C2B943B7C3CBC2fE23730</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x577D4a7395c6A5f46d9981a5F83fa7294926aBB0">0x577D4a7395c6A5f46d9981a5F83fa7294926aBB0</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x05a9CBe762B36632b3594DA4F082340E0e5343e8">0x05a9CBe762B36632b3594DA4F082340E0e5343e8</a>
                </td>
              </tr>
              <tr>
                <td>TradingRewards</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TradingRewards.sol">TradingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x62922670313bf6b41C580143d1f6C173C5C20019">0x62922670313bf6b41C580143d1f6C173C5C20019</a>
                </td>
              </tr>
              <tr>
                <td>VirtualSynthMastercopy</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/VirtualSynthMastercopy.sol">VirtualSynthMastercopy.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xf02ce48fD47D7FA1B7a45a0444805d320D035775">0xf02ce48fD47D7FA1B7a45a0444805d320D035775</a>
                </td>
              </tr></table>

## MAINNET Optimism (L2)

<table><tr><th>Name</th><th>Source</th><th>Address</th></tr>
              <tr>
                <td>AddressResolver</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/AddressResolver.sol">AddressResolver.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x95A6a3f44a70172E7d50a9e28c85Dfd712756B8C">0x95A6a3f44a70172E7d50a9e28c85Dfd712756B8C</a>
                </td>
              </tr>
              <tr>
                <td>CollateralManager</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/CollateralManager.sol">CollateralManager.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x15E7D4972a3E477878A5867A47617122BE2d1fF0">0x15E7D4972a3E477878A5867A47617122BE2d1fF0</a>
                </td>
              </tr>
              <tr>
                <td>CollateralManagerState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/CollateralManagerState.sol">CollateralManagerState.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0xbA10526cD8742acC73AedeF5f7Dbb2477Bf86922">0xbA10526cD8742acC73AedeF5f7Dbb2477Bf86922</a>
                </td>
              </tr>
              <tr>
                <td>CollateralShort</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/CollateralShort.sol">CollateralShort.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0xEbCe9728E2fDdC26C9f4B00df5180BdC5e184953">0xEbCe9728E2fDdC26C9f4B00df5180BdC5e184953</a>
                </td>
              </tr>
              <tr>
                <td>CollateralUtil</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/CollateralUtil.sol">CollateralUtil.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0xD21969A86Ce5c41aAb2D492a0F802AA3e015cd9A">0xD21969A86Ce5c41aAb2D492a0F802AA3e015cd9A</a>
                </td>
              </tr>
              <tr>
                <td>DappMaintenance</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/DappMaintenance.sol">DappMaintenance.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x54581A23F62D147AC76d454f0b3eF77F9D766058">0x54581A23F62D147AC76d454f0b3eF77F9D766058</a>
                </td>
              </tr>
              <tr>
                <td>DebtCache</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/DebtCache.sol">DebtCache.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0xBa32006fDCdc840f80cb9C8EC69C92f06e82E588">0xBa32006fDCdc840f80cb9C8EC69C92f06e82E588</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovals</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/DelegateApprovals.sol">DelegateApprovals.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x2A23bc0EA97A89abD91214E8e4d20F02Fe14743f">0x2A23bc0EA97A89abD91214E8e4d20F02Fe14743f</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovalsEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/EternalStorage.sol">EternalStorage.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x02f7fB66B55e6ca476d126d96f14c5732Eeb4363">0x02f7fB66B55e6ca476d126d96f14c5732Eeb4363</a>
                </td>
              </tr>
              <tr>
                <td>EscrowChecker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/EscrowChecker.sol">EscrowChecker.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0xcdb7D0a946223255d39A6e29B54f08f3291cc118">0xcdb7D0a946223255d39A6e29B54f08f3291cc118</a>
                </td>
              </tr>
              <tr>
                <td>EternalStorageLiquidations</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/EternalStorage.sol">EternalStorage.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x76d2de36936005A0182a1BB61dA501A8A044D477">0x76d2de36936005A0182a1BB61dA501A8A044D477</a>
                </td>
              </tr>
              <tr>
                <td>EtherCollateral</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/EmptyEtherCollateral.sol">EmptyEtherCollateral.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0xC8E91c926E04BE1cb94e51c5379d14774D51ae6C">0xC8E91c926E04BE1cb94e51c5379d14774D51ae6C</a>
                </td>
              </tr>
              <tr>
                <td>EtherCollateralsUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/EmptyEtherCollateral.sol">EmptyEtherCollateral.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0xC0c66470E766AE2026E6695966C56C90741811AA">0xC0c66470E766AE2026E6695966C56C90741811AA</a>
                </td>
              </tr>
              <tr>
                <td>EtherWrapper</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/EmptyEtherWrapper.sol">EmptyEtherWrapper.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0xc3Ee42caBD773A608fa9Ec951982c94BD6F33d59">0xc3Ee42caBD773A608fa9Ec951982c94BD6F33d59</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeRates</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ExchangeRatesWithoutInvPricing.sol">ExchangeRatesWithoutInvPricing.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x631E93A0fb06B5eC6d52c0A2D89a3f9672d6Ba64">0x631E93A0fb06B5eC6d52c0A2D89a3f9672d6Ba64</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ExchangeState.sol">ExchangeState.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x7EF87c14f50CFFe2e73d2C87916C3128c56593A8">0x7EF87c14f50CFFe2e73d2C87916C3128c56593A8</a>
                </td>
              </tr>
              <tr>
                <td>Exchanger</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Exchanger.sol">Exchanger.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0xFe06fbe87E9f705B5D337D82dF8Fd812774974F9">0xFe06fbe87E9f705B5D337D82dF8Fd812774974F9</a>
                </td>
              </tr>
              <tr>
                <td>FeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/FeePool.sol">FeePool.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0xc53E9375A77bD98eb0068559bC56C8D6cEA254fA">0xc53E9375A77bD98eb0068559bC56C8D6cEA254fA</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/FeePoolEternalStorage.sol">FeePoolEternalStorage.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x41140Bf6498a36f2E44eFd49f21dAe3bbb7367c8">0x41140Bf6498a36f2E44eFd49f21dAe3bbb7367c8</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/FeePoolState.sol">FeePoolState.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x6e0d26cffc3a63d763F1546f749bf62ebC7d72D8">0x6e0d26cffc3a63d763F1546f749bf62ebC7d72D8</a>
                </td>
              </tr>
              <tr>
                <td>FlexibleStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/FlexibleStorage.sol">FlexibleStorage.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x47649022380d182DA8010Ae5d257fea4227b21ff">0x47649022380d182DA8010Ae5d257fea4227b21ff</a>
                </td>
              </tr>
              <tr>
                <td>Issuer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/IssuerWithoutLiquidations.sol">IssuerWithoutLiquidations.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x3Ae7F9091CB429464707b61398b5cfDCD2a25981">0x3Ae7F9091CB429464707b61398b5cfDCD2a25981</a>
                </td>
              </tr>
              <tr>
                <td>Liquidations</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Liquidations.sol">Liquidations.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x14E6f8e6Da00a32C069b11b64e48EA1FEF2361D4">0x14E6f8e6Da00a32C069b11b64e48EA1FEF2361D4</a>
                </td>
              </tr>
              <tr>
                <td>Math</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Math.sol">Math.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x0B3A73EE0740b3130e40B2A6b5aaf59E7E3Ef74c">0x0B3A73EE0740b3130e40B2A6b5aaf59E7E3Ef74c</a>
                </td>
              </tr>
              <tr>
                <td>ProxyERC20</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4">0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4</a>
                </td>
              </tr>
              <tr>
                <td>ProxyERC20sUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9">0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9</a>
                </td>
              </tr>
              <tr>
                <td>ProxyFeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x4a16A42407AA491564643E1dfc1fd50af29794eF">0x4a16A42407AA491564643E1dfc1fd50af29794eF</a>
                </td>
              </tr>
              <tr>
                <td><span style="color: #AAA; text-decoration: line-through">ProxySynthetix</span><sup>Use ProxyERC20</sup></td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x218067172e9E0460A883458D44BD1f56ea609502">0x218067172e9E0460A883458D44BD1f56ea609502</a>
                </td>
              </tr>
              <tr>
                <td>ProxysBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x298B9B95708152ff6968aafd889c6586e9169f1D">0x298B9B95708152ff6968aafd889c6586e9169f1D</a>
                </td>
              </tr>
              <tr>
                <td>ProxysETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0xE405de8F52ba7559f9df3C368500B6E6ae6Cee49">0xE405de8F52ba7559f9df3C368500B6E6ae6Cee49</a>
                </td>
              </tr>
              <tr>
                <td>ProxysLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0xc5Db22719A06418028A40A9B5E9A7c02959D0d08">0xc5Db22719A06418028A40A9B5E9A7c02959D0d08</a>
                </td>
              </tr>
              <tr>
                <td><span style="color: #AAA; text-decoration: line-through">ProxysUSD</span><sup>Use ProxyERC20sUSD</sup></td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0xbecc58c6D7Ca71b6FCC4cC8c9c5294A0eA7A0397">0xbecc58c6D7Ca71b6FCC4cC8c9c5294A0eA7A0397</a>
                </td>
              </tr>
              <tr>
                <td>ReadProxyAddressResolver</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ReadProxy.sol">ReadProxy.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x1Cb059b7e74fD21665968C908806143E744D5F30">0x1Cb059b7e74fD21665968C908806143E744D5F30</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/RewardEscrow.sol">RewardEscrow.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0xd32138018210edA0028240638f35b70ECC0D8C22">0xd32138018210edA0028240638f35b70ECC0D8C22</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrowV2</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ImportableRewardEscrowV2.sol">ImportableRewardEscrowV2.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x47eE58801C1AC44e54FF2651aE50525c5cfc66d0">0x47eE58801C1AC44e54FF2651aE50525c5cfc66d0</a>
                </td>
              </tr>
              <tr>
                <td>RewardsDistribution</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/RewardsDistribution.sol">RewardsDistribution.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x5d9187630E99dBce4BcAB8733B76757f7F44aA2e">0x5d9187630E99dBce4BcAB8733B76757f7F44aA2e</a>
                </td>
              </tr>
              <tr>
                <td>SafeDecimalMath</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SafeDecimalMath.sol">SafeDecimalMath.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x0142F40c25CE1F1177Ed131101FA19217396cB88">0x0142F40c25CE1F1177Ed131101FA19217396cB88</a>
                </td>
              </tr>
              <tr>
                <td>SynthRedeemer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SynthRedeemer.sol">SynthRedeemer.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0xA997BD647AEe62Ef03b41e6fBFAdaB43d8E57535">0xA997BD647AEe62Ef03b41e6fBFAdaB43d8E57535</a>
                </td>
              </tr>
              <tr>
                <td>SynthUtil</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SynthUtil.sol">SynthUtil.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x87b1481c82913301Fc6c884Ac266a7c430F92cFA">0x87b1481c82913301Fc6c884Ac266a7c430F92cFA</a>
                </td>
              </tr>
              <tr>
                <td>Synthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/MintableSynthetix.sol">MintableSynthetix.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0xff4287311138ad3BD051F84524B2eA3A682944a5">0xff4287311138ad3BD051F84524B2eA3A682944a5</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixBridgeToBase</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SynthetixBridgeToBase.sol">SynthetixBridgeToBase.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x3f87Ff1de58128eF8FCb4c807eFD776E1aC72E51">0x3f87Ff1de58128eF8FCb4c807eFD776E1aC72E51</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SynthetixEscrow.sol">SynthetixEscrow.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x06C6D063896ac733673c4474E44d9268f2402A55">0x06C6D063896ac733673c4474E44d9268f2402A55</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SynthetixStateWithLimitedSetup.sol">SynthetixStateWithLimitedSetup.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x9770239D49Db97E77fc5Adcb5413654C9e45A510">0x9770239D49Db97E77fc5Adcb5413654C9e45A510</a>
                </td>
              </tr>
              <tr>
                <td>SynthsBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x58B453f01966CEe805CE12F9B2138E7B0c46Ce99">0x58B453f01966CEe805CE12F9B2138E7B0c46Ce99</a>
                </td>
              </tr>
              <tr>
                <td>SynthsETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x0ea0902950aa58b19Ed1876901B843cd2f85a8E9">0x0ea0902950aa58b19Ed1876901B843cd2f85a8E9</a>
                </td>
              </tr>
              <tr>
                <td>SynthsLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0xC806963F83D0B7ad3B96F59B0f7a77E5D2BBB57D">0xC806963F83D0B7ad3B96F59B0f7a77E5D2BBB57D</a>
                </td>
              </tr>
              <tr>
                <td>SynthsUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x7Eb21e5eF2D8bB3804380D02a5FE0487DcBfe184">0x7Eb21e5eF2D8bB3804380D02a5FE0487DcBfe184</a>
                </td>
              </tr>
              <tr>
                <td>SystemSettings</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SystemSettings.sol">SystemSettings.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x8f571a7bD9924e25a3d2aC0B7F721C5Ed675c3c8">0x8f571a7bD9924e25a3d2aC0B7F721C5Ed675c3c8</a>
                </td>
              </tr>
              <tr>
                <td>SystemStatus</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SystemStatus.sol">SystemStatus.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0xf83c5f65dBef4017CD19Ae99b15E1B8649AdbEb4">0xf83c5f65dBef4017CD19Ae99b15E1B8649AdbEb4</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateSynthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0xB9c6CA25452E7f6D0D3340CE1e9B573421afc2eE">0xB9c6CA25452E7f6D0D3340CE1e9B573421afc2eE</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0xA9E630952522E3F110322711F424528Af894e307">0xA9E630952522E3F110322711F424528Af894e307</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0xEc3665F7e696b0Ad0D04Ae5161b18782D48cd1fd">0xEc3665F7e696b0Ad0D04Ae5161b18782D48cd1fd</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x08a008eEA07d3cC7ca1913EEC3468C10F8F79e6A">0x08a008eEA07d3cC7ca1913EEC3468C10F8F79e6A</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x92bAc115d89cA17fd02Ed9357CEcA32842ACB4c2">0x92bAc115d89cA17fd02Ed9357CEcA32842ACB4c2</a>
                </td>
              </tr>
              <tr>
                <td>TradingRewards</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TradingRewards.sol">TradingRewards.sol</a></td>
                <td><a target="_blank" href="https://explorer.optimism.io/address/0x2DcAD1A019fba8301b77810Ae14007cc88ED004B">0x2DcAD1A019fba8301b77810Ae14007cc88ED004B</a>
                </td>
              </tr></table>

## KOVAN

<table><tr><th>Name</th><th>Source</th><th>Address</th></tr>
              <tr>
                <td>AddressResolver</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/AddressResolver.sol">AddressResolver.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x84f87E3636Aa9cC1080c07E6C61aDfDCc23c0db6">0x84f87E3636Aa9cC1080c07E6C61aDfDCc23c0db6</a>
                </td>
              </tr>
              <tr>
                <td>CollateralErc20</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/CollateralErc20.sol">CollateralErc20.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x5AD5469D8A1Eee2cF7c8B8205CbeD95A032cdff3">0x5AD5469D8A1Eee2cF7c8B8205CbeD95A032cdff3</a>
                </td>
              </tr>
              <tr>
                <td>CollateralEth</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/CollateralEth.sol">CollateralEth.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xdFd01d828D34982DFE882B9fDC6DC17fcCA33C25">0xdFd01d828D34982DFE882B9fDC6DC17fcCA33C25</a>
                </td>
              </tr>
              <tr>
                <td>CollateralManager</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/CollateralManager.sol">CollateralManager.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x53baE964339e8A742B5b47F6C10bbfa8Ff138F34">0x53baE964339e8A742B5b47F6C10bbfa8Ff138F34</a>
                </td>
              </tr>
              <tr>
                <td>CollateralManagerState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/CollateralManagerState.sol">CollateralManagerState.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x8D65Ed88D6162a2b3B5F71c45D433d4aeAc93065">0x8D65Ed88D6162a2b3B5F71c45D433d4aeAc93065</a>
                </td>
              </tr>
              <tr>
                <td>CollateralShort</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/CollateralShort.sol">CollateralShort.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x9712DdCC43F42402acC483e297eeFf650d18D354">0x9712DdCC43F42402acC483e297eeFf650d18D354</a>
                </td>
              </tr>
              <tr>
                <td>CollateralStateErc20</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/CollateralState.sol">CollateralState.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x04C3f6207BE48De777967eB1886469E4E268FE07">0x04C3f6207BE48De777967eB1886469E4E268FE07</a>
                </td>
              </tr>
              <tr>
                <td>CollateralStateEth</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/CollateralState.sol">CollateralState.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x4B58bbB4Ff947315b558904fDcEbbdA65b9523aD">0x4B58bbB4Ff947315b558904fDcEbbdA65b9523aD</a>
                </td>
              </tr>
              <tr>
                <td>CollateralStateShort</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/CollateralState.sol">CollateralState.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xd74E3A605A1a7A8a83D25DF00D4057985E3CAC30">0xd74E3A605A1a7A8a83D25DF00D4057985E3CAC30</a>
                </td>
              </tr>
              <tr>
                <td>DappMaintenance</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/DappMaintenance.sol">DappMaintenance.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x28B624Ef2284749AEBF3dA3c7f5E287F716D1935">0x28B624Ef2284749AEBF3dA3c7f5E287F716D1935</a>
                </td>
              </tr>
              <tr>
                <td>DebtCache</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/DebtCache.sol">DebtCache.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xC32FE0748564F750084C8f39167A71a91B425417">0xC32FE0748564F750084C8f39167A71a91B425417</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovals</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/DelegateApprovals.sol">DelegateApprovals.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xB8CFB40B4c66533cD8f760c1b15cc228452bB03E">0xB8CFB40B4c66533cD8f760c1b15cc228452bB03E</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovalsEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/EternalStorage.sol">EternalStorage.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x3C11FE34E416eDA134D30f7550f2986BDF8B5c08">0x3C11FE34E416eDA134D30f7550f2986BDF8B5c08</a>
                </td>
              </tr>
              <tr>
                <td>Depot</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Depot.sol">Depot.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xF92e70301E26AaDeCCEc5016b7D0167DAF416d72">0xF92e70301E26AaDeCCEc5016b7D0167DAF416d72</a>
                </td>
              </tr>
              <tr>
                <td>EscrowChecker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/EscrowChecker.sol">EscrowChecker.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xF778Ec504245EfE1eA010C5C3E50b6F5f5E117da">0xF778Ec504245EfE1eA010C5C3E50b6F5f5E117da</a>
                </td>
              </tr>
              <tr>
                <td>EternalStorageLiquidations</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/EternalStorage.sol">EternalStorage.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x5D4A4B51A824E2dD1C25aD16023Bf8FF3F648602">0x5D4A4B51A824E2dD1C25aD16023Bf8FF3F648602</a>
                </td>
              </tr>
              <tr>
                <td>EtherWrapper</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/EtherWrapper.sol">EtherWrapper.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x44Af736495544a726ED15CB0EBe2d87a6bCC1832">0x44Af736495544a726ED15CB0EBe2d87a6bCC1832</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeRates</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ExchangeRates.sol">ExchangeRates.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xC9985cAc4a69588Da66F74E42845B784798fe5aB">0xC9985cAc4a69588Da66F74E42845B784798fe5aB</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ExchangeState.sol">ExchangeState.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xa3F59b8E28cABC4411198dDa2e65C380BD5d6Dfe">0xa3F59b8E28cABC4411198dDa2e65C380BD5d6Dfe</a>
                </td>
              </tr>
              <tr>
                <td>Exchanger</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ExchangerWithVirtualSynth.sol">ExchangerWithVirtualSynth.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xa7679E25A6DF152691AE8Dbd147E88f0974D6f5A">0xa7679E25A6DF152691AE8Dbd147E88f0974D6f5A</a>
                </td>
              </tr>
              <tr>
                <td>FeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/FeePool.sol">FeePool.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x660F51083E8c8eC1aD2771bDAa4104B84b1A793E">0x660F51083E8c8eC1aD2771bDAa4104B84b1A793E</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/FeePoolEternalStorage.sol">FeePoolEternalStorage.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x7bB8B3Cc191600547b9467639aD397c05AF3ce8D">0x7bB8B3Cc191600547b9467639aD397c05AF3ce8D</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/FeePoolState.sol">FeePoolState.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x78b70223d9Fa1a0abE6cD967472Fa04fEf3C7586">0x78b70223d9Fa1a0abE6cD967472Fa04fEf3C7586</a>
                </td>
              </tr>
              <tr>
                <td>FlexibleStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/FlexibleStorage.sol">FlexibleStorage.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xB1751e5EdE811288cE2fc4c65aaCA17A955366be">0xB1751e5EdE811288cE2fc4c65aaCA17A955366be</a>
                </td>
              </tr>
              <tr>
                <td>IssuanceEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/IssuanceEternalStorage.sol">IssuanceEternalStorage.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xe66000ee63050461Fe930E6F5A3456A735dC86A1">0xe66000ee63050461Fe930E6F5A3456A735dC86A1</a>
                </td>
              </tr>
              <tr>
                <td>Issuer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Issuer.sol">Issuer.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xd6EA9A708a95FdaE3f6dAE49F3131e833e671108">0xd6EA9A708a95FdaE3f6dAE49F3131e833e671108</a>
                </td>
              </tr>
              <tr>
                <td>Liquidations</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Liquidations.sol">Liquidations.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x9880cfA7B81E8841e216ebB32687A2c9551ae333">0x9880cfA7B81E8841e216ebB32687A2c9551ae333</a>
                </td>
              </tr>
              <tr>
                <td>Math</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Math.sol">Math.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x2cAaB90c2D4328E32baB3e2fAdf84cEd1DD229F6">0x2cAaB90c2D4328E32baB3e2fAdf84cEd1DD229F6</a>
                </td>
              </tr>
              <tr>
                <td>NativeEtherWrapper</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/NativeEtherWrapper.sol">NativeEtherWrapper.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x5814d3c40a5A951EFdb4A37Bd93f4407450Cd424">0x5814d3c40a5A951EFdb4A37Bd93f4407450Cd424</a>
                </td>
              </tr>
              <tr>
                <td>ProxyERC20</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F">0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F</a>
                </td>
              </tr>
              <tr>
                <td>ProxyERC20sUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x57Ab1ec28D129707052df4dF418D58a2D46d5f51">0x57Ab1ec28D129707052df4dF418D58a2D46d5f51</a>
                </td>
              </tr>
              <tr>
                <td>ProxyFeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xc43b833F93C3896472dED3EfF73311f571e38742">0xc43b833F93C3896472dED3EfF73311f571e38742</a>
                </td>
              </tr>
              <tr>
                <td><span style="color: #AAA; text-decoration: line-through">ProxySynthetix</span><sup>Use ProxyERC20</sup></td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x22f1ba6dB6ca0A065e1b7EAe6FC22b7E675310EF">0x22f1ba6dB6ca0A065e1b7EAe6FC22b7E675310EF</a>
                </td>
              </tr>
              <tr>
                <td>ProxysAUD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x4e5D412141145767F7db90c22bd0240a85da0B73">0x4e5D412141145767F7db90c22bd0240a85da0B73</a>
                </td>
              </tr>
              <tr>
                <td>ProxysBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x3Aa2d4A15aA7F50158DEEAE0208F862a461f19Cf">0x3Aa2d4A15aA7F50158DEEAE0208F862a461f19Cf</a>
                </td>
              </tr>
              <tr>
                <td>ProxysCHF</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x8E23100f9C9bd442f5bAc6A927f49B284E390Df4">0x8E23100f9C9bd442f5bAc6A927f49B284E390Df4</a>
                </td>
              </tr>
              <tr>
                <td>ProxysDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xf91b2d345838922b26c8899483be3f867eeaFAb5">0xf91b2d345838922b26c8899483be3f867eeaFAb5</a>
                </td>
              </tr>
              <tr>
                <td>ProxysETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x54c4B5cb58C880DD1734123c8b588e49eDf442Fb">0x54c4B5cb58C880DD1734123c8b588e49eDf442Fb</a>
                </td>
              </tr>
              <tr>
                <td>ProxysEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x57E8Bd85F3d8De4557739bc3C5ee0f4bfC931528">0x57E8Bd85F3d8De4557739bc3C5ee0f4bfC931528</a>
                </td>
              </tr>
              <tr>
                <td>ProxysGBP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x41d49b1ac182C9d2c8dDf8b450342DE2Ac03aC19">0x41d49b1ac182C9d2c8dDf8b450342DE2Ac03aC19</a>
                </td>
              </tr>
              <tr>
                <td>ProxysJPY</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xCcC5c7625c90FC93D2508723e60281E6DE535166">0xCcC5c7625c90FC93D2508723e60281E6DE535166</a>
                </td>
              </tr>
              <tr>
                <td>ProxysKRW</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xb02C0F5D8fDAD1242dceca095328dc8213A8349C">0xb02C0F5D8fDAD1242dceca095328dc8213A8349C</a>
                </td>
              </tr>
              <tr>
                <td>ProxysLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x3a4A90a2D8cBA26F2e32C4a6e6d01ffBfCE8DBB4">0x3a4A90a2D8cBA26F2e32C4a6e6d01ffBfCE8DBB4</a>
                </td>
              </tr>
              <tr>
                <td><span style="color: #AAA; text-decoration: line-through">ProxysUSD</span><sup>Use ProxyERC20sUSD</sup></td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xC674ad732Dfd4E1359ec4B18fA5472c0747E480A">0xC674ad732Dfd4E1359ec4B18fA5472c0747E480A</a>
                </td>
              </tr>
              <tr>
                <td>ReadProxyAddressResolver</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ReadProxy.sol">ReadProxy.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x242a3DF52c375bEe81b1c668741D7c63aF68FDD2">0x242a3DF52c375bEe81b1c668741D7c63aF68FDD2</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/RewardEscrow.sol">RewardEscrow.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x8c6680412e914932A9abC02B6c7cbf690e583aFA">0x8c6680412e914932A9abC02B6c7cbf690e583aFA</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrowV2</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/RewardEscrowV2.sol">RewardEscrowV2.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x64ac15AB583fFfA6a7401B83E3aA5cf4Ad1aA92A">0x64ac15AB583fFfA6a7401B83E3aA5cf4Ad1aA92A</a>
                </td>
              </tr>
              <tr>
                <td>RewardsDistribution</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/RewardsDistribution.sol">RewardsDistribution.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xD29160e4f5D2e5818041f9Cd9192853BA349c47E">0xD29160e4f5D2e5818041f9Cd9192853BA349c47E</a>
                </td>
              </tr>
              <tr>
                <td>SafeDecimalMath</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SafeDecimalMath.sol">SafeDecimalMath.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x1A60E2E2A8BE0BC2B6381dd31Fd3fD5F9A28dE4c">0x1A60E2E2A8BE0BC2B6381dd31Fd3fD5F9A28dE4c</a>
                </td>
              </tr>
              <tr>
                <td>ShortingRewardssBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ShortingRewards.sol">ShortingRewards.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xCEECB8D9c19Abe84E13a2B6De3F5aD6e2991FE6d">0xCEECB8D9c19Abe84E13a2B6De3F5aD6e2991FE6d</a>
                </td>
              </tr>
              <tr>
                <td>ShortingRewardssETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ShortingRewards.sol">ShortingRewards.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x945d2dfFEE2d478D3D32E0f42b9649D1cbAe5528">0x945d2dfFEE2d478D3D32E0f42b9649D1cbAe5528</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardsiBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x72Bfefac12fAbC2224fE66d7840E8134BEf95e39">0x72Bfefac12fAbC2224fE66d7840E8134BEf95e39</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardsiETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x347E15f035B4645C6E330d758F73eC3AD2bFa5B5">0x347E15f035B4645C6E330d758F73eC3AD2bFa5B5</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardsiETH2</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xbd700862ef238028E3C28D0670851eA1230ac7B1">0xbd700862ef238028E3C28D0670851eA1230ac7B1</a>
                </td>
              </tr>
              <tr>
                <td>SupplySchedule</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SupplySchedule.sol">SupplySchedule.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x3728543A1e0ca98FFC0A979cF817C95b6F8d9E7b">0x3728543A1e0ca98FFC0A979cF817C95b6F8d9E7b</a>
                </td>
              </tr>
              <tr>
                <td>SynthRedeemer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SynthRedeemer.sol">SynthRedeemer.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xFa01a0494913b150Dd37CbE1fF775B08f108dEEa">0xFa01a0494913b150Dd37CbE1fF775B08f108dEEa</a>
                </td>
              </tr>
              <tr>
                <td>SynthUtil</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SynthUtil.sol">SynthUtil.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xC88AE3be40CAa09CD16Db5816e6145E0E929c93c">0xC88AE3be40CAa09CD16Db5816e6145E0E929c93c</a>
                </td>
              </tr>
              <tr>
                <td>Synthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Synthetix.sol">Synthetix.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x9CAa994c1de15B13bb9b1C435305AE1e548E0721">0x9CAa994c1de15B13bb9b1C435305AE1e548E0721</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixBridgeEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SynthetixBridgeEscrow.sol">SynthetixBridgeEscrow.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xFdB31235cDFe68bfFD1d687AC3A2b31E80eacf0d">0xFdB31235cDFe68bfFD1d687AC3A2b31E80eacf0d</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixBridgeToOptimism</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SynthetixBridgeToOptimism.sol">SynthetixBridgeToOptimism.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xD134Db47DDF5A6feB245452af17cCAf92ee53D3c">0xD134Db47DDF5A6feB245452af17cCAf92ee53D3c</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SynthetixEscrow.sol">SynthetixEscrow.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x548c18a49a66Ad1238e17824C18B0b9Be35fB604">0x548c18a49a66Ad1238e17824C18B0b9Be35fB604</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SynthetixState.sol">SynthetixState.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xAfcBC491B67c01B40f6c077EF53488876a0a0D6E">0xAfcBC491B67c01B40f6c077EF53488876a0a0D6E</a>
                </td>
              </tr>
              <tr>
                <td>SynthsAUD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x2a6BCfE6Ef91a7679053875a540737636Ec30E4f">0x2a6BCfE6Ef91a7679053875a540737636Ec30E4f</a>
                </td>
              </tr>
              <tr>
                <td>SynthsBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xe9bC4e7AE355c88724C5d43BD89fBDB118B95eb0">0xe9bC4e7AE355c88724C5d43BD89fBDB118B95eb0</a>
                </td>
              </tr>
              <tr>
                <td>SynthsCHF</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x857f40aa756e93816a9Fa5ce378762ec8bD13278">0x857f40aa756e93816a9Fa5ce378762ec8bD13278</a>
                </td>
              </tr>
              <tr>
                <td>SynthsDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x130613411D53076923Af9bA1d830205b34126d76">0x130613411D53076923Af9bA1d830205b34126d76</a>
                </td>
              </tr>
              <tr>
                <td>SynthsETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x75dc07eF40b3fC1045E25EE2bf3FfDD9BE4cCD68">0x75dc07eF40b3fC1045E25EE2bf3FfDD9BE4cCD68</a>
                </td>
              </tr>
              <tr>
                <td>SynthsEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x0F126120C20A4d696D8D27516C579a605536ba16">0x0F126120C20A4d696D8D27516C579a605536ba16</a>
                </td>
              </tr>
              <tr>
                <td>SynthsGBP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xeF71dd8EB832D574D35cCBD23cC9e5cde43f92De">0xeF71dd8EB832D574D35cCBD23cC9e5cde43f92De</a>
                </td>
              </tr>
              <tr>
                <td>SynthsJPY</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x88021D729298B0D8F59581388b49eAaA2A5CE1D2">0x88021D729298B0D8F59581388b49eAaA2A5CE1D2</a>
                </td>
              </tr>
              <tr>
                <td>SynthsKRW</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xF7631453c32b8278a5c8bbcC9Fe4c3072d6c25B6">0xF7631453c32b8278a5c8bbcC9Fe4c3072d6c25B6</a>
                </td>
              </tr>
              <tr>
                <td>SynthsLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xf4435125fEAC75600d8CC502710A7c4F702E4180">0xf4435125fEAC75600d8CC502710A7c4F702E4180</a>
                </td>
              </tr>
              <tr>
                <td>SynthsUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x4e890A2aee91ddcaef97410cB45D4C6cBCA583B0">0x4e890A2aee91ddcaef97410cB45D4C6cBCA583B0</a>
                </td>
              </tr>
              <tr>
                <td>SystemSettings</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SystemSettings.sol">SystemSettings.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x48079E5a2A9BE87676C84F52Fed2b02C376AdE17">0x48079E5a2A9BE87676C84F52Fed2b02C376AdE17</a>
                </td>
              </tr>
              <tr>
                <td>SystemStatus</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SystemStatus.sol">SystemStatus.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xcf8B3d452A56Dab495dF84905655047BC1Dc41Bc">0xcf8B3d452A56Dab495dF84905655047BC1Dc41Bc</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateSynthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x46824bFAaFd049fB0Af9a45159A88e595Bbbb9f7">0x46824bFAaFd049fB0Af9a45159A88e595Bbbb9f7</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesAUD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xDDEfe42790f2dEC7b0C37D4399884eFceA5361b1">0xDDEfe42790f2dEC7b0C37D4399884eFceA5361b1</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x029E1687c7BB8ead5Ab02DB390eB82b87b2D54a2">0x029E1687c7BB8ead5Ab02DB390eB82b87b2D54a2</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesCHF</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xEf58E3aC7F34649B640fb04188642B5e062Fa3Be">0xEf58E3aC7F34649B640fb04188642B5e062Fa3Be</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xa8eE3730031f28a4a4a3Ed28A3308d83cabd9Ce1">0xa8eE3730031f28a4a4a3Ed28A3308d83cabd9Ce1</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xFbB6526ed92DA8915d4843a86166020d0B7bAAd0">0xFbB6526ed92DA8915d4843a86166020d0B7bAAd0</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x4f719F0346636B9Dc23B092F637de2A66A254420">0x4f719F0346636B9Dc23B092F637de2A66A254420</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesGBP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x3DdF5dAd59F8F8e8f957709B044eE84e87B42e25">0x3DdF5dAd59F8F8e8f957709B044eE84e87B42e25</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesJPY</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x310705B7FecA92C2445D7471706e058653D9f989">0x310705B7FecA92C2445D7471706e058653D9f989</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesKRW</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x780476375FEE186824Bdabc9bDA71433017Fd591">0x780476375FEE186824Bdabc9bDA71433017Fd591</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x89656EF0A87fD947A181189209F6525E91D91f46">0x89656EF0A87fD947A181189209F6525E91D91f46</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x9aF5763Dc180f388A5fd20Dd7BA4B2790566f2eF">0x9aF5763Dc180f388A5fd20Dd7BA4B2790566f2eF</a>
                </td>
              </tr>
              <tr>
                <td>TradingRewards</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TradingRewards.sol">TradingRewards.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0xBBfAd9112203b943f26320B330B75BABF6e2aF2a">0xBBfAd9112203b943f26320B330B75BABF6e2aF2a</a>
                </td>
              </tr>
              <tr>
                <td>VirtualSynthMastercopy</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/VirtualSynthMastercopy.sol">VirtualSynthMastercopy.sol</a></td>
                <td><a target="_blank" href="https://kovan.etherscan.io/address/0x1f6b96d2e7a5D70777D2A9c52215044FB3f40D37">0x1f6b96d2e7a5D70777D2A9c52215044FB3f40D37</a>
                </td>
              </tr></table>

## KOVAN Optimism (L2)

<table><tr><th>Name</th><th>Source</th><th>Address</th></tr>
              <tr>
                <td>AddressResolver</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/AddressResolver.sol">AddressResolver.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0xb08b62e1cdfd37eCCd69A9ACe67322CCF801b3A6">0xb08b62e1cdfd37eCCd69A9ACe67322CCF801b3A6</a>
                </td>
              </tr>
              <tr>
                <td>CollateralManager</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/CollateralManager.sol">CollateralManager.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0xd98Ca2C4EFeFADC5Fe1e80ee4b872086E3Eac01C">0xd98Ca2C4EFeFADC5Fe1e80ee4b872086E3Eac01C</a>
                </td>
              </tr>
              <tr>
                <td>CollateralManagerState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/CollateralManagerState.sol">CollateralManagerState.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x295d99c1464f505eEE9DBFDBb1D1f0055d39212d">0x295d99c1464f505eEE9DBFDBb1D1f0055d39212d</a>
                </td>
              </tr>
              <tr>
                <td>CollateralShort</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/CollateralShort.sol">CollateralShort.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0xD170549da4115c39EC42D6101eAAE5604F26150d">0xD170549da4115c39EC42D6101eAAE5604F26150d</a>
                </td>
              </tr>
              <tr>
                <td>CollateralUtil</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/CollateralUtil.sol">CollateralUtil.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x5c9AD159E8fC9DC2dD081872dA56961e0B43d6AD">0x5c9AD159E8fC9DC2dD081872dA56961e0B43d6AD</a>
                </td>
              </tr>
              <tr>
                <td>DappMaintenance</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/DappMaintenance.sol">DappMaintenance.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0xCDe046E1c635d2D9F69E2081d46732d249c8465F">0xCDe046E1c635d2D9F69E2081d46732d249c8465F</a>
                </td>
              </tr>
              <tr>
                <td>DebtCache</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/DebtCache.sol">DebtCache.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0xFC6D35EB364951953FD86bb8A1a5b0ba8Cbb6Eb2">0xFC6D35EB364951953FD86bb8A1a5b0ba8Cbb6Eb2</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovals</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/DelegateApprovals.sol">DelegateApprovals.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0xC9B552d3d395ae89646275C1591c40FA9EB950f6">0xC9B552d3d395ae89646275C1591c40FA9EB950f6</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovalsEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/EternalStorage.sol">EternalStorage.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0xF43B4931749139AB1e7a85d50df5762481d80bEC">0xF43B4931749139AB1e7a85d50df5762481d80bEC</a>
                </td>
              </tr>
              <tr>
                <td>EscrowChecker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/EscrowChecker.sol">EscrowChecker.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x23bB1e0975161077F16Dd34F28780720aC356C56">0x23bB1e0975161077F16Dd34F28780720aC356C56</a>
                </td>
              </tr>
              <tr>
                <td>EternalStorageLiquidations</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/EternalStorage.sol">EternalStorage.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x38a322dB8dBa2b78B622e5224611de33b8cf6480">0x38a322dB8dBa2b78B622e5224611de33b8cf6480</a>
                </td>
              </tr>
              <tr>
                <td>EtherCollateral</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/EmptyEtherCollateral.sol">EmptyEtherCollateral.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x1F93B9a8d1F3582697F17471207D707f7C519E38">0x1F93B9a8d1F3582697F17471207D707f7C519E38</a>
                </td>
              </tr>
              <tr>
                <td>EtherCollateralsUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/EmptyEtherCollateral.sol">EmptyEtherCollateral.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x4c22BC6FC957efb8D6737982e522950e77F0F47f">0x4c22BC6FC957efb8D6737982e522950e77F0F47f</a>
                </td>
              </tr>
              <tr>
                <td>EtherWrapper</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/EmptyEtherWrapper.sol">EmptyEtherWrapper.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0xc57207f9b20eC58600a674a3e9FE104B9c1caB61">0xc57207f9b20eC58600a674a3e9FE104B9c1caB61</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeRates</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ExchangeRatesWithoutInvPricing.sol">ExchangeRatesWithoutInvPricing.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x686cbD15BBC680F8261c7502c360Aa44A2593de6">0x686cbD15BBC680F8261c7502c360Aa44A2593de6</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ExchangeState.sol">ExchangeState.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0xEf8a2c1BC94e630463293F71bF5414d13e80F62D">0xEf8a2c1BC94e630463293F71bF5414d13e80F62D</a>
                </td>
              </tr>
              <tr>
                <td>Exchanger</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Exchanger.sol">Exchanger.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x15e7Aa4Cd2C74750b5DCaC9B8B21B9189552BBaD">0x15e7Aa4Cd2C74750b5DCaC9B8B21B9189552BBaD</a>
                </td>
              </tr>
              <tr>
                <td>FeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/FeePool.sol">FeePool.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x2F737bf6a32bf3AcBef4d5148DA507569204Fb61">0x2F737bf6a32bf3AcBef4d5148DA507569204Fb61</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/FeePoolEternalStorage.sol">FeePoolEternalStorage.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x0A1d3bde7751e92971891FB034AcDE4C271de408">0x0A1d3bde7751e92971891FB034AcDE4C271de408</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/FeePoolState.sol">FeePoolState.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x2e542fA43A19F3F07230dD125f9f81411141362F">0x2e542fA43A19F3F07230dD125f9f81411141362F</a>
                </td>
              </tr>
              <tr>
                <td>FlexibleStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/FlexibleStorage.sol">FlexibleStorage.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x2f4959375ae4a6C368859FB51AF0513745db265F">0x2f4959375ae4a6C368859FB51AF0513745db265F</a>
                </td>
              </tr>
              <tr>
                <td>Issuer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/IssuerWithoutLiquidations.sol">IssuerWithoutLiquidations.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0xf01276e438D8043Dbc209fA65E1D8352EfFF85ef">0xf01276e438D8043Dbc209fA65E1D8352EfFF85ef</a>
                </td>
              </tr>
              <tr>
                <td>Liquidations</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Liquidations.sol">Liquidations.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x20540E5EB1faff0DB6B1Dc5f0427C27f3852e2Ab">0x20540E5EB1faff0DB6B1Dc5f0427C27f3852e2Ab</a>
                </td>
              </tr>
              <tr>
                <td>Math</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Math.sol">Math.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0xEA83b3192a8aB126BaCC2CFB0443F3A61ABe2D60">0xEA83b3192a8aB126BaCC2CFB0443F3A61ABe2D60</a>
                </td>
              </tr>
              <tr>
                <td>ProxyERC20</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x0064A673267696049938AA47595dD0B3C2e705A1">0x0064A673267696049938AA47595dD0B3C2e705A1</a>
                </td>
              </tr>
              <tr>
                <td>ProxyERC20sUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0xaA5068dC2B3AADE533d3e52C6eeaadC6a8154c57">0xaA5068dC2B3AADE533d3e52C6eeaadC6a8154c57</a>
                </td>
              </tr>
              <tr>
                <td>ProxyFeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0xd8c8887A629F98C56686Be6aEEDAae7f8f75D599">0xd8c8887A629F98C56686Be6aEEDAae7f8f75D599</a>
                </td>
              </tr>
              <tr>
                <td><span style="color: #AAA; text-decoration: line-through">ProxySynthetix</span><sup>Use ProxyERC20</sup></td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x11164F6a47C3f8472D19b9aDd516Fc780cb7Ee02">0x11164F6a47C3f8472D19b9aDd516Fc780cb7Ee02</a>
                </td>
              </tr>
              <tr>
                <td>ProxysAAVE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x503e91fc2b9Ad7453700130d0825E661565E4c3b">0x503e91fc2b9Ad7453700130d0825E661565E4c3b</a>
                </td>
              </tr>
              <tr>
                <td>ProxysBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x23F608ACc41bd7BCC617a01a9202214EE305439a">0x23F608ACc41bd7BCC617a01a9202214EE305439a</a>
                </td>
              </tr>
              <tr>
                <td>ProxysETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x94B41091eB29b36003aC1C6f0E55a5225633c884">0x94B41091eB29b36003aC1C6f0E55a5225633c884</a>
                </td>
              </tr>
              <tr>
                <td>ProxysLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0xe2B26511C64FE18Acc0BE8EA7c888cDFcacD846E">0xe2B26511C64FE18Acc0BE8EA7c888cDFcacD846E</a>
                </td>
              </tr>
              <tr>
                <td>ProxysUNI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x3E88bFAbDCd2b336C4a430262809Cf4a0AC5cd57">0x3E88bFAbDCd2b336C4a430262809Cf4a0AC5cd57</a>
                </td>
              </tr>
              <tr>
                <td><span style="color: #AAA; text-decoration: line-through">ProxysUSD</span><sup>Use ProxyERC20sUSD</sup></td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0xFf6a235133dc1233B20c5AB4C86885eBe90a69ee">0xFf6a235133dc1233B20c5AB4C86885eBe90a69ee</a>
                </td>
              </tr>
              <tr>
                <td>ReadProxyAddressResolver</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ReadProxy.sol">ReadProxy.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x7a6f9eDDC03Db81927eA4131919343f93CA9b6a7">0x7a6f9eDDC03Db81927eA4131919343f93CA9b6a7</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/RewardEscrow.sol">RewardEscrow.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x9952e42fF92149f48b3b7dee3f921A6DD106F79F">0x9952e42fF92149f48b3b7dee3f921A6DD106F79F</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrowV2</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/ImportableRewardEscrowV2.sol">ImportableRewardEscrowV2.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0xB613d148E47525478bD8A91eF7Cf2F7F63d81858">0xB613d148E47525478bD8A91eF7Cf2F7F63d81858</a>
                </td>
              </tr>
              <tr>
                <td>RewardsDistribution</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/RewardsDistribution.sol">RewardsDistribution.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x9147Cb9e5ef262bd0b1d362134C40948dC00C3EB">0x9147Cb9e5ef262bd0b1d362134C40948dC00C3EB</a>
                </td>
              </tr>
              <tr>
                <td>SafeDecimalMath</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SafeDecimalMath.sol">SafeDecimalMath.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x87A479D8433121E4583D45D37B4A349b4350B79F">0x87A479D8433121E4583D45D37B4A349b4350B79F</a>
                </td>
              </tr>
              <tr>
                <td>SynthRedeemer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SynthRedeemer.sol">SynthRedeemer.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x057Af46c8f48D9bc574d043e46DBF33fbaE023EA">0x057Af46c8f48D9bc574d043e46DBF33fbaE023EA</a>
                </td>
              </tr>
              <tr>
                <td>SynthUtil</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SynthUtil.sol">SynthUtil.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x5DF689ea1FB350bcB177Ff5e66ED8Dfe28C6045D">0x5DF689ea1FB350bcB177Ff5e66ED8Dfe28C6045D</a>
                </td>
              </tr>
              <tr>
                <td>Synthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/MintableSynthetix.sol">MintableSynthetix.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0xCAA5c8e9E67BBa010D2D7F589F02d588Fb49f93D">0xCAA5c8e9E67BBa010D2D7F589F02d588Fb49f93D</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixBridgeToBase</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SynthetixBridgeToBase.sol">SynthetixBridgeToBase.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x5C3f51CEd0C2F6157e2be67c029264D6C44bfe42">0x5C3f51CEd0C2F6157e2be67c029264D6C44bfe42</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SynthetixEscrow.sol">SynthetixEscrow.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0xf545e539788AfEAA665B7d79568E306e37Ef05cC">0xf545e539788AfEAA665B7d79568E306e37Ef05cC</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SynthetixStateWithLimitedSetup.sol">SynthetixStateWithLimitedSetup.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x8c941ead543dcd6a617931FdEC173B8B0E9F4531">0x8c941ead543dcd6a617931FdEC173B8B0E9F4531</a>
                </td>
              </tr>
              <tr>
                <td>SynthsAAVE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x1f99f5CbFC3b5Fd804dCc7F7780148F06423AC70">0x1f99f5CbFC3b5Fd804dCc7F7780148F06423AC70</a>
                </td>
              </tr>
              <tr>
                <td>SynthsBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x66C203BcF339460698c48a2B589eBD91de4984E7">0x66C203BcF339460698c48a2B589eBD91de4984E7</a>
                </td>
              </tr>
              <tr>
                <td>SynthsETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x6E6e2e9b7769CbA76aFC1e6CAd795CD3Ce0772a1">0x6E6e2e9b7769CbA76aFC1e6CAd795CD3Ce0772a1</a>
                </td>
              </tr>
              <tr>
                <td>SynthsLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0xE73EB48B9E725E563775fF38cb67Ae09bF34c791">0xE73EB48B9E725E563775fF38cb67Ae09bF34c791</a>
                </td>
              </tr>
              <tr>
                <td>SynthsUNI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x319D190584248280e3084A4692C6472A8dA5CA26">0x319D190584248280e3084A4692C6472A8dA5CA26</a>
                </td>
              </tr>
              <tr>
                <td>SynthsUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0xD32c1443Dde2d248cE1bE42BacBb65Db0A4aAF10">0xD32c1443Dde2d248cE1bE42BacBb65Db0A4aAF10</a>
                </td>
              </tr>
              <tr>
                <td>SystemSettings</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SystemSettings.sol">SystemSettings.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x27346b8172e9C6559c71972a081bbC9113D86844">0x27346b8172e9C6559c71972a081bbC9113D86844</a>
                </td>
              </tr>
              <tr>
                <td>SystemStatus</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/SystemStatus.sol">SystemStatus.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0xA6B255CB2Bd5Ad5f3EaE2D246ec1c2c3F7F79574">0xA6B255CB2Bd5Ad5f3EaE2D246ec1c2c3F7F79574</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateSynthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x22C9624c784214D53d43BDB4Bf56B3D3Bf2e773C">0x22C9624c784214D53d43BDB4Bf56B3D3Bf2e773C</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesAAVE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x2Bf6Bed12D1733FD649676d482c3D6d2c1c3df33">0x2Bf6Bed12D1733FD649676d482c3D6d2c1c3df33</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x0F73cf03DFD5595e862aa27E98914E70554eCf6d">0x0F73cf03DFD5595e862aa27E98914E70554eCf6d</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x8E6734A7653175b3FDa62516A646709F547C8342">0x8E6734A7653175b3FDa62516A646709F547C8342</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0xbFD9DaF95246b6e21461f2D48aD1bE5984145FFE">0xbFD9DaF95246b6e21461f2D48aD1bE5984145FFE</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesUNI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0xF6f4f3D2E06Af9BC431b8bC869A2B138a5175C26">0xF6f4f3D2E06Af9BC431b8bC869A2B138a5175C26</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0x77e4837cc55a3CB32A33988Fb670c5bcF13bBD3f">0x77e4837cc55a3CB32A33988Fb670c5bcF13bBD3f</a>
                </td>
              </tr>
              <tr>
                <td>TradingRewards</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/TradingRewards.sol">TradingRewards.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0xEC4075Ff2452907FCf86c8b7EA5B0B378e187373">0xEC4075Ff2452907FCf86c8b7EA5B0B378e187373</a>
                </td>
              </tr>
              <tr>
                <td>WrapperFactory</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.52.1-alpha/contracts/WrapperFactory.sol">WrapperFactory.sol</a></td>
                <td><a target="_blank" href="https://kovan-explorer.optimism.io/address/0xcc079BCb1dAe79C4494776f096BEff683Cd571CE">0xcc079BCb1dAe79C4494776f096BEff683Cd571CE</a>
                </td>
              </tr></table>

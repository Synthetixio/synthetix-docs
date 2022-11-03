Here is the list of all contracts within the current Synthetix system.

**Version**: [v2.78.1](https://github.com/Synthetixio/synthetix/tree/v2.78.1)

!!! info "Naming Conventions"

    Within the developer ecosystem, the names of Synthetix contracts are referred to by their `source` Solidity file.If the same source is used for multiple instances of contracts with different constructor arguments - such as `Synth.sol`, `TokenState.sol` and `ProxyERC20.sol` - then the convention is to suffix the name of the differing feature to the end - be it the proxy target e.g. `FeePool` for `ProxyFeePool` or the synth currencyKey eg: `sETH` for `SynthsETH`

!!! tip "Handy Contract Links"

    All of the below contracts can be accessed by our [contract linker](https://github.com/Synthetixio/contract-linker) utility. Simply suffix the contract name to the end of https://contracts.synthetix.io to get a link that will always redirect to the latest version of the contract on Etherscan.

    For example, try https://contracts.synthetix.io/Synthetix to get linked to the latest Synthetix underlying.

    For testnets, insert the testnet name before the contract, as in https://contracts.synthetix.io/goerli/Synthetix

## MAINNET

<table><tr><th>Name</th><th>Source</th><th>Address</th></tr>
              <tr>
                <td>AddressResolver</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/AddressResolver.sol">AddressResolver.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x823bE81bbF96BEc0e25CA13170F5AaCb5B79ba83">0x823bE81bbF96BEc0e25CA13170F5AaCb5B79ba83</a>
                </td>
              </tr>
              <tr>
                <td>CircuitBreaker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/CircuitBreaker.sol">CircuitBreaker.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x9f231dBE53D460f359B2B8CC47574493caA5B7Bf">0x9f231dBE53D460f359B2B8CC47574493caA5B7Bf</a>
                </td>
              </tr>
              <tr>
                <td>CollateralErc20</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/CollateralErc20.sol">CollateralErc20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xaa03aB31b55DceEeF845C8d17890CC61cD98eD04">0xaa03aB31b55DceEeF845C8d17890CC61cD98eD04</a>
                </td>
              </tr>
              <tr>
                <td>CollateralEth</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/CollateralEth.sol">CollateralEth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x5c8344bcdC38F1aB5EB5C1d4a35DdEeA522B5DfA">0x5c8344bcdC38F1aB5EB5C1d4a35DdEeA522B5DfA</a>
                </td>
              </tr>
              <tr>
                <td>CollateralManager</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/CollateralManager.sol">CollateralManager.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x067e398605E84F2D0aEEC1806e62768C5110DCc6">0x067e398605E84F2D0aEEC1806e62768C5110DCc6</a>
                </td>
              </tr>
              <tr>
                <td>CollateralManagerState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/CollateralManagerState.sol">CollateralManagerState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x573E5105c4B92416D1544A188F1bf77d442Bb52d">0x573E5105c4B92416D1544A188F1bf77d442Bb52d</a>
                </td>
              </tr>
              <tr>
                <td>CollateralShort</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/CollateralShort.sol">CollateralShort.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x1F2c3a1046c32729862fcB038369696e3273a516">0x1F2c3a1046c32729862fcB038369696e3273a516</a>
                </td>
              </tr>
              <tr>
                <td>CollateralStateErc20</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/CollateralState.sol">CollateralState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x8A1A00Df7aA0102497C7591912bA8301e8dB8CdB">0x8A1A00Df7aA0102497C7591912bA8301e8dB8CdB</a>
                </td>
              </tr>
              <tr>
                <td>CollateralStateEth</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/CollateralState.sol">CollateralState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xbe5B5a7c198bC156474ed5c33CBf2F3F604F8fF8">0xbe5B5a7c198bC156474ed5c33CBf2F3F604F8fF8</a>
                </td>
              </tr>
              <tr>
                <td>CollateralStateShort</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/CollateralState.sol">CollateralState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x13A114a3Fa8A6CE03a0C5488BE9e614d78eDdb0c">0x13A114a3Fa8A6CE03a0C5488BE9e614d78eDdb0c</a>
                </td>
              </tr>
              <tr>
                <td>DappMaintenance</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/DappMaintenance.sol">DappMaintenance.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xAb0B2f1Cf979cdbF4676251F35353eC5AF2732Dd">0xAb0B2f1Cf979cdbF4676251F35353eC5AF2732Dd</a>
                </td>
              </tr>
              <tr>
                <td>DebtCache</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/DebtCache.sol">DebtCache.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x1620Aa736939597891C1940CF0d28b82566F9390">0x1620Aa736939597891C1940CF0d28b82566F9390</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovals</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/DelegateApprovals.sol">DelegateApprovals.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x15fd6e554874B9e70F832Ed37f231Ac5E142362f">0x15fd6e554874B9e70F832Ed37f231Ac5E142362f</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovalsEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/EternalStorage.sol">EternalStorage.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x8F586F063ffbb89b186C8e604FC6614766f9C9d1">0x8F586F063ffbb89b186C8e604FC6614766f9C9d1</a>
                </td>
              </tr>
              <tr>
                <td>Depot</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/Depot.sol">Depot.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xE1f64079aDa6Ef07b03982Ca34f1dD7152AA3b86">0xE1f64079aDa6Ef07b03982Ca34f1dD7152AA3b86</a>
                </td>
              </tr>
              <tr>
                <td>DirectIntegrationManager</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/DirectIntegrationManager.sol">DirectIntegrationManager.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x5F41718459955217df6A02AA8f5C19614ECfA6E7">0x5F41718459955217df6A02AA8f5C19614ECfA6E7</a>
                </td>
              </tr>
              <tr>
                <td>EscrowChecker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/EscrowChecker.sol">EscrowChecker.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x3b399e00AFd8201ACf8A5a0EcCF1C47d8D5E41da">0x3b399e00AFd8201ACf8A5a0EcCF1C47d8D5E41da</a>
                </td>
              </tr>
              <tr>
                <td>EtherWrapper</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/EtherWrapper.sol">EtherWrapper.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xC1AAE9d18bBe386B102435a8632C8063d31e747C">0xC1AAE9d18bBe386B102435a8632C8063d31e747C</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeCircuitBreaker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ExchangeCircuitBreaker.sol">ExchangeCircuitBreaker.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xeAcaEd9581294b1b5cfb6B941d4B8B81B2005437">0xeAcaEd9581294b1b5cfb6B941d4B8B81B2005437</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeRates</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ExchangeRatesWithDexPricing.sol">ExchangeRatesWithDexPricing.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x648280dD2db772CD018A0CEC72fab5bF8B7683AB">0x648280dD2db772CD018A0CEC72fab5bF8B7683AB</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeSettlementLib</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ExchangeSettlementLib.sol">ExchangeSettlementLib.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xAa5A3D7F04E15b22Eb3664B56310aA18A3527Ec7">0xAa5A3D7F04E15b22Eb3664B56310aA18A3527Ec7</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ExchangeState.sol">ExchangeState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x545973f28950f50fc6c7F52AAb4Ad214A27C0564">0x545973f28950f50fc6c7F52AAb4Ad214A27C0564</a>
                </td>
              </tr>
              <tr>
                <td>Exchanger</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ExchangerWithFeeRecAlternatives.sol">ExchangerWithFeeRecAlternatives.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xaeA0065E146FD75Dc24465961a583827284D405a">0xaeA0065E146FD75Dc24465961a583827284D405a</a>
                </td>
              </tr>
              <tr>
                <td>FeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FeePool.sol">FeePool.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x3B2f389AeE480238A49E3A9985cd6815370712eB">0x3B2f389AeE480238A49E3A9985cd6815370712eB</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FeePoolEternalStorage.sol">FeePoolEternalStorage.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xC9DFff5fA5605fd94F8B7927b892F2B57391e8bB">0xC9DFff5fA5605fd94F8B7927b892F2B57391e8bB</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FeePoolState.sol">FeePoolState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x11164F6a47C3f8472D19b9aDd516Fc780cb7Ee02">0x11164F6a47C3f8472D19b9aDd516Fc780cb7Ee02</a>
                </td>
              </tr>
              <tr>
                <td>FlexibleStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FlexibleStorage.sol">FlexibleStorage.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xc757aCBa3c0506218b3022266a9DC7F3612d85f5">0xc757aCBa3c0506218b3022266a9DC7F3612d85f5</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketManager</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/EmptyFuturesMarketManager.sol">EmptyFuturesMarketManager.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x834Ef6c82D431Ac9A7A6B66325F185b2430780D7">0x834Ef6c82D431Ac9A7A6B66325F185b2430780D7</a>
                </td>
              </tr>
              <tr>
                <td>IssuanceEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/IssuanceEternalStorage.sol">IssuanceEternalStorage.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x631E93A0fb06B5eC6d52c0A2D89a3f9672d6Ba64">0x631E93A0fb06B5eC6d52c0A2D89a3f9672d6Ba64</a>
                </td>
              </tr>
              <tr>
                <td>Issuer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/Issuer.sol">Issuer.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x5810Fc0E79F4323B2dd3c638914083Fd23a941C0">0x5810Fc0E79F4323B2dd3c638914083Fd23a941C0</a>
                </td>
              </tr>
              <tr>
                <td>Liquidator</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/Liquidator.sol">Liquidator.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x05e661738E3A3C6F254d9c29a40Dad0Ec357ea85">0x05e661738E3A3C6F254d9c29a40Dad0Ec357ea85</a>
                </td>
              </tr>
              <tr>
                <td>LiquidatorRewards</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/LiquidatorRewards.sol">LiquidatorRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xf79603a71144e415730C1A6f57F366E4Ea962C00">0xf79603a71144e415730C1A6f57F366E4Ea962C00</a>
                </td>
              </tr>
              <tr>
                <td>Math</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/Math.sol">Math.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x385e1Eb2FF28F4A637DA2C9971F8CAF5F5b1E77c">0x385e1Eb2FF28F4A637DA2C9971F8CAF5F5b1E77c</a>
                </td>
              </tr>
              <tr>
                <td>NativeEtherWrapper</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/NativeEtherWrapper.sol">NativeEtherWrapper.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x7A3d898b717e50a96fd8b232E9d15F0A547A7eeb">0x7A3d898b717e50a96fd8b232E9d15F0A547A7eeb</a>
                </td>
              </tr>
              <tr>
                <td>OneNetAggregatorDebtRatio</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/OneNetAggregatorDebtRatio.sol">OneNetAggregatorDebtRatio.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x977d0DD7eA212E9ca1dcD4Ec15cd7Ceb135fa68D">0x977d0DD7eA212E9ca1dcD4Ec15cd7Ceb135fa68D</a>
                </td>
              </tr>
              <tr>
                <td>OneNetAggregatorIssuedSynths</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/OneNetAggregatorIssuedSynths.sol">OneNetAggregatorIssuedSynths.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xcf1405b18dBCEA2893Abe635c88359C75878B9e1">0xcf1405b18dBCEA2893Abe635c88359C75878B9e1</a>
                </td>
              </tr>
              <tr>
                <td>OneNetAggregatorsDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/OneNetAggregatorsDEFI.sol">OneNetAggregatorsDEFI.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x646F23085281Dbd006FBFD211FD38d0743884864">0x646F23085281Dbd006FBFD211FD38d0743884864</a>
                </td>
              </tr>
              <tr>
                <td>OwnerRelayOnEthereum</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/OwnerRelayOnEthereum.sol">OwnerRelayOnEthereum.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x0e16A6876210841577b233C4165d7B7EdF640b8a">0x0e16A6876210841577b233C4165d7B7EdF640b8a</a>
                </td>
              </tr>
              <tr>
                <td>ProxyERC20</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F">0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F</a>
                </td>
              </tr>
              <tr>
                <td>ProxyERC20sUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x57Ab1ec28D129707052df4dF418D58a2D46d5f51">0x57Ab1ec28D129707052df4dF418D58a2D46d5f51</a>
                </td>
              </tr>
              <tr>
                <td>ProxyFeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xb440DD674e1243644791a4AdfE3A2AbB0A92d309">0xb440DD674e1243644791a4AdfE3A2AbB0A92d309</a>
                </td>
              </tr>
              <tr>
                <td><span style="color: #AAA; text-decoration: line-through">ProxySynthetix</span><sup>Use ProxyERC20</sup></td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F">0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F</a>
                </td>
              </tr>
              <tr>
                <td>ProxysAAVE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xd2dF355C19471c8bd7D8A3aa27Ff4e26A21b4076">0xd2dF355C19471c8bd7D8A3aa27Ff4e26A21b4076</a>
                </td>
              </tr>
              <tr>
                <td>ProxysADA</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xe36E2D3c7c34281FA3bC737950a68571736880A1">0xe36E2D3c7c34281FA3bC737950a68571736880A1</a>
                </td>
              </tr>
              <tr>
                <td>ProxysAUD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xF48e200EAF9906362BB1442fca31e0835773b8B4">0xF48e200EAF9906362BB1442fca31e0835773b8B4</a>
                </td>
              </tr>
              <tr>
                <td>ProxysBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6">0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6</a>
                </td>
              </tr>
              <tr>
                <td>ProxysCHF</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x0F83287FF768D1c1e17a42F44d644D7F22e8ee1d">0x0F83287FF768D1c1e17a42F44d644D7F22e8ee1d</a>
                </td>
              </tr>
              <tr>
                <td>ProxysDOT</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x1715AC0743102BF5Cd58EfBB6Cf2dC2685d967b6">0x1715AC0743102BF5Cd58EfBB6Cf2dC2685d967b6</a>
                </td>
              </tr>
              <tr>
                <td>ProxysETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb">0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb</a>
                </td>
              </tr>
              <tr>
                <td>ProxysETHBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x104eDF1da359506548BFc7c25bA1E28C16a70235">0x104eDF1da359506548BFc7c25bA1E28C16a70235</a>
                </td>
              </tr>
              <tr>
                <td>ProxysEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xD71eCFF9342A5Ced620049e616c5035F1dB98620">0xD71eCFF9342A5Ced620049e616c5035F1dB98620</a>
                </td>
              </tr>
              <tr>
                <td>ProxysGBP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x97fe22E7341a0Cd8Db6F6C021A24Dc8f4DAD855F">0x97fe22E7341a0Cd8Db6F6C021A24Dc8f4DAD855F</a>
                </td>
              </tr>
              <tr>
                <td>ProxysJPY</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xF6b1C627e95BFc3c1b4c9B825a032Ff0fBf3e07d">0xF6b1C627e95BFc3c1b4c9B825a032Ff0fBf3e07d</a>
                </td>
              </tr>
              <tr>
                <td>ProxysKRW</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x269895a3dF4D73b077Fc823dD6dA1B95f72Aaf9B">0x269895a3dF4D73b077Fc823dD6dA1B95f72Aaf9B</a>
                </td>
              </tr>
              <tr>
                <td>ProxysLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xbBC455cb4F1B9e4bFC4B73970d360c8f032EfEE6">0xbBC455cb4F1B9e4bFC4B73970d360c8f032EfEE6</a>
                </td>
              </tr>
              <tr>
                <td><span style="color: #AAA; text-decoration: line-through">ProxysUSD</span><sup>Use ProxyERC20sUSD</sup></td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x57Ab1ec28D129707052df4dF418D58a2D46d5f51">0x57Ab1ec28D129707052df4dF418D58a2D46d5f51</a>
                </td>
              </tr>
              <tr>
                <td>ReadProxyAddressResolver</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ReadProxy.sol">ReadProxy.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x4E3b31eB0E5CB73641EE1E65E7dCEFe520bA3ef2">0x4E3b31eB0E5CB73641EE1E65E7dCEFe520bA3ef2</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/RewardEscrow.sol">RewardEscrow.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xb671F2210B1F6621A2607EA63E6B2DC3e2464d1F">0xb671F2210B1F6621A2607EA63E6B2DC3e2464d1F</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrowV2</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/RewardEscrowV2.sol">RewardEscrowV2.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xAc86855865CbF31c8f9FBB68C749AD5Bd72802e3">0xAc86855865CbF31c8f9FBB68C749AD5Bd72802e3</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrowV2Storage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/RewardEscrowV2Storage.sol">RewardEscrowV2Storage.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x182738BD9eE9810BC11f1c81b07Ec6F3691110BB">0x182738BD9eE9810BC11f1c81b07Ec6F3691110BB</a>
                </td>
              </tr>
              <tr>
                <td>RewardsDistribution</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/RewardsDistribution.sol">RewardsDistribution.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x29C295B046a73Cde593f21f63091B072d407e3F2">0x29C295B046a73Cde593f21f63091B072d407e3F2</a>
                </td>
              </tr>
              <tr>
                <td>SafeDecimalMath</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SafeDecimalMath.sol">SafeDecimalMath.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x84D626B2BB4D0F064067e4BF80FCe7055d8F3E7B">0x84D626B2BB4D0F064067e4BF80FCe7055d8F3E7B</a>
                </td>
              </tr>
              <tr>
                <td>ShortingRewardssBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ShortingRewards.sol">ShortingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xCed4055b47cfD0421f3727a35F69CE659c8bAF7a">0xCed4055b47cfD0421f3727a35F69CE659c8bAF7a</a>
                </td>
              </tr>
              <tr>
                <td>ShortingRewardssETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ShortingRewards.sol">ShortingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x12DC1273915A16ab8BD47bA7866B240c253e4c12">0x12DC1273915A16ab8BD47bA7866B240c253e4c12</a>
                </td>
              </tr>
              <tr>
                <td>SignedSafeDecimalMath</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SignedSafeDecimalMath.sol">SignedSafeDecimalMath.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x728A2B79Cad691531CC1146eF802617FF50c7095">0x728A2B79Cad691531CC1146eF802617FF50c7095</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardsSNXBalancer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/StakingRewardsSNXBalancer.sol">StakingRewardsSNXBalancer.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xFBaEdde70732540cE2B11A8AC58Eb2dC0D69dE10">0xFBaEdde70732540cE2B11A8AC58Eb2dC0D69dE10</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardsiBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x167009dcDA2e49930a71712D956f02cc980DcC1b">0x167009dcDA2e49930a71712D956f02cc980DcC1b</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardsiETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x3f27c540ADaE3a9E8c875C61e3B970b559d7F65d">0x3f27c540ADaE3a9E8c875C61e3B970b559d7F65d</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssAAPLBalancer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x7af65f1740c0eB816A27FD808EaF6Ab09F6Fa646">0x7af65f1740c0eB816A27FD808EaF6Ab09F6Fa646</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssAMZNBalancer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xDC338C7544654c7dadFEb7E44076E457963113B0">0xDC338C7544654c7dadFEb7E44076E457963113B0</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssBTCCurve</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/StakingRewardssBTCCurve.sol">StakingRewardssBTCCurve.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x13C1542A468319688B89E323fe9A3Be3A90EBb27">0x13C1542A468319688B89E323fe9A3Be3A90EBb27</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssCOINBalancer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x1C1D97f6338759AB814a5A717aE359573Ab5D5d4">0x1C1D97f6338759AB814a5A717aE359573Ab5D5d4</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssETHUniswapV1</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/StakingRewardssETHUniswapV1.sol">StakingRewardssETHUniswapV1.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x48D7f315feDcaD332F68aafa017c7C158BC54760">0x48D7f315feDcaD332F68aafa017c7C158BC54760</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssEURCurve</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xc0d8994Cd78eE1980885DF1A0C5470fC977b5cFe">0xc0d8994Cd78eE1980885DF1A0C5470fC977b5cFe</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssFBBalancer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x26Fa0665660c1D3a3666584669511d3c66Ad37Cb">0x26Fa0665660c1D3a3666584669511d3c66Ad37Cb</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssGOOGBalancer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x6fB7F0E78582746bd01BcB6dfbFE62cA5F4F9175">0x6fB7F0E78582746bd01BcB6dfbFE62cA5F4F9175</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssMSFTBalancer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x9D003Cc298E7Ea141A809C241C0a703176DA3ba3">0x9D003Cc298E7Ea141A809C241C0a703176DA3ba3</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssNFLXBalancer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x8Ef8cA2AcAaAfEc19fB366C11561718357F780F2">0x8Ef8cA2AcAaAfEc19fB366C11561718357F780F2</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssTSLABalancer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xF0de877F2F9E7A60767f9BA662F10751566AD01c">0xF0de877F2F9E7A60767f9BA662F10751566AD01c</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssUSDCurve</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/StakingRewardssUSDCurve.sol">StakingRewardssUSDCurve.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xDCB6A51eA3CA5d3Fd898Fd6564757c7aAeC3ca92">0xDCB6A51eA3CA5d3Fd898Fd6564757c7aAeC3ca92</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssXAUUniswapV2</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/StakingRewardssXAUUniswapV2.sol">StakingRewardssXAUUniswapV2.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x8302FE9F0C509a996573D3Cc5B0D5D51e4FDD5eC">0x8302FE9F0C509a996573D3Cc5B0D5D51e4FDD5eC</a>
                </td>
              </tr>
              <tr>
                <td>SupplySchedule</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SupplySchedule.sol">SupplySchedule.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x8d203C458d536Fe0F97e9f741bC231EaC8cd91cf">0x8d203C458d536Fe0F97e9f741bC231EaC8cd91cf</a>
                </td>
              </tr>
              <tr>
                <td>SynthRedeemer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SynthRedeemer.sol">SynthRedeemer.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xe533139Af961c9747356D947838c98451015e234">0xe533139Af961c9747356D947838c98451015e234</a>
                </td>
              </tr>
              <tr>
                <td>SynthUtil</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SynthUtil.sol">SynthUtil.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x81Aee4EA48f678E172640fB5813cf7A96AFaF6C3">0x81Aee4EA48f678E172640fB5813cf7A96AFaF6C3</a>
                </td>
              </tr>
              <tr>
                <td>Synthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/Synthetix.sol">Synthetix.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x6b10E5Ce50e3A062731d83Cd3cAD1964e5F93DA6">0x6b10E5Ce50e3A062731d83Cd3cAD1964e5F93DA6</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixBridgeEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SynthetixBridgeEscrow.sol">SynthetixBridgeEscrow.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x5Fd79D46EBA7F351fe49BFF9E87cdeA6c821eF9f">0x5Fd79D46EBA7F351fe49BFF9E87cdeA6c821eF9f</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixBridgeToOptimism</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SynthetixBridgeToOptimism.sol">SynthetixBridgeToOptimism.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x39Ea01a0298C315d149a490E34B59Dbf2EC7e48F">0x39Ea01a0298C315d149a490E34B59Dbf2EC7e48F</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixDebtShare</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SynthetixDebtShare.sol">SynthetixDebtShare.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x89FCb32F29e509cc42d0C8b6f058C993013A843F">0x89FCb32F29e509cc42d0C8b6f058C993013A843F</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SynthetixEscrow.sol">SynthetixEscrow.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x971e78e0C92392A4E39099835cF7E6aB535b2227">0x971e78e0C92392A4E39099835cF7E6aB535b2227</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SynthetixState.sol">SynthetixState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x4b9Ca5607f1fF8019c1C6A3c2f0CC8de622D5B82">0x4b9Ca5607f1fF8019c1C6A3c2f0CC8de622D5B82</a>
                </td>
              </tr>
              <tr>
                <td>SynthsAAVE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x942Eb6e8c029EB22103743C99985aF4F4515a559">0x942Eb6e8c029EB22103743C99985aF4F4515a559</a>
                </td>
              </tr>
              <tr>
                <td>SynthsADA</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x91b82d62Ff322b8e02b86f33E9A99a813437830d">0x91b82d62Ff322b8e02b86f33E9A99a813437830d</a>
                </td>
              </tr>
              <tr>
                <td>SynthsAUD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xfb020CA7f4e8C4a5bBBe060f59a249c6275d2b69">0xfb020CA7f4e8C4a5bBBe060f59a249c6275d2b69</a>
                </td>
              </tr>
              <tr>
                <td>SynthsBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x1cB004a8e84a5CE95C1fF895EE603BaC8EC506c7">0x1cB004a8e84a5CE95C1fF895EE603BaC8EC506c7</a>
                </td>
              </tr>
              <tr>
                <td>SynthsCHF</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xBb5b03E920cF702De5A3bA9Fc1445aF4B3919c88">0xBb5b03E920cF702De5A3bA9Fc1445aF4B3919c88</a>
                </td>
              </tr>
              <tr>
                <td>SynthsDOT</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x75A0c1597137AA36B40b6a515D997F9a6c6eefEB">0x75A0c1597137AA36B40b6a515D997F9a6c6eefEB</a>
                </td>
              </tr>
              <tr>
                <td>SynthsETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x5D4C724BFe3a228Ff0E29125Ac1571FE093700a4">0x5D4C724BFe3a228Ff0E29125Ac1571FE093700a4</a>
                </td>
              </tr>
              <tr>
                <td>SynthsETHBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x07C1E81C345A7c58d7c24072EFc5D929BD0647AD">0x07C1E81C345A7c58d7c24072EFc5D929BD0647AD</a>
                </td>
              </tr>
              <tr>
                <td>SynthsEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xa8E31E3C38aDD6052A9407298FAEB8fD393A6cF9">0xa8E31E3C38aDD6052A9407298FAEB8fD393A6cF9</a>
                </td>
              </tr>
              <tr>
                <td>SynthsGBP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xdc883b9d9Ee16f74bE08826E68dF4C9D9d26e8bD">0xdc883b9d9Ee16f74bE08826E68dF4C9D9d26e8bD</a>
                </td>
              </tr>
              <tr>
                <td>SynthsJPY</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xE1cc2332852B2Ac0dA59A1f9D3051829f4eF3c1C">0xE1cc2332852B2Ac0dA59A1f9D3051829f4eF3c1C</a>
                </td>
              </tr>
              <tr>
                <td>SynthsKRW</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xdAe6C79c46aB3B280Ca28259000695529cbD1339">0xdAe6C79c46aB3B280Ca28259000695529cbD1339</a>
                </td>
              </tr>
              <tr>
                <td>SynthsLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xDF69bC4541b86Aa4c5A470B4347E730c38b2c3B2">0xDF69bC4541b86Aa4c5A470B4347E730c38b2c3B2</a>
                </td>
              </tr>
              <tr>
                <td>SynthsUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x10A5F7D9D65bCc2734763444D4940a31b109275f">0x10A5F7D9D65bCc2734763444D4940a31b109275f</a>
                </td>
              </tr>
              <tr>
                <td>SystemSettings</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SystemSettings.sol">SystemSettings.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x202ae40Bed1640b09e2AF7aC5719D129A498B7C8">0x202ae40Bed1640b09e2AF7aC5719D129A498B7C8</a>
                </td>
              </tr>
              <tr>
                <td>SystemSettingsLib</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SystemSettingsLib.sol">SystemSettingsLib.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x4a39AEf2281ac0D192a9c4783604833bA8F31174">0x4a39AEf2281ac0D192a9c4783604833bA8F31174</a>
                </td>
              </tr>
              <tr>
                <td>SystemStatus</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SystemStatus.sol">SystemStatus.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x696c905F8F8c006cA46e9808fE7e00049507798F">0x696c905F8F8c006cA46e9808fE7e00049507798F</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateSynthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/LegacyTokenState.sol">LegacyTokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x5b1b5fEa1b99D83aD479dF0C222F0492385381dD">0x5b1b5fEa1b99D83aD479dF0C222F0492385381dD</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesAAVE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x9BcED8A8E3Ad81c9b146FFC880358f734A06f7c0">0x9BcED8A8E3Ad81c9b146FFC880358f734A06f7c0</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesADA</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x9956c5019a24fbd5B506AD070b771577bAc5c343">0x9956c5019a24fbd5B506AD070b771577bAc5c343</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesAUD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xCb29D2cf2C65d3Be1d00F07f3441390432D55203">0xCb29D2cf2C65d3Be1d00F07f3441390432D55203</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x4F6296455F8d754c19821cF1EC8FeBF2cD456E67">0x4F6296455F8d754c19821cF1EC8FeBF2cD456E67</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesCHF</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x52496fE8a4feaEFe14d9433E00D48E6929c13deC">0x52496fE8a4feaEFe14d9433E00D48E6929c13deC</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesDOT</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x73B1a2643507Cd30F11Dfcf2D974f4373E5BC077">0x73B1a2643507Cd30F11Dfcf2D974f4373E5BC077</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x34A5ef81d18F3a305aE9C2d7DF42beef4c79031c">0x34A5ef81d18F3a305aE9C2d7DF42beef4c79031c</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesETHBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x042A7A0022A7695454ac5Be77a4860e50c9683fC">0x042A7A0022A7695454ac5Be77a4860e50c9683fC</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x6568D9e750fC44AF00f857885Dfb8281c00529c4">0x6568D9e750fC44AF00f857885Dfb8281c00529c4</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesGBP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x7e88D19A79b291cfE5696d496055f7e57F537A75">0x7e88D19A79b291cfE5696d496055f7e57F537A75</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesJPY</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x4dFACfB15514C21c991ff75Bc7Bf6Fb1F98361ed">0x4dFACfB15514C21c991ff75Bc7Bf6Fb1F98361ed</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesKRW</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x93B6e9FbBd2c32a0DC3C2B943B7C3CBC2fE23730">0x93B6e9FbBd2c32a0DC3C2B943B7C3CBC2fE23730</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x577D4a7395c6A5f46d9981a5F83fa7294926aBB0">0x577D4a7395c6A5f46d9981a5F83fa7294926aBB0</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x05a9CBe762B36632b3594DA4F082340E0e5343e8">0x05a9CBe762B36632b3594DA4F082340E0e5343e8</a>
                </td>
              </tr>
              <tr>
                <td>TradingRewards</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TradingRewards.sol">TradingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x62922670313bf6b41C580143d1f6C173C5C20019">0x62922670313bf6b41C580143d1f6C173C5C20019</a>
                </td>
              </tr>
              <tr>
                <td>VirtualSynthMastercopy</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/VirtualSynthMastercopy.sol">VirtualSynthMastercopy.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xf02ce48fD47D7FA1B7a45a0444805d320D035775">0xf02ce48fD47D7FA1B7a45a0444805d320D035775</a>
                </td>
              </tr>
              <tr>
                <td>WrapperFactory</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/WrapperFactory.sol">WrapperFactory.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x02f9bC46beD33acdB9cb002fe346734CeF8a9480">0x02f9bC46beD33acdB9cb002fe346734CeF8a9480</a>
                </td>
              </tr></table>

## MAINNET Optimism (L2)

<table><tr><th>Name</th><th>Source</th><th>Address</th></tr>
              <tr>
                <td>AddressResolver</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/AddressResolver.sol">AddressResolver.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x95A6a3f44a70172E7d50a9e28c85Dfd712756B8C">0x95A6a3f44a70172E7d50a9e28c85Dfd712756B8C</a>
                </td>
              </tr>
              <tr>
                <td>CircuitBreaker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/CircuitBreaker.sol">CircuitBreaker.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x803FD1d99C3a6cbcbABAB79C44e108dC2fb67102">0x803FD1d99C3a6cbcbABAB79C44e108dC2fb67102</a>
                </td>
              </tr>
              <tr>
                <td>CollateralEth</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/CollateralEth.sol">CollateralEth.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x308AD16ef90fe7caCb85B784A603CB6E71b1A41a">0x308AD16ef90fe7caCb85B784A603CB6E71b1A41a</a>
                </td>
              </tr>
              <tr>
                <td>CollateralManager</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/CollateralManager.sol">CollateralManager.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x15E7D4972a3E477878A5867A47617122BE2d1fF0">0x15E7D4972a3E477878A5867A47617122BE2d1fF0</a>
                </td>
              </tr>
              <tr>
                <td>CollateralManagerState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/CollateralManagerState.sol">CollateralManagerState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xbA10526cD8742acC73AedeF5f7Dbb2477Bf86922">0xbA10526cD8742acC73AedeF5f7Dbb2477Bf86922</a>
                </td>
              </tr>
              <tr>
                <td>CollateralShort</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/CollateralShort.sol">CollateralShort.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xeb4b5ABcE7310855319440d936cd3aDd77DFA193">0xeb4b5ABcE7310855319440d936cd3aDd77DFA193</a>
                </td>
              </tr>
              <tr>
                <td>CollateralUtil</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/CollateralUtil.sol">CollateralUtil.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xD21969A86Ce5c41aAb2D492a0F802AA3e015cd9A">0xD21969A86Ce5c41aAb2D492a0F802AA3e015cd9A</a>
                </td>
              </tr>
              <tr>
                <td>DappMaintenance</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/DappMaintenance.sol">DappMaintenance.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x54581A23F62D147AC76d454f0b3eF77F9D766058">0x54581A23F62D147AC76d454f0b3eF77F9D766058</a>
                </td>
              </tr>
              <tr>
                <td>DebtCache</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/DebtCache.sol">DebtCache.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x17628A557d1Fc88D1c35989dcBAC3f3e275E2d2B">0x17628A557d1Fc88D1c35989dcBAC3f3e275E2d2B</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovals</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/DelegateApprovals.sol">DelegateApprovals.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2A23bc0EA97A89abD91214E8e4d20F02Fe14743f">0x2A23bc0EA97A89abD91214E8e4d20F02Fe14743f</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovalsEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/EternalStorage.sol">EternalStorage.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x02f7fB66B55e6ca476d126d96f14c5732Eeb4363">0x02f7fB66B55e6ca476d126d96f14c5732Eeb4363</a>
                </td>
              </tr>
              <tr>
                <td>DirectIntegrationManager</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/DirectIntegrationManager.sol">DirectIntegrationManager.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x186c50515e6Ee95cEC381d7f6Fe72C67085dBCb4">0x186c50515e6Ee95cEC381d7f6Fe72C67085dBCb4</a>
                </td>
              </tr>
              <tr>
                <td>EscrowChecker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/EscrowChecker.sol">EscrowChecker.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xcdb7D0a946223255d39A6e29B54f08f3291cc118">0xcdb7D0a946223255d39A6e29B54f08f3291cc118</a>
                </td>
              </tr>
              <tr>
                <td>EtherCollateral</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/EmptyEtherCollateral.sol">EmptyEtherCollateral.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xC8E91c926E04BE1cb94e51c5379d14774D51ae6C">0xC8E91c926E04BE1cb94e51c5379d14774D51ae6C</a>
                </td>
              </tr>
              <tr>
                <td>EtherCollateralsUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/EmptyEtherCollateral.sol">EmptyEtherCollateral.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xC0c66470E766AE2026E6695966C56C90741811AA">0xC0c66470E766AE2026E6695966C56C90741811AA</a>
                </td>
              </tr>
              <tr>
                <td>EtherWrapper</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/EmptyEtherWrapper.sol">EmptyEtherWrapper.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xc3Ee42caBD773A608fa9Ec951982c94BD6F33d59">0xc3Ee42caBD773A608fa9Ec951982c94BD6F33d59</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeCircuitBreaker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ExchangeCircuitBreaker.sol">ExchangeCircuitBreaker.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x7322e8F6cB6c6a7B4e6620C486777fcB9Ea052a4">0x7322e8F6cB6c6a7B4e6620C486777fcB9Ea052a4</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeRates</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ExchangeRates.sol">ExchangeRates.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x913bd76F7E1572CC8278CeF2D6b06e2140ca9Ce2">0x913bd76F7E1572CC8278CeF2D6b06e2140ca9Ce2</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeSettlementLib</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ExchangeSettlementLib.sol">ExchangeSettlementLib.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xFfa3635f5844eA0F2FcCB03cb936828F508F558b">0xFfa3635f5844eA0F2FcCB03cb936828F508F558b</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ExchangeState.sol">ExchangeState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x7EF87c14f50CFFe2e73d2C87916C3128c56593A8">0x7EF87c14f50CFFe2e73d2C87916C3128c56593A8</a>
                </td>
              </tr>
              <tr>
                <td>Exchanger</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/Exchanger.sol">Exchanger.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x24b4b6703a2eE7bA75a4Fc859B606F0bbaeef4EA">0x24b4b6703a2eE7bA75a4Fc859B606F0bbaeef4EA</a>
                </td>
              </tr>
              <tr>
                <td>FeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FeePool.sol">FeePool.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xD3739A5F06747e148E716Dcb7147B9BA15b70fcc">0xD3739A5F06747e148E716Dcb7147B9BA15b70fcc</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FeePoolEternalStorage.sol">FeePoolEternalStorage.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x41140Bf6498a36f2E44eFd49f21dAe3bbb7367c8">0x41140Bf6498a36f2E44eFd49f21dAe3bbb7367c8</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FeePoolState.sol">FeePoolState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6e0d26cffc3a63d763F1546f749bf62ebC7d72D8">0x6e0d26cffc3a63d763F1546f749bf62ebC7d72D8</a>
                </td>
              </tr>
              <tr>
                <td>FlexibleStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FlexibleStorage.sol">FlexibleStorage.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x47649022380d182DA8010Ae5d257fea4227b21ff">0x47649022380d182DA8010Ae5d257fea4227b21ff</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketAAVE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x001b7876F567f0b3A639332Ed1e363839c6d85e2">0x001b7876F567f0b3A639332Ed1e363839c6d85e2</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketAPE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xFe00395ec846240dc693e92AB2Dd720F94765Aa3">0xFe00395ec846240dc693e92AB2Dd720F94765Aa3</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketAVAX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4ff54624D5FB61C34c634c3314Ed3BfE4dBB665a">0x4ff54624D5FB61C34c634c3314Ed3BfE4dBB665a</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketBNB</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4Aa0dabd22BC0894975324Bec293443c8538bD08">0x4Aa0dabd22BC0894975324Bec293443c8538bD08</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xEe8804d8Ad10b0C3aD1Bd57AC3737242aD24bB95">0xEe8804d8Ad10b0C3aD1Bd57AC3737242aD24bB95</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketDOGE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9f231dBE53D460f359B2B8CC47574493caA5B7Bf">0x9f231dBE53D460f359B2B8CC47574493caA5B7Bf</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketDYDX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x10305C1854d6DB8A1060dF60bDF8A8B2981249Cf">0x10305C1854d6DB8A1060dF60bDF8A8B2981249Cf</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketData</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarketData.sol">FuturesMarketData.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xC51aeDBEC3aCD26650a7E85B6909E8AEc4d0F19e">0xC51aeDBEC3aCD26650a7E85B6909E8AEc4d0F19e</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketDebtRatio</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xd325B17d5C9C3f2B6853A760afCF81945b0184d3">0xd325B17d5C9C3f2B6853A760afCF81945b0184d3</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xf86048DFf23cF130107dfB4e6386f574231a5C65">0xf86048DFf23cF130107dfB4e6386f574231a5C65</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xad44873632840144fFC97b2D1de716f6E2cF0366">0xad44873632840144fFC97b2D1de716f6E2cF0366</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x1228c7D8BBc5bC53DB181bD7B1fcE765aa83bF8A">0x1228c7D8BBc5bC53DB181bD7B1fcE765aa83bF8A</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketMATIC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xbCB2D435045E16B059b2130b28BE70b5cA47bFE5">0xbCB2D435045E16B059b2130b28BE70b5cA47bFE5</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketManager</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarketManager.sol">FuturesMarketManager.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xc704c9AA89d1ca60F67B3075d05fBb92b3B00B3B">0xc704c9AA89d1ca60F67B3075d05fBb92b3B00B3B</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketOP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9F1C2f0071Bc3b31447AEda9fA3A68d651eB4632">0x9F1C2f0071Bc3b31447AEda9fA3A68d651eB4632</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketSOL</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xcF853f7f8F78B2B801095b66F8ba9c5f04dB1640">0xcF853f7f8F78B2B801095b66F8ba9c5f04dB1640</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketSettings</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarketSettings.sol">FuturesMarketSettings.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xaE55F163337A2A46733AA66dA9F35299f9A46e9e">0xaE55F163337A2A46733AA66dA9F35299f9A46e9e</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketUNI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x5Af0072617F7f2AEB0e314e2faD1DE0231Ba97cD">0x5Af0072617F7f2AEB0e314e2faD1DE0231Ba97cD</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketXAG</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xb147C69BEe211F57290a6cde9d1BAbfD0DCF3Ea3">0xb147C69BEe211F57290a6cde9d1BAbfD0DCF3Ea3</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketXAU</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4434f56ddBdE28fab08C4AE71970a06B300F8881">0x4434f56ddBdE28fab08C4AE71970a06B300F8881</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketXMR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x3Ed04CEfF4c91872F19b1da35740C0Be9CA21558">0x3Ed04CEfF4c91872F19b1da35740C0Be9CA21558</a>
                </td>
              </tr>
              <tr>
                <td>Issuer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/Issuer.sol">Issuer.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x59B01789bF268C7C77451D02758621990bB50BBF">0x59B01789bF268C7C77451D02758621990bB50BBF</a>
                </td>
              </tr>
              <tr>
                <td>Liquidator</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/Liquidator.sol">Liquidator.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x61C7BC9b335e083c30C8a81b93575c361cdE93E2">0x61C7BC9b335e083c30C8a81b93575c361cdE93E2</a>
                </td>
              </tr>
              <tr>
                <td>LiquidatorRewards</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/LiquidatorRewards.sol">LiquidatorRewards.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xF4EebDD0704021eF2a6Bbe993fdf93030Cd784b4">0xF4EebDD0704021eF2a6Bbe993fdf93030Cd784b4</a>
                </td>
              </tr>
              <tr>
                <td>Math</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/Math.sol">Math.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x0B3A73EE0740b3130e40B2A6b5aaf59E7E3Ef74c">0x0B3A73EE0740b3130e40B2A6b5aaf59E7E3Ef74c</a>
                </td>
              </tr>
              <tr>
                <td>OneNetAggregatorDebtRatio</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/OneNetAggregatorDebtRatio.sol">OneNetAggregatorDebtRatio.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xA408d8e01C8E084B67559226C5B55D6F0B7074e2">0xA408d8e01C8E084B67559226C5B55D6F0B7074e2</a>
                </td>
              </tr>
              <tr>
                <td>OneNetAggregatorIssuedSynths</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/OneNetAggregatorIssuedSynths.sol">OneNetAggregatorIssuedSynths.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xe152A2DbcE62E6c0bd387fFd1bb8086F44c5Fd04">0xe152A2DbcE62E6c0bd387fFd1bb8086F44c5Fd04</a>
                </td>
              </tr>
              <tr>
                <td>OwnerRelayOnOptimism</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/OwnerRelayOnOptimism.sol">OwnerRelayOnOptimism.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6d4a64C57612841c2C6745dB2a4E4db34F002D20">0x6d4a64C57612841c2C6745dB2a4E4db34F002D20</a>
                </td>
              </tr>
              <tr>
                <td>ProxyERC20</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4">0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4</a>
                </td>
              </tr>
              <tr>
                <td>ProxyERC20sUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9">0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9</a>
                </td>
              </tr>
              <tr>
                <td>ProxyFeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4a16A42407AA491564643E1dfc1fd50af29794eF">0x4a16A42407AA491564643E1dfc1fd50af29794eF</a>
                </td>
              </tr>
              <tr>
                <td><span style="color: #AAA; text-decoration: line-through">ProxySynthetix</span><sup>Use ProxyERC20</sup></td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4">0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4</a>
                </td>
              </tr>
              <tr>
                <td>ProxysAAVE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x00B8D5a5e1Ac97Cb4341c4Bc4367443c8776e8d9">0x00B8D5a5e1Ac97Cb4341c4Bc4367443c8776e8d9</a>
                </td>
              </tr>
              <tr>
                <td>ProxysAVAX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xB2b42B231C68cbb0b4bF2FFEbf57782Fd97D3dA4">0xB2b42B231C68cbb0b4bF2FFEbf57782Fd97D3dA4</a>
                </td>
              </tr>
              <tr>
                <td>ProxysBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x298B9B95708152ff6968aafd889c6586e9169f1D">0x298B9B95708152ff6968aafd889c6586e9169f1D</a>
                </td>
              </tr>
              <tr>
                <td>ProxysETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xE405de8F52ba7559f9df3C368500B6E6ae6Cee49">0xE405de8F52ba7559f9df3C368500B6E6ae6Cee49</a>
                </td>
              </tr>
              <tr>
                <td>ProxysEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xFBc4198702E81aE77c06D58f81b629BDf36f0a71">0xFBc4198702E81aE77c06D58f81b629BDf36f0a71</a>
                </td>
              </tr>
              <tr>
                <td>ProxysINR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xa3A538EA5D5838dC32dde15946ccD74bDd5652fF">0xa3A538EA5D5838dC32dde15946ccD74bDd5652fF</a>
                </td>
              </tr>
              <tr>
                <td>ProxysLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xc5Db22719A06418028A40A9B5E9A7c02959D0d08">0xc5Db22719A06418028A40A9B5E9A7c02959D0d08</a>
                </td>
              </tr>
              <tr>
                <td>ProxysMATIC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x81DDfAc111913d3d5218DEA999216323B7CD6356">0x81DDfAc111913d3d5218DEA999216323B7CD6356</a>
                </td>
              </tr>
              <tr>
                <td>ProxysSOL</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x8b2F7Ae8cA8EE8428B6D76dE88326bB413db2766">0x8b2F7Ae8cA8EE8428B6D76dE88326bB413db2766</a>
                </td>
              </tr>
              <tr>
                <td>ProxysUNI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xf5a6115Aa582Fd1BEEa22BC93B7dC7a785F60d03">0xf5a6115Aa582Fd1BEEa22BC93B7dC7a785F60d03</a>
                </td>
              </tr>
              <tr>
                <td><span style="color: #AAA; text-decoration: line-through">ProxysUSD</span><sup>Use ProxyERC20sUSD</sup></td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9">0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9</a>
                </td>
              </tr>
              <tr>
                <td>ReadProxyAddressResolver</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ReadProxy.sol">ReadProxy.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x1Cb059b7e74fD21665968C908806143E744D5F30">0x1Cb059b7e74fD21665968C908806143E744D5F30</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrowV2</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ImportableRewardEscrowV2.sol">ImportableRewardEscrowV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6330D5F08f51057F36F46d6751eCDc0c65Ef7E9e">0x6330D5F08f51057F36F46d6751eCDc0c65Ef7E9e</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrowV2Storage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/RewardEscrowV2Storage.sol">RewardEscrowV2Storage.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x0c2ED9B23BAF9C5f486e175D406728d3bE46d2A6">0x0c2ED9B23BAF9C5f486e175D406728d3bE46d2A6</a>
                </td>
              </tr>
              <tr>
                <td>RewardsDistribution</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/RewardsDistribution.sol">RewardsDistribution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x5d9187630E99dBce4BcAB8733B76757f7F44aA2e">0x5d9187630E99dBce4BcAB8733B76757f7F44aA2e</a>
                </td>
              </tr>
              <tr>
                <td>SafeDecimalMath</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SafeDecimalMath.sol">SafeDecimalMath.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x0142F40c25CE1F1177Ed131101FA19217396cB88">0x0142F40c25CE1F1177Ed131101FA19217396cB88</a>
                </td>
              </tr>
              <tr>
                <td>SignedSafeDecimalMath</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SignedSafeDecimalMath.sol">SignedSafeDecimalMath.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x253914cf059f4c3E277c28060C404acFc38FB6e2">0x253914cf059f4c3E277c28060C404acFc38FB6e2</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardsSNXWETHUniswapV3</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xfD49C7EE330fE060ca66feE33d49206eB96F146D">0xfD49C7EE330fE060ca66feE33d49206eB96F146D</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssUSDDAIUniswapV3</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x7E11c004d20b502729918687E6E6777b28499085">0x7E11c004d20b502729918687E6E6777b28499085</a>
                </td>
              </tr>
              <tr>
                <td>SynthRedeemer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SynthRedeemer.sol">SynthRedeemer.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xA997BD647AEe62Ef03b41e6fBFAdaB43d8E57535">0xA997BD647AEe62Ef03b41e6fBFAdaB43d8E57535</a>
                </td>
              </tr>
              <tr>
                <td>SynthUtil</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SynthUtil.sol">SynthUtil.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x87b1481c82913301Fc6c884Ac266a7c430F92cFA">0x87b1481c82913301Fc6c884Ac266a7c430F92cFA</a>
                </td>
              </tr>
              <tr>
                <td>Synthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MintableSynthetix.sol">MintableSynthetix.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xF149ABD352f4AB50ca3c161f4F5d0c85AeFA8A9d">0xF149ABD352f4AB50ca3c161f4F5d0c85AeFA8A9d</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixBridgeToBase</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SynthetixBridgeToBase.sol">SynthetixBridgeToBase.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x136b1EC699c62b0606854056f02dC7Bb80482d63">0x136b1EC699c62b0606854056f02dC7Bb80482d63</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixDebtShare</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SynthetixDebtShare.sol">SynthetixDebtShare.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x45c55BF488D3Cb8640f12F63CbeDC027E8261E79">0x45c55BF488D3Cb8640f12F63CbeDC027E8261E79</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SynthetixEscrow.sol">SynthetixEscrow.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x06C6D063896ac733673c4474E44d9268f2402A55">0x06C6D063896ac733673c4474E44d9268f2402A55</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SynthetixStateWithLimitedSetup.sol">SynthetixStateWithLimitedSetup.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9770239D49Db97E77fc5Adcb5413654C9e45A510">0x9770239D49Db97E77fc5Adcb5413654C9e45A510</a>
                </td>
              </tr>
              <tr>
                <td>SynthsAAVE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x34783A738DdC355cD7c737D4101b20622681332a">0x34783A738DdC355cD7c737D4101b20622681332a</a>
                </td>
              </tr>
              <tr>
                <td>SynthsAVAX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x368A5126fF8e659004b6f9C9F723E15632e2B428">0x368A5126fF8e659004b6f9C9F723E15632e2B428</a>
                </td>
              </tr>
              <tr>
                <td>SynthsBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x421DEF861D623F7123dfE0878D86E9576cbb3975">0x421DEF861D623F7123dfE0878D86E9576cbb3975</a>
                </td>
              </tr>
              <tr>
                <td>SynthsETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xe9dceA0136FEFC76c4E639Ec60CCE70482E2aCF7">0xe9dceA0136FEFC76c4E639Ec60CCE70482E2aCF7</a>
                </td>
              </tr>
              <tr>
                <td>SynthsEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xdEdb0b04AFF1525bb4B6167F00e61601690c1fF2">0xdEdb0b04AFF1525bb4B6167F00e61601690c1fF2</a>
                </td>
              </tr>
              <tr>
                <td>SynthsINR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x34c2360ffe5D21542f76e991FFD104f281D4B3fb">0x34c2360ffe5D21542f76e991FFD104f281D4B3fb</a>
                </td>
              </tr>
              <tr>
                <td>SynthsLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x0F6877e0Bb54a0739C6173A814B39D5127804123">0x0F6877e0Bb54a0739C6173A814B39D5127804123</a>
                </td>
              </tr>
              <tr>
                <td>SynthsMATIC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xf49C194954b6B91855aC06D6C88Be316da60eD96">0xf49C194954b6B91855aC06D6C88Be316da60eD96</a>
                </td>
              </tr>
              <tr>
                <td>SynthsSOL</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x04B50a5992Ea2281E14d43494d656698EA9C24dD">0x04B50a5992Ea2281E14d43494d656698EA9C24dD</a>
                </td>
              </tr>
              <tr>
                <td>SynthsUNI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xcF2E165D2359E3C4dFF1E10eC40dBB5a745223A9">0xcF2E165D2359E3C4dFF1E10eC40dBB5a745223A9</a>
                </td>
              </tr>
              <tr>
                <td>SynthsUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xDfA2d3a0d32F870D87f8A0d7AA6b9CdEB7bc5AdB">0xDfA2d3a0d32F870D87f8A0d7AA6b9CdEB7bc5AdB</a>
                </td>
              </tr>
              <tr>
                <td>SystemSettings</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SystemSettings.sol">SystemSettings.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xE28b785ecc2Cb5FE949f5f31A5aEC3989f764838">0xE28b785ecc2Cb5FE949f5f31A5aEC3989f764838</a>
                </td>
              </tr>
              <tr>
                <td>SystemSettingsLib</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SystemSettingsLib.sol">SystemSettingsLib.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6fEd9c8de9886557AA7F4bF7784Cb579d38F833c">0x6fEd9c8de9886557AA7F4bF7784Cb579d38F833c</a>
                </td>
              </tr>
              <tr>
                <td>SystemStatus</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SystemStatus.sol">SystemStatus.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xE8c41bE1A167314ABAF2423b72Bf8da826943FFD">0xE8c41bE1A167314ABAF2423b72Bf8da826943FFD</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateSynthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xB9c6CA25452E7f6D0D3340CE1e9B573421afc2eE">0xB9c6CA25452E7f6D0D3340CE1e9B573421afc2eE</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesAAVE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xAf918f4a72BC34E59dFaF65866feC87947F1f590">0xAf918f4a72BC34E59dFaF65866feC87947F1f590</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesAVAX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2114d1C571CB541f3416a65f8BccFf9BB9E55Dc5">0x2114d1C571CB541f3416a65f8BccFf9BB9E55Dc5</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xA9E630952522E3F110322711F424528Af894e307">0xA9E630952522E3F110322711F424528Af894e307</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xEc3665F7e696b0Ad0D04Ae5161b18782D48cd1fd">0xEc3665F7e696b0Ad0D04Ae5161b18782D48cd1fd</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x7afF10fc89B162c7aBf77974d190E7959cb456f5">0x7afF10fc89B162c7aBf77974d190E7959cb456f5</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesINR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xfE33ae95A9f0DA8A845aF33516EDc240DCD711d6">0xfE33ae95A9f0DA8A845aF33516EDc240DCD711d6</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x08a008eEA07d3cC7ca1913EEC3468C10F8F79e6A">0x08a008eEA07d3cC7ca1913EEC3468C10F8F79e6A</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesMATIC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x937C9E1d18bEB4F8E1BCB0Dd7a612ca6012517a3">0x937C9E1d18bEB4F8E1BCB0Dd7a612ca6012517a3</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesSOL</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6825Dd6B5b83FBbFF1049A44dc808A10fe9a6719">0x6825Dd6B5b83FBbFF1049A44dc808A10fe9a6719</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesUNI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xf32b995Fe4dDf540C848236dB9638d137Aa9b6ff">0xf32b995Fe4dDf540C848236dB9638d137Aa9b6ff</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x92bAc115d89cA17fd02Ed9357CEcA32842ACB4c2">0x92bAc115d89cA17fd02Ed9357CEcA32842ACB4c2</a>
                </td>
              </tr>
              <tr>
                <td>TradingRewards</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TradingRewards.sol">TradingRewards.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2DcAD1A019fba8301b77810Ae14007cc88ED004B">0x2DcAD1A019fba8301b77810Ae14007cc88ED004B</a>
                </td>
              </tr>
              <tr>
                <td>WrapperFactory</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/WrapperFactory.sol">WrapperFactory.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x27be2EFAd45DeBd732C1EBf5C9F7b49D498D4a93">0x27be2EFAd45DeBd732C1EBf5C9F7b49D498D4a93</a>
                </td>
              </tr></table>

## GOERLI

<table><tr><th>Name</th><th>Source</th><th>Address</th></tr>
              <tr>
                <td>AddressResolver</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/AddressResolver.sol">AddressResolver.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x0C80ff30d1e09135ec60cfe52B2c2EaE1B2f42AB">0x0C80ff30d1e09135ec60cfe52B2c2EaE1B2f42AB</a>
                </td>
              </tr>
              <tr>
                <td>CircuitBreaker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/CircuitBreaker.sol">CircuitBreaker.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x183B4A053CbA70a420E581918008Ef8e65d95E05">0x183B4A053CbA70a420E581918008Ef8e65d95E05</a>
                </td>
              </tr>
              <tr>
                <td>CollateralErc20</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/CollateralErc20.sol">CollateralErc20.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x0376Bdaf9C97E2e454C83e728154eC621df23958">0x0376Bdaf9C97E2e454C83e728154eC621df23958</a>
                </td>
              </tr>
              <tr>
                <td>CollateralEth</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/CollateralEth.sol">CollateralEth.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x7D2bEB18a21468808E16fD1fbe9637eFa98D0777">0x7D2bEB18a21468808E16fD1fbe9637eFa98D0777</a>
                </td>
              </tr>
              <tr>
                <td>CollateralManager</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/CollateralManager.sol">CollateralManager.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x86bfC5Be44f5DE1673824c0d0d1CCEA1306cD40e">0x86bfC5Be44f5DE1673824c0d0d1CCEA1306cD40e</a>
                </td>
              </tr>
              <tr>
                <td>CollateralManagerState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/CollateralManagerState.sol">CollateralManagerState.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x66f040F0ba81eEe22EcAa8a20219E226be7cCBE3">0x66f040F0ba81eEe22EcAa8a20219E226be7cCBE3</a>
                </td>
              </tr>
              <tr>
                <td>CollateralShort</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/CollateralShort.sol">CollateralShort.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x6d20C286D94a603A1cdE80D1f8e5f44Bc22550C0">0x6d20C286D94a603A1cdE80D1f8e5f44Bc22550C0</a>
                </td>
              </tr>
              <tr>
                <td>CollateralUtil</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/CollateralUtil.sol">CollateralUtil.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x814AAB41E07D2c3fA53C0c6f3002cD654a4489EE">0x814AAB41E07D2c3fA53C0c6f3002cD654a4489EE</a>
                </td>
              </tr>
              <tr>
                <td>DappMaintenance</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/DappMaintenance.sol">DappMaintenance.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xBDe6A172C2a4475C74DA4eAC3950ef2FDAc626Dc">0xBDe6A172C2a4475C74DA4eAC3950ef2FDAc626Dc</a>
                </td>
              </tr>
              <tr>
                <td>DebtCache</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/DebtCache.sol">DebtCache.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xc30BECA82f1f60DC0e4d3490428525985eef4D74">0xc30BECA82f1f60DC0e4d3490428525985eef4D74</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovals</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/DelegateApprovals.sol">DelegateApprovals.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xf053f15a780C40A4aBa0E50EB09e3C2dc0Ed4Fae">0xf053f15a780C40A4aBa0E50EB09e3C2dc0Ed4Fae</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovalsEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/EternalStorage.sol">EternalStorage.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xbEFd5Fbea0665E94F025d6eC0BdDd6694ce947F4">0xbEFd5Fbea0665E94F025d6eC0BdDd6694ce947F4</a>
                </td>
              </tr>
              <tr>
                <td>Depot</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/Depot.sol">Depot.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x9B79D6dFe4650d70f35dbb80f7d1EC0Cf7f823Fd">0x9B79D6dFe4650d70f35dbb80f7d1EC0Cf7f823Fd</a>
                </td>
              </tr>
              <tr>
                <td>DirectIntegrationManager</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/DirectIntegrationManager.sol">DirectIntegrationManager.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x79654872398a5C667455058890B29B081Ed47939">0x79654872398a5C667455058890B29B081Ed47939</a>
                </td>
              </tr>
              <tr>
                <td>EscrowChecker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/EscrowChecker.sol">EscrowChecker.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x2743DB52d841Ea617B0528aB0AfeF58d355f0621">0x2743DB52d841Ea617B0528aB0AfeF58d355f0621</a>
                </td>
              </tr>
              <tr>
                <td>EtherWrapper</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/EtherWrapper.sol">EtherWrapper.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x4556b9761b2aC071D1665FAe01faA255a53d1307">0x4556b9761b2aC071D1665FAe01faA255a53d1307</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeCircuitBreaker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ExchangeCircuitBreaker.sol">ExchangeCircuitBreaker.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xf1D0Ee19af243bcbC140A2259290B490E4df92A9">0xf1D0Ee19af243bcbC140A2259290B490E4df92A9</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeRates</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ExchangeRatesWithDexPricing.sol">ExchangeRatesWithDexPricing.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xC6fEa2a12a8a9e11232b18DC4d9D525F02180247">0xC6fEa2a12a8a9e11232b18DC4d9D525F02180247</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeSettlementLib</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ExchangeSettlementLib.sol">ExchangeSettlementLib.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xA4D8e25579Fc765fF1963dD37132061599C61689">0xA4D8e25579Fc765fF1963dD37132061599C61689</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ExchangeState.sol">ExchangeState.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x4023B3Bf1749725584B0a467406C5bb24DA3AC4e">0x4023B3Bf1749725584B0a467406C5bb24DA3AC4e</a>
                </td>
              </tr>
              <tr>
                <td>Exchanger</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ExchangerWithFeeRecAlternatives.sol">ExchangerWithFeeRecAlternatives.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x6Ce575c870ce744e245Ef8400b6d89412C35c328">0x6Ce575c870ce744e245Ef8400b6d89412C35c328</a>
                </td>
              </tr>
              <tr>
                <td>FeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FeePool.sol">FeePool.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x9D9aAf3ED4E4A708834F148f9b9d0d12Ba0a8034">0x9D9aAf3ED4E4A708834F148f9b9d0d12Ba0a8034</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FeePoolEternalStorage.sol">FeePoolEternalStorage.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x5cB8210159f486dFE8Dc779357ee5A15B8f233bC">0x5cB8210159f486dFE8Dc779357ee5A15B8f233bC</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FeePoolState.sol">FeePoolState.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x7F4a3D2d0e45ECD301Be8a181c3911677c353C85">0x7F4a3D2d0e45ECD301Be8a181c3911677c353C85</a>
                </td>
              </tr>
              <tr>
                <td>FlexibleStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FlexibleStorage.sol">FlexibleStorage.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x485f9215839a122A3EF7c412B25931C6FeC02A45">0x485f9215839a122A3EF7c412B25931C6FeC02A45</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketManager</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/EmptyFuturesMarketManager.sol">EmptyFuturesMarketManager.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x55Bc4475e73E32255D3825fbD44cF5467950F33E">0x55Bc4475e73E32255D3825fbD44cF5467950F33E</a>
                </td>
              </tr>
              <tr>
                <td>Issuer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/Issuer.sol">Issuer.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x35a3F27736955394ee27Ce5348854670CE8D31DF">0x35a3F27736955394ee27Ce5348854670CE8D31DF</a>
                </td>
              </tr>
              <tr>
                <td>Liquidator</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/Liquidator.sol">Liquidator.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xac0BE3b71d0bd224FCF83654e5aC2d2c9e2817BC">0xac0BE3b71d0bd224FCF83654e5aC2d2c9e2817BC</a>
                </td>
              </tr>
              <tr>
                <td>LiquidatorRewards</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/LiquidatorRewards.sol">LiquidatorRewards.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x601A1Cf1a34d9cF0020dCCD361c155Fe54CE24fB">0x601A1Cf1a34d9cF0020dCCD361c155Fe54CE24fB</a>
                </td>
              </tr>
              <tr>
                <td>Math</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/Math.sol">Math.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xee5cFeEA2caC5F3A13DB1193c211C7bfA5c03dF0">0xee5cFeEA2caC5F3A13DB1193c211C7bfA5c03dF0</a>
                </td>
              </tr>
              <tr>
                <td>NativeEtherWrapper</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/NativeEtherWrapper.sol">NativeEtherWrapper.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x3b820F825088DB6cD6E118C0c9B39755859932a9">0x3b820F825088DB6cD6E118C0c9B39755859932a9</a>
                </td>
              </tr>
              <tr>
                <td>OneNetAggregatorDebtRatio</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/OneNetAggregatorDebtRatio.sol">OneNetAggregatorDebtRatio.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x409b427d6c8227eeCb4079EF74A6F9224297E19E">0x409b427d6c8227eeCb4079EF74A6F9224297E19E</a>
                </td>
              </tr>
              <tr>
                <td>OneNetAggregatorIssuedSynths</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/OneNetAggregatorIssuedSynths.sol">OneNetAggregatorIssuedSynths.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xBE14c5803Fa245C5e8c70d5050a076Baaa52956c">0xBE14c5803Fa245C5e8c70d5050a076Baaa52956c</a>
                </td>
              </tr>
              <tr>
                <td>OneNetAggregatorsDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/OneNetAggregatorsDEFI.sol">OneNetAggregatorsDEFI.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xA43Ba9F2A27F5Fe86c7A8Fe4A75d42F4d2Cf6358">0xA43Ba9F2A27F5Fe86c7A8Fe4A75d42F4d2Cf6358</a>
                </td>
              </tr>
              <tr>
                <td>OwnerRelayOnEthereum</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/OwnerRelayOnEthereum.sol">OwnerRelayOnEthereum.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xFdB31235cDFe68bfFD1d687AC3A2b31E80eacf0d">0xFdB31235cDFe68bfFD1d687AC3A2b31E80eacf0d</a>
                </td>
              </tr>
              <tr>
                <td>ProxyFeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x4FC6f7C8Ff4f0D535315F1E6e84897c89367b47E">0x4FC6f7C8Ff4f0D535315F1E6e84897c89367b47E</a>
                </td>
              </tr>
              <tr>
                <td><span style="color: #AAA; text-decoration: line-through">ProxySynthetix</span><sup>Use ProxyERC20</sup></td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x51f44ca59b867E005e48FA573Cb8df83FC7f7597">0x51f44ca59b867E005e48FA573Cb8df83FC7f7597</a>
                </td>
              </tr>
              <tr>
                <td>ProxysBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xf04fD9A2C265E7828832E9EFb01474b686CacD14">0xf04fD9A2C265E7828832E9EFb01474b686CacD14</a>
                </td>
              </tr>
              <tr>
                <td>ProxysETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x37216d2366B68Bd8bC64Eb01B83EFA765C21b483">0x37216d2366B68Bd8bC64Eb01B83EFA765C21b483</a>
                </td>
              </tr>
              <tr>
                <td><span style="color: #AAA; text-decoration: line-through">ProxysUSD</span><sup>Use ProxyERC20sUSD</sup></td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xB1f664162c0269A469a699709D37cc5739379dD1">0xB1f664162c0269A469a699709D37cc5739379dD1</a>
                </td>
              </tr>
              <tr>
                <td>ReadProxyAddressResolver</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ReadProxy.sol">ReadProxy.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x58719E8Ef4d201541e44505a2ACB3424481d6681">0x58719E8Ef4d201541e44505a2ACB3424481d6681</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/RewardEscrow.sol">RewardEscrow.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x249BCCbFD33FA6653Db02aE2349444EF25E9B41d">0x249BCCbFD33FA6653Db02aE2349444EF25E9B41d</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrowV2</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/RewardEscrowV2.sol">RewardEscrowV2.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x4300a068B3826aCEFaE7062b411aF467a34Bf3A6">0x4300a068B3826aCEFaE7062b411aF467a34Bf3A6</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrowV2Storage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/RewardEscrowV2Storage.sol">RewardEscrowV2Storage.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xC10cd6Cf0F7D12529433110DaF0fC3Dc14669961">0xC10cd6Cf0F7D12529433110DaF0fC3Dc14669961</a>
                </td>
              </tr>
              <tr>
                <td>RewardsDistribution</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/RewardsDistribution.sol">RewardsDistribution.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x882eaF70e172b8543145811c5fE169d03740ba9a">0x882eaF70e172b8543145811c5fE169d03740ba9a</a>
                </td>
              </tr>
              <tr>
                <td>SafeDecimalMath</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SafeDecimalMath.sol">SafeDecimalMath.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xb6a200136891Be1C881431320E4092953788C7e0">0xb6a200136891Be1C881431320E4092953788C7e0</a>
                </td>
              </tr>
              <tr>
                <td>SignedSafeDecimalMath</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SignedSafeDecimalMath.sol">SignedSafeDecimalMath.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xbFe5dA86981e2dB461bd85D31795aD233748EE32">0xbFe5dA86981e2dB461bd85D31795aD233748EE32</a>
                </td>
              </tr>
              <tr>
                <td>SupplySchedule</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SupplySchedule.sol">SupplySchedule.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x3e5baba6b1467e8c93294F7a4cdA8fDA688E9Bf2">0x3e5baba6b1467e8c93294F7a4cdA8fDA688E9Bf2</a>
                </td>
              </tr>
              <tr>
                <td>SynthRedeemer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SynthRedeemer.sol">SynthRedeemer.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x32A0BAA5Acec418a85Fd032f0292893B8E4f743B">0x32A0BAA5Acec418a85Fd032f0292893B8E4f743B</a>
                </td>
              </tr>
              <tr>
                <td>SynthUtil</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SynthUtil.sol">SynthUtil.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x492395BA6866EF703DA49667fF92Cb8551e7a2D1">0x492395BA6866EF703DA49667fF92Cb8551e7a2D1</a>
                </td>
              </tr>
              <tr>
                <td>Synthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/Synthetix.sol">Synthetix.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x4187a6CecB490F5154c04514410a928191830443">0x4187a6CecB490F5154c04514410a928191830443</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixBridgeEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SynthetixBridgeEscrow.sol">SynthetixBridgeEscrow.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xD134Db47DDF5A6feB245452af17cCAf92ee53D3c">0xD134Db47DDF5A6feB245452af17cCAf92ee53D3c</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixBridgeToOptimism</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SynthetixBridgeToOptimism.sol">SynthetixBridgeToOptimism.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x1427Bc44755d9Aa317535B1feE38922760Aa4e65">0x1427Bc44755d9Aa317535B1feE38922760Aa4e65</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixDebtShare</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SynthetixDebtShare.sol">SynthetixDebtShare.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x671C874C43B571878D6a90C5AA27288096eEac21">0x671C874C43B571878D6a90C5AA27288096eEac21</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SynthetixEscrow.sol">SynthetixEscrow.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xD1F9481B1df0401FEB40667b10f2D0AAEc81cd34">0xD1F9481B1df0401FEB40667b10f2D0AAEc81cd34</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SynthetixState.sol">SynthetixState.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xcbcFB6E2d8517DB83BedB30f79D5197607207A2c">0xcbcFB6E2d8517DB83BedB30f79D5197607207A2c</a>
                </td>
              </tr>
              <tr>
                <td>SynthsBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xD511a29AFF50503cCaF476EF9ebdd18Cbab1422c">0xD511a29AFF50503cCaF476EF9ebdd18Cbab1422c</a>
                </td>
              </tr>
              <tr>
                <td>SynthsETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xB7774b79f83191eFF5F159889d1e7A5A242e2244">0xB7774b79f83191eFF5F159889d1e7A5A242e2244</a>
                </td>
              </tr>
              <tr>
                <td>SynthsUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x8f01E7815583C5Be70e4608Fde3DdE7DcC29592f">0x8f01E7815583C5Be70e4608Fde3DdE7DcC29592f</a>
                </td>
              </tr>
              <tr>
                <td>SystemSettings</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SystemSettings.sol">SystemSettings.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x063E110E614474Aa1FFB36936aBED4b1d173e5fc">0x063E110E614474Aa1FFB36936aBED4b1d173e5fc</a>
                </td>
              </tr>
              <tr>
                <td>SystemSettingsLib</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SystemSettingsLib.sol">SystemSettingsLib.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x52C339d07e82d49073f6B85AB033599e0eB644f9">0x52C339d07e82d49073f6B85AB033599e0eB644f9</a>
                </td>
              </tr>
              <tr>
                <td>SystemStatus</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SystemStatus.sol">SystemStatus.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x31541f35F6Bd061f4A894fB7eEE565f81EE50df3">0x31541f35F6Bd061f4A894fB7eEE565f81EE50df3</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateSynthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/LegacyTokenState.sol">LegacyTokenState.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xe842C91A5D2BCE122d89497f171d81067255Ad0d">0xe842C91A5D2BCE122d89497f171d81067255Ad0d</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xA8Fd421326586c440b76aC07B6b48fcD11Dc475e">0xA8Fd421326586c440b76aC07B6b48fcD11Dc475e</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x6BB584b67Fc54B4C0449625711A341a767f87B94">0x6BB584b67Fc54B4C0449625711A341a767f87B94</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x5F0CCaBe97bF838c777F08702E17EC300FF78cD0">0x5F0CCaBe97bF838c777F08702E17EC300FF78cD0</a>
                </td>
              </tr>
              <tr>
                <td>TradingRewards</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TradingRewards.sol">TradingRewards.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x6eab29a0904d0fd964AdE1F6c3ab1584E36602aE">0x6eab29a0904d0fd964AdE1F6c3ab1584E36602aE</a>
                </td>
              </tr>
              <tr>
                <td>VirtualSynthMastercopy</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/VirtualSynthMastercopy.sol">VirtualSynthMastercopy.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x1f6b96d2e7a5D70777D2A9c52215044FB3f40D37">0x1f6b96d2e7a5D70777D2A9c52215044FB3f40D37</a>
                </td>
              </tr>
              <tr>
                <td>WrapperFactory</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/WrapperFactory.sol">WrapperFactory.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xa69768003543eBe5DD91E787278D99FfF9aD6095">0xa69768003543eBe5DD91E787278D99FfF9aD6095</a>
                </td>
              </tr></table>

## GOERLI Optimism (L2)

<table><tr><th>Name</th><th>Source</th><th>Address</th></tr>
              <tr>
                <td>AddressResolver</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/AddressResolver.sol">AddressResolver.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1d551351613a28d676BaC1Af157799e201279198">0x1d551351613a28d676BaC1Af157799e201279198</a>
                </td>
              </tr>
              <tr>
                <td>CircuitBreaker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/CircuitBreaker.sol">CircuitBreaker.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x5cB8210159f486dFE8Dc779357ee5A15B8f233bC">0x5cB8210159f486dFE8Dc779357ee5A15B8f233bC</a>
                </td>
              </tr>
              <tr>
                <td>CollateralEth</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/CollateralEth.sol">CollateralEth.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x35725C94f3B1aB6BbD533c0B6Df525537d422c5F">0x35725C94f3B1aB6BbD533c0B6Df525537d422c5F</a>
                </td>
              </tr>
              <tr>
                <td>CollateralManager</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/CollateralManager.sol">CollateralManager.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0440f82444C825a0842f50e1c25cb68676d736e3">0x0440f82444C825a0842f50e1c25cb68676d736e3</a>
                </td>
              </tr>
              <tr>
                <td>CollateralManagerState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/CollateralManagerState.sol">CollateralManagerState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xA6B255CB2Bd5Ad5f3EaE2D246ec1c2c3F7F79574">0xA6B255CB2Bd5Ad5f3EaE2D246ec1c2c3F7F79574</a>
                </td>
              </tr>
              <tr>
                <td>CollateralShort</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/CollateralShort.sol">CollateralShort.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1a471C12f7efd7adB0065E3c7e457a0c36c13490">0x1a471C12f7efd7adB0065E3c7e457a0c36c13490</a>
                </td>
              </tr>
              <tr>
                <td>CollateralUtil</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/CollateralUtil.sol">CollateralUtil.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x4BbDe1e5f91e6E8928CdCBF800aC990015387EbA">0x4BbDe1e5f91e6E8928CdCBF800aC990015387EbA</a>
                </td>
              </tr>
              <tr>
                <td>DappMaintenance</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/DappMaintenance.sol">DappMaintenance.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x4259a2004A1E110A86564ff1441c37F1461F344F">0x4259a2004A1E110A86564ff1441c37F1461F344F</a>
                </td>
              </tr>
              <tr>
                <td>DebtCache</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/DebtCache.sol">DebtCache.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x216EaF79575563A5e13227ad075850cDeb004083">0x216EaF79575563A5e13227ad075850cDeb004083</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovals</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/DelegateApprovals.sol">DelegateApprovals.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2715DC87A9c9a9A1a02641403205F4F093E1A659">0x2715DC87A9c9a9A1a02641403205F4F093E1A659</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovalsEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/EternalStorage.sol">EternalStorage.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x9800812f1d80bbe763DA97C967e746ca7a2d1Ccd">0x9800812f1d80bbe763DA97C967e746ca7a2d1Ccd</a>
                </td>
              </tr>
              <tr>
                <td>DirectIntegrationManager</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/DirectIntegrationManager.sol">DirectIntegrationManager.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xbDC73F42943bAce3A4eEE280650e80531Cc6a38C">0xbDC73F42943bAce3A4eEE280650e80531Cc6a38C</a>
                </td>
              </tr>
              <tr>
                <td>EscrowChecker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/EscrowChecker.sol">EscrowChecker.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x69927Cda9Df863464afAC7DA506928BF3a3ec11f">0x69927Cda9Df863464afAC7DA506928BF3a3ec11f</a>
                </td>
              </tr>
              <tr>
                <td>EtherWrapper</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/EmptyEtherWrapper.sol">EmptyEtherWrapper.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x858A2FF0EAe5fcb0be10df79B741Cff89B77FeCB">0x858A2FF0EAe5fcb0be10df79B741Cff89B77FeCB</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeCircuitBreaker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ExchangeCircuitBreaker.sol">ExchangeCircuitBreaker.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xFdb50671276DbC9D24D68b272B54dE4a87aaCc6c">0xFdb50671276DbC9D24D68b272B54dE4a87aaCc6c</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeRates</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ExchangeRates.sol">ExchangeRates.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x061B75475035c20ef2e35E1002Beb90C3c1f24cC">0x061B75475035c20ef2e35E1002Beb90C3c1f24cC</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeSettlementLib</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ExchangeSettlementLib.sol">ExchangeSettlementLib.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xc09f90045F772117634FDF23fFCCd3bEE1abB4AD">0xc09f90045F772117634FDF23fFCCd3bEE1abB4AD</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ExchangeState.sol">ExchangeState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xeD5D12c5A772F32dE608CF84F671C123e132FA80">0xeD5D12c5A772F32dE608CF84F671C123e132FA80</a>
                </td>
              </tr>
              <tr>
                <td>Exchanger</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/Exchanger.sol">Exchanger.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x164724726608622b6e5Fa1aF8932b45A7Bd1a94D">0x164724726608622b6e5Fa1aF8932b45A7Bd1a94D</a>
                </td>
              </tr>
              <tr>
                <td>FeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FeePool.sol">FeePool.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x216B2767C7E28f26878e668a6a06d3C364dE0725">0x216B2767C7E28f26878e668a6a06d3C364dE0725</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FeePoolEternalStorage.sol">FeePoolEternalStorage.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xd01075abdD086006c85840de62544506d7Ab3C79">0xd01075abdD086006c85840de62544506d7Ab3C79</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FeePoolState.sol">FeePoolState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0FA904962C4f5427590dD4517697C32363639303">0x0FA904962C4f5427590dD4517697C32363639303</a>
                </td>
              </tr>
              <tr>
                <td>FlexibleStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FlexibleStorage.sol">FlexibleStorage.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x88CAf687f3E1cae053BF0CdbB52EFb1c5dcAbD87">0x88CAf687f3E1cae053BF0CdbB52EFb1c5dcAbD87</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketAAVE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1E246e2bc7dc1e2baDa90dC824c71deAaBa65eE2">0x1E246e2bc7dc1e2baDa90dC824c71deAaBa65eE2</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketAPE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xA7C788d7f5B177AfB3c7B3Af815C678F6181a163">0xA7C788d7f5B177AfB3c7B3Af815C678F6181a163</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketAVAX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xc6af1F51b262616BC7DBc3F000Df154709AEe1Bd">0xc6af1F51b262616BC7DBc3F000Df154709AEe1Bd</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketBNB</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3F66f483b8A66EcBbF3385E5Df6C581c2378d8B7">0x3F66f483b8A66EcBbF3385E5Df6C581c2378d8B7</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2f421752B7C07268DEA60A1B39D67927a5abA2F6">0x2f421752B7C07268DEA60A1B39D67927a5abA2F6</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketDOGE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xc006bd42B2ca95Cd640D314dA3DF4c59436C7739">0xc006bd42B2ca95Cd640D314dA3DF4c59436C7739</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketDYDX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x122c1a5E0140bA0E3c7a44418bd83E9e5b049295">0x122c1a5E0140bA0E3c7a44418bd83E9e5b049295</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketData</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarketData.sol">FuturesMarketData.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3FAe35Cfea950Fada314589213BABC54A084d5Bf">0x3FAe35Cfea950Fada314589213BABC54A084d5Bf</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0D10c032ad006C98C33A95e59ab3BA2b0849bD59">0x0D10c032ad006C98C33A95e59ab3BA2b0849bD59</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xAd4d525C8B6eAE32c3BFE8de5c7f87791690CdB3">0xAd4d525C8B6eAE32c3BFE8de5c7f87791690CdB3</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x071171c2289b2Aef8F83eC50650f8eb91DbE44d2">0x071171c2289b2Aef8F83eC50650f8eb91DbE44d2</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketMATIC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xE89f6f10Dd2e200440198a6b773E16e3c9B1478C">0xE89f6f10Dd2e200440198a6b773E16e3c9B1478C</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketManager</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarketManager.sol">FuturesMarketManager.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x95d6B120862986Fb605B0ccD1f0E8a71f5f4fB2c">0x95d6B120862986Fb605B0ccD1f0E8a71f5f4fB2c</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketSOL</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xc6fD6AD47e393a44283Eb2f7a058807C64853aA1">0xc6fD6AD47e393a44283Eb2f7a058807C64853aA1</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketSettings</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarketSettings.sol">FuturesMarketSettings.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0dde87714C3bdACB93bB1d38605aFff209a85998">0x0dde87714C3bdACB93bB1d38605aFff209a85998</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketUNI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x44Af736495544a726ED15CB0EBe2d87a6bCC1832">0x44Af736495544a726ED15CB0EBe2d87a6bCC1832</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketXAG</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x89F36593eeD8807C43e81Ce7d633e15365274eeF">0x89F36593eeD8807C43e81Ce7d633e15365274eeF</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketXAU</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2f1e8B79E9032b9f43A40d61fa4F446c3eFCf165">0x2f1e8B79E9032b9f43A40d61fa4F446c3eFCf165</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketXMR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0Ee2c2E01072c5Fa866BB3372Fe81698FB3165bA">0x0Ee2c2E01072c5Fa866BB3372Fe81698FB3165bA</a>
                </td>
              </tr>
              <tr>
                <td>Issuer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/Issuer.sol">Issuer.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x59bd355dd9A853b345434474341178DbC27dC7a6">0x59bd355dd9A853b345434474341178DbC27dC7a6</a>
                </td>
              </tr>
              <tr>
                <td>Liquidator</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/Liquidator.sol">Liquidator.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3F3f0fb2b35cFAc95EDd08403633f29687E32f0D">0x3F3f0fb2b35cFAc95EDd08403633f29687E32f0D</a>
                </td>
              </tr>
              <tr>
                <td>LiquidatorRewards</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/LiquidatorRewards.sol">LiquidatorRewards.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1c6C0a89064206e397E75b11Bcd370E8A8A007B4">0x1c6C0a89064206e397E75b11Bcd370E8A8A007B4</a>
                </td>
              </tr>
              <tr>
                <td>Math</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/Math.sol">Math.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x6fa3D41F37F544c6982693eFEe8B0d4BD88986ed">0x6fa3D41F37F544c6982693eFEe8B0d4BD88986ed</a>
                </td>
              </tr>
              <tr>
                <td>OneNetAggregatorDebtRatio</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/OneNetAggregatorDebtRatio.sol">OneNetAggregatorDebtRatio.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x88e566CF9E29e08AfFB23abe3E9065bD88ACB152">0x88e566CF9E29e08AfFB23abe3E9065bD88ACB152</a>
                </td>
              </tr>
              <tr>
                <td>OneNetAggregatorIssuedSynths</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/OneNetAggregatorIssuedSynths.sol">OneNetAggregatorIssuedSynths.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x904c9424484ba6D5C47d979d8e9Fc5261747D681">0x904c9424484ba6D5C47d979d8e9Fc5261747D681</a>
                </td>
              </tr>
              <tr>
                <td>OwnerRelayOnOptimism</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/OwnerRelayOnOptimism.sol">OwnerRelayOnOptimism.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x55C20ea46766E3E50D4eD1973A88550B2949825c">0x55C20ea46766E3E50D4eD1973A88550B2949825c</a>
                </td>
              </tr>
              <tr>
                <td>ProxyFeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x4Fa8252a6C60C891BE35Db51F1F4F5973b88dF98">0x4Fa8252a6C60C891BE35Db51F1F4F5973b88dF98</a>
                </td>
              </tr>
              <tr>
                <td><span style="color: #AAA; text-decoration: line-through">ProxySynthetix</span><sup>Use ProxyERC20</sup></td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2E5ED97596a8368EB9E44B1f3F25B2E813845303">0x2E5ED97596a8368EB9E44B1f3F25B2E813845303</a>
                </td>
              </tr>
              <tr>
                <td>ProxysBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x23c7a77D22Fc1274eCecB703f74699500db106E6">0x23c7a77D22Fc1274eCecB703f74699500db106E6</a>
                </td>
              </tr>
              <tr>
                <td>ProxysETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x6c3856488e664C6b0380AAEfBFD1c28cd6727eC8">0x6c3856488e664C6b0380AAEfBFD1c28cd6727eC8</a>
                </td>
              </tr>
              <tr>
                <td><span style="color: #AAA; text-decoration: line-through">ProxysUSD</span><sup>Use ProxyERC20sUSD</sup></td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xeBaEAAD9236615542844adC5c149F86C36aD1136">0xeBaEAAD9236615542844adC5c149F86C36aD1136</a>
                </td>
              </tr>
              <tr>
                <td>ReadProxyAddressResolver</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ReadProxy.sol">ReadProxy.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x9Fc84992dF5496797784374B810E04238728743d">0x9Fc84992dF5496797784374B810E04238728743d</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrowV2</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/ImportableRewardEscrowV2.sol">ImportableRewardEscrowV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xF6C92Ad11fa67b7b685aDb435FbE932c049B670c">0xF6C92Ad11fa67b7b685aDb435FbE932c049B670c</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrowV2Storage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/RewardEscrowV2Storage.sol">RewardEscrowV2Storage.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0C90f734a1c716540549D22509578331061CBff2">0x0C90f734a1c716540549D22509578331061CBff2</a>
                </td>
              </tr>
              <tr>
                <td>RewardsDistribution</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/RewardsDistribution.sol">RewardsDistribution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xb12704F8BddA7CF3eBa5F9A463404D4ba5d0e282">0xb12704F8BddA7CF3eBa5F9A463404D4ba5d0e282</a>
                </td>
              </tr>
              <tr>
                <td>SafeDecimalMath</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SafeDecimalMath.sol">SafeDecimalMath.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x6Bb3B18694A6849654379F040DcB112E07da9DC7">0x6Bb3B18694A6849654379F040DcB112E07da9DC7</a>
                </td>
              </tr>
              <tr>
                <td>SignedSafeDecimalMath</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SignedSafeDecimalMath.sol">SignedSafeDecimalMath.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x6d2eA159C128eC361a9a23b1456Ef0aAD0bec46b">0x6d2eA159C128eC361a9a23b1456Ef0aAD0bec46b</a>
                </td>
              </tr>
              <tr>
                <td>SynthRedeemer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SynthRedeemer.sol">SynthRedeemer.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2A8338199D802620B4516a557195a498595d7Eb6">0x2A8338199D802620B4516a557195a498595d7Eb6</a>
                </td>
              </tr>
              <tr>
                <td>SynthUtil</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SynthUtil.sol">SynthUtil.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xC647DecC9c4f9162dBF77E4367199F5ED0950355">0xC647DecC9c4f9162dBF77E4367199F5ED0950355</a>
                </td>
              </tr>
              <tr>
                <td>Synthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MintableSynthetix.sol">MintableSynthetix.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x11c6e5D94b91D87EF392109f28474ABfC09DddCb">0x11c6e5D94b91D87EF392109f28474ABfC09DddCb</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixBridgeToBase</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SynthetixBridgeToBase.sol">SynthetixBridgeToBase.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xD2b3F0Ea40dB68088415412b0043F37B3088836D">0xD2b3F0Ea40dB68088415412b0043F37B3088836D</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixDebtShare</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SynthetixDebtShare.sol">SynthetixDebtShare.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3c710172e7f95aCAaDeD243982a90F8F235fF9f1">0x3c710172e7f95aCAaDeD243982a90F8F235fF9f1</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SynthetixEscrow.sol">SynthetixEscrow.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xFaFd00D0CaA6D5cd5161c5C1F18AaB24942aCAFA">0xFaFd00D0CaA6D5cd5161c5C1F18AaB24942aCAFA</a>
                </td>
              </tr>
              <tr>
                <td>SynthsBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xFdB84151Bfc76857398BC3efd8d1b32A32c571f2">0xFdB84151Bfc76857398BC3efd8d1b32A32c571f2</a>
                </td>
              </tr>
              <tr>
                <td>SynthsETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x7D442107e2AD048C02F06332C918b1F81bd6850d">0x7D442107e2AD048C02F06332C918b1F81bd6850d</a>
                </td>
              </tr>
              <tr>
                <td>SynthsUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xfDa54191F3C0999dbf4c193dEF1B83EDD3e3Ba39">0xfDa54191F3C0999dbf4c193dEF1B83EDD3e3Ba39</a>
                </td>
              </tr>
              <tr>
                <td>SystemSettings</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SystemSettings.sol">SystemSettings.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x418B1025f74E8BB889D35e9F37205d587743Ec9b">0x418B1025f74E8BB889D35e9F37205d587743Ec9b</a>
                </td>
              </tr>
              <tr>
                <td>SystemSettingsLib</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SystemSettingsLib.sol">SystemSettingsLib.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x6B2554A8349319597D1a8a36DeeD07Fb7c70400d">0x6B2554A8349319597D1a8a36DeeD07Fb7c70400d</a>
                </td>
              </tr>
              <tr>
                <td>SystemStatus</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/SystemStatus.sol">SystemStatus.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x9D89fF8C6f3CC22F4BbB859D0F85FB3a4e1FA916">0x9D89fF8C6f3CC22F4BbB859D0F85FB3a4e1FA916</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateSynthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/LegacyTokenState.sol">LegacyTokenState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xB9525040A5B6a2d9e013240397079Fd1320559C4">0xB9525040A5B6a2d9e013240397079Fd1320559C4</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x716044850a48DeD57B0581298018D2d8502B1091">0x716044850a48DeD57B0581298018D2d8502B1091</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1557769Cf42EE9e7c8D98CCFE0b454c2DEC125B6">0x1557769Cf42EE9e7c8D98CCFE0b454c2DEC125B6</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x43CA5848a2957C0718D240c02A4381A90111591e">0x43CA5848a2957C0718D240c02A4381A90111591e</a>
                </td>
              </tr>
              <tr>
                <td>TradingRewards</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/TradingRewards.sol">TradingRewards.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x08fb827Ee5A00232aDe347964225Ba4344665eD5">0x08fb827Ee5A00232aDe347964225Ba4344665eD5</a>
                </td>
              </tr>
              <tr>
                <td>WrapperFactory</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.78.1/contracts/WrapperFactory.sol">WrapperFactory.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x507cbddCF4e01396981190F0Ced8Ea37ca25b452">0x507cbddCF4e01396981190F0Ced8Ea37ca25b452</a>
                </td>
              </tr></table>

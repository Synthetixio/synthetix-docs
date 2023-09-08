Here is the list of all contracts within the current Synthetix system.

**Version**: [v2.94.1](https://github.com/Synthetixio/synthetix/tree/v2.94.1)

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
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/AddressResolver.sol">AddressResolver.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x823bE81bbF96BEc0e25CA13170F5AaCb5B79ba83">0x823bE81bbF96BEc0e25CA13170F5AaCb5B79ba83</a>
                </td>
              </tr>
              <tr>
                <td>CircuitBreaker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/CircuitBreaker.sol">CircuitBreaker.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x9f231dBE53D460f359B2B8CC47574493caA5B7Bf">0x9f231dBE53D460f359B2B8CC47574493caA5B7Bf</a>
                </td>
              </tr>
              <tr>
                <td>CollateralErc20</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/CollateralErc20.sol">CollateralErc20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xaa03aB31b55DceEeF845C8d17890CC61cD98eD04">0xaa03aB31b55DceEeF845C8d17890CC61cD98eD04</a>
                </td>
              </tr>
              <tr>
                <td>CollateralEth</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/CollateralEth.sol">CollateralEth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x5c8344bcdC38F1aB5EB5C1d4a35DdEeA522B5DfA">0x5c8344bcdC38F1aB5EB5C1d4a35DdEeA522B5DfA</a>
                </td>
              </tr>
              <tr>
                <td>CollateralManager</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/CollateralManager.sol">CollateralManager.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x067e398605E84F2D0aEEC1806e62768C5110DCc6">0x067e398605E84F2D0aEEC1806e62768C5110DCc6</a>
                </td>
              </tr>
              <tr>
                <td>CollateralManagerState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/CollateralManagerState.sol">CollateralManagerState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x573E5105c4B92416D1544A188F1bf77d442Bb52d">0x573E5105c4B92416D1544A188F1bf77d442Bb52d</a>
                </td>
              </tr>
              <tr>
                <td>CollateralShort</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/CollateralShort.sol">CollateralShort.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x1F2c3a1046c32729862fcB038369696e3273a516">0x1F2c3a1046c32729862fcB038369696e3273a516</a>
                </td>
              </tr>
              <tr>
                <td>CollateralStateErc20</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/CollateralState.sol">CollateralState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x8A1A00Df7aA0102497C7591912bA8301e8dB8CdB">0x8A1A00Df7aA0102497C7591912bA8301e8dB8CdB</a>
                </td>
              </tr>
              <tr>
                <td>CollateralStateEth</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/CollateralState.sol">CollateralState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xbe5B5a7c198bC156474ed5c33CBf2F3F604F8fF8">0xbe5B5a7c198bC156474ed5c33CBf2F3F604F8fF8</a>
                </td>
              </tr>
              <tr>
                <td>CollateralStateShort</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/CollateralState.sol">CollateralState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x13A114a3Fa8A6CE03a0C5488BE9e614d78eDdb0c">0x13A114a3Fa8A6CE03a0C5488BE9e614d78eDdb0c</a>
                </td>
              </tr>
              <tr>
                <td>DappMaintenance</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/DappMaintenance.sol">DappMaintenance.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xAb0B2f1Cf979cdbF4676251F35353eC5AF2732Dd">0xAb0B2f1Cf979cdbF4676251F35353eC5AF2732Dd</a>
                </td>
              </tr>
              <tr>
                <td>DebtCache</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/DebtCache.sol">DebtCache.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x1620Aa736939597891C1940CF0d28b82566F9390">0x1620Aa736939597891C1940CF0d28b82566F9390</a>
                </td>
              </tr>
              <tr>
                <td>DebtMigratorOnEthereum</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/DebtMigratorOnEthereum.sol">DebtMigratorOnEthereum.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x94f864e55c77E07C2C7BF7bFBc334b7a8123442A">0x94f864e55c77E07C2C7BF7bFBc334b7a8123442A</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovals</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/DelegateApprovals.sol">DelegateApprovals.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x15fd6e554874B9e70F832Ed37f231Ac5E142362f">0x15fd6e554874B9e70F832Ed37f231Ac5E142362f</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovalsEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/EternalStorage.sol">EternalStorage.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x8F586F063ffbb89b186C8e604FC6614766f9C9d1">0x8F586F063ffbb89b186C8e604FC6614766f9C9d1</a>
                </td>
              </tr>
              <tr>
                <td>Depot</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/Depot.sol">Depot.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xE1f64079aDa6Ef07b03982Ca34f1dD7152AA3b86">0xE1f64079aDa6Ef07b03982Ca34f1dD7152AA3b86</a>
                </td>
              </tr>
              <tr>
                <td>DirectIntegrationManager</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/DirectIntegrationManager.sol">DirectIntegrationManager.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x5F41718459955217df6A02AA8f5C19614ECfA6E7">0x5F41718459955217df6A02AA8f5C19614ECfA6E7</a>
                </td>
              </tr>
              <tr>
                <td>EscrowChecker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/EscrowChecker.sol">EscrowChecker.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x3b399e00AFd8201ACf8A5a0EcCF1C47d8D5E41da">0x3b399e00AFd8201ACf8A5a0EcCF1C47d8D5E41da</a>
                </td>
              </tr>
              <tr>
                <td>EtherWrapper</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/EtherWrapper.sol">EtherWrapper.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xC1AAE9d18bBe386B102435a8632C8063d31e747C">0xC1AAE9d18bBe386B102435a8632C8063d31e747C</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeCircuitBreaker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ExchangeCircuitBreaker.sol">ExchangeCircuitBreaker.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xeAcaEd9581294b1b5cfb6B941d4B8B81B2005437">0xeAcaEd9581294b1b5cfb6B941d4B8B81B2005437</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeRates</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ExchangeRatesWithDexPricing.sol">ExchangeRatesWithDexPricing.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x648280dD2db772CD018A0CEC72fab5bF8B7683AB">0x648280dD2db772CD018A0CEC72fab5bF8B7683AB</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeSettlementLib</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ExchangeSettlementLib.sol">ExchangeSettlementLib.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xAa5A3D7F04E15b22Eb3664B56310aA18A3527Ec7">0xAa5A3D7F04E15b22Eb3664B56310aA18A3527Ec7</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ExchangeState.sol">ExchangeState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x545973f28950f50fc6c7F52AAb4Ad214A27C0564">0x545973f28950f50fc6c7F52AAb4Ad214A27C0564</a>
                </td>
              </tr>
              <tr>
                <td>Exchanger</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ExchangerWithFeeRecAlternatives.sol">ExchangerWithFeeRecAlternatives.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xaeA0065E146FD75Dc24465961a583827284D405a">0xaeA0065E146FD75Dc24465961a583827284D405a</a>
                </td>
              </tr>
              <tr>
                <td>FeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FeePool.sol">FeePool.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x83105D7CDd2fd9b8185BFF1cb56bB1595a618618">0x83105D7CDd2fd9b8185BFF1cb56bB1595a618618</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FeePoolEternalStorage.sol">FeePoolEternalStorage.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xC9DFff5fA5605fd94F8B7927b892F2B57391e8bB">0xC9DFff5fA5605fd94F8B7927b892F2B57391e8bB</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FeePoolState.sol">FeePoolState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x11164F6a47C3f8472D19b9aDd516Fc780cb7Ee02">0x11164F6a47C3f8472D19b9aDd516Fc780cb7Ee02</a>
                </td>
              </tr>
              <tr>
                <td>FlexibleStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FlexibleStorage.sol">FlexibleStorage.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xc757aCBa3c0506218b3022266a9DC7F3612d85f5">0xc757aCBa3c0506218b3022266a9DC7F3612d85f5</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketManager</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/EmptyFuturesMarketManager.sol">EmptyFuturesMarketManager.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xd3f527F47A9DF2f6cBf631081315b6e2FE4e4521">0xd3f527F47A9DF2f6cBf631081315b6e2FE4e4521</a>
                </td>
              </tr>
              <tr>
                <td>IssuanceEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/IssuanceEternalStorage.sol">IssuanceEternalStorage.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x631E93A0fb06B5eC6d52c0A2D89a3f9672d6Ba64">0x631E93A0fb06B5eC6d52c0A2D89a3f9672d6Ba64</a>
                </td>
              </tr>
              <tr>
                <td>Issuer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/Issuer.sol">Issuer.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xca68a3D663483515a9D434E854AB59A41b3A523c">0xca68a3D663483515a9D434E854AB59A41b3A523c</a>
                </td>
              </tr>
              <tr>
                <td>Liquidator</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/Liquidator.sol">Liquidator.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x8e9757479D5ad4E7f9d951B60d39F5220b893d6c">0x8e9757479D5ad4E7f9d951B60d39F5220b893d6c</a>
                </td>
              </tr>
              <tr>
                <td>LiquidatorRewards</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/LiquidatorRewards.sol">LiquidatorRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xf79603a71144e415730C1A6f57F366E4Ea962C00">0xf79603a71144e415730C1A6f57F366E4Ea962C00</a>
                </td>
              </tr>
              <tr>
                <td>Math</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/Math.sol">Math.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x385e1Eb2FF28F4A637DA2C9971F8CAF5F5b1E77c">0x385e1Eb2FF28F4A637DA2C9971F8CAF5F5b1E77c</a>
                </td>
              </tr>
              <tr>
                <td>NativeEtherWrapper</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/NativeEtherWrapper.sol">NativeEtherWrapper.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x7A3d898b717e50a96fd8b232E9d15F0A547A7eeb">0x7A3d898b717e50a96fd8b232E9d15F0A547A7eeb</a>
                </td>
              </tr>
              <tr>
                <td>OneNetAggregatorDebtRatio</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/OneNetAggregatorDebtRatio.sol">OneNetAggregatorDebtRatio.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x977d0DD7eA212E9ca1dcD4Ec15cd7Ceb135fa68D">0x977d0DD7eA212E9ca1dcD4Ec15cd7Ceb135fa68D</a>
                </td>
              </tr>
              <tr>
                <td>OneNetAggregatorIssuedSynths</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/OneNetAggregatorIssuedSynths.sol">OneNetAggregatorIssuedSynths.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xcf1405b18dBCEA2893Abe635c88359C75878B9e1">0xcf1405b18dBCEA2893Abe635c88359C75878B9e1</a>
                </td>
              </tr>
              <tr>
                <td>OneNetAggregatorsDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/OneNetAggregatorsDEFI.sol">OneNetAggregatorsDEFI.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x646F23085281Dbd006FBFD211FD38d0743884864">0x646F23085281Dbd006FBFD211FD38d0743884864</a>
                </td>
              </tr>
              <tr>
                <td>OwnerRelayOnEthereum</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/OwnerRelayOnEthereum.sol">OwnerRelayOnEthereum.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x0e16A6876210841577b233C4165d7B7EdF640b8a">0x0e16A6876210841577b233C4165d7B7EdF640b8a</a>
                </td>
              </tr>
              <tr>
                <td>ProxyERC20</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F">0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F</a>
                </td>
              </tr>
              <tr>
                <td>ProxyERC20sUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x57Ab1ec28D129707052df4dF418D58a2D46d5f51">0x57Ab1ec28D129707052df4dF418D58a2D46d5f51</a>
                </td>
              </tr>
              <tr>
                <td>ProxyFeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xb440DD674e1243644791a4AdfE3A2AbB0A92d309">0xb440DD674e1243644791a4AdfE3A2AbB0A92d309</a>
                </td>
              </tr>
              <tr>
                <td><span style="color: #AAA; text-decoration: line-through">ProxySynthetix</span><sup>Use ProxyERC20</sup></td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F">0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F</a>
                </td>
              </tr>
              <tr>
                <td>ProxysAAVE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xd2dF355C19471c8bd7D8A3aa27Ff4e26A21b4076">0xd2dF355C19471c8bd7D8A3aa27Ff4e26A21b4076</a>
                </td>
              </tr>
              <tr>
                <td>ProxysADA</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xe36E2D3c7c34281FA3bC737950a68571736880A1">0xe36E2D3c7c34281FA3bC737950a68571736880A1</a>
                </td>
              </tr>
              <tr>
                <td>ProxysAUD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xF48e200EAF9906362BB1442fca31e0835773b8B4">0xF48e200EAF9906362BB1442fca31e0835773b8B4</a>
                </td>
              </tr>
              <tr>
                <td>ProxysBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6">0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6</a>
                </td>
              </tr>
              <tr>
                <td>ProxysCHF</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x0F83287FF768D1c1e17a42F44d644D7F22e8ee1d">0x0F83287FF768D1c1e17a42F44d644D7F22e8ee1d</a>
                </td>
              </tr>
              <tr>
                <td>ProxysDOT</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x1715AC0743102BF5Cd58EfBB6Cf2dC2685d967b6">0x1715AC0743102BF5Cd58EfBB6Cf2dC2685d967b6</a>
                </td>
              </tr>
              <tr>
                <td>ProxysETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb">0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb</a>
                </td>
              </tr>
              <tr>
                <td>ProxysETHBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x104eDF1da359506548BFc7c25bA1E28C16a70235">0x104eDF1da359506548BFc7c25bA1E28C16a70235</a>
                </td>
              </tr>
              <tr>
                <td>ProxysEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xD71eCFF9342A5Ced620049e616c5035F1dB98620">0xD71eCFF9342A5Ced620049e616c5035F1dB98620</a>
                </td>
              </tr>
              <tr>
                <td>ProxysGBP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x97fe22E7341a0Cd8Db6F6C021A24Dc8f4DAD855F">0x97fe22E7341a0Cd8Db6F6C021A24Dc8f4DAD855F</a>
                </td>
              </tr>
              <tr>
                <td>ProxysJPY</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xF6b1C627e95BFc3c1b4c9B825a032Ff0fBf3e07d">0xF6b1C627e95BFc3c1b4c9B825a032Ff0fBf3e07d</a>
                </td>
              </tr>
              <tr>
                <td>ProxysKRW</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x269895a3dF4D73b077Fc823dD6dA1B95f72Aaf9B">0x269895a3dF4D73b077Fc823dD6dA1B95f72Aaf9B</a>
                </td>
              </tr>
              <tr>
                <td>ProxysLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xbBC455cb4F1B9e4bFC4B73970d360c8f032EfEE6">0xbBC455cb4F1B9e4bFC4B73970d360c8f032EfEE6</a>
                </td>
              </tr>
              <tr>
                <td><span style="color: #AAA; text-decoration: line-through">ProxysUSD</span><sup>Use ProxyERC20sUSD</sup></td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x57Ab1ec28D129707052df4dF418D58a2D46d5f51">0x57Ab1ec28D129707052df4dF418D58a2D46d5f51</a>
                </td>
              </tr>
              <tr>
                <td>ReadProxyAddressResolver</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ReadProxy.sol">ReadProxy.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x4E3b31eB0E5CB73641EE1E65E7dCEFe520bA3ef2">0x4E3b31eB0E5CB73641EE1E65E7dCEFe520bA3ef2</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/RewardEscrow.sol">RewardEscrow.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xb671F2210B1F6621A2607EA63E6B2DC3e2464d1F">0xb671F2210B1F6621A2607EA63E6B2DC3e2464d1F</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrowV2</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/RewardEscrowV2.sol">RewardEscrowV2.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xAc86855865CbF31c8f9FBB68C749AD5Bd72802e3">0xAc86855865CbF31c8f9FBB68C749AD5Bd72802e3</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrowV2Storage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/RewardEscrowV2Storage.sol">RewardEscrowV2Storage.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x182738BD9eE9810BC11f1c81b07Ec6F3691110BB">0x182738BD9eE9810BC11f1c81b07Ec6F3691110BB</a>
                </td>
              </tr>
              <tr>
                <td>RewardsDistribution</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/RewardsDistribution.sol">RewardsDistribution.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x29C295B046a73Cde593f21f63091B072d407e3F2">0x29C295B046a73Cde593f21f63091B072d407e3F2</a>
                </td>
              </tr>
              <tr>
                <td>SafeDecimalMath</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SafeDecimalMath.sol">SafeDecimalMath.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x84D626B2BB4D0F064067e4BF80FCe7055d8F3E7B">0x84D626B2BB4D0F064067e4BF80FCe7055d8F3E7B</a>
                </td>
              </tr>
              <tr>
                <td>ShortingRewardssBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ShortingRewards.sol">ShortingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xCed4055b47cfD0421f3727a35F69CE659c8bAF7a">0xCed4055b47cfD0421f3727a35F69CE659c8bAF7a</a>
                </td>
              </tr>
              <tr>
                <td>ShortingRewardssETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ShortingRewards.sol">ShortingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x12DC1273915A16ab8BD47bA7866B240c253e4c12">0x12DC1273915A16ab8BD47bA7866B240c253e4c12</a>
                </td>
              </tr>
              <tr>
                <td>SignedSafeDecimalMath</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SignedSafeDecimalMath.sol">SignedSafeDecimalMath.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x728A2B79Cad691531CC1146eF802617FF50c7095">0x728A2B79Cad691531CC1146eF802617FF50c7095</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardsSNXBalancer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/StakingRewardsSNXBalancer.sol">StakingRewardsSNXBalancer.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xFBaEdde70732540cE2B11A8AC58Eb2dC0D69dE10">0xFBaEdde70732540cE2B11A8AC58Eb2dC0D69dE10</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardsiBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x167009dcDA2e49930a71712D956f02cc980DcC1b">0x167009dcDA2e49930a71712D956f02cc980DcC1b</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardsiETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x3f27c540ADaE3a9E8c875C61e3B970b559d7F65d">0x3f27c540ADaE3a9E8c875C61e3B970b559d7F65d</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssAAPLBalancer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x7af65f1740c0eB816A27FD808EaF6Ab09F6Fa646">0x7af65f1740c0eB816A27FD808EaF6Ab09F6Fa646</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssAMZNBalancer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xDC338C7544654c7dadFEb7E44076E457963113B0">0xDC338C7544654c7dadFEb7E44076E457963113B0</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssBTCCurve</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/StakingRewardssBTCCurve.sol">StakingRewardssBTCCurve.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x13C1542A468319688B89E323fe9A3Be3A90EBb27">0x13C1542A468319688B89E323fe9A3Be3A90EBb27</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssCOINBalancer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x1C1D97f6338759AB814a5A717aE359573Ab5D5d4">0x1C1D97f6338759AB814a5A717aE359573Ab5D5d4</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssETHUniswapV1</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/StakingRewardssETHUniswapV1.sol">StakingRewardssETHUniswapV1.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x48D7f315feDcaD332F68aafa017c7C158BC54760">0x48D7f315feDcaD332F68aafa017c7C158BC54760</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssEURCurve</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xc0d8994Cd78eE1980885DF1A0C5470fC977b5cFe">0xc0d8994Cd78eE1980885DF1A0C5470fC977b5cFe</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssFBBalancer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x26Fa0665660c1D3a3666584669511d3c66Ad37Cb">0x26Fa0665660c1D3a3666584669511d3c66Ad37Cb</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssGOOGBalancer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x6fB7F0E78582746bd01BcB6dfbFE62cA5F4F9175">0x6fB7F0E78582746bd01BcB6dfbFE62cA5F4F9175</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssMSFTBalancer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x9D003Cc298E7Ea141A809C241C0a703176DA3ba3">0x9D003Cc298E7Ea141A809C241C0a703176DA3ba3</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssNFLXBalancer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x8Ef8cA2AcAaAfEc19fB366C11561718357F780F2">0x8Ef8cA2AcAaAfEc19fB366C11561718357F780F2</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssTSLABalancer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xF0de877F2F9E7A60767f9BA662F10751566AD01c">0xF0de877F2F9E7A60767f9BA662F10751566AD01c</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssUSDCurve</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/StakingRewardssUSDCurve.sol">StakingRewardssUSDCurve.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xDCB6A51eA3CA5d3Fd898Fd6564757c7aAeC3ca92">0xDCB6A51eA3CA5d3Fd898Fd6564757c7aAeC3ca92</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssXAUUniswapV2</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/StakingRewardssXAUUniswapV2.sol">StakingRewardssXAUUniswapV2.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x8302FE9F0C509a996573D3Cc5B0D5D51e4FDD5eC">0x8302FE9F0C509a996573D3Cc5B0D5D51e4FDD5eC</a>
                </td>
              </tr>
              <tr>
                <td>SupplySchedule</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SupplySchedule.sol">SupplySchedule.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x8d203C458d536Fe0F97e9f741bC231EaC8cd91cf">0x8d203C458d536Fe0F97e9f741bC231EaC8cd91cf</a>
                </td>
              </tr>
              <tr>
                <td>SynthRedeemer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SynthRedeemer.sol">SynthRedeemer.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xe533139Af961c9747356D947838c98451015e234">0xe533139Af961c9747356D947838c98451015e234</a>
                </td>
              </tr>
              <tr>
                <td>SynthUtil</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SynthUtil.sol">SynthUtil.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x81Aee4EA48f678E172640fB5813cf7A96AFaF6C3">0x81Aee4EA48f678E172640fB5813cf7A96AFaF6C3</a>
                </td>
              </tr>
              <tr>
                <td>Synthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/Synthetix.sol">Synthetix.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xd0dA9cBeA9C3852C5d63A95F9ABCC4f6eA0F9032">0xd0dA9cBeA9C3852C5d63A95F9ABCC4f6eA0F9032</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixBridgeEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SynthetixBridgeEscrow.sol">SynthetixBridgeEscrow.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x5Fd79D46EBA7F351fe49BFF9E87cdeA6c821eF9f">0x5Fd79D46EBA7F351fe49BFF9E87cdeA6c821eF9f</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixBridgeToOptimism</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SynthetixBridgeToOptimism.sol">SynthetixBridgeToOptimism.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x39Ea01a0298C315d149a490E34B59Dbf2EC7e48F">0x39Ea01a0298C315d149a490E34B59Dbf2EC7e48F</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixDebtShare</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SynthetixDebtShare.sol">SynthetixDebtShare.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x89FCb32F29e509cc42d0C8b6f058C993013A843F">0x89FCb32F29e509cc42d0C8b6f058C993013A843F</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SynthetixEscrow.sol">SynthetixEscrow.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x971e78e0C92392A4E39099835cF7E6aB535b2227">0x971e78e0C92392A4E39099835cF7E6aB535b2227</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SynthetixState.sol">SynthetixState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x4b9Ca5607f1fF8019c1C6A3c2f0CC8de622D5B82">0x4b9Ca5607f1fF8019c1C6A3c2f0CC8de622D5B82</a>
                </td>
              </tr>
              <tr>
                <td>SynthsAAVE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x942Eb6e8c029EB22103743C99985aF4F4515a559">0x942Eb6e8c029EB22103743C99985aF4F4515a559</a>
                </td>
              </tr>
              <tr>
                <td>SynthsADA</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x91b82d62Ff322b8e02b86f33E9A99a813437830d">0x91b82d62Ff322b8e02b86f33E9A99a813437830d</a>
                </td>
              </tr>
              <tr>
                <td>SynthsAUD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xfb020CA7f4e8C4a5bBBe060f59a249c6275d2b69">0xfb020CA7f4e8C4a5bBBe060f59a249c6275d2b69</a>
                </td>
              </tr>
              <tr>
                <td>SynthsBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x1cB004a8e84a5CE95C1fF895EE603BaC8EC506c7">0x1cB004a8e84a5CE95C1fF895EE603BaC8EC506c7</a>
                </td>
              </tr>
              <tr>
                <td>SynthsCHF</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xBb5b03E920cF702De5A3bA9Fc1445aF4B3919c88">0xBb5b03E920cF702De5A3bA9Fc1445aF4B3919c88</a>
                </td>
              </tr>
              <tr>
                <td>SynthsDOT</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x75A0c1597137AA36B40b6a515D997F9a6c6eefEB">0x75A0c1597137AA36B40b6a515D997F9a6c6eefEB</a>
                </td>
              </tr>
              <tr>
                <td>SynthsETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x5D4C724BFe3a228Ff0E29125Ac1571FE093700a4">0x5D4C724BFe3a228Ff0E29125Ac1571FE093700a4</a>
                </td>
              </tr>
              <tr>
                <td>SynthsETHBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x07C1E81C345A7c58d7c24072EFc5D929BD0647AD">0x07C1E81C345A7c58d7c24072EFc5D929BD0647AD</a>
                </td>
              </tr>
              <tr>
                <td>SynthsEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xa8E31E3C38aDD6052A9407298FAEB8fD393A6cF9">0xa8E31E3C38aDD6052A9407298FAEB8fD393A6cF9</a>
                </td>
              </tr>
              <tr>
                <td>SynthsGBP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xdc883b9d9Ee16f74bE08826E68dF4C9D9d26e8bD">0xdc883b9d9Ee16f74bE08826E68dF4C9D9d26e8bD</a>
                </td>
              </tr>
              <tr>
                <td>SynthsJPY</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xE1cc2332852B2Ac0dA59A1f9D3051829f4eF3c1C">0xE1cc2332852B2Ac0dA59A1f9D3051829f4eF3c1C</a>
                </td>
              </tr>
              <tr>
                <td>SynthsKRW</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xdAe6C79c46aB3B280Ca28259000695529cbD1339">0xdAe6C79c46aB3B280Ca28259000695529cbD1339</a>
                </td>
              </tr>
              <tr>
                <td>SynthsLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xDF69bC4541b86Aa4c5A470B4347E730c38b2c3B2">0xDF69bC4541b86Aa4c5A470B4347E730c38b2c3B2</a>
                </td>
              </tr>
              <tr>
                <td>SynthsUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x10A5F7D9D65bCc2734763444D4940a31b109275f">0x10A5F7D9D65bCc2734763444D4940a31b109275f</a>
                </td>
              </tr>
              <tr>
                <td>SystemSettings</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SystemSettings.sol">SystemSettings.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x202ae40Bed1640b09e2AF7aC5719D129A498B7C8">0x202ae40Bed1640b09e2AF7aC5719D129A498B7C8</a>
                </td>
              </tr>
              <tr>
                <td>SystemSettingsLib</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SystemSettingsLib.sol">SystemSettingsLib.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x4a39AEf2281ac0D192a9c4783604833bA8F31174">0x4a39AEf2281ac0D192a9c4783604833bA8F31174</a>
                </td>
              </tr>
              <tr>
                <td>SystemStatus</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SystemStatus.sol">SystemStatus.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x696c905F8F8c006cA46e9808fE7e00049507798F">0x696c905F8F8c006cA46e9808fE7e00049507798F</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateSynthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/LegacyTokenState.sol">LegacyTokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x5b1b5fEa1b99D83aD479dF0C222F0492385381dD">0x5b1b5fEa1b99D83aD479dF0C222F0492385381dD</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesAAVE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x9BcED8A8E3Ad81c9b146FFC880358f734A06f7c0">0x9BcED8A8E3Ad81c9b146FFC880358f734A06f7c0</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesADA</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x9956c5019a24fbd5B506AD070b771577bAc5c343">0x9956c5019a24fbd5B506AD070b771577bAc5c343</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesAUD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xCb29D2cf2C65d3Be1d00F07f3441390432D55203">0xCb29D2cf2C65d3Be1d00F07f3441390432D55203</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x4F6296455F8d754c19821cF1EC8FeBF2cD456E67">0x4F6296455F8d754c19821cF1EC8FeBF2cD456E67</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesCHF</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x52496fE8a4feaEFe14d9433E00D48E6929c13deC">0x52496fE8a4feaEFe14d9433E00D48E6929c13deC</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesDOT</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x73B1a2643507Cd30F11Dfcf2D974f4373E5BC077">0x73B1a2643507Cd30F11Dfcf2D974f4373E5BC077</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x34A5ef81d18F3a305aE9C2d7DF42beef4c79031c">0x34A5ef81d18F3a305aE9C2d7DF42beef4c79031c</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesETHBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x042A7A0022A7695454ac5Be77a4860e50c9683fC">0x042A7A0022A7695454ac5Be77a4860e50c9683fC</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x6568D9e750fC44AF00f857885Dfb8281c00529c4">0x6568D9e750fC44AF00f857885Dfb8281c00529c4</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesGBP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x7e88D19A79b291cfE5696d496055f7e57F537A75">0x7e88D19A79b291cfE5696d496055f7e57F537A75</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesJPY</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x4dFACfB15514C21c991ff75Bc7Bf6Fb1F98361ed">0x4dFACfB15514C21c991ff75Bc7Bf6Fb1F98361ed</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesKRW</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x93B6e9FbBd2c32a0DC3C2B943B7C3CBC2fE23730">0x93B6e9FbBd2c32a0DC3C2B943B7C3CBC2fE23730</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x577D4a7395c6A5f46d9981a5F83fa7294926aBB0">0x577D4a7395c6A5f46d9981a5F83fa7294926aBB0</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x05a9CBe762B36632b3594DA4F082340E0e5343e8">0x05a9CBe762B36632b3594DA4F082340E0e5343e8</a>
                </td>
              </tr>
              <tr>
                <td>TradingRewards</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TradingRewards.sol">TradingRewards.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x62922670313bf6b41C580143d1f6C173C5C20019">0x62922670313bf6b41C580143d1f6C173C5C20019</a>
                </td>
              </tr>
              <tr>
                <td>VirtualSynthMastercopy</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/VirtualSynthMastercopy.sol">VirtualSynthMastercopy.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0xf02ce48fD47D7FA1B7a45a0444805d320D035775">0xf02ce48fD47D7FA1B7a45a0444805d320D035775</a>
                </td>
              </tr>
              <tr>
                <td>WrapperFactory</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/WrapperFactory.sol">WrapperFactory.sol</a></td>
                <td><a target="_blank" href="https://etherscan.io/address/0x02f9bC46beD33acdB9cb002fe346734CeF8a9480">0x02f9bC46beD33acdB9cb002fe346734CeF8a9480</a>
                </td>
              </tr></table>

## MAINNET Optimism (L2)

<table><tr><th>Name</th><th>Source</th><th>Address</th></tr>
              <tr>
                <td>AddressResolver</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/AddressResolver.sol">AddressResolver.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x95A6a3f44a70172E7d50a9e28c85Dfd712756B8C">0x95A6a3f44a70172E7d50a9e28c85Dfd712756B8C</a>
                </td>
              </tr>
              <tr>
                <td>CircuitBreaker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/CircuitBreaker.sol">CircuitBreaker.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x803FD1d99C3a6cbcbABAB79C44e108dC2fb67102">0x803FD1d99C3a6cbcbABAB79C44e108dC2fb67102</a>
                </td>
              </tr>
              <tr>
                <td>CollateralEth</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/CollateralEth.sol">CollateralEth.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x308AD16ef90fe7caCb85B784A603CB6E71b1A41a">0x308AD16ef90fe7caCb85B784A603CB6E71b1A41a</a>
                </td>
              </tr>
              <tr>
                <td>CollateralManager</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/CollateralManager.sol">CollateralManager.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x15E7D4972a3E477878A5867A47617122BE2d1fF0">0x15E7D4972a3E477878A5867A47617122BE2d1fF0</a>
                </td>
              </tr>
              <tr>
                <td>CollateralManagerState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/CollateralManagerState.sol">CollateralManagerState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xbA10526cD8742acC73AedeF5f7Dbb2477Bf86922">0xbA10526cD8742acC73AedeF5f7Dbb2477Bf86922</a>
                </td>
              </tr>
              <tr>
                <td>CollateralShort</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/CollateralShort.sol">CollateralShort.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xeb4b5ABcE7310855319440d936cd3aDd77DFA193">0xeb4b5ABcE7310855319440d936cd3aDd77DFA193</a>
                </td>
              </tr>
              <tr>
                <td>CollateralUtil</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/CollateralUtil.sol">CollateralUtil.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xD21969A86Ce5c41aAb2D492a0F802AA3e015cd9A">0xD21969A86Ce5c41aAb2D492a0F802AA3e015cd9A</a>
                </td>
              </tr>
              <tr>
                <td>DappMaintenance</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/DappMaintenance.sol">DappMaintenance.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x54581A23F62D147AC76d454f0b3eF77F9D766058">0x54581A23F62D147AC76d454f0b3eF77F9D766058</a>
                </td>
              </tr>
              <tr>
                <td>DebtCache</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/DebtCache.sol">DebtCache.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x17628A557d1Fc88D1c35989dcBAC3f3e275E2d2B">0x17628A557d1Fc88D1c35989dcBAC3f3e275E2d2B</a>
                </td>
              </tr>
              <tr>
                <td>DebtMigratorOnOptimism</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/DebtMigratorOnOptimism.sol">DebtMigratorOnOptimism.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xA6bc30d854c2647574921c4AF442008DB7d32ad5">0xA6bc30d854c2647574921c4AF442008DB7d32ad5</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovals</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/DelegateApprovals.sol">DelegateApprovals.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2A23bc0EA97A89abD91214E8e4d20F02Fe14743f">0x2A23bc0EA97A89abD91214E8e4d20F02Fe14743f</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovalsEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/EternalStorage.sol">EternalStorage.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x02f7fB66B55e6ca476d126d96f14c5732Eeb4363">0x02f7fB66B55e6ca476d126d96f14c5732Eeb4363</a>
                </td>
              </tr>
              <tr>
                <td>DirectIntegrationManager</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/DirectIntegrationManager.sol">DirectIntegrationManager.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x186c50515e6Ee95cEC381d7f6Fe72C67085dBCb4">0x186c50515e6Ee95cEC381d7f6Fe72C67085dBCb4</a>
                </td>
              </tr>
              <tr>
                <td>EscrowChecker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/EscrowChecker.sol">EscrowChecker.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xcdb7D0a946223255d39A6e29B54f08f3291cc118">0xcdb7D0a946223255d39A6e29B54f08f3291cc118</a>
                </td>
              </tr>
              <tr>
                <td>EtherCollateral</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/EmptyEtherCollateral.sol">EmptyEtherCollateral.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xC8E91c926E04BE1cb94e51c5379d14774D51ae6C">0xC8E91c926E04BE1cb94e51c5379d14774D51ae6C</a>
                </td>
              </tr>
              <tr>
                <td>EtherCollateralsUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/EmptyEtherCollateral.sol">EmptyEtherCollateral.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xC0c66470E766AE2026E6695966C56C90741811AA">0xC0c66470E766AE2026E6695966C56C90741811AA</a>
                </td>
              </tr>
              <tr>
                <td>EtherWrapper</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/EmptyEtherWrapper.sol">EmptyEtherWrapper.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xc3Ee42caBD773A608fa9Ec951982c94BD6F33d59">0xc3Ee42caBD773A608fa9Ec951982c94BD6F33d59</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeCircuitBreaker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ExchangeCircuitBreaker.sol">ExchangeCircuitBreaker.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x7322e8F6cB6c6a7B4e6620C486777fcB9Ea052a4">0x7322e8F6cB6c6a7B4e6620C486777fcB9Ea052a4</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeRates</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ExchangeRates.sol">ExchangeRates.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x913bd76F7E1572CC8278CeF2D6b06e2140ca9Ce2">0x913bd76F7E1572CC8278CeF2D6b06e2140ca9Ce2</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeSettlementLib</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ExchangeSettlementLib.sol">ExchangeSettlementLib.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xFfa3635f5844eA0F2FcCB03cb936828F508F558b">0xFfa3635f5844eA0F2FcCB03cb936828F508F558b</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ExchangeState.sol">ExchangeState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x7EF87c14f50CFFe2e73d2C87916C3128c56593A8">0x7EF87c14f50CFFe2e73d2C87916C3128c56593A8</a>
                </td>
              </tr>
              <tr>
                <td>Exchanger</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/Exchanger.sol">Exchanger.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x24b4b6703a2eE7bA75a4Fc859B606F0bbaeef4EA">0x24b4b6703a2eE7bA75a4Fc859B606F0bbaeef4EA</a>
                </td>
              </tr>
              <tr>
                <td>FeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FeePool.sol">FeePool.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xf9FE3607e6d19D8dC690DD976061a91D4A0db30B">0xf9FE3607e6d19D8dC690DD976061a91D4A0db30B</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FeePoolEternalStorage.sol">FeePoolEternalStorage.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x41140Bf6498a36f2E44eFd49f21dAe3bbb7367c8">0x41140Bf6498a36f2E44eFd49f21dAe3bbb7367c8</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FeePoolState.sol">FeePoolState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6e0d26cffc3a63d763F1546f749bf62ebC7d72D8">0x6e0d26cffc3a63d763F1546f749bf62ebC7d72D8</a>
                </td>
              </tr>
              <tr>
                <td>FlexibleStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FlexibleStorage.sol">FlexibleStorage.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x47649022380d182DA8010Ae5d257fea4227b21ff">0x47649022380d182DA8010Ae5d257fea4227b21ff</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketAAVE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x001b7876F567f0b3A639332Ed1e363839c6d85e2">0x001b7876F567f0b3A639332Ed1e363839c6d85e2</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketAPE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xFe00395ec846240dc693e92AB2Dd720F94765Aa3">0xFe00395ec846240dc693e92AB2Dd720F94765Aa3</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketAVAX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4ff54624D5FB61C34c634c3314Ed3BfE4dBB665a">0x4ff54624D5FB61C34c634c3314Ed3BfE4dBB665a</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketBNB</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4Aa0dabd22BC0894975324Bec293443c8538bD08">0x4Aa0dabd22BC0894975324Bec293443c8538bD08</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xEe8804d8Ad10b0C3aD1Bd57AC3737242aD24bB95">0xEe8804d8Ad10b0C3aD1Bd57AC3737242aD24bB95</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketDOGE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9f231dBE53D460f359B2B8CC47574493caA5B7Bf">0x9f231dBE53D460f359B2B8CC47574493caA5B7Bf</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketDYDX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x10305C1854d6DB8A1060dF60bDF8A8B2981249Cf">0x10305C1854d6DB8A1060dF60bDF8A8B2981249Cf</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketData</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarketData.sol">FuturesMarketData.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xC51aeDBEC3aCD26650a7E85B6909E8AEc4d0F19e">0xC51aeDBEC3aCD26650a7E85B6909E8AEc4d0F19e</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketDebtRatio</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xd325B17d5C9C3f2B6853A760afCF81945b0184d3">0xd325B17d5C9C3f2B6853A760afCF81945b0184d3</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xf86048DFf23cF130107dfB4e6386f574231a5C65">0xf86048DFf23cF130107dfB4e6386f574231a5C65</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xad44873632840144fFC97b2D1de716f6E2cF0366">0xad44873632840144fFC97b2D1de716f6E2cF0366</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x1228c7D8BBc5bC53DB181bD7B1fcE765aa83bF8A">0x1228c7D8BBc5bC53DB181bD7B1fcE765aa83bF8A</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketMATIC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xbCB2D435045E16B059b2130b28BE70b5cA47bFE5">0xbCB2D435045E16B059b2130b28BE70b5cA47bFE5</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketManager</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarketManager.sol">FuturesMarketManager.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xd30bdFd7e7a65fE109D5dE1D4e95F3B800FB7463">0xd30bdFd7e7a65fE109D5dE1D4e95F3B800FB7463</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketOP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9F1C2f0071Bc3b31447AEda9fA3A68d651eB4632">0x9F1C2f0071Bc3b31447AEda9fA3A68d651eB4632</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketSOL</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xcF853f7f8F78B2B801095b66F8ba9c5f04dB1640">0xcF853f7f8F78B2B801095b66F8ba9c5f04dB1640</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketSettings</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarketSettings.sol">FuturesMarketSettings.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xaE55F163337A2A46733AA66dA9F35299f9A46e9e">0xaE55F163337A2A46733AA66dA9F35299f9A46e9e</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketUNI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x5Af0072617F7f2AEB0e314e2faD1DE0231Ba97cD">0x5Af0072617F7f2AEB0e314e2faD1DE0231Ba97cD</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketXAG</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xb147C69BEe211F57290a6cde9d1BAbfD0DCF3Ea3">0xb147C69BEe211F57290a6cde9d1BAbfD0DCF3Ea3</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketXAU</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4434f56ddBdE28fab08C4AE71970a06B300F8881">0x4434f56ddBdE28fab08C4AE71970a06B300F8881</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketXMR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x3Ed04CEfF4c91872F19b1da35740C0Be9CA21558">0x3Ed04CEfF4c91872F19b1da35740C0Be9CA21558</a>
                </td>
              </tr>
              <tr>
                <td>Issuer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/Issuer.sol">Issuer.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xEb66Fc1BFdF3284Cb0CA1dE57149dcf3cEFa5453">0xEb66Fc1BFdF3284Cb0CA1dE57149dcf3cEFa5453</a>
                </td>
              </tr>
              <tr>
                <td>Liquidator</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/Liquidator.sol">Liquidator.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xB589Af3f2e3377A9a57da74bE1b6598926479505">0xB589Af3f2e3377A9a57da74bE1b6598926479505</a>
                </td>
              </tr>
              <tr>
                <td>LiquidatorRewards</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/LiquidatorRewards.sol">LiquidatorRewards.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xF4EebDD0704021eF2a6Bbe993fdf93030Cd784b4">0xF4EebDD0704021eF2a6Bbe993fdf93030Cd784b4</a>
                </td>
              </tr>
              <tr>
                <td>Math</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/Math.sol">Math.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x0B3A73EE0740b3130e40B2A6b5aaf59E7E3Ef74c">0x0B3A73EE0740b3130e40B2A6b5aaf59E7E3Ef74c</a>
                </td>
              </tr>
              <tr>
                <td>OneNetAggregatorDebtRatio</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/OneNetAggregatorDebtRatio.sol">OneNetAggregatorDebtRatio.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xA408d8e01C8E084B67559226C5B55D6F0B7074e2">0xA408d8e01C8E084B67559226C5B55D6F0B7074e2</a>
                </td>
              </tr>
              <tr>
                <td>OneNetAggregatorIssuedSynths</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/OneNetAggregatorIssuedSynths.sol">OneNetAggregatorIssuedSynths.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xe152A2DbcE62E6c0bd387fFd1bb8086F44c5Fd04">0xe152A2DbcE62E6c0bd387fFd1bb8086F44c5Fd04</a>
                </td>
              </tr>
              <tr>
                <td>OwnerRelayOnOptimism</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/OwnerRelayOnOptimism.sol">OwnerRelayOnOptimism.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6d4a64C57612841c2C6745dB2a4E4db34F002D20">0x6d4a64C57612841c2C6745dB2a4E4db34F002D20</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecution1INCHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xDC7a51F5c32909AcD5D03d11944c4480bee1Cd47">0xDC7a51F5c32909AcD5D03d11944c4480bee1Cd47</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionAAVEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xf73fA296DF4C46b7182B14AC7862f6E08Da84150">0xf73fA296DF4C46b7182B14AC7862f6E08Da84150</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionADAPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x18970122d688B97023Edc44DA27A51230dC6799c">0x18970122d688B97023Edc44DA27A51230dC6799c</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionALGOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x799654ecaF87E769C56f722C82Fbc7BBCC4f621C">0x799654ecaF87E769C56f722C82Fbc7BBCC4f621C</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionAPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xdDeB6cb0D6050C9221D037Aa099a2D11C443548a">0xdDeB6cb0D6050C9221D037Aa099a2D11C443548a</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionAPTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xfD9E252Cd1Fa456AaD9fC592608e86FaBcF40F77">0xfD9E252Cd1Fa456AaD9fC592608e86FaBcF40F77</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionARBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x31Ec26dE77aA4c859b7a15A37D2Fc9EB61289C14">0x31Ec26dE77aA4c859b7a15A37D2Fc9EB61289C14</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionATOMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x76FB9F147d40480b6e030c09CD53fDF912C6178f">0x76FB9F147d40480b6e030c09CD53fDF912C6178f</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionAUDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x0D8121E17b74e537286304c7804a5bC592A7964f">0x0D8121E17b74e537286304c7804a5bC592A7964f</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionAVAXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xC56a0198c08c3610980340660C39f6D6C7Ea765a">0xC56a0198c08c3610980340660C39f6D6C7Ea765a</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionAXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2b8cE8a8ABF039DB01B2ad7F512b9157467eb264">0x2b8cE8a8ABF039DB01B2ad7F512b9157467eb264</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionBALPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x8d51BF0759e1a01c15F91940BaaaD08B6B45a637">0x8d51BF0759e1a01c15F91940BaaaD08B6B45a637</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionBCHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xA14849ad93999d8B184A1d61FbA7B4fFbD24f96C">0xA14849ad93999d8B184A1d61FbA7B4fFbD24f96C</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionBLURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2214cD24c13D7B36432C66e73984Bc44D479CD51">0x2214cD24c13D7B36432C66e73984Bc44D479CD51</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionBNBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x210BA565130f2aF399fD8435a279b22894e8D096">0x210BA565130f2aF399fD8435a279b22894e8D096</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x33C8daF48c691C54897070C3621fdecC249C7202">0x33C8daF48c691C54897070C3621fdecC249C7202</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionCELOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x5dCA1c6c75f6410CB4020A4aB5657FEF716fCfc3">0x5dCA1c6c75f6410CB4020A4aB5657FEF716fCfc3</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionCOMPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9f3be6Be18E8D0613f87c86A0b1875B74f404A11">0x9f3be6Be18E8D0613f87c86A0b1875B74f404A11</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionCRVPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x53bD23EEd35C00EF09D4Ebd8F71005b0DCC97E1a">0x53bD23EEd35C00EF09D4Ebd8F71005b0DCC97E1a</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionDOGEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x374f2D3353bd664a2B25508df4a3b58939999E1B">0x374f2D3353bd664a2B25508df4a3b58939999E1B</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionDOTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x5C4fD006f3dC9C6a2259B2fb82CfD500056978ec">0x5C4fD006f3dC9C6a2259B2fb82CfD500056978ec</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionDYDXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xE6aC817Cfdd83073aec079cD9EBb9c35479b7665">0xE6aC817Cfdd83073aec079cD9EBb9c35479b7665</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionENJPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xE7b44E0411307B637A1B3B75AF8c37d752857Ae1">0xE7b44E0411307B637A1B3B75AF8c37d752857Ae1</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionEOSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x15F71Cb39F39A3b30ef610a15Ce1CBE766CB069C">0x15F71Cb39F39A3b30ef610a15Ce1CBE766CB069C</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionETCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x98d601E04527a0acBB603BaD845D9b7B8840de1c">0x98d601E04527a0acBB603BaD845D9b7B8840de1c</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionETHBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xb16a8B06318C78c274f3BBc5CC5C9191B0d0c1A3">0xb16a8B06318C78c274f3BBc5CC5C9191B0d0c1A3</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2227af48ec971E3C786f3E06064CbA455724d6ba">0x2227af48ec971E3C786f3E06064CbA455724d6ba</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionEURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xEAacaDa91015c11D43bD788F09B2d54decfdc2e8">0xEAacaDa91015c11D43bD788F09B2d54decfdc2e8</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionFILPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x530F4A84e99eF78A5C2A4E64Cd5d126b40c99242">0x530F4A84e99eF78A5C2A4E64Cd5d126b40c99242</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionFLOKIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xF52Df12Dd62731a11180403212EE67cb5F4d6345">0xF52Df12Dd62731a11180403212EE67cb5F4d6345</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionFLOWPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x19BA5013824a45Ee0F9E4738c8618d40bA11234a">0x19BA5013824a45Ee0F9E4738c8618d40bA11234a</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionFTMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x50197701bd09f8DBDd6716b1b9080574819a3776">0x50197701bd09f8DBDd6716b1b9080574819a3776</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionFXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xcCe2c84C91e6c4de7e87704b3D5C4fba10626234">0xcCe2c84C91e6c4de7e87704b3D5C4fba10626234</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionGBPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xD3d59d4b8B504Ea6e49c5788Fe1BC7505c6f61EA">0xD3d59d4b8B504Ea6e49c5788Fe1BC7505c6f61EA</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionGMXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x3382A15bd1956e908a1EF2D027F92b2Bfc84558c">0x3382A15bd1956e908a1EF2D027F92b2Bfc84558c</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionICPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xE72f5C2B7C8E8697aFFe886497d22ad47D832085">0xE72f5C2B7C8E8697aFFe886497d22ad47D832085</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionINJPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x53bAd7c8cE47Fa070e5BB25adea796409E0e8058">0x53bAd7c8cE47Fa070e5BB25adea796409E0e8058</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionKNCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xE1264B2B97be89755FBCE7A280FD276C55F661D1">0xE1264B2B97be89755FBCE7A280FD276C55F661D1</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionLDOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x8D08A8A066E9606F854a3C68FcC730e406319996">0x8D08A8A066E9606F854a3C68FcC730e406319996</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionLINKPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xd3f1BDdC7F25eAfDB939d6B4f62Cb9d5b19d346F">0xd3f1BDdC7F25eAfDB939d6B4f62Cb9d5b19d346F</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionLTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x869d17fd46F76f0e439bec2992f2D45B40253f88">0x869d17fd46F76f0e439bec2992f2D45B40253f88</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionMATICPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x8e1B638EF5E796504BE87fB81943e613875EcabE">0x8e1B638EF5E796504BE87fB81943e613875EcabE</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionMAVPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xFc6895ff4756985BCa9df2AABB5f31651C591Bef">0xFc6895ff4756985BCa9df2AABB5f31651C591Bef</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionMKRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xE0d1A14EBC3bc4460fEeB67A45C8198063cCC7c7">0xE0d1A14EBC3bc4460fEeB67A45C8198063cCC7c7</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionNEARPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x3403A3430e4a62577e70fB48e070268D84a8F910">0x3403A3430e4a62577e70fB48e070268D84a8F910</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionONEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xBe0f35e3d0ffe514969333B4d07A279D3d66A494">0xBe0f35e3d0ffe514969333B4d07A279D3d66A494</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionOPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xbF1E06FaCb51B8A9223F266F303a88d3Dfc46226">0xbF1E06FaCb51B8A9223F266F303a88d3Dfc46226</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionPEPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xe9e46a7323d54af1550B931c8bD6F8615f079379">0xe9e46a7323d54af1550B931c8bD6F8615f079379</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionPERPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x692c746f443031559E9816b50c99165fd452982d">0x692c746f443031559E9816b50c99165fd452982d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionRNDRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x097b1ec678F135fa31C7D4c0D92b34940dB06251">0x097b1ec678F135fa31C7D4c0D92b34940dB06251</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionRPLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xF0671cF8a1a0b3308e84852308F9624B9eC2e28f">0xF0671cF8a1a0b3308e84852308F9624B9eC2e28f</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionRUNEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xB4D55aE3a6B3B73633F622Ef89e94E4bAD05c08F">0xB4D55aE3a6B3B73633F622Ef89e94E4bAD05c08F</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionSEIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xb2E9642F96A1b576ab0232ec35Cb0d7d07D1172F">0xb2E9642F96A1b576ab0232ec35Cb0d7d07D1172F</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionSHIBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x62137897f2b09c588327D80CBbFB9C6018c352Ef">0x62137897f2b09c588327D80CBbFB9C6018c352Ef</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionSOLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9A90C6FA8828baCD5B9eDD513F77bA7e4528C7E8">0x9A90C6FA8828baCD5B9eDD513F77bA7e4528C7E8</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionSTETHETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4c0f7b167e7D280D97471f5A17F4Eb214E15A440">0x4c0f7b167e7D280D97471f5A17F4Eb214E15A440</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionSTETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x02e85b8dD638a5FabD9D67802A92721D2e18fc6d">0x02e85b8dD638a5FabD9D67802A92721D2e18fc6d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionSUIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xA2C0843c8cb9f29Fa40fc0ffd2B4995A0f05C15c">0xA2C0843c8cb9f29Fa40fc0ffd2B4995A0f05C15c</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionSUSHIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xdB87f699ae4045c290033240f22C0CBe80d95724">0xdB87f699ae4045c290033240f22C0CBe80d95724</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionTRXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xC20e63aB2F1303079a6cC31013534e3989CFC8dc">0xC20e63aB2F1303079a6cC31013534e3989CFC8dc</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionUMAPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x581Fa71eB5b5D704d0c268EEd58e48f801338f7B">0x581Fa71eB5b5D704d0c268EEd58e48f801338f7B</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionUNIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x418d195155058ABC4A26D59c8A6CE83A7d52288A">0x418d195155058ABC4A26D59c8A6CE83A7d52288A</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionUSDTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x244c689BFa19F046124e75339887f9918317b919">0x244c689BFa19F046124e75339887f9918317b919</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionWLDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x695Fdda0E1546cA369Df3CabE8ED33407Cf62341">0x695Fdda0E1546cA369Df3CabE8ED33407Cf62341</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionXAGPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x546Ee4A4299dC3d3b64D6a889759E04aCef6B92D">0x546Ee4A4299dC3d3b64D6a889759E04aCef6B92D</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionXAUPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x1a83bBccFaB68A8bF901c298c5dB5ACb8a2C7b05">0x1a83bBccFaB68A8bF901c298c5dB5ACb8a2C7b05</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionXLMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2aEF3F9E57E2695C32bEaC56d79BFe4efb55bF63">0x2aEF3F9E57E2695C32bEaC56d79BFe4efb55bF63</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionXMRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x926b1148DaFe298ff7Fdc2d01Ae1bC3Fa3b4FAE4">0x926b1148DaFe298ff7Fdc2d01Ae1bC3Fa3b4FAE4</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionXRPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x28bDE5C67624B2eF7Fa27C9C9B0678fE3009913e">0x28bDE5C67624B2eF7Fa27C9C9B0678fE3009913e</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionXTZPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4Fb59e8dAfcd398b2ca7Fe2Af5a7405Cd0d22278">0x4Fb59e8dAfcd398b2ca7Fe2Af5a7405Cd0d22278</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionYFIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x7aF6Be46f83d25902cfa49c9e16BEc54893f25cB">0x7aF6Be46f83d25902cfa49c9e16BEc54893f25cB</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionZECPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x3f9917995e1a55060B984dbeE9d7358D9eB7AC8c">0x3f9917995e1a55060B984dbeE9d7358D9eB7AC8c</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionZILPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x89698dc9ECD95337AD64FDa7dF773dA5007926A8">0x89698dc9ECD95337AD64FDa7dF773dA5007926A8</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionZRXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x08BCea94194A1D63379123073Cb254b77f7721A5">0x08BCea94194A1D63379123073Cb254b77f7721A5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntent1INCHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6d5403B5b195F0F26aaF5e2a7FD58aB1D0Fb2F3e">0x6d5403B5b195F0F26aaF5e2a7FD58aB1D0Fb2F3e</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentAAVEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xc4786C4484C06bD463f124EBeF2175f67759EA1A">0xc4786C4484C06bD463f124EBeF2175f67759EA1A</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentADAPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x59798C3ec713213C274Bd8827642DAF2A798181e">0x59798C3ec713213C274Bd8827642DAF2A798181e</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentALGOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9bAEDd40FaE33Ce9022D39a9bd71F325E626a06e">0x9bAEDd40FaE33Ce9022D39a9bd71F325E626a06e</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentAPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x3Cf1BE829C5eE73630482D2E92bF9461Adf1b213">0x3Cf1BE829C5eE73630482D2E92bF9461Adf1b213</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentAPTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xD681CF2419bb3F85732412164b6542843E9A64A5">0xD681CF2419bb3F85732412164b6542843E9A64A5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentARBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x99ae21FeB485A89252B9bFB394E6Eb8c736436Bd">0x99ae21FeB485A89252B9bFB394E6Eb8c736436Bd</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentATOMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2c5fc227AF9100F8d6FC963549De3e3BadA8c3A9">0x2c5fc227AF9100F8d6FC963549De3e3BadA8c3A9</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentAUDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x010a2f40B3b09FdBc60cb06f1b7F1a2A757d0eF2">0x010a2f40B3b09FdBc60cb06f1b7F1a2A757d0eF2</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentAVAXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9D6Db4d562D670a987b5D9e07Db71bab33Eb1428">0x9D6Db4d562D670a987b5D9e07Db71bab33Eb1428</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentAXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6FBcabaa42cE1818f23a0b909dbD9BC7691FC1E6">0x6FBcabaa42cE1818f23a0b909dbD9BC7691FC1E6</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentBALPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xBc5B0A6dCaDD4Fc27665601401D6f03D97375B24">0xBc5B0A6dCaDD4Fc27665601401D6f03D97375B24</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentBCHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9F77aF45F13738Be8D3bb772A86310f4e452aFd4">0x9F77aF45F13738Be8D3bb772A86310f4e452aFd4</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentBLURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xFf82e4012816CC01093565C6d2EE2Af83f3cb3Ae">0xFf82e4012816CC01093565C6d2EE2Af83f3cb3Ae</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentBNBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2ae5608AB3fb3863a713715f3F59216bCAbc5150">0x2ae5608AB3fb3863a713715f3F59216bCAbc5150</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x527b99E3d31F71D2414CC2dbAbE0d527f9160926">0x527b99E3d31F71D2414CC2dbAbE0d527f9160926</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentCELOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x32a357AdE8497EA57446b4BF5099FA9F0918592f">0x32a357AdE8497EA57446b4BF5099FA9F0918592f</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentCOMPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6172289961007908442a0437891DcD966F368563">0x6172289961007908442a0437891DcD966F368563</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentCRVPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9E3c1F1f5868701A4D8CaA58D61dF2F74aeFe926">0x9E3c1F1f5868701A4D8CaA58D61dF2F74aeFe926</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentDOGEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x128d0Eb5E26Cf95128AA9aC395f88dcE705AedAc">0x128d0Eb5E26Cf95128AA9aC395f88dcE705AedAc</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentDOTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4d178B91a3B16a124d2A90d944dB8C70A334FBdA">0x4d178B91a3B16a124d2A90d944dB8C70A334FBdA</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentDYDXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xdFaEBe6A2B2BDAc52aC2E172e0175988d7472c60">0xdFaEBe6A2B2BDAc52aC2E172e0175988d7472c60</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentENJPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xf23DF6328A8EDCFb34B9905715a32181e72964c3">0xf23DF6328A8EDCFb34B9905715a32181e72964c3</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentEOSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x02A26Df328E08c12ce3A5ed428b83Dc5e4c2ee67">0x02A26Df328E08c12ce3A5ed428b83Dc5e4c2ee67</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentETCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xAD35498D97f3b1a0B99de42da7Ad81c91156BA77">0xAD35498D97f3b1a0B99de42da7Ad81c91156BA77</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentETHBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x978D4b5438D3E4EDf4f03682e5A53b48E56604c5">0x978D4b5438D3E4EDf4f03682e5A53b48E56604c5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x3ADA6D040314676B1e8A4BC1a0a16060b42A00eF">0x3ADA6D040314676B1e8A4BC1a0a16060b42A00eF</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentEURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4BA1bdbc15281775a8437EAcdbAF8fbfD3A6a224">0x4BA1bdbc15281775a8437EAcdbAF8fbfD3A6a224</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentFILPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6F910A87565c581e101FBba25fE5B2570181794C">0x6F910A87565c581e101FBba25fE5B2570181794C</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentFLOKIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x3FCC706dd9ab9Ac3DAF6f205AbE26712ddcBbd3E">0x3FCC706dd9ab9Ac3DAF6f205AbE26712ddcBbd3E</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentFLOWPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x81b5c28e3905233bc4B96B182160593779d2CB83">0x81b5c28e3905233bc4B96B182160593779d2CB83</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentFTMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x88b7BD7A245F2fB597de88a6EDA0CAEe047f607a">0x88b7BD7A245F2fB597de88a6EDA0CAEe047f607a</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentFXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4022AB250B5c32c286A3953bc740368D6b68b067">0x4022AB250B5c32c286A3953bc740368D6b68b067</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentGBPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xc8590aEb1484e642f7321bd0586B6DB3165a862C">0xc8590aEb1484e642f7321bd0586B6DB3165a862C</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentGMXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9053e51047BA7f0141f3d1F23AC7Ec6861bf9Fba">0x9053e51047BA7f0141f3d1F23AC7Ec6861bf9Fba</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentICPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xcAd243fA79De8Acb3B0336Dd9793A16D8e6A3aA5">0xcAd243fA79De8Acb3B0336Dd9793A16D8e6A3aA5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentINJPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x0cDFdbF84Ac56D54657d3895602BB2982fD1EFE4">0x0cDFdbF84Ac56D54657d3895602BB2982fD1EFE4</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentKNCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xE6bf793B3ED4b42f8c3FB883a60e49f976a1791e">0xE6bf793B3ED4b42f8c3FB883a60e49f976a1791e</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentLDOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6BAD3Be3A7B3853739729833425a8b22737D0dAC">0x6BAD3Be3A7B3853739729833425a8b22737D0dAC</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentLINKPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x560F562be696BaEfA0029c954cC69352bfb33e41">0x560F562be696BaEfA0029c954cC69352bfb33e41</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentLTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x7733b88Bf971b9c77cC3C1B64a2Ef4fC06b08017">0x7733b88Bf971b9c77cC3C1B64a2Ef4fC06b08017</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentMATICPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x7F059E5FAA4972B098C7539A6721c596BDc942de">0x7F059E5FAA4972B098C7539A6721c596BDc942de</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentMAVPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6A5A1E32216377FC03bFFdC9B33fe29c2f14Ec84">0x6A5A1E32216377FC03bFFdC9B33fe29c2f14Ec84</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentMKRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xDEbC936c5aDfd1331E5fa4AE76DB7197283342d0">0xDEbC936c5aDfd1331E5fa4AE76DB7197283342d0</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentNEARPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x699c039c9E21d49B8c38768619942dfaB6E8E38d">0x699c039c9E21d49B8c38768619942dfaB6E8E38d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentONEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x66f916cc0B0b26C1783974A60Cef9B0AfC382825">0x66f916cc0B0b26C1783974A60Cef9B0AfC382825</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentOPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xF9F70F783BE3ee6ebde9504BA0AC0730151b0a22">0xF9F70F783BE3ee6ebde9504BA0AC0730151b0a22</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentPEPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x41aE759b8e75f4EE544cD08B4369e5F4719561FE">0x41aE759b8e75f4EE544cD08B4369e5F4719561FE</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentPERPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x5E51817910c53A01e7Ee90B8640a66768075bf2E">0x5E51817910c53A01e7Ee90B8640a66768075bf2E</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentRNDRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xC81e43B6FB257760cb655C5B3Ea0b87d93cf01B5">0xC81e43B6FB257760cb655C5B3Ea0b87d93cf01B5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentRPLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xc9c64cF6D1CE4b41D087F08EdAa9De23262f1EdA">0xc9c64cF6D1CE4b41D087F08EdAa9De23262f1EdA</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentRUNEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xDaf440cDeA843762c6D4ECFA7C2f64AED832319e">0xDaf440cDeA843762c6D4ECFA7C2f64AED832319e</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentSEIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9D81F2898127f812751dc09C210D839a7DB651aa">0x9D81F2898127f812751dc09C210D839a7DB651aa</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentSHIBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xf037641c69c1156530c182B970045EBA6289553b">0xf037641c69c1156530c182B970045EBA6289553b</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentSOLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xA5BAff7D9928AE32C5e1ff441e4575951CB01111">0xA5BAff7D9928AE32C5e1ff441e4575951CB01111</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentSTETHETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xFF5CfDB5b9640EaEA8D23C1d72014346aE8174FD">0xFF5CfDB5b9640EaEA8D23C1d72014346aE8174FD</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentSTETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9B0071d4Ee4a078dbdD5100799D8eA700A6dA709">0x9B0071d4Ee4a078dbdD5100799D8eA700A6dA709</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentSUIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x700EDD66fB75516427C793f5Fe376f6fe1aCc932">0x700EDD66fB75516427C793f5Fe376f6fe1aCc932</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentSUSHIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xd01a18C2eDB9f411A8329eF9B2905F3Cf7D35408">0xd01a18C2eDB9f411A8329eF9B2905F3Cf7D35408</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentTRXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xc254F4A4Bc16218eD30A3D674d8fae3f25B6Af5d">0xc254F4A4Bc16218eD30A3D674d8fae3f25B6Af5d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentUMAPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xD60E490fBF42a43E67F1e8d74debd7bCB5240F80">0xD60E490fBF42a43E67F1e8d74debd7bCB5240F80</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentUNIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xB0b6b79Fbb09290b0663D6D767FFCEE7EA742428">0xB0b6b79Fbb09290b0663D6D767FFCEE7EA742428</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentUSDTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xD53C50B644aa4E29fe2B633E97187e2Aa3cBd6fc">0xD53C50B644aa4E29fe2B633E97187e2Aa3cBd6fc</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentWLDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x81891EBC7cF265B87D8658EC2E703fB703392845">0x81891EBC7cF265B87D8658EC2E703fB703392845</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentXAGPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xF40E46c74CA3E72d8dC490493FA9499999C6256E">0xF40E46c74CA3E72d8dC490493FA9499999C6256E</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentXAUPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x76c6C768ac45F0a3d266FF3e73257937Fc962FE6">0x76c6C768ac45F0a3d266FF3e73257937Fc962FE6</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentXLMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9576B1104c0fa29F76B3559B77e0fD0A6b450213">0x9576B1104c0fa29F76B3559B77e0fD0A6b450213</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentXMRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x239847700D9134cEEAEC306DAA40b569CEe1D5a0">0x239847700D9134cEEAEC306DAA40b569CEe1D5a0</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentXRPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x7F4B56A8Fe268666d95e64F16A96bBDCfB89DF54">0x7F4B56A8Fe268666d95e64F16A96bBDCfB89DF54</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentXTZPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xa7912822C220cda3596CAbFe9077769576E2b46E">0xa7912822C220cda3596CAbFe9077769576E2b46E</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentYFIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xf7AF14838789093ccD01c67cF9Bc5f602501cEd0">0xf7AF14838789093ccD01c67cF9Bc5f602501cEd0</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentZECPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xD21257d00E06621b1946532a2410dB1aBa75C638">0xD21257d00E06621b1946532a2410dB1aBa75C638</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentZILPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x0e1A5c48f3Ae7c629155aFAbbBcd5442627c7EF6">0x0e1A5c48f3Ae7c629155aFAbbBcd5442627c7EF6</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentZRXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x58e178B0CacD1bc56a2cC408030A1f69eDc315f7">0x58e178B0CacD1bc56a2cC408030A1f69eDc315f7</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ExchangeRate</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2ExchangeRate.sol">PerpsV2ExchangeRate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2C15259D4886e2C0946f9aB7a5E389c86b3c3b04">0x2C15259D4886e2C0946f9aB7a5E389c86b3c3b04</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2Market1INCHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x06bA4E6246A0C4BcBB53Ec860bE5372Fc40629ab">0x06bA4E6246A0C4BcBB53Ec860bE5372Fc40629ab</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketAAVEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x42AAa33a13bDac31D8B9e04D9d5Db7F9FC8C0119">0x42AAa33a13bDac31D8B9e04D9d5Db7F9FC8C0119</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketADAPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6A071D06b9e317A5Bc0780dD5E7eE8C41c5C3cB8">0x6A071D06b9e317A5Bc0780dD5E7eE8C41c5C3cB8</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketALGOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x949404d0AC66430842145204fB83c1aB9C21F35B">0x949404d0AC66430842145204fB83c1aB9C21F35B</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketAPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x74Eb1E2EfaDDde923f92F31c209a788475A20A1C">0x74Eb1E2EfaDDde923f92F31c209a788475A20A1C</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketAPTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9B1c2055465e1F1AaEa14d68fC688175cf46cdfe">0x9B1c2055465e1F1AaEa14d68fC688175cf46cdfe</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketARBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x5b37D50F3b7F03884d7cD005CDc7120F5060808c">0x5b37D50F3b7F03884d7cD005CDc7120F5060808c</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketATOMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9597494F1675F1D62Edb03dee40D84828EF5B295">0x9597494F1675F1D62Edb03dee40D84828EF5B295</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketAUDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xAF89069dC03d65C1b3091D770a8D3b4D02126849">0xAF89069dC03d65C1b3091D770a8D3b4D02126849</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketAVAXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xE4bC6Fce51de6198Ac13eDB55E60B5ca67A4d7C9">0xE4bC6Fce51de6198Ac13eDB55E60B5ca67A4d7C9</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketAXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4eB7Ce307DE597F854124D018ec9edE0A8D57931">0x4eB7Ce307DE597F854124D018ec9edE0A8D57931</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketBALPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x27B9C4af1BACd39Fb216A3a27c9F1E3cd8570b19">0x27B9C4af1BACd39Fb216A3a27c9F1E3cd8570b19</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketBCHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xcB9208c6091dF778BF405f3938B6A6beF427e37E">0xcB9208c6091dF778BF405f3938B6A6beF427e37E</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketBLURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4Fc5beD961d41ba5F198DE7484637800Dac78eb1">0x4Fc5beD961d41ba5F198DE7484637800Dac78eb1</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketBNBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xf4Aa6bF149873Cb965061f845407091eF9f50722">0xf4Aa6bF149873Cb965061f845407091eF9f50722</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x352B138d7F6500fC71A014F3C7eD48B6d99fbe4d">0x352B138d7F6500fC71A014F3C7eD48B6d99fbe4d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketCELOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4334DfcB85EaB5dA80b162F930B56F47Ebb156f1">0x4334DfcB85EaB5dA80b162F930B56F47Ebb156f1</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketCOMPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xA154EcFFfb46380991751DE890956b245142e10C">0xA154EcFFfb46380991751DE890956b245142e10C</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketCRVPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xcA3AF1757f1ce97956c289ccc6B171A14acD85Ca">0xcA3AF1757f1ce97956c289ccc6B171A14acD85Ca</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketDOGEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xdcf2D2C4949D6358bF05cfd88dAE83276cf7552b">0xdcf2D2C4949D6358bF05cfd88dAE83276cf7552b</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketDOTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9Cd7ccac32231ccb842f14368B3DA3B33f20d3BE">0x9Cd7ccac32231ccb842f14368B3DA3B33f20d3BE</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketDYDXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x65Df3Ec0d5fd06a2f29C68e7894804b496945ef2">0x65Df3Ec0d5fd06a2f29C68e7894804b496945ef2</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketData</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketData.sol">PerpsV2MarketData.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x340B5d664834113735730Ad4aFb3760219Ad9112">0x340B5d664834113735730Ad4aFb3760219Ad9112</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketENJPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9651De67fD8c3003a56b25dc24C73C317f00251d">0x9651De67fD8c3003a56b25dc24C73C317f00251d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketEOSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4F9c7cE72255CC04ca2159793a59EFE3E6F40aA5">0x4F9c7cE72255CC04ca2159793a59EFE3E6F40aA5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketETCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x79AE4AAC073c6f153644647Af14F202ca8cc39C5">0x79AE4AAC073c6f153644647Af14F202ca8cc39C5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketETHBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x3091AcaEAF27985F33a8a4b0EefEa49dc60c8506">0x3091AcaEAF27985F33a8a4b0EefEa49dc60c8506</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x7c1560f20907Ed41aC740873FACF9E3Dce4f18DD">0x7c1560f20907Ed41aC740873FACF9E3Dce4f18DD</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketEURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xcE8Bcb110101D6cDe21d6c76bD799261385AA950">0xcE8Bcb110101D6cDe21d6c76bD799261385AA950</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketFILPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2dc99068ad1D5b437B63c2aFA5c3D30a23084764">0x2dc99068ad1D5b437B63c2aFA5c3D30a23084764</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketFLOKIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x47F99a380cc020b5DB4B000aF445a232081ceEe7">0x47F99a380cc020b5DB4B000aF445a232081ceEe7</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketFLOWPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x661c2479BffE01eB99EeC9169149BaA5DAbeB883">0x661c2479BffE01eB99EeC9169149BaA5DAbeB883</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketFTMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x1454ba0f1c5Fcb401cfe72E028114FEE022990EE">0x1454ba0f1c5Fcb401cfe72E028114FEE022990EE</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketFXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x29601BAfeE838F75679e0024E9b8E44D6f1b6f2c">0x29601BAfeE838F75679e0024E9b8E44D6f1b6f2c</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketGBPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x7690Af487c06674785daEF91EF6576464B46D249">0x7690Af487c06674785daEF91EF6576464B46D249</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketGMXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x222eb6ce2461798382D044ABE53edcf8752B47f7">0x222eb6ce2461798382D044ABE53edcf8752B47f7</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketICPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x7221d65B8e46a380102EBE986C01A9481e75Bd9E">0x7221d65B8e46a380102EBE986C01A9481e75Bd9E</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketINJPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x84e12CCEa1311DA4090002279C2f46EC828199f3">0x84e12CCEa1311DA4090002279C2f46EC828199f3</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketKNCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xf9C0122A38c6B85FDAfF3065f3d0822D9802E03e">0xf9C0122A38c6B85FDAfF3065f3d0822D9802E03e</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLDOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xdCB4ec61fee47955462FD1F3fa89A6F32cc6A800">0xdCB4ec61fee47955462FD1F3fa89A6F32cc6A800</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLINKPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x885B3fF84a0Fe82eb97A23093421504e42cc8f74">0x885B3fF84a0Fe82eb97A23093421504e42cc8f74</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x61a7AE08B9061F96934a2093cbe59F839355FFF5">0x61a7AE08B9061F96934a2093cbe59F839355FFF5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidate1INCHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x08e52251d4434eadF1f2Ce01D419B6249694d9e5">0x08e52251d4434eadF1f2Ce01D419B6249694d9e5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateAAVEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xFCce7f97100C0Bdd63c3d53ce0Ac35bE1F900a5e">0xFCce7f97100C0Bdd63c3d53ce0Ac35bE1F900a5e</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateADAPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4a74Fc79618B018B0Db1dfeea225B38666D32871">0x4a74Fc79618B018B0Db1dfeea225B38666D32871</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateALGOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xc0929A879906AF158B63230BC7a60144F2E26839">0xc0929A879906AF158B63230BC7a60144F2E26839</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateAPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x0b1E9543c3Cda15d431DCdc94724F3FF3caDAc1F">0x0b1E9543c3Cda15d431DCdc94724F3FF3caDAc1F</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateAPTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xF6Af0F6E69A24Bc753382a9C53d568D83515f167">0xF6Af0F6E69A24Bc753382a9C53d568D83515f167</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateARBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xeF7F0BC2D93caEaA824EE56592e3C2E9d5Bf0C34">0xeF7F0BC2D93caEaA824EE56592e3C2E9d5Bf0C34</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateATOMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xCc60342649c58A9D5a5293030CCBc230b1231127">0xCc60342649c58A9D5a5293030CCBc230b1231127</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateAUDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xd1b73C8251acf068ea03A42177bD1E3F610F9fB4">0xd1b73C8251acf068ea03A42177bD1E3F610F9fB4</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateAVAXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xB1ad6dD82d086F31d2143080b0064aBc44cf2b5B">0xB1ad6dD82d086F31d2143080b0064aBc44cf2b5B</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateAXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x73d3c278BE973624AEA70ef89C61113E55317AB6">0x73d3c278BE973624AEA70ef89C61113E55317AB6</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateBALPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x797c42Ff20162B806b813B78E5ceD6d69E06a09a">0x797c42Ff20162B806b813B78E5ceD6d69E06a09a</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateBCHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xe0c39E7b896E7fd1F9fd221079502BDa23e81115">0xe0c39E7b896E7fd1F9fd221079502BDa23e81115</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateBLURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x325a0fA8e3A0A40Fa82bc6D222B1af765Ab77B36">0x325a0fA8e3A0A40Fa82bc6D222B1af765Ab77B36</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateBNBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xE7C25f3E803C7eb5a08d0332D0c28417241d5462">0xE7C25f3E803C7eb5a08d0332D0c28417241d5462</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x0679e0fa9ecD77e2Bd900555CbE10a5Dd519A5fd">0x0679e0fa9ecD77e2Bd900555CbE10a5Dd519A5fd</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateCELOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xf4EDc15CCf3bE5833dB3753AA91782a601F9aeda">0xf4EDc15CCf3bE5833dB3753AA91782a601F9aeda</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateCOMPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6e7209c0dB7110fc5606BAAC492Ce4dEA2EFEd8e">0x6e7209c0dB7110fc5606BAAC492Ce4dEA2EFEd8e</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateCRVPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xB2E26D988A5557b571bF9833a8a60d25799293E1">0xB2E26D988A5557b571bF9833a8a60d25799293E1</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateDOGEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x277EFAFCCB3683Fd0DD5facCa8f37E3130D359Fb">0x277EFAFCCB3683Fd0DD5facCa8f37E3130D359Fb</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateDOTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4C2A2390c2908E0e489F8a487CE332f7CD6c1357">0x4C2A2390c2908E0e489F8a487CE332f7CD6c1357</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateDYDXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x1f6B92EB7aA3dacA3DcCBaD74928827CF003f9A4">0x1f6B92EB7aA3dacA3DcCBaD74928827CF003f9A4</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateENJPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x03c0544195A86028abdD8E69239A03b7ca0bC283">0x03c0544195A86028abdD8E69239A03b7ca0bC283</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateEOSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xb997eDbe18f7e8a9904EC7E6A945f2940De5193D">0xb997eDbe18f7e8a9904EC7E6A945f2940De5193D</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateETCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x86770a2940efF6a778768592B42A6668FfB162a4">0x86770a2940efF6a778768592B42A6668FfB162a4</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateETHBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x0DAeA0367d7b82644C4db4D992cF4ba39c8A359C">0x0DAeA0367d7b82644C4db4D992cF4ba39c8A359C</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xb474425297945dA2F38423cDAb98f63860412F14">0xb474425297945dA2F38423cDAb98f63860412F14</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateEURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2A77E3382e205D586CA6E4C9F8D7dc6E6bB2054d">0x2A77E3382e205D586CA6E4C9F8D7dc6E6bB2054d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateFILPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xCEEC52eae64958A7F469d2Cf919102bD198092dc">0xCEEC52eae64958A7F469d2Cf919102bD198092dc</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateFLOKIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xfc328bb84082AAe68cC47d7f032b177b8da348bc">0xfc328bb84082AAe68cC47d7f032b177b8da348bc</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateFLOWPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xdACBFD99Bb915739B58ac9312c78A23ACbACB6Db">0xdACBFD99Bb915739B58ac9312c78A23ACbACB6Db</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateFTMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6680180094DF2421A9c5140b207f95759C9080Dc">0x6680180094DF2421A9c5140b207f95759C9080Dc</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateFXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xEbBeb518d4b4e488f45913A9Ef72Ea57Be676F1a">0xEbBeb518d4b4e488f45913A9Ef72Ea57Be676F1a</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateGBPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6cb4EEcE70eF0eB8E7f81f4A0dE0FB1521E77F74">0x6cb4EEcE70eF0eB8E7f81f4A0dE0FB1521E77F74</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateGMXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xfAFe2eC4999AeFD162aA3c0abA16D08235662606">0xfAFe2eC4999AeFD162aA3c0abA16D08235662606</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateICPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4F7d521a7CF8FA3b6EbF5d960907aE83E2888fC7">0x4F7d521a7CF8FA3b6EbF5d960907aE83E2888fC7</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateINJPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xc2aA78B6d0D2A72557EdD79845b43BEE4eA4DD10">0xc2aA78B6d0D2A72557EdD79845b43BEE4eA4DD10</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateKNCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x959A4309f7d82e3D34C353a405200D8277032115">0x959A4309f7d82e3D34C353a405200D8277032115</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateLDOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x7784B850922d995965846d8a89b0C90bEf470F15">0x7784B850922d995965846d8a89b0C90bEf470F15</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateLINKPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x7D5bf858398DEa0186988A2BfDCF86aE22dd8612">0x7D5bf858398DEa0186988A2BfDCF86aE22dd8612</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateLTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x556F920a83FaBa9BE8019a33CbA4898fDB38d130">0x556F920a83FaBa9BE8019a33CbA4898fDB38d130</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateMATICPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xe37858391bC66B1B8838a7459e59A802642284Fa">0xe37858391bC66B1B8838a7459e59A802642284Fa</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateMAVPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x7E62C949f55305C0679b4E883198f93Ac4D8e2e9">0x7E62C949f55305C0679b4E883198f93Ac4D8e2e9</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateMKRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x740444afa4F5a7CD569A7714D5252A35DC1fE299">0x740444afa4F5a7CD569A7714D5252A35DC1fE299</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateNEARPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x767F446FbD3F2e5c91292D9FA51a44102a89117d">0x767F446FbD3F2e5c91292D9FA51a44102a89117d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateONEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9c3A582Cb712C8CDb067456b993F0234EDB185bD">0x9c3A582Cb712C8CDb067456b993F0234EDB185bD</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateOPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xE9Dc2C1008b1322c21c1Fb45CD101f1b7A0C9f73">0xE9Dc2C1008b1322c21c1Fb45CD101f1b7A0C9f73</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidatePEPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4dFB42753f735fBbbb2b1312F72eB05D905365AD">0x4dFB42753f735fBbbb2b1312F72eB05D905365AD</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidatePERPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xc765DcA9D0e77B01b2Bb74fEBae2cF89E038092B">0xc765DcA9D0e77B01b2Bb74fEBae2cF89E038092B</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateRNDRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x70eE22558a577C9c3C7BE0A5F9Fb494c20e0545b">0x70eE22558a577C9c3C7BE0A5F9Fb494c20e0545b</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateRPLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x15df53AEcF14f4525BE5F7Ac8240968CBF5bcAAf">0x15df53AEcF14f4525BE5F7Ac8240968CBF5bcAAf</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateRUNEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xa26677434188Db65e42dd5606EE297366361cc2D">0xa26677434188Db65e42dd5606EE297366361cc2D</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateSEIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x73575B75c222bb2d6c2240E725CAa654B8ec6BAd">0x73575B75c222bb2d6c2240E725CAa654B8ec6BAd</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateSHIBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x640cca1164154b7F5e7b5c2eeF6D757246Cd3e2B">0x640cca1164154b7F5e7b5c2eeF6D757246Cd3e2B</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateSOLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x80cbc948c5dba55dc829472373e9F20203E13EB2">0x80cbc948c5dba55dc829472373e9F20203E13EB2</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateSTETHETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x89f16bfFd72166807A18fAba307cD21eC6143563">0x89f16bfFd72166807A18fAba307cD21eC6143563</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateSTETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xFD306A2B2e78E35F573f8593aeeD50d07ceAB6BD">0xFD306A2B2e78E35F573f8593aeeD50d07ceAB6BD</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateSUIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xcfe154521ab1fc995a6bc68880Af9888221FD27C">0xcfe154521ab1fc995a6bc68880Af9888221FD27C</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateSUSHIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x21F660512a18dEad0664F189aF73D74373dDC45f">0x21F660512a18dEad0664F189aF73D74373dDC45f</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateTRXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x5076C4fa56fb78b28eF4a542c7ef2B0F95186e58">0x5076C4fa56fb78b28eF4a542c7ef2B0F95186e58</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateUMAPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x14A3F810db4E4EC74906D2538DE00a4c995f229E">0x14A3F810db4E4EC74906D2538DE00a4c995f229E</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateUNIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xB63bEF5ccC5e9316961CDCD54129743AE8455Bc4">0xB63bEF5ccC5e9316961CDCD54129743AE8455Bc4</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateUSDTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xA552049A9f320B6a8622A003FE1108595061e223">0xA552049A9f320B6a8622A003FE1108595061e223</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateWLDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xD8aD261b4deA3Ce25642d909D2F3Cbf9D4632caf">0xD8aD261b4deA3Ce25642d909D2F3Cbf9D4632caf</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateXAGPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x35B9D048d4CB99bB34d59fBF962E86B8Ee44760F">0x35B9D048d4CB99bB34d59fBF962E86B8Ee44760F</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateXAUPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2493291196F02794465b89Ef50F80C60fa8d0E89">0x2493291196F02794465b89Ef50F80C60fa8d0E89</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateXLMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xECE9613025F970f1d56b2Ba749e1170976465088">0xECE9613025F970f1d56b2Ba749e1170976465088</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateXMRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x5d79EeB57A35EC8b6b9Ef55052C5C9F919C3c3Ee">0x5d79EeB57A35EC8b6b9Ef55052C5C9F919C3c3Ee</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateXRPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x95366aC32995d4C31f72C2D0029211E19bF6eB7d">0x95366aC32995d4C31f72C2D0029211E19bF6eB7d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateXTZPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xe96097De5D8d168FC46B52874dF0A474E4A293D6">0xe96097De5D8d168FC46B52874dF0A474E4A293D6</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateYFIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x579e622B355Ac69A3a772d29A98379044CBF7722">0x579e622B355Ac69A3a772d29A98379044CBF7722</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateZECPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x8649Fdb91a47281Ea1eE67b83967b0D00F79a560">0x8649Fdb91a47281Ea1eE67b83967b0D00F79a560</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateZILPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x0194e4BbD724633546D543A28125c579dfEc057c">0x0194e4BbD724633546D543A28125c579dfEc057c</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateZRXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x67e010545133038292D124E49D1dB6459fff82AF">0x67e010545133038292D124E49D1dB6459fff82AF</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketMATICPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x496B1C5EEf77E6Ea7Ff98bB22b5ec01Dd4CFdeDA">0x496B1C5EEf77E6Ea7Ff98bB22b5ec01Dd4CFdeDA</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketMAVPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xeef768Df33e01bcd395612601569f4Ac5daf2363">0xeef768Df33e01bcd395612601569f4Ac5daf2363</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketMKRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x0B08D567D1893D9e0B48E61d1f9Ecd9D7C6B11EE">0x0B08D567D1893D9e0B48E61d1f9Ecd9D7C6B11EE</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketNEARPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4df6E29C07c51e5e7F7a98aB90547861Aba42B56">0x4df6E29C07c51e5e7F7a98aB90547861Aba42B56</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketONEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x66F541d5F16f2451dE9DE5098d241774a33093f4">0x66F541d5F16f2451dE9DE5098d241774a33093f4</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketOPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x102AFf35C746B44a639A1cE344A1461306835e86">0x102AFf35C746B44a639A1cE344A1461306835e86</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketPEPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x5Be1C70475422255684E4f312E57Fe782a5102F4">0x5Be1C70475422255684E4f312E57Fe782a5102F4</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketPERPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6d9bDe78D5562b6BE4B6A70f4f2511fb1A8f9E10">0x6d9bDe78D5562b6BE4B6A70f4f2511fb1A8f9E10</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketRNDRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x3942722D61d784347F38CaA493B1E073aB321B22">0x3942722D61d784347F38CaA493B1E073aB321B22</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketRPLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x89fE4828Bf24caFbE96F804885506A7111065541">0x89fE4828Bf24caFbE96F804885506A7111065541</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketRUNEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x18f763fd61Efd3D9884981CC2CBd6845351e4b70">0x18f763fd61Efd3D9884981CC2CBd6845351e4b70</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketSEIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xd0De1Cc5849E07C03D1d7a2589a8D56D092DfEaf">0xd0De1Cc5849E07C03D1d7a2589a8D56D092DfEaf</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketSHIBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xA198D00DC35f8367BEB48f27DE9032C8209dC22C">0xA198D00DC35f8367BEB48f27DE9032C8209dC22C</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketSOLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x00FC152C7Dc2dF709161dcc8bA541eB77E612D4E">0x00FC152C7Dc2dF709161dcc8bA541eB77E612D4E</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketSTETHETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xEa0324cc8D9FD70b8000bafbac7E3FF7C15275eD">0xEa0324cc8D9FD70b8000bafbac7E3FF7C15275eD</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketSTETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x69125856Cfbadba925CE8345D0A5dE98F375920E">0x69125856Cfbadba925CE8345D0A5dE98F375920E</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketSUIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xB7c04aa1E49BBEF0A5D7A0E7885b54c9E9309704">0xB7c04aa1E49BBEF0A5D7A0E7885b54c9E9309704</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketSUSHIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x070E7B0447e096704C54923826ac0Cb6C6472400">0x070E7B0447e096704C54923826ac0Cb6C6472400</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketSettings</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketSettings.sol">PerpsV2MarketSettings.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x649F44CAC3276557D03223Dbf6395Af65b11c11c">0x649F44CAC3276557D03223Dbf6395Af65b11c11c</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketState1INCHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x26A035D9A2eD696EacC3816674C66A7eB73aAb70">0x26A035D9A2eD696EacC3816674C66A7eB73aAb70</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateAAVEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x3773dfbbc894bfa9DF22855FCec1D1572eFC5e0a">0x3773dfbbc894bfa9DF22855FCec1D1572eFC5e0a</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateADAPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xAe3D1b55CBFFc11693257FB5Dc41DE32F1E9EC7A">0xAe3D1b55CBFFc11693257FB5Dc41DE32F1E9EC7A</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateALGOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xd856b45d4D9671482e53E705058aF3fF09000A28">0xd856b45d4D9671482e53E705058aF3fF09000A28</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateAPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x089af032687993426A628184cb3D0610d2cda6F2">0x089af032687993426A628184cb3D0610d2cda6F2</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateAPTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x91a4F7125A6F7ec14c41d39F0AC681e8e387DA1C">0x91a4F7125A6F7ec14c41d39F0AC681e8e387DA1C</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateARBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6393113A43A4A88b9F3D53b4b21e7feEb5d3D821">0x6393113A43A4A88b9F3D53b4b21e7feEb5d3D821</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateATOMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xe46Ef097d2CF6FF95Ad172d5da0E65A0dE9e2468">0xe46Ef097d2CF6FF95Ad172d5da0E65A0dE9e2468</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateAUDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6d62aA1535C7C33D7f6592562f091D193E180c57">0x6d62aA1535C7C33D7f6592562f091D193E180c57</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateAVAXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xC02AF29944301c8FbA606a7dF8ef446dc103238C">0xC02AF29944301c8FbA606a7dF8ef446dc103238C</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateAXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xcfdC039BDB8E4b578857b759f27D6BAa2617EDD3">0xcfdC039BDB8E4b578857b759f27D6BAa2617EDD3</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateBALPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x982bb9880295EcBc34a56772fEF81E964Aee4A9f">0x982bb9880295EcBc34a56772fEF81E964Aee4A9f</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateBCHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xa664fCA1879C9cA2E6CFeD49C3C855352016E4C5">0xa664fCA1879C9cA2E6CFeD49C3C855352016E4C5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateBLURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6aCC3519d10E46E5a228615c9d4B57CC0113A212">0x6aCC3519d10E46E5a228615c9d4B57CC0113A212</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateBNBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x3DfBB7D0770e6Eb77fBEc89C0840E9A0f29C76Ff">0x3DfBB7D0770e6Eb77fBEc89C0840E9A0f29C76Ff</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x68287419FcFA1c186515E99a35FF3c970B3B3C66">0x68287419FcFA1c186515E99a35FF3c970B3B3C66</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateCELOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xb8BC48ed3D08A3ac02D62174652369d3279705dE">0xb8BC48ed3D08A3ac02D62174652369d3279705dE</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateCOMPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xF8dBEf33111A37879f35EE15507769CA927cf9C0">0xF8dBEf33111A37879f35EE15507769CA927cf9C0</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateCRVPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x5A155c378d66d8EBa2262e744738a76d913E5945">0x5A155c378d66d8EBa2262e744738a76d913E5945</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateDOGEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x0A0A22189c8732cA089D6fB6709e65140a446a41">0x0A0A22189c8732cA089D6fB6709e65140a446a41</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateDOTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xCF33a35F0f2095ABdD0C81dbde3A1cD37bE0c5cC">0xCF33a35F0f2095ABdD0C81dbde3A1cD37bE0c5cC</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateDYDXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xac3F9a2753f185731324907E6802395d59Bb62a2">0xac3F9a2753f185731324907E6802395d59Bb62a2</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateENJPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x8327AA139bd7eEE62730a2cB9B9A86821810d4DB">0x8327AA139bd7eEE62730a2cB9B9A86821810d4DB</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateEOSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x1f53699b435326B6e264727b5504Cc28006Bed8B">0x1f53699b435326B6e264727b5504Cc28006Bed8B</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateETCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x04412b2aE241C602Be87Bc1114238d50d08398Fb">0x04412b2aE241C602Be87Bc1114238d50d08398Fb</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateETHBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xd10cd91683301c8C15eDA40F59e73d1b0BcfECDD">0xd10cd91683301c8C15eDA40F59e73d1b0BcfECDD</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6aBC19F21D5Ce23abf392329Ef7B118c7b5F2AA8">0x6aBC19F21D5Ce23abf392329Ef7B118c7b5F2AA8</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateEURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4eD08210706F5b74584cC7F03b38d800DC27936B">0x4eD08210706F5b74584cC7F03b38d800DC27936B</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateFILPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x71FD2f49f289d75D0C1E108c97Fcb2a4c54Ab424">0x71FD2f49f289d75D0C1E108c97Fcb2a4c54Ab424</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateFLOKIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x94a1D572baE06A31C029D4C26e1fA705f54286ef">0x94a1D572baE06A31C029D4C26e1fA705f54286ef</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateFLOWPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xECc8A6Af92d825ACC5B871993FC83d86CCEd5a19">0xECc8A6Af92d825ACC5B871993FC83d86CCEd5a19</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateFTMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x1951c6b2D9DD9A3CF10aaC5e79A7EcA0a5300BB5">0x1951c6b2D9DD9A3CF10aaC5e79A7EcA0a5300BB5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateFXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xd9AC5ECbB704f0bdb0a96bEBfA3B79bE829d2bC1">0xd9AC5ECbB704f0bdb0a96bEBfA3B79bE829d2bC1</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateGBPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x733a69D080B10Bc897452eF783020cdFe012974A">0x733a69D080B10Bc897452eF783020cdFe012974A</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateGMXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9f564ffB60945DEc03fB8DdEF491465Dd9b4C9Fb">0x9f564ffB60945DEc03fB8DdEF491465Dd9b4C9Fb</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateICPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4bD5674a720c212FF515Dd51d4E5d304FF16B3d0">0x4bD5674a720c212FF515Dd51d4E5d304FF16B3d0</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateINJPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4C35c27fF8F0dD039B4C4F0D670f2D58f6215c9C">0x4C35c27fF8F0dD039B4C4F0D670f2D58f6215c9C</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateKNCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x325AF017A497953734CB7B1F51580ff9aD1122B1">0x325AF017A497953734CB7B1F51580ff9aD1122B1</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateLDOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x1d46c117E7e9A5dd242724a1952911ECe78e0831">0x1d46c117E7e9A5dd242724a1952911ECe78e0831</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateLINKPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xEed3618dd59163CC6849758F07fA9369823aa710">0xEed3618dd59163CC6849758F07fA9369823aa710</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateLTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xf5826f24805c162c696b79ba31ebC6FB8003d475">0xf5826f24805c162c696b79ba31ebC6FB8003d475</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateMATICPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x82f962aF60e6627d3ea5Db5Fd7e1a57f7E1Ef2B8">0x82f962aF60e6627d3ea5Db5Fd7e1a57f7E1Ef2B8</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateMAVPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xB241aF12256998A0051b93e02027e73CA7E5388d">0xB241aF12256998A0051b93e02027e73CA7E5388d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateMKRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xf963a0fc0BFc38FEfE08C6062f2AD9A11AfFDEeb">0xf963a0fc0BFc38FEfE08C6062f2AD9A11AfFDEeb</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateNEARPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x779f424d3B3A617beB4a0DB1C21D5505De297a8A">0x779f424d3B3A617beB4a0DB1C21D5505De297a8A</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateONEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xEdB8F5e51e5B11E73beA72600aa2De7a4A2eAFa4">0xEdB8F5e51e5B11E73beA72600aa2De7a4A2eAFa4</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateOPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xBdD0D09f73AC6f8Ef59A71baab283C12dcab06fA">0xBdD0D09f73AC6f8Ef59A71baab283C12dcab06fA</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStatePEPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2365D3e91E585c974c28a5B82d6AA266F68a44Ad">0x2365D3e91E585c974c28a5B82d6AA266F68a44Ad</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStatePERPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6941ad5Ac604d2329f96bEA75C7b25D19Cc06701">0x6941ad5Ac604d2329f96bEA75C7b25D19Cc06701</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateRNDRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x82DCd3e7224DDA8dF6A746d70F1Cce80df4384c2">0x82DCd3e7224DDA8dF6A746d70F1Cce80df4384c2</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateRPLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xf606E99D6F6a003623eA5764dA119BAEcB2e8C99">0xf606E99D6F6a003623eA5764dA119BAEcB2e8C99</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateRUNEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2CC4707f6aeF86cDBA05F45Da98D365a66DFD5d7">0x2CC4707f6aeF86cDBA05F45Da98D365a66DFD5d7</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateSEIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9F6AA1c141838DF56eF82Be286cAbd2616c8B309">0x9F6AA1c141838DF56eF82Be286cAbd2616c8B309</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateSHIBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xc2c71156d9DDe42F412e83a3E169283Cd70F3E9D">0xc2c71156d9DDe42F412e83a3E169283Cd70F3E9D</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateSOLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x435e6e499610B6De3510F0Cb047D3575C7bca6E1">0x435e6e499610B6De3510F0Cb047D3575C7bca6E1</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateSTETHETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2EC454957C0e66266398076f066fAaC77c48d88d">0x2EC454957C0e66266398076f066fAaC77c48d88d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateSTETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x777A913412D576532120ac1d266d4C908e584DB2">0x777A913412D576532120ac1d266d4C908e584DB2</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateSUIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2cCaf0500142F8E563fF361C3b34AbEe16B6205d">0x2cCaf0500142F8E563fF361C3b34AbEe16B6205d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateSUSHIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x854A3500F1443ba99F746CA605d8FC25F0d06f32">0x854A3500F1443ba99F746CA605d8FC25F0d06f32</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateTRXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x52cCa59bFa0228F41Ab69558F5f2EE3739323c02">0x52cCa59bFa0228F41Ab69558F5f2EE3739323c02</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateUMAPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x595f37E1b21870571eE99fbe815D6790D817C0Ba">0x595f37E1b21870571eE99fbe815D6790D817C0Ba</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateUNIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x0db1B224C5203fA22CFdFA3F92519D150ad86612">0x0db1B224C5203fA22CFdFA3F92519D150ad86612</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateUSDTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xC2231D2cAdDBee015AeDddd3F0EE3874E3bd1d59">0xC2231D2cAdDBee015AeDddd3F0EE3874E3bd1d59</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateWLDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xd4b10C896D82B3158A9a9fcb8F6fBC5A8D833C04">0xd4b10C896D82B3158A9a9fcb8F6fBC5A8D833C04</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateXAGPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x28E1CE29aCdFe1E74e6fA18591E1D5481D2085a1">0x28E1CE29aCdFe1E74e6fA18591E1D5481D2085a1</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateXAUPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xc564040630d6929070D85DF237FDf60F6bfE4b5F">0xc564040630d6929070D85DF237FDf60F6bfE4b5F</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateXLMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xEaFa65b829b37277a14fE43de9fAda0d9e897E4d">0xEaFa65b829b37277a14fE43de9fAda0d9e897E4d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateXMRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x3d869950817920Eda9fC9A633ab7F06B97444dd7">0x3d869950817920Eda9fC9A633ab7F06B97444dd7</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateXRPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x0Ea666319f4f0eAa7f16711f2fe7F4B159957f48">0x0Ea666319f4f0eAa7f16711f2fe7F4B159957f48</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateXTZPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xaf621161755C601C1469e3487ce971f39Ae507BC">0xaf621161755C601C1469e3487ce971f39Ae507BC</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateYFIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2107A107D1043b2c442b8de40d6696C29bD2c5b8">0x2107A107D1043b2c442b8de40d6696C29bD2c5b8</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateZECPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xe94afDEd9CB9AB143E8cCc8C7439794E8C41F1A6">0xe94afDEd9CB9AB143E8cCc8C7439794E8C41F1A6</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateZILPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x5aCd4ABF5DDfb7F27B5940D1Aef640d6b67a2Cba">0x5aCd4ABF5DDfb7F27B5940D1Aef640d6b67a2Cba</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateZRXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x0e4695edb83FB23E6b12AFa3660beF09610791de">0x0e4695edb83FB23E6b12AFa3660beF09610791de</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketTRXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x093583D2135aF25ab49a4E148698ee0125bCF2F8">0x093583D2135aF25ab49a4E148698ee0125bCF2F8</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketUMAPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xecAfBAc3221160337a3a8dcB25A955f50618feeB">0xecAfBAc3221160337a3a8dcB25A955f50618feeB</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketUNIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xd5ea02e6324693BaCbDE3E63a3C72E5a227a4dDb">0xd5ea02e6324693BaCbDE3E63a3C72E5a227a4dDb</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketUSDTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xB7d7605f814Da681cC299A9Ac9ABBfc1ea65E40A">0xB7d7605f814Da681cC299A9Ac9ABBfc1ea65E40A</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViews1INCHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x23D5291fEa095D8851cE3bB711a10b4982923d9a">0x23D5291fEa095D8851cE3bB711a10b4982923d9a</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsAAVEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x619676Df5C402D0eb008104e9a658C1F65DBF702">0x619676Df5C402D0eb008104e9a658C1F65DBF702</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsADAPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x703f070BC98f835EDc5DE183A537d837a7c65C9F">0x703f070BC98f835EDc5DE183A537d837a7c65C9F</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsALGOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xfd9f2393634fAe33099503b45719d8EBf1dA7744">0xfd9f2393634fAe33099503b45719d8EBf1dA7744</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsAPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2891452e2068Ac9471E3610e956510C46B4EffE5">0x2891452e2068Ac9471E3610e956510C46B4EffE5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsAPTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xE44179Cb9623C3bB7a9BCF54b4B1DD5ad8c672e3">0xE44179Cb9623C3bB7a9BCF54b4B1DD5ad8c672e3</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsARBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x23b2558318E4955DfC3402567E22B1FF102DB3DD">0x23b2558318E4955DfC3402567E22B1FF102DB3DD</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsATOMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xA92C0142c3239e8e07cbb9f33e4C0dD4Fc19089b">0xA92C0142c3239e8e07cbb9f33e4C0dD4Fc19089b</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsAUDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x7D0256E0936103b32AAD59E80257B59E988E75e2">0x7D0256E0936103b32AAD59E80257B59E988E75e2</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsAVAXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xBb1250d0D96a22CF62ee12AEcC2FA684F3Ca04E8">0xBb1250d0D96a22CF62ee12AEcC2FA684F3Ca04E8</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsAXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xcaDD53c5fAAe5111c7a0429Ee1f99A695433Fb17">0xcaDD53c5fAAe5111c7a0429Ee1f99A695433Fb17</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsBALPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x3FFbC2f1029ccb193d011757E2bbd57538711D86">0x3FFbC2f1029ccb193d011757E2bbd57538711D86</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsBCHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x0bB16a341EdA6b5e0768b55eb091Cd914bE96bc1">0x0bB16a341EdA6b5e0768b55eb091Cd914bE96bc1</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsBLURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xeD20040b21FDf6d68336F6E61AD05F235e3eA9f3">0xeD20040b21FDf6d68336F6E61AD05F235e3eA9f3</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsBNBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xA227c833786E46d53cf9E9a14cFF906477335D91">0xA227c833786E46d53cf9E9a14cFF906477335D91</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xE662e0aF5fCaBe78aaaF4cFF0a13ca69512Fc481">0xE662e0aF5fCaBe78aaaF4cFF0a13ca69512Fc481</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsCELOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x19bd719105008C82dA4b4FD8112c9D2A97C0930c">0x19bd719105008C82dA4b4FD8112c9D2A97C0930c</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsCOMPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xbaAcf0F9dEA6b17D8667a34b7f69f60591c8D68D">0xbaAcf0F9dEA6b17D8667a34b7f69f60591c8D68D</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsCRVPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x94cF2BB95BdC525f90311dDb2eDCd1C481e81A9D">0x94cF2BB95BdC525f90311dDb2eDCd1C481e81A9D</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsDOGEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9c79C19FF4d1a6531D9a4F91e96534F5D002dF8B">0x9c79C19FF4d1a6531D9a4F91e96534F5D002dF8B</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsDOTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x29533e33226E5383A36eb4BF515Ff067379eD841">0x29533e33226E5383A36eb4BF515Ff067379eD841</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsDYDXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2e26D4beC1464409c154f653A238cE5BAAA00198">0x2e26D4beC1464409c154f653A238cE5BAAA00198</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsENJPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x04631B9297919E98334C5AbAa762C48af071b4ef">0x04631B9297919E98334C5AbAa762C48af071b4ef</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsEOSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x86508410Fd82c863920f194DA49a0835717c3673">0x86508410Fd82c863920f194DA49a0835717c3673</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsETCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4e8f55f1948D3E61A1FD3Cd38Ce05EFC77bffEb5">0x4e8f55f1948D3E61A1FD3Cd38Ce05EFC77bffEb5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsETHBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xe082Bd0Ac75c78196F312150A298ade27aebecB0">0xe082Bd0Ac75c78196F312150A298ade27aebecB0</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x989D359dBF9C531aE6C305c37AC37220b8Dd99Eb">0x989D359dBF9C531aE6C305c37AC37220b8Dd99Eb</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsEURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x5Ade35CEdDEd082BDB27A94e2A20aC327a67172e">0x5Ade35CEdDEd082BDB27A94e2A20aC327a67172e</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsFILPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x836804b2C489704068185D190C1763b9a5adDa93">0x836804b2C489704068185D190C1763b9a5adDa93</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsFLOKIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xab5745E6cD602742636491409E18a73E223C8aff">0xab5745E6cD602742636491409E18a73E223C8aff</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsFLOWPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x73d8fD1dC5E38cEF6754Fc5009015CaaEE218461">0x73d8fD1dC5E38cEF6754Fc5009015CaaEE218461</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsFTMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xab0d9E3FF817faa88F4bBC783CFA6D55E5f10F3E">0xab0d9E3FF817faa88F4bBC783CFA6D55E5f10F3E</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsFXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6a15EE080c2FdE246b674918bff3B52d414525cb">0x6a15EE080c2FdE246b674918bff3B52d414525cb</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsGBPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x3f30190416EBdE7F50749cf3579Af1beeF2E7Fa8">0x3f30190416EBdE7F50749cf3579Af1beeF2E7Fa8</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsGMXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9a05f2F00Ca385ba7d4368737ec1485384Ca8874">0x9a05f2F00Ca385ba7d4368737ec1485384Ca8874</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsICPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xdd1122620688C25DF27DD405cf467cC9e5C0CC82">0xdd1122620688C25DF27DD405cf467cC9e5C0CC82</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsINJPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x3713BC72567A6C797AC69678f72a5A0d80c56dC9">0x3713BC72567A6C797AC69678f72a5A0d80c56dC9</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsKNCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xCcff378F3aA9E4ABB36fdCb03371a59008C28708">0xCcff378F3aA9E4ABB36fdCb03371a59008C28708</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsLDOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xEbf81425e81e2A879C139DB3B3891B0A635dCF7F">0xEbf81425e81e2A879C139DB3B3891B0A635dCF7F</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsLINKPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2903C913BBbac9fBb6c4A080210cEd9EeC1f66a6">0x2903C913BBbac9fBb6c4A080210cEd9EeC1f66a6</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsLTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x184D5A9f37D0ca2151102958D174E21Db6605069">0x184D5A9f37D0ca2151102958D174E21Db6605069</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsMATICPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2F94942764C997e777F7Ded68679a5eCC6B7514c">0x2F94942764C997e777F7Ded68679a5eCC6B7514c</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsMAVPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x04915C122ebA1cd7629a2a00D9aE2a4C145aB21b">0x04915C122ebA1cd7629a2a00D9aE2a4C145aB21b</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsMKRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xb1204d3fFfeaEa354f2f04779BEdcd0d8f3598fa">0xb1204d3fFfeaEa354f2f04779BEdcd0d8f3598fa</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsNEARPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xC314CFB9C5706f316F3916543aD2F3e4c3aa2d02">0xC314CFB9C5706f316F3916543aD2F3e4c3aa2d02</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsONEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xA4d53f6CBCF314f318f316ae61cDd400c974085d">0xA4d53f6CBCF314f318f316ae61cDd400c974085d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsOPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2fffEBeD35931abD9014A39AE41fa26D511E31F4">0x2fffEBeD35931abD9014A39AE41fa26D511E31F4</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsPEPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x17ccEfad2AE2784Af7012af04c76bdafAa4E7b37">0x17ccEfad2AE2784Af7012af04c76bdafAa4E7b37</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsPERPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x24D29234e34793476000FA068E858dE4380646E6">0x24D29234e34793476000FA068E858dE4380646E6</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsRNDRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xaEB7205C613c1e1aD34E077EbE86fDB9Da16cEcf">0xaEB7205C613c1e1aD34E077EbE86fDB9Da16cEcf</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsRPLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x882e4a84Cbd9b55052c85e1FF05289aa577659B9">0x882e4a84Cbd9b55052c85e1FF05289aa577659B9</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsRUNEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xa9BB96d03A6ED56C14cd47a2CE75Fa6a7633aeC2">0xa9BB96d03A6ED56C14cd47a2CE75Fa6a7633aeC2</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsSEIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x8A6EF192d45e8ea930bC7f4F0eD457f213731BBb">0x8A6EF192d45e8ea930bC7f4F0eD457f213731BBb</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsSHIBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xe4D25C54759ecd13c10e6c64aB9127c6408F9CfF">0xe4D25C54759ecd13c10e6c64aB9127c6408F9CfF</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsSOLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xFaf84737Dae0DA0c093BC172e32FB845016Df642">0xFaf84737Dae0DA0c093BC172e32FB845016Df642</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsSTETHETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x875bBc7285d52Ca957024999315717D45ba99276">0x875bBc7285d52Ca957024999315717D45ba99276</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsSTETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x0060b9F4eaA97b310Bf74947EdCdFE2967e54D7d">0x0060b9F4eaA97b310Bf74947EdCdFE2967e54D7d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsSUIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x748f78A5dC4a4325BcdF251DeE85E481a2dC6929">0x748f78A5dC4a4325BcdF251DeE85E481a2dC6929</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsSUSHIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xc7a869dEEEE1aCaB2B30B6022C246194c83ed49C">0xc7a869dEEEE1aCaB2B30B6022C246194c83ed49C</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsTRXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xD1c8E9B404053560bc6A0302c4395FfB0FfD1C79">0xD1c8E9B404053560bc6A0302c4395FfB0FfD1C79</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsUMAPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x99B2b4F1C6222d97e70Cf7D0C7Cc314465Ca9dC0">0x99B2b4F1C6222d97e70Cf7D0C7Cc314465Ca9dC0</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsUNIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x90efaafEc5B183D09bc5b2cE81E8A12e4c2A6002">0x90efaafEc5B183D09bc5b2cE81E8A12e4c2A6002</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsUSDTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xCee08cC3BB744dEC69f6eECf5B7B62CCD9143E99">0xCee08cC3BB744dEC69f6eECf5B7B62CCD9143E99</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsWLDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x33c3C4D49dEe4232498B3eFA5336C627801E998d">0x33c3C4D49dEe4232498B3eFA5336C627801E998d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsXAGPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9BdC86302479112e61f3BA7761dC704f7044D304">0x9BdC86302479112e61f3BA7761dC704f7044D304</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsXAUPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9A3Ecffd8Cb317685EF0Df7B4aF5C4c9d1aF53eC">0x9A3Ecffd8Cb317685EF0Df7B4aF5C4c9d1aF53eC</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsXLMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x0C35263A2c4ed7BB812D3B4f4A5Da1A623fB2b7B">0x0C35263A2c4ed7BB812D3B4f4A5Da1A623fB2b7B</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsXMRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x90241392dbA7FAa1d1d96C6927f0FBfe93FdF226">0x90241392dbA7FAa1d1d96C6927f0FBfe93FdF226</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsXRPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x047B3714f3B3adFC1aa1F31c710ca3cA967Aeaa3">0x047B3714f3B3adFC1aa1F31c710ca3cA967Aeaa3</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsXTZPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x95CaB224896972e69Ad626bC75D29116CE7d4521">0x95CaB224896972e69Ad626bC75D29116CE7d4521</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsYFIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2a1Fa1Fbf771c353eBFe63472EBbB16444A9b0ef">0x2a1Fa1Fbf771c353eBFe63472EBbB16444A9b0ef</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsZECPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x77fB9D52099d4207108C26AB22f9D8BBF691A37A">0x77fB9D52099d4207108C26AB22f9D8BBF691A37A</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsZILPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xd21F7CC02f3a9B6d059cdAd6e0C0f4db18420189">0xd21F7CC02f3a9B6d059cdAd6e0C0f4db18420189</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsZRXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x0ED899BDe78B8f647D8bB1A44cD2DeDFC087188C">0x0ED899BDe78B8f647D8bB1A44cD2DeDFC087188C</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketWLDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xF2bb38E5FE4e244EF3ab82F218383Ba4D358f895">0xF2bb38E5FE4e244EF3ab82F218383Ba4D358f895</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketXAGPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xe0D10647D92749Da9bd5c250dF2EEF2e4110a8c3">0xe0D10647D92749Da9bd5c250dF2EEF2e4110a8c3</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketXAUPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xd6A06A8c73265e471639bd953D24832bBcd548fd">0xd6A06A8c73265e471639bd953D24832bBcd548fd</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketXLMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xff8Bf0f6f9494b44AeD91BB7868Ab94b76dCeAAD">0xff8Bf0f6f9494b44AeD91BB7868Ab94b76dCeAAD</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketXMRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x51a8e343841eEd0439De080cDc5d96c4A8568860">0x51a8e343841eEd0439De080cDc5d96c4A8568860</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketXRPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x995f710838a070D43D94d4420194Bb09cFC332E6">0x995f710838a070D43D94d4420194Bb09cFC332E6</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketXTZPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x577B7dAdF6052d8DFA3C394143a4021b433A809c">0x577B7dAdF6052d8DFA3C394143a4021b433A809c</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketYFIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x555a66ae81b447f3e4533A8159e2462D17A7e7c3">0x555a66ae81b447f3e4533A8159e2462D17A7e7c3</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketZECPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x8CC84E2c8BE0B7999B65A6b2bceF4dfF1f433Ce1">0x8CC84E2c8BE0B7999B65A6b2bceF4dfF1f433Ce1</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketZILPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x7EA760077b84f5e9A5D8a51Bf2A49B91D7cd5aa9">0x7EA760077b84f5e9A5D8a51Bf2A49B91D7cd5aa9</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketZRXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4DdD30Fff71Bd03AfFd9A6E27c7C8C0CC9731b22">0x4DdD30Fff71Bd03AfFd9A6E27c7C8C0CC9731b22</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2Proxy1INCHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xd5fAaa459e5B3c118fD85Fc0fD67f56310b1618D">0xd5fAaa459e5B3c118fD85Fc0fD67f56310b1618D</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyAAVEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x5374761526175B59f1E583246E20639909E189cE">0x5374761526175B59f1E583246E20639909E189cE</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyADAPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xF9DD29D2Fd9B38Cd90E390C797F1B7E0523f43A9">0xF9DD29D2Fd9B38Cd90E390C797F1B7E0523f43A9</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyALGOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x96f2842007021a4C5f06Bcc72961701D66Ff8465">0x96f2842007021a4C5f06Bcc72961701D66Ff8465</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyAPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x5B6BeB79E959Aac2659bEE60fE0D0885468BF886">0x5B6BeB79E959Aac2659bEE60fE0D0885468BF886</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyAPTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9615B6BfFf240c44D3E33d0cd9A11f563a2e8D8B">0x9615B6BfFf240c44D3E33d0cd9A11f563a2e8D8B</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyARBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x509072A5aE4a87AC89Fc8D64D94aDCb44Bd4b88e">0x509072A5aE4a87AC89Fc8D64D94aDCb44Bd4b88e</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyATOMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xbB16C7B3244DFA1a6BF83Fcce3EE4560837763CD">0xbB16C7B3244DFA1a6BF83Fcce3EE4560837763CD</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyAUDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9De146b5663b82F44E5052dEDe2aA3Fd4CBcDC99">0x9De146b5663b82F44E5052dEDe2aA3Fd4CBcDC99</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyAVAXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xc203A12F298CE73E44F7d45A4f59a43DBfFe204D">0xc203A12F298CE73E44F7d45A4f59a43DBfFe204D</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyAXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x3a52b21816168dfe35bE99b7C5fc209f17a0aDb1">0x3a52b21816168dfe35bE99b7C5fc209f17a0aDb1</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyBALPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x71f42cA320b3e9A8e4816e26De70c9b69eAf9d24">0x71f42cA320b3e9A8e4816e26De70c9b69eAf9d24</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyBCHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x96690aAe7CB7c4A9b5Be5695E94d72827DeCC33f">0x96690aAe7CB7c4A9b5Be5695E94d72827DeCC33f</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyBLURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xa1Ace9ce6862e865937939005b1a6c5aC938A11F">0xa1Ace9ce6862e865937939005b1a6c5aC938A11F</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyBNBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x0940B0A96C5e1ba33AEE331a9f950Bb2a6F2Fb25">0x0940B0A96C5e1ba33AEE331a9f950Bb2a6F2Fb25</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x59b007E9ea8F89b069c43F8f45834d30853e3699">0x59b007E9ea8F89b069c43F8f45834d30853e3699</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyCELOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2292865b2b6C837B7406E819200CE61c1c4F8d43">0x2292865b2b6C837B7406E819200CE61c1c4F8d43</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyCOMPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xb7059Ed9950f2D9fDc0155fC0D79e63d4441e806">0xb7059Ed9950f2D9fDc0155fC0D79e63d4441e806</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyCRVPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xD5fBf7136B86021eF9d0BE5d798f948DcE9C0deA">0xD5fBf7136B86021eF9d0BE5d798f948DcE9C0deA</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyDOGEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x98cCbC721cc05E28a125943D69039B39BE6A21e9">0x98cCbC721cc05E28a125943D69039B39BE6A21e9</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyDOTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x8B9B5f94aac2316f048025B3cBe442386E85984b">0x8B9B5f94aac2316f048025B3cBe442386E85984b</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyDYDXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x139F94E4f0e1101c1464a321CBA815c34d58B5D9">0x139F94E4f0e1101c1464a321CBA815c34d58B5D9</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyENJPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x88C8316E5CCCCE2E27e5BFcDAC99f1251246196a">0x88C8316E5CCCCE2E27e5BFcDAC99f1251246196a</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyEOSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x50a40d947726ac1373DC438e7aaDEde9b237564d">0x50a40d947726ac1373DC438e7aaDEde9b237564d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyETCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4bF3C1Af0FaA689e3A808e6Ad7a8d89d07BB9EC7">0x4bF3C1Af0FaA689e3A808e6Ad7a8d89d07BB9EC7</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyETHBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xD5FcCd43205CEF11FbaF9b38dF15ADbe1B186869">0xD5FcCd43205CEF11FbaF9b38dF15ADbe1B186869</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2B3bb4c683BFc5239B029131EEf3B1d214478d93">0x2B3bb4c683BFc5239B029131EEf3B1d214478d93</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyEURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x87AE62c5720DAB812BDacba66cc24839440048d1">0x87AE62c5720DAB812BDacba66cc24839440048d1</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyFILPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2C5E2148bF3409659967FE3684fd999A76171235">0x2C5E2148bF3409659967FE3684fd999A76171235</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyFLOKIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x5ed8D0946b59d015f5A60039922b870537d43689">0x5ed8D0946b59d015f5A60039922b870537d43689</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyFLOWPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x27665271210aCff4Fab08AD9Bb657E91866471F0">0x27665271210aCff4Fab08AD9Bb657E91866471F0</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyFTMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xC18f85A6DD3Bcd0516a1CA08d3B1f0A4E191A2C4">0xC18f85A6DD3Bcd0516a1CA08d3B1f0A4E191A2C4</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyFXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2fD9a39ACF071Aa61f92F3D7A98332c68d6B6602">0x2fD9a39ACF071Aa61f92F3D7A98332c68d6B6602</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyGBPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x1dAd8808D8aC58a0df912aDC4b215ca3B93D6C49">0x1dAd8808D8aC58a0df912aDC4b215ca3B93D6C49</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyGMXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x33d4613639603c845e61A02cd3D2A78BE7d513dc">0x33d4613639603c845e61A02cd3D2A78BE7d513dc</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyICPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x105f7F2986A2414B4007958b836904100a53d1AD">0x105f7F2986A2414B4007958b836904100a53d1AD</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyINJPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x852210F0616aC226A486ad3387DBF990e690116A">0x852210F0616aC226A486ad3387DBF990e690116A</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyKNCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x152Da6a8F32F25B56A32ef5559d4A2A96D09148b">0x152Da6a8F32F25B56A32ef5559d4A2A96D09148b</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyLDOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xaa94C874b91ef16C8B56A1c5B2F34E39366bD484">0xaa94C874b91ef16C8B56A1c5B2F34E39366bD484</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyLINKPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x31A1659Ca00F617E86Dc765B6494Afe70a5A9c1A">0x31A1659Ca00F617E86Dc765B6494Afe70a5A9c1A</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyLTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xB25529266D9677E9171BEaf333a0deA506c5F99A">0xB25529266D9677E9171BEaf333a0deA506c5F99A</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyMATICPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x074B8F19fc91d6B2eb51143E1f186Ca0DDB88042">0x074B8F19fc91d6B2eb51143E1f186Ca0DDB88042</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyMAVPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x572F816F21F56D47e4c4fA577837bd3f58088676">0x572F816F21F56D47e4c4fA577837bd3f58088676</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyMKRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xf7d9Bd13F877171f6C7f93F71bdf8e380335dc12">0xf7d9Bd13F877171f6C7f93F71bdf8e380335dc12</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyNEARPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xC8fCd6fB4D15dD7C455373297dEF375a08942eCe">0xC8fCd6fB4D15dD7C455373297dEF375a08942eCe</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyONEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x86BbB4E38Ffa64F263E84A0820138c5d938BA86E">0x86BbB4E38Ffa64F263E84A0820138c5d938BA86E</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyOPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x442b69937a0daf9D46439a71567fABE6Cb69FBaf">0x442b69937a0daf9D46439a71567fABE6Cb69FBaf</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyPEPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x3D3f34416f60f77A0a6cC8e32abe45D32A7497cb">0x3D3f34416f60f77A0a6cC8e32abe45D32A7497cb</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyPERPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xaF2E4c337B038eaFA1dE23b44C163D0008e49EaD">0xaF2E4c337B038eaFA1dE23b44C163D0008e49EaD</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyRNDRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x91cc4a83d026e5171525aFCAEd020123A653c2C9">0x91cc4a83d026e5171525aFCAEd020123A653c2C9</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyRPLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xfAD0835dAD2985b25ddab17eace356237589E5C7">0xfAD0835dAD2985b25ddab17eace356237589E5C7</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyRUNEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xEAf0191bCa9DD417202cEf2B18B7515ABff1E196">0xEAf0191bCa9DD417202cEf2B18B7515ABff1E196</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxySEIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x66fc48720f09Ac386608FB65ede53Bb220D0D5Bc">0x66fc48720f09Ac386608FB65ede53Bb220D0D5Bc</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxySHIBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x69F5F465a46f324Fb7bf3fD7c0D5c00f7165C7Ea">0x69F5F465a46f324Fb7bf3fD7c0D5c00f7165C7Ea</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxySOLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x0EA09D97b4084d859328ec4bF8eBCF9ecCA26F1D">0x0EA09D97b4084d859328ec4bF8eBCF9ecCA26F1D</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxySTETHETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x08388dC122A956887c2F736Aaec4A0Ce6f0536Ce">0x08388dC122A956887c2F736Aaec4A0Ce6f0536Ce</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxySTETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xD91Db82733987513286B81e7115091d96730b62A">0xD91Db82733987513286B81e7115091d96730b62A</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxySUIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x09F9d7aaa6Bef9598c3b676c0E19C9786Aa566a8">0x09F9d7aaa6Bef9598c3b676c0E19C9786Aa566a8</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxySUSHIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xdcCDa0cFBEE25B33Ff4Ccca64467E89512511bf6">0xdcCDa0cFBEE25B33Ff4Ccca64467E89512511bf6</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyTRXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x031A448F59111000b96F016c37e9c71e57845096">0x031A448F59111000b96F016c37e9c71e57845096</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyUMAPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xb815Eb8D3a9dA3EdDD926225c0FBD3A566e8C749">0xb815Eb8D3a9dA3EdDD926225c0FBD3A566e8C749</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyUNIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4308427C463CAEAaB50FFf98a9deC569C31E4E87">0x4308427C463CAEAaB50FFf98a9deC569C31E4E87</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyUSDTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x1681212A0Edaf314496B489AB57cB3a5aD7a833f">0x1681212A0Edaf314496B489AB57cB3a5aD7a833f</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyWLDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x77DA808032dCdd48077FA7c57afbF088713E09aD">0x77DA808032dCdd48077FA7c57afbF088713E09aD</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyXAGPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xdcB8438c979fA030581314e5A5Df42bbFEd744a0">0xdcB8438c979fA030581314e5A5Df42bbFEd744a0</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyXAUPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x549dbDFfbd47bD5639f9348eBE82E63e2f9F777A">0x549dbDFfbd47bD5639f9348eBE82E63e2f9F777A</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyXLMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xfbbBFA96Af2980aE4014d5D5A2eF14bD79B2a299">0xfbbBFA96Af2980aE4014d5D5A2eF14bD79B2a299</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyXMRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2ea06E73083f1b3314Fa090eaE4a5F70eb058F2e">0x2ea06E73083f1b3314Fa090eaE4a5F70eb058F2e</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyXRPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6110DF298B411a46d6edce72f5CAca9Ad826C1De">0x6110DF298B411a46d6edce72f5CAca9Ad826C1De</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyXTZPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xC645A757DD81C69641e010aDD2Da894b4b7Bc921">0xC645A757DD81C69641e010aDD2Da894b4b7Bc921</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyYFIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6940e7C6125a177b052C662189bb27692E88E9Cb">0x6940e7C6125a177b052C662189bb27692E88E9Cb</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyZECPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xf8aB6B9008f2290965426d3076bC9d2EA835575e">0xf8aB6B9008f2290965426d3076bC9d2EA835575e</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyZILPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x01a43786C2279dC417e7901d45B917afa51ceb9a">0x01a43786C2279dC417e7901d45B917afa51ceb9a</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyZRXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x76BB1Edf0C55eC68f4C8C7fb3C076b811b1a9b9f">0x76BB1Edf0C55eC68f4C8C7fb3C076b811b1a9b9f</a>
                </td>
              </tr>
              <tr>
                <td>ProxyERC20</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4">0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4</a>
                </td>
              </tr>
              <tr>
                <td>ProxyERC20sUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9">0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9</a>
                </td>
              </tr>
              <tr>
                <td>ProxyFeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x4a16A42407AA491564643E1dfc1fd50af29794eF">0x4a16A42407AA491564643E1dfc1fd50af29794eF</a>
                </td>
              </tr>
              <tr>
                <td><span style="color: #AAA; text-decoration: line-through">ProxySynthetix</span><sup>Use ProxyERC20</sup></td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4">0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4</a>
                </td>
              </tr>
              <tr>
                <td>ProxysAAVE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x00B8D5a5e1Ac97Cb4341c4Bc4367443c8776e8d9">0x00B8D5a5e1Ac97Cb4341c4Bc4367443c8776e8d9</a>
                </td>
              </tr>
              <tr>
                <td>ProxysAVAX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xB2b42B231C68cbb0b4bF2FFEbf57782Fd97D3dA4">0xB2b42B231C68cbb0b4bF2FFEbf57782Fd97D3dA4</a>
                </td>
              </tr>
              <tr>
                <td>ProxysBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x298B9B95708152ff6968aafd889c6586e9169f1D">0x298B9B95708152ff6968aafd889c6586e9169f1D</a>
                </td>
              </tr>
              <tr>
                <td>ProxysETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xE405de8F52ba7559f9df3C368500B6E6ae6Cee49">0xE405de8F52ba7559f9df3C368500B6E6ae6Cee49</a>
                </td>
              </tr>
              <tr>
                <td>ProxysEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xFBc4198702E81aE77c06D58f81b629BDf36f0a71">0xFBc4198702E81aE77c06D58f81b629BDf36f0a71</a>
                </td>
              </tr>
              <tr>
                <td>ProxysINR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xa3A538EA5D5838dC32dde15946ccD74bDd5652fF">0xa3A538EA5D5838dC32dde15946ccD74bDd5652fF</a>
                </td>
              </tr>
              <tr>
                <td>ProxysLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xc5Db22719A06418028A40A9B5E9A7c02959D0d08">0xc5Db22719A06418028A40A9B5E9A7c02959D0d08</a>
                </td>
              </tr>
              <tr>
                <td>ProxysMATIC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x81DDfAc111913d3d5218DEA999216323B7CD6356">0x81DDfAc111913d3d5218DEA999216323B7CD6356</a>
                </td>
              </tr>
              <tr>
                <td>ProxysSOL</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x8b2F7Ae8cA8EE8428B6D76dE88326bB413db2766">0x8b2F7Ae8cA8EE8428B6D76dE88326bB413db2766</a>
                </td>
              </tr>
              <tr>
                <td>ProxysUNI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xf5a6115Aa582Fd1BEEa22BC93B7dC7a785F60d03">0xf5a6115Aa582Fd1BEEa22BC93B7dC7a785F60d03</a>
                </td>
              </tr>
              <tr>
                <td><span style="color: #AAA; text-decoration: line-through">ProxysUSD</span><sup>Use ProxyERC20sUSD</sup></td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9">0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9</a>
                </td>
              </tr>
              <tr>
                <td>ReadProxyAddressResolver</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ReadProxy.sol">ReadProxy.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x1Cb059b7e74fD21665968C908806143E744D5F30">0x1Cb059b7e74fD21665968C908806143E744D5F30</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrowV2</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ImportableRewardEscrowV2.sol">ImportableRewardEscrowV2.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6330D5F08f51057F36F46d6751eCDc0c65Ef7E9e">0x6330D5F08f51057F36F46d6751eCDc0c65Ef7E9e</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrowV2Storage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/RewardEscrowV2Storage.sol">RewardEscrowV2Storage.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x0c2ED9B23BAF9C5f486e175D406728d3bE46d2A6">0x0c2ED9B23BAF9C5f486e175D406728d3bE46d2A6</a>
                </td>
              </tr>
              <tr>
                <td>RewardsDistribution</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/RewardsDistribution.sol">RewardsDistribution.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x5d9187630E99dBce4BcAB8733B76757f7F44aA2e">0x5d9187630E99dBce4BcAB8733B76757f7F44aA2e</a>
                </td>
              </tr>
              <tr>
                <td>SafeDecimalMath</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SafeDecimalMath.sol">SafeDecimalMath.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x0142F40c25CE1F1177Ed131101FA19217396cB88">0x0142F40c25CE1F1177Ed131101FA19217396cB88</a>
                </td>
              </tr>
              <tr>
                <td>SignedSafeDecimalMath</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SignedSafeDecimalMath.sol">SignedSafeDecimalMath.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x253914cf059f4c3E277c28060C404acFc38FB6e2">0x253914cf059f4c3E277c28060C404acFc38FB6e2</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardsSNXWETHUniswapV3</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xfD49C7EE330fE060ca66feE33d49206eB96F146D">0xfD49C7EE330fE060ca66feE33d49206eB96F146D</a>
                </td>
              </tr>
              <tr>
                <td>StakingRewardssUSDDAIUniswapV3</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/StakingRewards.sol">StakingRewards.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x7E11c004d20b502729918687E6E6777b28499085">0x7E11c004d20b502729918687E6E6777b28499085</a>
                </td>
              </tr>
              <tr>
                <td>SynthRedeemer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SynthRedeemer.sol">SynthRedeemer.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xA997BD647AEe62Ef03b41e6fBFAdaB43d8E57535">0xA997BD647AEe62Ef03b41e6fBFAdaB43d8E57535</a>
                </td>
              </tr>
              <tr>
                <td>SynthUtil</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SynthUtil.sol">SynthUtil.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x87b1481c82913301Fc6c884Ac266a7c430F92cFA">0x87b1481c82913301Fc6c884Ac266a7c430F92cFA</a>
                </td>
              </tr>
              <tr>
                <td>Synthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MintableSynthetix.sol">MintableSynthetix.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xfF5c26abD36078C768C40847672202eC343AC5ad">0xfF5c26abD36078C768C40847672202eC343AC5ad</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixBridgeToBase</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SynthetixBridgeToBase.sol">SynthetixBridgeToBase.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x136b1EC699c62b0606854056f02dC7Bb80482d63">0x136b1EC699c62b0606854056f02dC7Bb80482d63</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixDebtShare</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SynthetixDebtShare.sol">SynthetixDebtShare.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x45c55BF488D3Cb8640f12F63CbeDC027E8261E79">0x45c55BF488D3Cb8640f12F63CbeDC027E8261E79</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SynthetixEscrow.sol">SynthetixEscrow.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x06C6D063896ac733673c4474E44d9268f2402A55">0x06C6D063896ac733673c4474E44d9268f2402A55</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SynthetixStateWithLimitedSetup.sol">SynthetixStateWithLimitedSetup.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x9770239D49Db97E77fc5Adcb5413654C9e45A510">0x9770239D49Db97E77fc5Adcb5413654C9e45A510</a>
                </td>
              </tr>
              <tr>
                <td>SynthsAAVE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x34783A738DdC355cD7c737D4101b20622681332a">0x34783A738DdC355cD7c737D4101b20622681332a</a>
                </td>
              </tr>
              <tr>
                <td>SynthsAVAX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x368A5126fF8e659004b6f9C9F723E15632e2B428">0x368A5126fF8e659004b6f9C9F723E15632e2B428</a>
                </td>
              </tr>
              <tr>
                <td>SynthsBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x421DEF861D623F7123dfE0878D86E9576cbb3975">0x421DEF861D623F7123dfE0878D86E9576cbb3975</a>
                </td>
              </tr>
              <tr>
                <td>SynthsETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xe9dceA0136FEFC76c4E639Ec60CCE70482E2aCF7">0xe9dceA0136FEFC76c4E639Ec60CCE70482E2aCF7</a>
                </td>
              </tr>
              <tr>
                <td>SynthsEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xdEdb0b04AFF1525bb4B6167F00e61601690c1fF2">0xdEdb0b04AFF1525bb4B6167F00e61601690c1fF2</a>
                </td>
              </tr>
              <tr>
                <td>SynthsINR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x34c2360ffe5D21542f76e991FFD104f281D4B3fb">0x34c2360ffe5D21542f76e991FFD104f281D4B3fb</a>
                </td>
              </tr>
              <tr>
                <td>SynthsLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x0F6877e0Bb54a0739C6173A814B39D5127804123">0x0F6877e0Bb54a0739C6173A814B39D5127804123</a>
                </td>
              </tr>
              <tr>
                <td>SynthsMATIC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xf49C194954b6B91855aC06D6C88Be316da60eD96">0xf49C194954b6B91855aC06D6C88Be316da60eD96</a>
                </td>
              </tr>
              <tr>
                <td>SynthsSOL</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x04B50a5992Ea2281E14d43494d656698EA9C24dD">0x04B50a5992Ea2281E14d43494d656698EA9C24dD</a>
                </td>
              </tr>
              <tr>
                <td>SynthsUNI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xcF2E165D2359E3C4dFF1E10eC40dBB5a745223A9">0xcF2E165D2359E3C4dFF1E10eC40dBB5a745223A9</a>
                </td>
              </tr>
              <tr>
                <td>SynthsUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xDfA2d3a0d32F870D87f8A0d7AA6b9CdEB7bc5AdB">0xDfA2d3a0d32F870D87f8A0d7AA6b9CdEB7bc5AdB</a>
                </td>
              </tr>
              <tr>
                <td>SystemSettings</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SystemSettings.sol">SystemSettings.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xE28b785ecc2Cb5FE949f5f31A5aEC3989f764838">0xE28b785ecc2Cb5FE949f5f31A5aEC3989f764838</a>
                </td>
              </tr>
              <tr>
                <td>SystemSettingsLib</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SystemSettingsLib.sol">SystemSettingsLib.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6fEd9c8de9886557AA7F4bF7784Cb579d38F833c">0x6fEd9c8de9886557AA7F4bF7784Cb579d38F833c</a>
                </td>
              </tr>
              <tr>
                <td>SystemStatus</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SystemStatus.sol">SystemStatus.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xE8c41bE1A167314ABAF2423b72Bf8da826943FFD">0xE8c41bE1A167314ABAF2423b72Bf8da826943FFD</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateSynthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xB9c6CA25452E7f6D0D3340CE1e9B573421afc2eE">0xB9c6CA25452E7f6D0D3340CE1e9B573421afc2eE</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesAAVE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xAf918f4a72BC34E59dFaF65866feC87947F1f590">0xAf918f4a72BC34E59dFaF65866feC87947F1f590</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesAVAX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2114d1C571CB541f3416a65f8BccFf9BB9E55Dc5">0x2114d1C571CB541f3416a65f8BccFf9BB9E55Dc5</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xA9E630952522E3F110322711F424528Af894e307">0xA9E630952522E3F110322711F424528Af894e307</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xEc3665F7e696b0Ad0D04Ae5161b18782D48cd1fd">0xEc3665F7e696b0Ad0D04Ae5161b18782D48cd1fd</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x7afF10fc89B162c7aBf77974d190E7959cb456f5">0x7afF10fc89B162c7aBf77974d190E7959cb456f5</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesINR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xfE33ae95A9f0DA8A845aF33516EDc240DCD711d6">0xfE33ae95A9f0DA8A845aF33516EDc240DCD711d6</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x08a008eEA07d3cC7ca1913EEC3468C10F8F79e6A">0x08a008eEA07d3cC7ca1913EEC3468C10F8F79e6A</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesMATIC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x937C9E1d18bEB4F8E1BCB0Dd7a612ca6012517a3">0x937C9E1d18bEB4F8E1BCB0Dd7a612ca6012517a3</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesSOL</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x6825Dd6B5b83FBbFF1049A44dc808A10fe9a6719">0x6825Dd6B5b83FBbFF1049A44dc808A10fe9a6719</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesUNI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0xf32b995Fe4dDf540C848236dB9638d137Aa9b6ff">0xf32b995Fe4dDf540C848236dB9638d137Aa9b6ff</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x92bAc115d89cA17fd02Ed9357CEcA32842ACB4c2">0x92bAc115d89cA17fd02Ed9357CEcA32842ACB4c2</a>
                </td>
              </tr>
              <tr>
                <td>TradingRewards</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TradingRewards.sol">TradingRewards.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x2DcAD1A019fba8301b77810Ae14007cc88ED004B">0x2DcAD1A019fba8301b77810Ae14007cc88ED004B</a>
                </td>
              </tr>
              <tr>
                <td>WrapperFactory</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/WrapperFactory.sol">WrapperFactory.sol</a></td>
                <td><a target="_blank" href="https://optimistic.etherscan.io/address/0x27be2EFAd45DeBd732C1EBf5C9F7b49D498D4a93">0x27be2EFAd45DeBd732C1EBf5C9F7b49D498D4a93</a>
                </td>
              </tr></table>

## GOERLI

<table><tr><th>Name</th><th>Source</th><th>Address</th></tr>
              <tr>
                <td>AddressResolver</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/AddressResolver.sol">AddressResolver.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x0C80ff30d1e09135ec60cfe52B2c2EaE1B2f42AB">0x0C80ff30d1e09135ec60cfe52B2c2EaE1B2f42AB</a>
                </td>
              </tr>
              <tr>
                <td>CircuitBreaker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/CircuitBreaker.sol">CircuitBreaker.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x183B4A053CbA70a420E581918008Ef8e65d95E05">0x183B4A053CbA70a420E581918008Ef8e65d95E05</a>
                </td>
              </tr>
              <tr>
                <td>CollateralErc20</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/CollateralErc20.sol">CollateralErc20.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x0376Bdaf9C97E2e454C83e728154eC621df23958">0x0376Bdaf9C97E2e454C83e728154eC621df23958</a>
                </td>
              </tr>
              <tr>
                <td>CollateralEth</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/CollateralEth.sol">CollateralEth.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x7D2bEB18a21468808E16fD1fbe9637eFa98D0777">0x7D2bEB18a21468808E16fD1fbe9637eFa98D0777</a>
                </td>
              </tr>
              <tr>
                <td>CollateralManager</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/CollateralManager.sol">CollateralManager.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x86bfC5Be44f5DE1673824c0d0d1CCEA1306cD40e">0x86bfC5Be44f5DE1673824c0d0d1CCEA1306cD40e</a>
                </td>
              </tr>
              <tr>
                <td>CollateralManagerState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/CollateralManagerState.sol">CollateralManagerState.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x66f040F0ba81eEe22EcAa8a20219E226be7cCBE3">0x66f040F0ba81eEe22EcAa8a20219E226be7cCBE3</a>
                </td>
              </tr>
              <tr>
                <td>CollateralShort</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/CollateralShort.sol">CollateralShort.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x6d20C286D94a603A1cdE80D1f8e5f44Bc22550C0">0x6d20C286D94a603A1cdE80D1f8e5f44Bc22550C0</a>
                </td>
              </tr>
              <tr>
                <td>CollateralUtil</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/CollateralUtil.sol">CollateralUtil.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x814AAB41E07D2c3fA53C0c6f3002cD654a4489EE">0x814AAB41E07D2c3fA53C0c6f3002cD654a4489EE</a>
                </td>
              </tr>
              <tr>
                <td>DappMaintenance</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/DappMaintenance.sol">DappMaintenance.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xBDe6A172C2a4475C74DA4eAC3950ef2FDAc626Dc">0xBDe6A172C2a4475C74DA4eAC3950ef2FDAc626Dc</a>
                </td>
              </tr>
              <tr>
                <td>DebtCache</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/DebtCache.sol">DebtCache.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xc30BECA82f1f60DC0e4d3490428525985eef4D74">0xc30BECA82f1f60DC0e4d3490428525985eef4D74</a>
                </td>
              </tr>
              <tr>
                <td>DebtMigratorOnEthereum</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/DebtMigratorOnEthereum.sol">DebtMigratorOnEthereum.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x7918C32F223A56c62719Fae762eac615DB2Fc0e6">0x7918C32F223A56c62719Fae762eac615DB2Fc0e6</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovals</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/DelegateApprovals.sol">DelegateApprovals.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xf053f15a780C40A4aBa0E50EB09e3C2dc0Ed4Fae">0xf053f15a780C40A4aBa0E50EB09e3C2dc0Ed4Fae</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovalsEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/EternalStorage.sol">EternalStorage.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xbEFd5Fbea0665E94F025d6eC0BdDd6694ce947F4">0xbEFd5Fbea0665E94F025d6eC0BdDd6694ce947F4</a>
                </td>
              </tr>
              <tr>
                <td>Depot</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/Depot.sol">Depot.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x9B79D6dFe4650d70f35dbb80f7d1EC0Cf7f823Fd">0x9B79D6dFe4650d70f35dbb80f7d1EC0Cf7f823Fd</a>
                </td>
              </tr>
              <tr>
                <td>DirectIntegrationManager</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/DirectIntegrationManager.sol">DirectIntegrationManager.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x79654872398a5C667455058890B29B081Ed47939">0x79654872398a5C667455058890B29B081Ed47939</a>
                </td>
              </tr>
              <tr>
                <td>EscrowChecker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/EscrowChecker.sol">EscrowChecker.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x2743DB52d841Ea617B0528aB0AfeF58d355f0621">0x2743DB52d841Ea617B0528aB0AfeF58d355f0621</a>
                </td>
              </tr>
              <tr>
                <td>EtherWrapper</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/EtherWrapper.sol">EtherWrapper.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x4556b9761b2aC071D1665FAe01faA255a53d1307">0x4556b9761b2aC071D1665FAe01faA255a53d1307</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeCircuitBreaker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ExchangeCircuitBreaker.sol">ExchangeCircuitBreaker.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xf1D0Ee19af243bcbC140A2259290B490E4df92A9">0xf1D0Ee19af243bcbC140A2259290B490E4df92A9</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeRates</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ExchangeRatesWithDexPricing.sol">ExchangeRatesWithDexPricing.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xC6fEa2a12a8a9e11232b18DC4d9D525F02180247">0xC6fEa2a12a8a9e11232b18DC4d9D525F02180247</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeSettlementLib</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ExchangeSettlementLib.sol">ExchangeSettlementLib.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xA4D8e25579Fc765fF1963dD37132061599C61689">0xA4D8e25579Fc765fF1963dD37132061599C61689</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ExchangeState.sol">ExchangeState.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x4023B3Bf1749725584B0a467406C5bb24DA3AC4e">0x4023B3Bf1749725584B0a467406C5bb24DA3AC4e</a>
                </td>
              </tr>
              <tr>
                <td>Exchanger</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ExchangerWithFeeRecAlternatives.sol">ExchangerWithFeeRecAlternatives.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x6Ce575c870ce744e245Ef8400b6d89412C35c328">0x6Ce575c870ce744e245Ef8400b6d89412C35c328</a>
                </td>
              </tr>
              <tr>
                <td>FeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FeePool.sol">FeePool.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x73d7fC96547eECCb3121dA7c0661554BE3e49236">0x73d7fC96547eECCb3121dA7c0661554BE3e49236</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FeePoolEternalStorage.sol">FeePoolEternalStorage.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x5cB8210159f486dFE8Dc779357ee5A15B8f233bC">0x5cB8210159f486dFE8Dc779357ee5A15B8f233bC</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FeePoolState.sol">FeePoolState.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x7F4a3D2d0e45ECD301Be8a181c3911677c353C85">0x7F4a3D2d0e45ECD301Be8a181c3911677c353C85</a>
                </td>
              </tr>
              <tr>
                <td>FlexibleStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FlexibleStorage.sol">FlexibleStorage.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x485f9215839a122A3EF7c412B25931C6FeC02A45">0x485f9215839a122A3EF7c412B25931C6FeC02A45</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketManager</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/EmptyFuturesMarketManager.sol">EmptyFuturesMarketManager.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x203d79e75532Da8701ffb43cec3a40828Ebfc4a9">0x203d79e75532Da8701ffb43cec3a40828Ebfc4a9</a>
                </td>
              </tr>
              <tr>
                <td>Issuer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/Issuer.sol">Issuer.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x903c9FA8767F459e077062219E368D992F388d2d">0x903c9FA8767F459e077062219E368D992F388d2d</a>
                </td>
              </tr>
              <tr>
                <td>Liquidator</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/Liquidator.sol">Liquidator.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xc656c18721594f9E98B0C805AB9c21Bda5B44f4C">0xc656c18721594f9E98B0C805AB9c21Bda5B44f4C</a>
                </td>
              </tr>
              <tr>
                <td>LiquidatorRewards</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/LiquidatorRewards.sol">LiquidatorRewards.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x601A1Cf1a34d9cF0020dCCD361c155Fe54CE24fB">0x601A1Cf1a34d9cF0020dCCD361c155Fe54CE24fB</a>
                </td>
              </tr>
              <tr>
                <td>Math</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/Math.sol">Math.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xee5cFeEA2caC5F3A13DB1193c211C7bfA5c03dF0">0xee5cFeEA2caC5F3A13DB1193c211C7bfA5c03dF0</a>
                </td>
              </tr>
              <tr>
                <td>NativeEtherWrapper</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/NativeEtherWrapper.sol">NativeEtherWrapper.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x3b820F825088DB6cD6E118C0c9B39755859932a9">0x3b820F825088DB6cD6E118C0c9B39755859932a9</a>
                </td>
              </tr>
              <tr>
                <td>OneNetAggregatorDebtRatio</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/OneNetAggregatorDebtRatio.sol">OneNetAggregatorDebtRatio.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x409b427d6c8227eeCb4079EF74A6F9224297E19E">0x409b427d6c8227eeCb4079EF74A6F9224297E19E</a>
                </td>
              </tr>
              <tr>
                <td>OneNetAggregatorIssuedSynths</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/OneNetAggregatorIssuedSynths.sol">OneNetAggregatorIssuedSynths.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xBE14c5803Fa245C5e8c70d5050a076Baaa52956c">0xBE14c5803Fa245C5e8c70d5050a076Baaa52956c</a>
                </td>
              </tr>
              <tr>
                <td>OneNetAggregatorsDEFI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/OneNetAggregatorsDEFI.sol">OneNetAggregatorsDEFI.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xA43Ba9F2A27F5Fe86c7A8Fe4A75d42F4d2Cf6358">0xA43Ba9F2A27F5Fe86c7A8Fe4A75d42F4d2Cf6358</a>
                </td>
              </tr>
              <tr>
                <td>OwnerRelayOnEthereum</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/OwnerRelayOnEthereum.sol">OwnerRelayOnEthereum.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xFdB31235cDFe68bfFD1d687AC3A2b31E80eacf0d">0xFdB31235cDFe68bfFD1d687AC3A2b31E80eacf0d</a>
                </td>
              </tr>
              <tr>
                <td>ProxyFeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x4FC6f7C8Ff4f0D535315F1E6e84897c89367b47E">0x4FC6f7C8Ff4f0D535315F1E6e84897c89367b47E</a>
                </td>
              </tr>
              <tr>
                <td><span style="color: #AAA; text-decoration: line-through">ProxySynthetix</span><sup>Use ProxyERC20</sup></td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x51f44ca59b867E005e48FA573Cb8df83FC7f7597">0x51f44ca59b867E005e48FA573Cb8df83FC7f7597</a>
                </td>
              </tr>
              <tr>
                <td>ProxysBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xf04fD9A2C265E7828832E9EFb01474b686CacD14">0xf04fD9A2C265E7828832E9EFb01474b686CacD14</a>
                </td>
              </tr>
              <tr>
                <td>ProxysETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x37216d2366B68Bd8bC64Eb01B83EFA765C21b483">0x37216d2366B68Bd8bC64Eb01B83EFA765C21b483</a>
                </td>
              </tr>
              <tr>
                <td><span style="color: #AAA; text-decoration: line-through">ProxysUSD</span><sup>Use ProxyERC20sUSD</sup></td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xB1f664162c0269A469a699709D37cc5739379dD1">0xB1f664162c0269A469a699709D37cc5739379dD1</a>
                </td>
              </tr>
              <tr>
                <td>ReadProxyAddressResolver</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ReadProxy.sol">ReadProxy.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x58719E8Ef4d201541e44505a2ACB3424481d6681">0x58719E8Ef4d201541e44505a2ACB3424481d6681</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/RewardEscrow.sol">RewardEscrow.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x249BCCbFD33FA6653Db02aE2349444EF25E9B41d">0x249BCCbFD33FA6653Db02aE2349444EF25E9B41d</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrowV2</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/RewardEscrowV2.sol">RewardEscrowV2.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x4300a068B3826aCEFaE7062b411aF467a34Bf3A6">0x4300a068B3826aCEFaE7062b411aF467a34Bf3A6</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrowV2Storage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/RewardEscrowV2Storage.sol">RewardEscrowV2Storage.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xC10cd6Cf0F7D12529433110DaF0fC3Dc14669961">0xC10cd6Cf0F7D12529433110DaF0fC3Dc14669961</a>
                </td>
              </tr>
              <tr>
                <td>RewardsDistribution</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/RewardsDistribution.sol">RewardsDistribution.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x882eaF70e172b8543145811c5fE169d03740ba9a">0x882eaF70e172b8543145811c5fE169d03740ba9a</a>
                </td>
              </tr>
              <tr>
                <td>SafeDecimalMath</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SafeDecimalMath.sol">SafeDecimalMath.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xb6a200136891Be1C881431320E4092953788C7e0">0xb6a200136891Be1C881431320E4092953788C7e0</a>
                </td>
              </tr>
              <tr>
                <td>SignedSafeDecimalMath</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SignedSafeDecimalMath.sol">SignedSafeDecimalMath.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xbFe5dA86981e2dB461bd85D31795aD233748EE32">0xbFe5dA86981e2dB461bd85D31795aD233748EE32</a>
                </td>
              </tr>
              <tr>
                <td>SupplySchedule</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SupplySchedule.sol">SupplySchedule.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x3e5baba6b1467e8c93294F7a4cdA8fDA688E9Bf2">0x3e5baba6b1467e8c93294F7a4cdA8fDA688E9Bf2</a>
                </td>
              </tr>
              <tr>
                <td>SynthRedeemer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SynthRedeemer.sol">SynthRedeemer.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x32A0BAA5Acec418a85Fd032f0292893B8E4f743B">0x32A0BAA5Acec418a85Fd032f0292893B8E4f743B</a>
                </td>
              </tr>
              <tr>
                <td>SynthUtil</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SynthUtil.sol">SynthUtil.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x492395BA6866EF703DA49667fF92Cb8551e7a2D1">0x492395BA6866EF703DA49667fF92Cb8551e7a2D1</a>
                </td>
              </tr>
              <tr>
                <td>Synthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/Synthetix.sol">Synthetix.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x74Cc796Ab9B847574F0d66240810186e4ff0ddA7">0x74Cc796Ab9B847574F0d66240810186e4ff0ddA7</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixBridgeEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SynthetixBridgeEscrow.sol">SynthetixBridgeEscrow.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xD134Db47DDF5A6feB245452af17cCAf92ee53D3c">0xD134Db47DDF5A6feB245452af17cCAf92ee53D3c</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixBridgeToOptimism</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SynthetixBridgeToOptimism.sol">SynthetixBridgeToOptimism.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x1427Bc44755d9Aa317535B1feE38922760Aa4e65">0x1427Bc44755d9Aa317535B1feE38922760Aa4e65</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixDebtShare</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SynthetixDebtShare.sol">SynthetixDebtShare.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x671C874C43B571878D6a90C5AA27288096eEac21">0x671C874C43B571878D6a90C5AA27288096eEac21</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SynthetixEscrow.sol">SynthetixEscrow.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xD1F9481B1df0401FEB40667b10f2D0AAEc81cd34">0xD1F9481B1df0401FEB40667b10f2D0AAEc81cd34</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SynthetixState.sol">SynthetixState.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xcbcFB6E2d8517DB83BedB30f79D5197607207A2c">0xcbcFB6E2d8517DB83BedB30f79D5197607207A2c</a>
                </td>
              </tr>
              <tr>
                <td>SynthsBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xD511a29AFF50503cCaF476EF9ebdd18Cbab1422c">0xD511a29AFF50503cCaF476EF9ebdd18Cbab1422c</a>
                </td>
              </tr>
              <tr>
                <td>SynthsETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xB7774b79f83191eFF5F159889d1e7A5A242e2244">0xB7774b79f83191eFF5F159889d1e7A5A242e2244</a>
                </td>
              </tr>
              <tr>
                <td>SynthsUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x8f01E7815583C5Be70e4608Fde3DdE7DcC29592f">0x8f01E7815583C5Be70e4608Fde3DdE7DcC29592f</a>
                </td>
              </tr>
              <tr>
                <td>SystemSettings</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SystemSettings.sol">SystemSettings.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x063E110E614474Aa1FFB36936aBED4b1d173e5fc">0x063E110E614474Aa1FFB36936aBED4b1d173e5fc</a>
                </td>
              </tr>
              <tr>
                <td>SystemSettingsLib</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SystemSettingsLib.sol">SystemSettingsLib.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x52C339d07e82d49073f6B85AB033599e0eB644f9">0x52C339d07e82d49073f6B85AB033599e0eB644f9</a>
                </td>
              </tr>
              <tr>
                <td>SystemStatus</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SystemStatus.sol">SystemStatus.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x31541f35F6Bd061f4A894fB7eEE565f81EE50df3">0x31541f35F6Bd061f4A894fB7eEE565f81EE50df3</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateSynthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/LegacyTokenState.sol">LegacyTokenState.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xe842C91A5D2BCE122d89497f171d81067255Ad0d">0xe842C91A5D2BCE122d89497f171d81067255Ad0d</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xA8Fd421326586c440b76aC07B6b48fcD11Dc475e">0xA8Fd421326586c440b76aC07B6b48fcD11Dc475e</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x6BB584b67Fc54B4C0449625711A341a767f87B94">0x6BB584b67Fc54B4C0449625711A341a767f87B94</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x5F0CCaBe97bF838c777F08702E17EC300FF78cD0">0x5F0CCaBe97bF838c777F08702E17EC300FF78cD0</a>
                </td>
              </tr>
              <tr>
                <td>TradingRewards</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TradingRewards.sol">TradingRewards.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x6eab29a0904d0fd964AdE1F6c3ab1584E36602aE">0x6eab29a0904d0fd964AdE1F6c3ab1584E36602aE</a>
                </td>
              </tr>
              <tr>
                <td>VirtualSynthMastercopy</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/VirtualSynthMastercopy.sol">VirtualSynthMastercopy.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0x1f6b96d2e7a5D70777D2A9c52215044FB3f40D37">0x1f6b96d2e7a5D70777D2A9c52215044FB3f40D37</a>
                </td>
              </tr>
              <tr>
                <td>WrapperFactory</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/WrapperFactory.sol">WrapperFactory.sol</a></td>
                <td><a target="_blank" href="https://goerli.etherscan.io/address/0xa69768003543eBe5DD91E787278D99FfF9aD6095">0xa69768003543eBe5DD91E787278D99FfF9aD6095</a>
                </td>
              </tr></table>

## GOERLI Optimism (L2)

<table><tr><th>Name</th><th>Source</th><th>Address</th></tr>
              <tr>
                <td>AddressResolver</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/AddressResolver.sol">AddressResolver.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1d551351613a28d676BaC1Af157799e201279198">0x1d551351613a28d676BaC1Af157799e201279198</a>
                </td>
              </tr>
              <tr>
                <td>CircuitBreaker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/CircuitBreaker.sol">CircuitBreaker.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x5cB8210159f486dFE8Dc779357ee5A15B8f233bC">0x5cB8210159f486dFE8Dc779357ee5A15B8f233bC</a>
                </td>
              </tr>
              <tr>
                <td>CollateralEth</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/CollateralEth.sol">CollateralEth.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x35725C94f3B1aB6BbD533c0B6Df525537d422c5F">0x35725C94f3B1aB6BbD533c0B6Df525537d422c5F</a>
                </td>
              </tr>
              <tr>
                <td>CollateralManager</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/CollateralManager.sol">CollateralManager.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0440f82444C825a0842f50e1c25cb68676d736e3">0x0440f82444C825a0842f50e1c25cb68676d736e3</a>
                </td>
              </tr>
              <tr>
                <td>CollateralManagerState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/CollateralManagerState.sol">CollateralManagerState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xA6B255CB2Bd5Ad5f3EaE2D246ec1c2c3F7F79574">0xA6B255CB2Bd5Ad5f3EaE2D246ec1c2c3F7F79574</a>
                </td>
              </tr>
              <tr>
                <td>CollateralShort</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/CollateralShort.sol">CollateralShort.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1a471C12f7efd7adB0065E3c7e457a0c36c13490">0x1a471C12f7efd7adB0065E3c7e457a0c36c13490</a>
                </td>
              </tr>
              <tr>
                <td>CollateralUtil</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/CollateralUtil.sol">CollateralUtil.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x4BbDe1e5f91e6E8928CdCBF800aC990015387EbA">0x4BbDe1e5f91e6E8928CdCBF800aC990015387EbA</a>
                </td>
              </tr>
              <tr>
                <td>DappMaintenance</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/DappMaintenance.sol">DappMaintenance.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x4259a2004A1E110A86564ff1441c37F1461F344F">0x4259a2004A1E110A86564ff1441c37F1461F344F</a>
                </td>
              </tr>
              <tr>
                <td>DebtCache</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/DebtCache.sol">DebtCache.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x216EaF79575563A5e13227ad075850cDeb004083">0x216EaF79575563A5e13227ad075850cDeb004083</a>
                </td>
              </tr>
              <tr>
                <td>DebtMigratorOnOptimism</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/DebtMigratorOnOptimism.sol">DebtMigratorOnOptimism.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3A2F7083C1617e4371bA723Bc27dED8A1Bd6AD90">0x3A2F7083C1617e4371bA723Bc27dED8A1Bd6AD90</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovals</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/DelegateApprovals.sol">DelegateApprovals.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2715DC87A9c9a9A1a02641403205F4F093E1A659">0x2715DC87A9c9a9A1a02641403205F4F093E1A659</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovalsEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/EternalStorage.sol">EternalStorage.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x9800812f1d80bbe763DA97C967e746ca7a2d1Ccd">0x9800812f1d80bbe763DA97C967e746ca7a2d1Ccd</a>
                </td>
              </tr>
              <tr>
                <td>DirectIntegrationManager</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/DirectIntegrationManager.sol">DirectIntegrationManager.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xbDC73F42943bAce3A4eEE280650e80531Cc6a38C">0xbDC73F42943bAce3A4eEE280650e80531Cc6a38C</a>
                </td>
              </tr>
              <tr>
                <td>EscrowChecker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/EscrowChecker.sol">EscrowChecker.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x69927Cda9Df863464afAC7DA506928BF3a3ec11f">0x69927Cda9Df863464afAC7DA506928BF3a3ec11f</a>
                </td>
              </tr>
              <tr>
                <td>EtherWrapper</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/EmptyEtherWrapper.sol">EmptyEtherWrapper.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x858A2FF0EAe5fcb0be10df79B741Cff89B77FeCB">0x858A2FF0EAe5fcb0be10df79B741Cff89B77FeCB</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeCircuitBreaker</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ExchangeCircuitBreaker.sol">ExchangeCircuitBreaker.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xFdb50671276DbC9D24D68b272B54dE4a87aaCc6c">0xFdb50671276DbC9D24D68b272B54dE4a87aaCc6c</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeRates</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ExchangeRates.sol">ExchangeRates.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x061B75475035c20ef2e35E1002Beb90C3c1f24cC">0x061B75475035c20ef2e35E1002Beb90C3c1f24cC</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeSettlementLib</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ExchangeSettlementLib.sol">ExchangeSettlementLib.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xc09f90045F772117634FDF23fFCCd3bEE1abB4AD">0xc09f90045F772117634FDF23fFCCd3bEE1abB4AD</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ExchangeState.sol">ExchangeState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xeD5D12c5A772F32dE608CF84F671C123e132FA80">0xeD5D12c5A772F32dE608CF84F671C123e132FA80</a>
                </td>
              </tr>
              <tr>
                <td>Exchanger</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/Exchanger.sol">Exchanger.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x164724726608622b6e5Fa1aF8932b45A7Bd1a94D">0x164724726608622b6e5Fa1aF8932b45A7Bd1a94D</a>
                </td>
              </tr>
              <tr>
                <td>FeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FeePool.sol">FeePool.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x41B88d77A1C0Ea3cdcf44D69365399F4dCBab5B0">0x41B88d77A1C0Ea3cdcf44D69365399F4dCBab5B0</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolEternalStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FeePoolEternalStorage.sol">FeePoolEternalStorage.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xd01075abdD086006c85840de62544506d7Ab3C79">0xd01075abdD086006c85840de62544506d7Ab3C79</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolState</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FeePoolState.sol">FeePoolState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0FA904962C4f5427590dD4517697C32363639303">0x0FA904962C4f5427590dD4517697C32363639303</a>
                </td>
              </tr>
              <tr>
                <td>FlexibleStorage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FlexibleStorage.sol">FlexibleStorage.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x88CAf687f3E1cae053BF0CdbB52EFb1c5dcAbD87">0x88CAf687f3E1cae053BF0CdbB52EFb1c5dcAbD87</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketAAVE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1E246e2bc7dc1e2baDa90dC824c71deAaBa65eE2">0x1E246e2bc7dc1e2baDa90dC824c71deAaBa65eE2</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketAPE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xA7C788d7f5B177AfB3c7B3Af815C678F6181a163">0xA7C788d7f5B177AfB3c7B3Af815C678F6181a163</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketAVAX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xc6af1F51b262616BC7DBc3F000Df154709AEe1Bd">0xc6af1F51b262616BC7DBc3F000Df154709AEe1Bd</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketBNB</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3F66f483b8A66EcBbF3385E5Df6C581c2378d8B7">0x3F66f483b8A66EcBbF3385E5Df6C581c2378d8B7</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2f421752B7C07268DEA60A1B39D67927a5abA2F6">0x2f421752B7C07268DEA60A1B39D67927a5abA2F6</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketDOGE</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xc006bd42B2ca95Cd640D314dA3DF4c59436C7739">0xc006bd42B2ca95Cd640D314dA3DF4c59436C7739</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketDYDX</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x122c1a5E0140bA0E3c7a44418bd83E9e5b049295">0x122c1a5E0140bA0E3c7a44418bd83E9e5b049295</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketData</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarketData.sol">FuturesMarketData.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3FAe35Cfea950Fada314589213BABC54A084d5Bf">0x3FAe35Cfea950Fada314589213BABC54A084d5Bf</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0D10c032ad006C98C33A95e59ab3BA2b0849bD59">0x0D10c032ad006C98C33A95e59ab3BA2b0849bD59</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketEUR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xAd4d525C8B6eAE32c3BFE8de5c7f87791690CdB3">0xAd4d525C8B6eAE32c3BFE8de5c7f87791690CdB3</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketLINK</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x071171c2289b2Aef8F83eC50650f8eb91DbE44d2">0x071171c2289b2Aef8F83eC50650f8eb91DbE44d2</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketMATIC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xE89f6f10Dd2e200440198a6b773E16e3c9B1478C">0xE89f6f10Dd2e200440198a6b773E16e3c9B1478C</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketManager</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarketManager.sol">FuturesMarketManager.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x93E42aF866EEEf6C8c6f22B1BcDbf97a00159a2e">0x93E42aF866EEEf6C8c6f22B1BcDbf97a00159a2e</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketSOL</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xc6fD6AD47e393a44283Eb2f7a058807C64853aA1">0xc6fD6AD47e393a44283Eb2f7a058807C64853aA1</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketSettings</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarketSettings.sol">FuturesMarketSettings.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0dde87714C3bdACB93bB1d38605aFff209a85998">0x0dde87714C3bdACB93bB1d38605aFff209a85998</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketUNI</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x44Af736495544a726ED15CB0EBe2d87a6bCC1832">0x44Af736495544a726ED15CB0EBe2d87a6bCC1832</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketXAG</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x89F36593eeD8807C43e81Ce7d633e15365274eeF">0x89F36593eeD8807C43e81Ce7d633e15365274eeF</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketXAU</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2f1e8B79E9032b9f43A40d61fa4F446c3eFCf165">0x2f1e8B79E9032b9f43A40d61fa4F446c3eFCf165</a>
                </td>
              </tr>
              <tr>
                <td>FuturesMarketXMR</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/FuturesMarket.sol">FuturesMarket.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0Ee2c2E01072c5Fa866BB3372Fe81698FB3165bA">0x0Ee2c2E01072c5Fa866BB3372Fe81698FB3165bA</a>
                </td>
              </tr>
              <tr>
                <td>Issuer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/Issuer.sol">Issuer.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xd88Ae718b51713a55BfebF8BB097935eD6fC7f38">0xd88Ae718b51713a55BfebF8BB097935eD6fC7f38</a>
                </td>
              </tr>
              <tr>
                <td>Liquidator</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/Liquidator.sol">Liquidator.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x5e042334B5Bb0434aB2512d16FfcD4Db61F94f18">0x5e042334B5Bb0434aB2512d16FfcD4Db61F94f18</a>
                </td>
              </tr>
              <tr>
                <td>LiquidatorRewards</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/LiquidatorRewards.sol">LiquidatorRewards.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1c6C0a89064206e397E75b11Bcd370E8A8A007B4">0x1c6C0a89064206e397E75b11Bcd370E8A8A007B4</a>
                </td>
              </tr>
              <tr>
                <td>Math</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/Math.sol">Math.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x6fa3D41F37F544c6982693eFEe8B0d4BD88986ed">0x6fa3D41F37F544c6982693eFEe8B0d4BD88986ed</a>
                </td>
              </tr>
              <tr>
                <td>OneNetAggregatorDebtRatio</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/OneNetAggregatorDebtRatio.sol">OneNetAggregatorDebtRatio.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x88e566CF9E29e08AfFB23abe3E9065bD88ACB152">0x88e566CF9E29e08AfFB23abe3E9065bD88ACB152</a>
                </td>
              </tr>
              <tr>
                <td>OneNetAggregatorIssuedSynths</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/OneNetAggregatorIssuedSynths.sol">OneNetAggregatorIssuedSynths.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x904c9424484ba6D5C47d979d8e9Fc5261747D681">0x904c9424484ba6D5C47d979d8e9Fc5261747D681</a>
                </td>
              </tr>
              <tr>
                <td>OwnerRelayOnOptimism</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/OwnerRelayOnOptimism.sol">OwnerRelayOnOptimism.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x55C20ea46766E3E50D4eD1973A88550B2949825c">0x55C20ea46766E3E50D4eD1973A88550B2949825c</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecution1INCHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xeAA2baAd916BDF08716c390Fd0CB03e08c8798c9">0xeAA2baAd916BDF08716c390Fd0CB03e08c8798c9</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionAAVEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x071df6D0105a51EB7EfD32320BC966978C6F8332">0x071df6D0105a51EB7EfD32320BC966978C6F8332</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionADAPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x6B9Fd085aDd231286f00877a13A55D40088Ee16A">0x6B9Fd085aDd231286f00877a13A55D40088Ee16A</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionALGOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x71cf06D18286086f858d27Cd5c790b1D1e7867fb">0x71cf06D18286086f858d27Cd5c790b1D1e7867fb</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionAPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x99D6201a4A9367E0334455734675370A561Ae049">0x99D6201a4A9367E0334455734675370A561Ae049</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionAPTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x649755b745C9215d823F0aD051301945C817A02b">0x649755b745C9215d823F0aD051301945C817A02b</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionARBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xC98788bd48A371637Dc849B266769E87CBD8Abd9">0xC98788bd48A371637Dc849B266769E87CBD8Abd9</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionATOMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2E1D548163405ceA2BCFadE833e3f18e2Cc7Dd02">0x2E1D548163405ceA2BCFadE833e3f18e2Cc7Dd02</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionAUDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x8Ad4AC595dEE062aA9Cc0EAbA2427C8B588e048A">0x8Ad4AC595dEE062aA9Cc0EAbA2427C8B588e048A</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionAVAXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xC3cc103f7128d424aAF316465B19d8F4D60d1e75">0xC3cc103f7128d424aAF316465B19d8F4D60d1e75</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionAXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x872D4930213Cf30fe09Df3fB07aa30cF121c3744">0x872D4930213Cf30fe09Df3fB07aa30cF121c3744</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionBALPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xa37cfA9E6d690d3A2B691c3a77bA082644388Ec4">0xa37cfA9E6d690d3A2B691c3a77bA082644388Ec4</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionBCHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xA2aB2beA8484407bB415082DEa112D459471F417">0xA2aB2beA8484407bB415082DEa112D459471F417</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionBLURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x8FD34A6065cEe08C5E037924343829fAb80eAC53">0x8FD34A6065cEe08C5E037924343829fAb80eAC53</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionBNBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x7480F9EB40255A95CE5b57ACC9CA51CD723ba0Bb">0x7480F9EB40255A95CE5b57ACC9CA51CD723ba0Bb</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xAEB7C3F9e9D49b7f23EBCc15cF095bc2b4d8A6C7">0xAEB7C3F9e9D49b7f23EBCc15cF095bc2b4d8A6C7</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionCELOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xA01a3FeeD5dcC2308BebF8a5356d8Be830FbC4Ad">0xA01a3FeeD5dcC2308BebF8a5356d8Be830FbC4Ad</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionCOMPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x6BC62823A1865ec35a32BcBc045369592c9Ef584">0x6BC62823A1865ec35a32BcBc045369592c9Ef584</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionCRVPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xAF2BA81B3725A79925FcAa132ecde40Fba41Aa09">0xAF2BA81B3725A79925FcAa132ecde40Fba41Aa09</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionDOGEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xc80b4aB91e36604324CB3F2395BC52FB64801168">0xc80b4aB91e36604324CB3F2395BC52FB64801168</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionDOTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x5b49dCE1259e543b9bF4187D415b114a4a7B75aC">0x5b49dCE1259e543b9bF4187D415b114a4a7B75aC</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionDYDXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xACc964b0d98F63013E65A45D6E1134861E933362">0xACc964b0d98F63013E65A45D6E1134861E933362</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionENJPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3c83b552a1eED7dA2f665640216F83968b1f3528">0x3c83b552a1eED7dA2f665640216F83968b1f3528</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionEOSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xaBBf8Bf65cD87f5A77Aa6Da17E1f8C0f2047218a">0xaBBf8Bf65cD87f5A77Aa6Da17E1f8C0f2047218a</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionETCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xD0de49B654fB1b658D814B4a4Ec45940D324f910">0xD0de49B654fB1b658D814B4a4Ec45940D324f910</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionETHBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x07E01e6B2daF5a4e4C29B5Db93E313c97dfc3fdD">0x07E01e6B2daF5a4e4C29B5Db93E313c97dfc3fdD</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xc18cfa28b3C8a455DFbdac3A00B47b6e1D19928c">0xc18cfa28b3C8a455DFbdac3A00B47b6e1D19928c</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionEURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x7e550868eBFe5A22c85Df69016Fa96D7Ba3a9611">0x7e550868eBFe5A22c85Df69016Fa96D7Ba3a9611</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionFILPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2C780B9589eBce84936d84fbA6a03E025eC74305">0x2C780B9589eBce84936d84fbA6a03E025eC74305</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionFLOKIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xc329eF16a6c9250732a1609ba11400071b189898">0xc329eF16a6c9250732a1609ba11400071b189898</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionFLOWPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3bb567A5b846915552a7d97701D21C89e60044F2">0x3bb567A5b846915552a7d97701D21C89e60044F2</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionFTMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x19663Ae4b5De903597bbAEB7f0A0cA2eBFAcCba5">0x19663Ae4b5De903597bbAEB7f0A0cA2eBFAcCba5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionFXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xDbF7d5Cb096Ff107bf4F2a32f32bF860aDFEB744">0xDbF7d5Cb096Ff107bf4F2a32f32bF860aDFEB744</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionGBPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x48d01790eA130d0Fc162ca163395e83E06ab4790">0x48d01790eA130d0Fc162ca163395e83E06ab4790</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionGMXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xC248C92B98d1E2c4b5869862A33600477f18e28C">0xC248C92B98d1E2c4b5869862A33600477f18e28C</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionICPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xaE4b0A25aC7AD6b24a50c281f947fa172eF653aA">0xaE4b0A25aC7AD6b24a50c281f947fa172eF653aA</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionINJPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x10c58Ee87Bd091Fd0e28EC60aCD5FA132008E74c">0x10c58Ee87Bd091Fd0e28EC60aCD5FA132008E74c</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionKNCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xa2D90f2bA200CE90D5492Ff862A8406142eBC5Ed">0xa2D90f2bA200CE90D5492Ff862A8406142eBC5Ed</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionLDOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2e942f76516ff18BA4036E2E4516193d11D96F1f">0x2e942f76516ff18BA4036E2E4516193d11D96F1f</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionLINKPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x9D731AdCFed0790875C58544787Ab872bAf6EB61">0x9D731AdCFed0790875C58544787Ab872bAf6EB61</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionLTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x112336bd75230F4A0829Fb63056023866Eb29a9e">0x112336bd75230F4A0829Fb63056023866Eb29a9e</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionMATICPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x33476b5F9d08B72D20e286841533d6fC8d302362">0x33476b5F9d08B72D20e286841533d6fC8d302362</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionMAVPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xd31E717Ff18F8B9DEbCb947F1A6df32c2734112D">0xd31E717Ff18F8B9DEbCb947F1A6df32c2734112D</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionMKRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2e4272cBC45B058ACdd8312a5704E67F36fBBE69">0x2e4272cBC45B058ACdd8312a5704E67F36fBBE69</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionNEARPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x27e14b1d22a1F029e9f765e2aCb9DA026695225f">0x27e14b1d22a1F029e9f765e2aCb9DA026695225f</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionONEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x34784442f9Bbb8D499c0Ab6ecbf5937a880F8Aa0">0x34784442f9Bbb8D499c0Ab6ecbf5937a880F8Aa0</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionOPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x565F22A5A5b06e73F3D0cf6A2fB66E285179F137">0x565F22A5A5b06e73F3D0cf6A2fB66E285179F137</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionPEPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xF47740549b5e1620E07092DFc33F1f48282da1E8">0xF47740549b5e1620E07092DFc33F1f48282da1E8</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionPERPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xB047605EEb66DFC58Ff7c29e2415bBf75E16CaE5">0xB047605EEb66DFC58Ff7c29e2415bBf75E16CaE5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionRNDRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x88CcA71dD12b60a8B35566121e1B7Aa4B475fFc3">0x88CcA71dD12b60a8B35566121e1B7Aa4B475fFc3</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionRPLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x168fF410A82FD5D9BA3f5f0bd34862DC95329096">0x168fF410A82FD5D9BA3f5f0bd34862DC95329096</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionRUNEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xb87266D77d395ff146F68bC41F2Be72a765bF417">0xb87266D77d395ff146F68bC41F2Be72a765bF417</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionSEIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xa5175001f00B720Cf4D317125aab33113AF2A26B">0xa5175001f00B720Cf4D317125aab33113AF2A26B</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionSHIBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3d5bd22383DDD8252F2Fed078990c6b44eFF0A36">0x3d5bd22383DDD8252F2Fed078990c6b44eFF0A36</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionSOLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x421cCF52C938870b0ab52A2b5FB583f1f0DdE8bB">0x421cCF52C938870b0ab52A2b5FB583f1f0DdE8bB</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionSTETHETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x7b54b31AB774f92e1b4366052E75adf3a0c61598">0x7b54b31AB774f92e1b4366052E75adf3a0c61598</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionSTETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x9502CeD8D03497C76db8eeE779aCaD98245aC945">0x9502CeD8D03497C76db8eeE779aCaD98245aC945</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionSUIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xCeeF405038f75e20B76d33d5C783A85572302Da2">0xCeeF405038f75e20B76d33d5C783A85572302Da2</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionSUSHIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xd94FA17aA3907F796D002F265a79D0945afaC283">0xd94FA17aA3907F796D002F265a79D0945afaC283</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionTRXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x696AD452Db38B46F41B2a590292e3B0b11d86145">0x696AD452Db38B46F41B2a590292e3B0b11d86145</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionUMAPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x8c7BE9C2f7BEE5A1603D8F2a82239f4A528990fC">0x8c7BE9C2f7BEE5A1603D8F2a82239f4A528990fC</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionUNIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x9969F565EeE204c051ff7F6648c7A450Ea7f968B">0x9969F565EeE204c051ff7F6648c7A450Ea7f968B</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionUSDTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x54Aeac702208887e87b43B0825354C384850bB80">0x54Aeac702208887e87b43B0825354C384850bB80</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionWLDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xb57909636D3A9589e7Aa425648bfEE183b75faBE">0xb57909636D3A9589e7Aa425648bfEE183b75faBE</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionXAGPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x7437c19Aee69fedD9C035C5d90D74dbC689C1382">0x7437c19Aee69fedD9C035C5d90D74dbC689C1382</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionXAUPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xb7bc7C6c004699d9837B6fDf4fF16c0f8Bc38260">0xb7bc7C6c004699d9837B6fDf4fF16c0f8Bc38260</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionXLMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xD42C5d902e46ca1fbCb605F9508E792c9ef93563">0xD42C5d902e46ca1fbCb605F9508E792c9ef93563</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionXMRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x5AA73c2c4D128729c904F40B6DcFDAEb39daB797">0x5AA73c2c4D128729c904F40B6DcFDAEb39daB797</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionXRPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x87FaA98650051EA845Bb693902CD3bD49b370DbB">0x87FaA98650051EA845Bb693902CD3bD49b370DbB</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionXTZPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x7a1D9619eb0F5ee66329E526E71497D839E074b2">0x7a1D9619eb0F5ee66329E526E71497D839E074b2</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionYFIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x777c231a5eA7A083Ea47e2A39E6cFC3C6c4D9bFF">0x777c231a5eA7A083Ea47e2A39E6cFC3C6c4D9bFF</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionZECPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xbC3E9fE1b8dDFe7ceE9BCd219D48D456AD6AE777">0xbC3E9fE1b8dDFe7ceE9BCd219D48D456AD6AE777</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionZILPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xa80594Ecd9B70867c95053AD51062f7d710c6e19">0xa80594Ecd9B70867c95053AD51062f7d710c6e19</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedExecutionZRXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedExecution.sol">PerpsV2MarketDelayedExecution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xa390843a8d2E94015a1a576C2d139cE0D9BB7052">0xa390843a8d2E94015a1a576C2d139cE0D9BB7052</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntent1INCHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3F77026524B9c097Ead13d35D5705E0179ce2b49">0x3F77026524B9c097Ead13d35D5705E0179ce2b49</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentAAVEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x64f9d426c230a1326A84cd1BcbeB9c8fC1C0A1e6">0x64f9d426c230a1326A84cd1BcbeB9c8fC1C0A1e6</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentADAPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x4930D1D19a93cb72cb0872422a8cfA741b1bA2B9">0x4930D1D19a93cb72cb0872422a8cfA741b1bA2B9</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentALGOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x855f518bcbaE46eC7E6Bacd2bCE388a1c40668c9">0x855f518bcbaE46eC7E6Bacd2bCE388a1c40668c9</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentAPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xe7DDE4CC7998ca59C0B6d9F57e02424C733214B1">0xe7DDE4CC7998ca59C0B6d9F57e02424C733214B1</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentAPTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3bC9efb2e303d2058ca484776189e371d6fBe8D3">0x3bC9efb2e303d2058ca484776189e371d6fBe8D3</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentARBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xBd9409F9670aB76ba986cc3e297a05e91c189860">0xBd9409F9670aB76ba986cc3e297a05e91c189860</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentATOMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xFD4AC80b6BFfCe74D45428d46455E910b69f6B0C">0xFD4AC80b6BFfCe74D45428d46455E910b69f6B0C</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentAUDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x19c4D35bB6cA87833c156B9dC4031bCcaD403C72">0x19c4D35bB6cA87833c156B9dC4031bCcaD403C72</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentAVAXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x6D5EC0aC8A53C7d72356D654DEf244B9874589f7">0x6D5EC0aC8A53C7d72356D654DEf244B9874589f7</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentAXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x073ec65bD58d4B5D629f7bd6B0b0fa17dadC7909">0x073ec65bD58d4B5D629f7bd6B0b0fa17dadC7909</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentBALPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xEba53E02390Cc81b6Ba4C63c925beeb869bECFdE">0xEba53E02390Cc81b6Ba4C63c925beeb869bECFdE</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentBCHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xeF50847B5839536Bb973cEd5489cc8C94DF85B71">0xeF50847B5839536Bb973cEd5489cc8C94DF85B71</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentBLURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xA13a71991C177889619787b912E82aa5f91c5607">0xA13a71991C177889619787b912E82aa5f91c5607</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentBNBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2FD81E4a4EBeA065694a63DB3E6f86717E5496F1">0x2FD81E4a4EBeA065694a63DB3E6f86717E5496F1</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xCfdcb72351331f6D7Dde7D0f52C3AeD522D02fE5">0xCfdcb72351331f6D7Dde7D0f52C3AeD522D02fE5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentCELOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1cB9FeCA0Fca6f34eb3949c6c3A698624B81dd04">0x1cB9FeCA0Fca6f34eb3949c6c3A698624B81dd04</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentCOMPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xD7b63D474d0edb92b9576538Bf0D52e538b3e282">0xD7b63D474d0edb92b9576538Bf0D52e538b3e282</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentCRVPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x64904137c712329920AAc713F340CC9A50c49504">0x64904137c712329920AAc713F340CC9A50c49504</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentDOGEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xD3401B53cCf2fC3e06FA071d3C65E04E5778bf99">0xD3401B53cCf2fC3e06FA071d3C65E04E5778bf99</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentDOTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xFd2E537C8eF334E8D1f532ECBB4871dC085470a2">0xFd2E537C8eF334E8D1f532ECBB4871dC085470a2</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentDYDXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x14d4538996C3512cE0766Af03fA9Ec54844013cC">0x14d4538996C3512cE0766Af03fA9Ec54844013cC</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentENJPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x54bacDF5a4A6CD229ff4a30c497f99c14aCD7093">0x54bacDF5a4A6CD229ff4a30c497f99c14aCD7093</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentEOSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2D959527874e7D1f00F3ffA032EDAC3344a0d035">0x2D959527874e7D1f00F3ffA032EDAC3344a0d035</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentETCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xA1429bD5CEF95C1cb02C08461d577Ac981411fEB">0xA1429bD5CEF95C1cb02C08461d577Ac981411fEB</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentETHBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xc7F71e863A3973a90bf902dF1cfA13187BA14CB6">0xc7F71e863A3973a90bf902dF1cfA13187BA14CB6</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x59CBc126375B0723672af799cDFf0Cfc2B0dE704">0x59CBc126375B0723672af799cDFf0Cfc2B0dE704</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentEURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x111B92229845Fee2CC035fD0AfCb4889C93155F2">0x111B92229845Fee2CC035fD0AfCb4889C93155F2</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentFILPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x347E852dD8CfAFC1Ee843D7bbDD6a22E0f4EBF24">0x347E852dD8CfAFC1Ee843D7bbDD6a22E0f4EBF24</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentFLOKIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x7AbD8a89B841BBE668F4826Dbd4EE7520406794c">0x7AbD8a89B841BBE668F4826Dbd4EE7520406794c</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentFLOWPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x9b9A7a55d177Dcc5A19add3bA9E6D331353d8470">0x9b9A7a55d177Dcc5A19add3bA9E6D331353d8470</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentFTMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1377066b856f16AC7141a8eC3a7D7Ad9305277bD">0x1377066b856f16AC7141a8eC3a7D7Ad9305277bD</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentFXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xf4253c7AB984fB68300f2785a4eD9D1381222DF3">0xf4253c7AB984fB68300f2785a4eD9D1381222DF3</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentGBPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xF52e4ac80443DDE8F45119561FD83f0200dd5293">0xF52e4ac80443DDE8F45119561FD83f0200dd5293</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentGMXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x8F1885508D179B09Aa618b9d40eD6592946EcBE0">0x8F1885508D179B09Aa618b9d40eD6592946EcBE0</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentICPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x32c0E52Df110847D1fC476bc7991742fBf6DCf25">0x32c0E52Df110847D1fC476bc7991742fBf6DCf25</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentINJPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x9Ee97FdF31bCDf9Aa16197dE3E397927bD47150b">0x9Ee97FdF31bCDf9Aa16197dE3E397927bD47150b</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentKNCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xC75a6672eBd5a368f99b1D5b8730B35Fb82F4292">0xC75a6672eBd5a368f99b1D5b8730B35Fb82F4292</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentLDOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1dcEd67Ff3546140af040F146b518345a6573f03">0x1dcEd67Ff3546140af040F146b518345a6573f03</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentLINKPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x4CdDA2b812Fc4dd5aB00fA8B118604ba275f34eB">0x4CdDA2b812Fc4dd5aB00fA8B118604ba275f34eB</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentLTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xC82e3cB0cea338543A655E2857c46A3B9444cF89">0xC82e3cB0cea338543A655E2857c46A3B9444cF89</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentMATICPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1bD9ceA04EC7F47c2D58aD6B8543bF07F6C35233">0x1bD9ceA04EC7F47c2D58aD6B8543bF07F6C35233</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentMAVPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x57EE68b6e78F10291a2Ae3bd3d48A3571892ED48">0x57EE68b6e78F10291a2Ae3bd3d48A3571892ED48</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentMKRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0F6629B6f9B7042796e5BC70796031D77f5d7776">0x0F6629B6f9B7042796e5BC70796031D77f5d7776</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentNEARPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x85741188B0d56418f0338B1181152bfaE73e8b7c">0x85741188B0d56418f0338B1181152bfaE73e8b7c</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentONEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x07fc0993cEA1De85DE8C521cC631C511D5ea153D">0x07fc0993cEA1De85DE8C521cC631C511D5ea153D</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentOPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x66d9A368e9c8A3D3f3ab0758341A8c689C5b8400">0x66d9A368e9c8A3D3f3ab0758341A8c689C5b8400</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentPEPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xAa8C8E1c8179172cbE69c748009EF437714a3d0B">0xAa8C8E1c8179172cbE69c748009EF437714a3d0B</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentPERPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x4aa2Fd67d48cC3A8e9B066df0dB0b264efc67Ce8">0x4aa2Fd67d48cC3A8e9B066df0dB0b264efc67Ce8</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentRNDRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1E4C2ea8D037D2638b1e5945392261FE4959F433">0x1E4C2ea8D037D2638b1e5945392261FE4959F433</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentRPLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x246B410eB93c56cD2263585B492b5c043f6f0B5D">0x246B410eB93c56cD2263585B492b5c043f6f0B5D</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentRUNEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x5FC0B01De4954B9349D5Bd1BC81a4D52BA3EC131">0x5FC0B01De4954B9349D5Bd1BC81a4D52BA3EC131</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentSEIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x7AEefFf9668d51D178D3e94319a02f539DB5907e">0x7AEefFf9668d51D178D3e94319a02f539DB5907e</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentSHIBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xa8702F1428a320B20aDf243B579Be6BA94Ea423d">0xa8702F1428a320B20aDf243B579Be6BA94Ea423d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentSOLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x18d07E96ccbE15B475d3880f60086b3b5Ea068b2">0x18d07E96ccbE15B475d3880f60086b3b5Ea068b2</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentSTETHETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xff5DccD450FadaEF677D87f0812030b48373CF03">0xff5DccD450FadaEF677D87f0812030b48373CF03</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentSTETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xcf005fa0A75788c389401d7bD365398F1D214bFA">0xcf005fa0A75788c389401d7bD365398F1D214bFA</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentSUIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x715ef4C096037A0c3a2bAF06456b5De374F0a370">0x715ef4C096037A0c3a2bAF06456b5De374F0a370</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentSUSHIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1E6Bc6D62122015D94774C026dc458e6240c3013">0x1E6Bc6D62122015D94774C026dc458e6240c3013</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentTRXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xABCce7384973cA33Dbfa34B9b691786A512eA5Fb">0xABCce7384973cA33Dbfa34B9b691786A512eA5Fb</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentUMAPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xD71cdC5cb38AC6D0Ec86043AE3BDc5615981e508">0xD71cdC5cb38AC6D0Ec86043AE3BDc5615981e508</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentUNIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2564b44A374D52b4E63Cc523411886bb664c3B95">0x2564b44A374D52b4E63Cc523411886bb664c3B95</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentUSDTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x7b76b3b0973916945BD21Dbc1bA571A733A0A7c2">0x7b76b3b0973916945BD21Dbc1bA571A733A0A7c2</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentWLDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x9c8D4421055f568f6e25695F74aF63f82fBd8314">0x9c8D4421055f568f6e25695F74aF63f82fBd8314</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentXAGPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xA7F81257902c487Af61350aFf33D4060520d0202">0xA7F81257902c487Af61350aFf33D4060520d0202</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentXAUPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x327831397c1Ec86B897f40E178E19f68379285c6">0x327831397c1Ec86B897f40E178E19f68379285c6</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentXLMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x860ffb8f7f7F4c61279A9E810996abe3eF6Bc4A2">0x860ffb8f7f7F4c61279A9E810996abe3eF6Bc4A2</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentXMRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3F5f3c5F368964c031aeDa8639B8633797E2D5E9">0x3F5f3c5F368964c031aeDa8639B8633797E2D5E9</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentXRPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x38a56579C0aF52BD2eADE1E94c0836c4E3D99c5B">0x38a56579C0aF52BD2eADE1E94c0836c4E3D99c5B</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentXTZPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xd74d3DEBfB5EBDe3daB36aaB992dCBa142425bE5">0xd74d3DEBfB5EBDe3daB36aaB992dCBa142425bE5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentYFIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x598ae876240201664FcF8AB0F860d0b7aCcc8797">0x598ae876240201664FcF8AB0F860d0b7aCcc8797</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentZECPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x24FC2A983C5f777AfDC78c201A53D8DEb02647B9">0x24FC2A983C5f777AfDC78c201A53D8DEb02647B9</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentZILPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xE327b5FdAdAbC6706DF88784f01484b8aF9DDf94">0xE327b5FdAdAbC6706DF88784f01484b8aF9DDf94</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedIntentZRXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedIntent.sol">PerpsV2MarketDelayedIntent.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xDb8c0d19cDBC7742307Dd4Ada60535c2E9245855">0xDb8c0d19cDBC7742307Dd4Ada60535c2E9245855</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedOrderAAVEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrders.sol">PerpsV2MarketDelayedOrders.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3FF85EdC96341924a43950ecfaEfA52a4342aB56">0x3FF85EdC96341924a43950ecfaEfA52a4342aB56</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedOrderAPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrders.sol">PerpsV2MarketDelayedOrders.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x844f98835b57970f6a86Fdb884AFe114103c14C5">0x844f98835b57970f6a86Fdb884AFe114103c14C5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedOrderATOMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrders.sol">PerpsV2MarketDelayedOrders.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x87f762c3BA319d1c66D4006a062461c8326B6289">0x87f762c3BA319d1c66D4006a062461c8326B6289</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedOrderAUDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrders.sol">PerpsV2MarketDelayedOrders.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x628D012b3714702a024317584194b6b6831Cd5eB">0x628D012b3714702a024317584194b6b6831Cd5eB</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedOrderAVAXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrders.sol">PerpsV2MarketDelayedOrders.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xC70acc95C8b816433d3650E2b8E0c0B40e2Cfd0E">0xC70acc95C8b816433d3650E2b8E0c0B40e2Cfd0E</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedOrderAXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrders.sol">PerpsV2MarketDelayedOrders.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xeFaCdB4108336256DE373BD7110141B49Fbd71E4">0xeFaCdB4108336256DE373BD7110141B49Fbd71E4</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedOrderBNBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrders.sol">PerpsV2MarketDelayedOrders.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x466ee9cA48d7b99cE7dd1c856Da68a5817f97B4F">0x466ee9cA48d7b99cE7dd1c856Da68a5817f97B4F</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedOrderBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrders.sol">PerpsV2MarketDelayedOrders.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xB2da27081d3E12837FF36A858b619B26C70A1E72">0xB2da27081d3E12837FF36A858b619B26C70A1E72</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedOrderDOGEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrders.sol">PerpsV2MarketDelayedOrders.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xFC8c8836719D3Bc6174Ef943FDA1b7becD2E0bB9">0xFC8c8836719D3Bc6174Ef943FDA1b7becD2E0bB9</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedOrderDYDXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrders.sol">PerpsV2MarketDelayedOrders.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x8bDe1A85CC3B889fFF13e3083312975266051959">0x8bDe1A85CC3B889fFF13e3083312975266051959</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedOrderETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrders.sol">PerpsV2MarketDelayedOrders.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xFd16cDa7e5808D24FB16b419D37FB7EF636c51b7">0xFd16cDa7e5808D24FB16b419D37FB7EF636c51b7</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedOrderEURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrders.sol">PerpsV2MarketDelayedOrders.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x39d1Fad09590BcBaeF683E349176DcFd4E428Ed6">0x39d1Fad09590BcBaeF683E349176DcFd4E428Ed6</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedOrderFLOWPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrders.sol">PerpsV2MarketDelayedOrders.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x82704d07Df11B7c1411D682f07c8358e4BAFd37e">0x82704d07Df11B7c1411D682f07c8358e4BAFd37e</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedOrderFTMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrders.sol">PerpsV2MarketDelayedOrders.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x41076E867566c22435a6A9f8Ba7997570ca6d314">0x41076E867566c22435a6A9f8Ba7997570ca6d314</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedOrderGBPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrders.sol">PerpsV2MarketDelayedOrders.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x71848580eB88408e36B590231508d5b120C57360">0x71848580eB88408e36B590231508d5b120C57360</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedOrderLINKPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrders.sol">PerpsV2MarketDelayedOrders.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0f5c65Acb355CE08e6D2e3FAD1C6ee8114caC15F">0x0f5c65Acb355CE08e6D2e3FAD1C6ee8114caC15F</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedOrderMATICPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrders.sol">PerpsV2MarketDelayedOrders.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xed988020700dcA6EE128Fa995bdC5Bb13945aE03">0xed988020700dcA6EE128Fa995bdC5Bb13945aE03</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedOrderNEARPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrders.sol">PerpsV2MarketDelayedOrders.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3c7D28dD8586807BBED246B2318781ba388B1C92">0x3c7D28dD8586807BBED246B2318781ba388B1C92</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedOrderOPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrders.sol">PerpsV2MarketDelayedOrders.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0CA91B2f2A047F292Dd7C2EEdF10874c7F6CC4AC">0x0CA91B2f2A047F292Dd7C2EEdF10874c7F6CC4AC</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedOrderSOLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrders.sol">PerpsV2MarketDelayedOrders.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x99d2548Bd76b09607d27E42155a2bc21b8Ee77EF">0x99d2548Bd76b09607d27E42155a2bc21b8Ee77EF</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedOrderUNIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrders.sol">PerpsV2MarketDelayedOrders.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x774506226e943d7ca12A271836a2Af5F97b543b4">0x774506226e943d7ca12A271836a2Af5F97b543b4</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedOrderXAGPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrders.sol">PerpsV2MarketDelayedOrders.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x655599aa4AB094Fc43e9708d81d3D0cb8677ea4e">0x655599aa4AB094Fc43e9708d81d3D0cb8677ea4e</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2DelayedOrderXAUPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrders.sol">PerpsV2MarketDelayedOrders.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x815d6956b4105a25D7E89242A3CE3c4e24b90A89">0x815d6956b4105a25D7E89242A3CE3c4e24b90A89</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ExchangeRate</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2ExchangeRate.sol">PerpsV2ExchangeRate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x699DFf510a94ac0738548b9097E3FE896EEa7331">0x699DFf510a94ac0738548b9097E3FE896EEa7331</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2Market1INCHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x391c8e863DdF37ED56f850Db696332D5EB22742b">0x391c8e863DdF37ED56f850Db696332D5EB22742b</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketAAVEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x41e0bc25A85ddD123F35aFcac1734a3D759D103d">0x41e0bc25A85ddD123F35aFcac1734a3D759D103d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketADAPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x5518e01746c9193B99E9C33Cc047c6D513B5C317">0x5518e01746c9193B99E9C33Cc047c6D513B5C317</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketALGOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x7373577fbAC46C99581663312fFBBBa27D068f3d">0x7373577fbAC46C99581663312fFBBBa27D068f3d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketAPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x6f00Fa8a218024764446a6Cfa141baA11987E84B">0x6f00Fa8a218024764446a6Cfa141baA11987E84B</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketAPTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xDf08E387575A3DBE44d1EDa9EEAAd413A8B04A6c">0xDf08E387575A3DBE44d1EDa9EEAAd413A8B04A6c</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketARBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xeae543846E99e4Eb7525bD7ac1437116fbBE0C73">0xeae543846E99e4Eb7525bD7ac1437116fbBE0C73</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketATOMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xc9f0D7e0c9A4911E07382b7D81fF94D9C2A2C6AF">0xc9f0D7e0c9A4911E07382b7D81fF94D9C2A2C6AF</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketAUDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x9146BbA90B3D6ceB0F2F9093f2D4378941528542">0x9146BbA90B3D6ceB0F2F9093f2D4378941528542</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketAVAXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xE8EcA94d436Aeb5606Ad442D4375D961aE560123">0xE8EcA94d436Aeb5606Ad442D4375D961aE560123</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketAXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x777ACE2829f756eaf8B9732D450c7a6Cfb4Fa93e">0x777ACE2829f756eaf8B9732D450c7a6Cfb4Fa93e</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketBALPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x6DFA5A7238F176BCC4c8A126272F8CAC892D7b1B">0x6DFA5A7238F176BCC4c8A126272F8CAC892D7b1B</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketBCHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xbe4a7F28d6bf6a42c77c4cd495E49573200D60F2">0xbe4a7F28d6bf6a42c77c4cd495E49573200D60F2</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketBLURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xA7E442451aB869524844165d881cE4B95220E639">0xA7E442451aB869524844165d881cE4B95220E639</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketBNBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xB248e317ADE072D88fc2b659a184674a7dc549Aa">0xB248e317ADE072D88fc2b659a184674a7dc549Aa</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x8E149ce11B497F87f44986581A8Fe0230CaBe103">0x8E149ce11B497F87f44986581A8Fe0230CaBe103</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketCELOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x8512F3032B7d00cf776000d2aeE6335365dcEf30">0x8512F3032B7d00cf776000d2aeE6335365dcEf30</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketCOMPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x4D70F91572431Ef3D674F1d4Cd33C3B5F4Eb4b36">0x4D70F91572431Ef3D674F1d4Cd33C3B5F4Eb4b36</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketCRVPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x362f205bf4aB30c6374c39a99E1EEB2c5f65A745">0x362f205bf4aB30c6374c39a99E1EEB2c5f65A745</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketDOGEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xF8051F70A533fb4E3E1Cf843EcdFA0f9Cec7f286">0xF8051F70A533fb4E3E1Cf843EcdFA0f9Cec7f286</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketDOTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3b6b53C201862a3FE1C82A6F81269da8B9fE18c4">0x3b6b53C201862a3FE1C82A6F81269da8B9fE18c4</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketDYDXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xCA6a7FF8F1164660e059B70B46FC3A51CA7B2402">0xCA6a7FF8F1164660e059B70B46FC3A51CA7B2402</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketData</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketData.sol">PerpsV2MarketData.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0941808db469Ee7F3dF9dbd565C838784181673b">0x0941808db469Ee7F3dF9dbd565C838784181673b</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketENJPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x49EDaBfDCa6d7369583F7c7e8d24B7f1D009855E">0x49EDaBfDCa6d7369583F7c7e8d24B7f1D009855E</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketEOSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x7cd55bbb5c4fe28f5a210161E86364D85Df0Ad9d">0x7cd55bbb5c4fe28f5a210161E86364D85Df0Ad9d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketETCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x89987058946f4e3B9d949C68a25F05B769499f01">0x89987058946f4e3B9d949C68a25F05B769499f01</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketETHBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x61eFbc63dB1b6C1D5735A81D68E0EF5A4b2FAac8">0x61eFbc63dB1b6C1D5735A81D68E0EF5A4b2FAac8</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x9ED49F3a6D6EaB613F241CE8eE7c2a8B8a7a67df">0x9ED49F3a6D6EaB613F241CE8eE7c2a8B8a7a67df</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketEURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xC8E32fcb46A78AD5ee51ECd88b0282F356E6F4b8">0xC8E32fcb46A78AD5ee51ECd88b0282F356E6F4b8</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketFILPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x595D456c6F717f9Cc16c997fa741398eC31614e3">0x595D456c6F717f9Cc16c997fa741398eC31614e3</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketFLOKIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xfb6EBFb59d3B4D305D0fced5Bb5E3cA32d4324E3">0xfb6EBFb59d3B4D305D0fced5Bb5E3cA32d4324E3</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketFLOWPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xdb5833B7dc665d7838781e078e41Bd52E4a8d8b8">0xdb5833B7dc665d7838781e078e41Bd52E4a8d8b8</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketFTMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x838a7197fa7193DA26628383aD2F7F227C2D2AB0">0x838a7197fa7193DA26628383aD2F7F227C2D2AB0</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketFXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2781df15F38808e1F570394A6AE20F4ba8c33240">0x2781df15F38808e1F570394A6AE20F4ba8c33240</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketGBPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x502C537C5FC25E5cD1D0f4D2fF5dF8d869E86f53">0x502C537C5FC25E5cD1D0f4D2fF5dF8d869E86f53</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketGMXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xa1FB26CA3d097E8C4C0C149A975F1889Bf1ACe3C">0xa1FB26CA3d097E8C4C0C149A975F1889Bf1ACe3C</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketICPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x68bf9aa1F53A702A12d80ecCeACF3d36DEBb0910">0x68bf9aa1F53A702A12d80ecCeACF3d36DEBb0910</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketINJPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x46c5Db6100990720BBa4601c0dEa6a0C36DF72a7">0x46c5Db6100990720BBa4601c0dEa6a0C36DF72a7</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketKNCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xca942ab49C430F2eC0A603DADa0112b624dee79E">0xca942ab49C430F2eC0A603DADa0112b624dee79E</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLDOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x7F5627eeb1f1ae1641FEf8e853b914B5569f8B5c">0x7F5627eeb1f1ae1641FEf8e853b914B5569f8B5c</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLINKPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x74E75f34d11337f7575feB0d8D59839df585F9bC">0x74E75f34d11337f7575feB0d8D59839df585F9bC</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0eB477bbE01E1B12D3045115427A52855ffcE4ce">0x0eB477bbE01E1B12D3045115427A52855ffcE4ce</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidate1INCHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xD1371585254E35d0906Ae77B5F27A4d9d870b177">0xD1371585254E35d0906Ae77B5F27A4d9d870b177</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateAAVEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2379f32D235eD5bBB2579C8813A9e4A91003BE14">0x2379f32D235eD5bBB2579C8813A9e4A91003BE14</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateADAPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x227f3f08a82d3aA818271eB400D847132a5f2332">0x227f3f08a82d3aA818271eB400D847132a5f2332</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateALGOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xe76B3EB2D2E41dEF9C0626613Fc9102826a400ad">0xe76B3EB2D2E41dEF9C0626613Fc9102826a400ad</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateAPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x330e32375AC29c0419177d1178f10C4F887e6980">0x330e32375AC29c0419177d1178f10C4F887e6980</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateAPTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x9A1e96B8B1280481A9b7ab19C7bDF65d92dB22F9">0x9A1e96B8B1280481A9b7ab19C7bDF65d92dB22F9</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateARBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x30A8A38FD589f459538A2fffb052F7dE661C48BF">0x30A8A38FD589f459538A2fffb052F7dE661C48BF</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateATOMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x4fff0C88e4aacaF7125d73996C439897DFC8Db64">0x4fff0C88e4aacaF7125d73996C439897DFC8Db64</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateAUDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x7df26e2de28EAF0e71B2E7375c32977bA8a1879A">0x7df26e2de28EAF0e71B2E7375c32977bA8a1879A</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateAVAXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x8c10333538ea2e217dE62285f8ec28325e4D4bdb">0x8c10333538ea2e217dE62285f8ec28325e4D4bdb</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateAXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x16118826a89Ed49F1F23E66dC6899EFf1A712c78">0x16118826a89Ed49F1F23E66dC6899EFf1A712c78</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateBALPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3930Ee82B38a0023Dc695424059Ad63b1220f987">0x3930Ee82B38a0023Dc695424059Ad63b1220f987</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateBCHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x9D9F6911d590427f114183c5eB43fF61889Cf7F5">0x9D9F6911d590427f114183c5eB43fF61889Cf7F5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateBLURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x28C9691E5Db7fE4a8786Df08592f4A2C80208410">0x28C9691E5Db7fE4a8786Df08592f4A2C80208410</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateBNBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x55fB13b29a5a82493c17C836caECBA838e428755">0x55fB13b29a5a82493c17C836caECBA838e428755</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x8e7147406D63c643B2171BF3eb5D368898d38D7E">0x8e7147406D63c643B2171BF3eb5D368898d38D7E</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateCELOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xe2468cae8FD460031e9B2C1d95f3C6c9f48D9316">0xe2468cae8FD460031e9B2C1d95f3C6c9f48D9316</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateCOMPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x696ac05D758B7EdB9b8E2b291f6a0e08d3c42355">0x696ac05D758B7EdB9b8E2b291f6a0e08d3c42355</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateCRVPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x244Ba4593d76E813cbbc19eeC8C2Edf08D1B18c7">0x244Ba4593d76E813cbbc19eeC8C2Edf08D1B18c7</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateDOGEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xB4F217A4cCe2D3FBBd24a7BAa2D946019b4898C1">0xB4F217A4cCe2D3FBBd24a7BAa2D946019b4898C1</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateDOTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x76b9e36845E509d653A46C0CbBC5154dA18BfC2d">0x76b9e36845E509d653A46C0CbBC5154dA18BfC2d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateDYDXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x364e3c62528D22Cfadc1b2A7c91f32A4921E12Ae">0x364e3c62528D22Cfadc1b2A7c91f32A4921E12Ae</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateENJPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x9342F5B2F927b604ca1C2E7042Dd1B6442bd9c39">0x9342F5B2F927b604ca1C2E7042Dd1B6442bd9c39</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateEOSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x9250E9B183E3a3abF37a133B8e8F68418f5822dE">0x9250E9B183E3a3abF37a133B8e8F68418f5822dE</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateETCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x394863D88CEeb489c35EcF08e4E1BFc76Dc634d4">0x394863D88CEeb489c35EcF08e4E1BFc76Dc634d4</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateETHBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xD1c0C26c9C1823Feb9E31cb6E7Ff6952D37e5716">0xD1c0C26c9C1823Feb9E31cb6E7Ff6952D37e5716</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xD9B3239f119D7c12cF0f90F8c424B16D349e8de8">0xD9B3239f119D7c12cF0f90F8c424B16D349e8de8</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateEURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x75fb2E5c2593b71241bfF1B6af0d74D61A2dfF9C">0x75fb2E5c2593b71241bfF1B6af0d74D61A2dfF9C</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateFILPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xE75DCB99acF7Cc12cC99651546cd01b2F0c67e06">0xE75DCB99acF7Cc12cC99651546cd01b2F0c67e06</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateFLOKIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xCeEFb586C703C1B58C2AcE5dED4a4f49CBfc5ACA">0xCeEFb586C703C1B58C2AcE5dED4a4f49CBfc5ACA</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateFLOWPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xc1CA0B977Dc51A1873B787aCCB8801a2d5DFf689">0xc1CA0B977Dc51A1873B787aCCB8801a2d5DFf689</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateFTMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xD9419e42ea0541f55B1774ff196Ea9ECb9D43eA1">0xD9419e42ea0541f55B1774ff196Ea9ECb9D43eA1</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateFXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x9cf44882974d39c0F0b91a0eC3c11fF327F70a50">0x9cf44882974d39c0F0b91a0eC3c11fF327F70a50</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateGBPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1f99f79D6d7e0354Cc56f0543535C1dbeB42e1DF">0x1f99f79D6d7e0354Cc56f0543535C1dbeB42e1DF</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateGMXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xB3F5743F5607d2905A4431859a17fd1895D39fF4">0xB3F5743F5607d2905A4431859a17fd1895D39fF4</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateICPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0e22cC30346aC89c8b1dE03F98335d60192a6214">0x0e22cC30346aC89c8b1dE03F98335d60192a6214</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateINJPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3f119d72466b8805Ec6f74992aeB134CFE4f37d0">0x3f119d72466b8805Ec6f74992aeB134CFE4f37d0</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateKNCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x8Fe9587Af4126e04446d11Ff8B024600D6f09691">0x8Fe9587Af4126e04446d11Ff8B024600D6f09691</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateLDOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x8695401AcB60EeA605144E9dDFc7816B1ad4Cb08">0x8695401AcB60EeA605144E9dDFc7816B1ad4Cb08</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateLINKPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xb5DDF499024f97C675c3871AB84b489b2321bd27">0xb5DDF499024f97C675c3871AB84b489b2321bd27</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateLTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x95E05Fa07f2Ee88997e4110b71C41Aa59A0bA5b4">0x95E05Fa07f2Ee88997e4110b71C41Aa59A0bA5b4</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateMATICPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xE24620Ac07312B4DF6b8c00217C4e1C305883611">0xE24620Ac07312B4DF6b8c00217C4e1C305883611</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateMAVPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x80A0c2eccc0b35dCB0b8db8451277986B140b519">0x80A0c2eccc0b35dCB0b8db8451277986B140b519</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateMKRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3f2314B19718b7a995481f968C548AFc1310cc81">0x3f2314B19718b7a995481f968C548AFc1310cc81</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateNEARPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1EF2E579E1bd613BF04c77036A4113DfdD821004">0x1EF2E579E1bd613BF04c77036A4113DfdD821004</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateONEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x8F67aeE05D85348d7f4A11D1FFefE584950edc34">0x8F67aeE05D85348d7f4A11D1FFefE584950edc34</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateOPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xEA2548AE7350f293451A3BbBea56C14A0cf9ceB4">0xEA2548AE7350f293451A3BbBea56C14A0cf9ceB4</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidatePEPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2A7caF7B48B95Ee958B0a1C67e32C257287B6251">0x2A7caF7B48B95Ee958B0a1C67e32C257287B6251</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidatePERPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2b6a67482896dE4A6a92221D8e5E52aD7787C31c">0x2b6a67482896dE4A6a92221D8e5E52aD7787C31c</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateRNDRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xcDbCfDc90585c439429E796dD327108Ad2715fED">0xcDbCfDc90585c439429E796dD327108Ad2715fED</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateRPLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xcec7E4F0D0582bE73AbF4775C0f9Ca9Ed6629FcE">0xcec7E4F0D0582bE73AbF4775C0f9Ca9Ed6629FcE</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateRUNEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x5CcE5B95b79b96253C897BD0c677C1c02b0951df">0x5CcE5B95b79b96253C897BD0c677C1c02b0951df</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateSEIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xAa88a2A9344c8D403782059DFF736eA883705063">0xAa88a2A9344c8D403782059DFF736eA883705063</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateSHIBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xf320268B0d0990180b13e99B9327eF65233a1B9F">0xf320268B0d0990180b13e99B9327eF65233a1B9F</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateSOLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xe90fE47410792ff66633339877022c31268a2d04">0xe90fE47410792ff66633339877022c31268a2d04</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateSTETHETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xE51A5F0639CA2CE820ef0584e0c81073532e2460">0xE51A5F0639CA2CE820ef0584e0c81073532e2460</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateSTETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xF6ff2A7a89bEb9bCFF7d13458e289d159F4470ad">0xF6ff2A7a89bEb9bCFF7d13458e289d159F4470ad</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateSUIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x15aBc49162b4BC832b668301CC998a4E81dC7d2b">0x15aBc49162b4BC832b668301CC998a4E81dC7d2b</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateSUSHIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1A596A95158E2bAB50AebCC5F6a6f90469e5ED5C">0x1A596A95158E2bAB50AebCC5F6a6f90469e5ED5C</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateTRXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2d2D04DfD398AB9AA99b11B872a9318dEc2Fb609">0x2d2D04DfD398AB9AA99b11B872a9318dEc2Fb609</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateUMAPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xEc81e47f303c0B8E627C8D095B29AF6e59F26710">0xEc81e47f303c0B8E627C8D095B29AF6e59F26710</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateUNIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xF4955e7A67c8c8C927C58B6071DCEa7A5bcAa089">0xF4955e7A67c8c8C927C58B6071DCEa7A5bcAa089</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateUSDTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x4F83070dc7cF3296aa9992A2Db0A9eD0f7121bD4">0x4F83070dc7cF3296aa9992A2Db0A9eD0f7121bD4</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateWLDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x583fb673F274ac0e4f59dCE7387F5855Fb75AB90">0x583fb673F274ac0e4f59dCE7387F5855Fb75AB90</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateXAGPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1FC84eF67415586Efa0dBbC764C9eDace45d306C">0x1FC84eF67415586Efa0dBbC764C9eDace45d306C</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateXAUPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xbD2Fa69d1E81d0fb921674d613694Ec542E4C21b">0xbD2Fa69d1E81d0fb921674d613694Ec542E4C21b</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateXLMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x416F47bB7c5abc848603Da2C4C505AF8e338B873">0x416F47bB7c5abc848603Da2C4C505AF8e338B873</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateXMRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x4B9bd6756154B9180A8A99C4A9F7cf065D694B1e">0x4B9bd6756154B9180A8A99C4A9F7cf065D694B1e</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateXRPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xD7FD95a46015fb023DF78e7426E5a9423bE7586f">0xD7FD95a46015fb023DF78e7426E5a9423bE7586f</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateXTZPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1b1eD82857B3231a5a50e205AB7172297DbF36bE">0x1b1eD82857B3231a5a50e205AB7172297DbF36bE</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateYFIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3854060b596cb5497c0435Ef0d15CFd2F4Dd5d79">0x3854060b596cb5497c0435Ef0d15CFd2F4Dd5d79</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateZECPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x16906E260B7CA4dccEa474400cC47b1C27B052Bb">0x16906E260B7CA4dccEa474400cC47b1C27B052Bb</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateZILPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1f21A0f0A7525e9F71b8fb3265eD8B4599a8154E">0x1f21A0f0A7525e9F71b8fb3265eD8B4599a8154E</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketLiquidateZRXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketLiquidate.sol">PerpsV2MarketLiquidate.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xd736542968C18dBD568A457005ad859B7f4B714e">0xd736542968C18dBD568A457005ad859B7f4B714e</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketMATICPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xbBF5F60Cc7708Fafd8507f0cC62489B82b2B1415">0xbBF5F60Cc7708Fafd8507f0cC62489B82b2B1415</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketMAVPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x00A9319aB61c3d7282195Fcc6e356d16aE8b4Cf5">0x00A9319aB61c3d7282195Fcc6e356d16aE8b4Cf5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketMKRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x8ed0F38D2634BF6B966f1D6125641c35d0206fd3">0x8ed0F38D2634BF6B966f1D6125641c35d0206fd3</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketNEARPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x49E4faA3Ff9c36cF5cE50E7674C623A3673885f4">0x49E4faA3Ff9c36cF5cE50E7674C623A3673885f4</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketONEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x8586F765521e9924b3021E944Bf606186130884B">0x8586F765521e9924b3021E944Bf606186130884B</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketOPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xAd3DCE44a0fe203e4aa33008C7E2bc48584f450C">0xAd3DCE44a0fe203e4aa33008C7E2bc48584f450C</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketPEPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2434db86E2bBb451376C217175f19a8F7bE3Da4d">0x2434db86E2bBb451376C217175f19a8F7bE3Da4d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketPERPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x001d59696425d53165aa51B49a4636C3B3aE3237">0x001d59696425d53165aa51B49a4636C3B3aE3237</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketRNDRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x948eA8f5c72180c944F02469f95141E6F588e0AC">0x948eA8f5c72180c944F02469f95141E6F588e0AC</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketRPLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xf3115ecCC270E3DEdE4837f9026DA33Bc8208819">0xf3115ecCC270E3DEdE4837f9026DA33Bc8208819</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketRUNEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x4640c2232964CC25672b50e7156fCc96bebdAA93">0x4640c2232964CC25672b50e7156fCc96bebdAA93</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketSEIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xea4d80c60238F283787998C2b242Eb250D32190b">0xea4d80c60238F283787998C2b242Eb250D32190b</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketSHIBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x9e7D3e3F7A24b87e2b9c72D3695B4a692CcB7DcB">0x9e7D3e3F7A24b87e2b9c72D3695B4a692CcB7DcB</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketSOLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xEd7759D6A7D1aD497cf367661e56088635FCb72A">0xEd7759D6A7D1aD497cf367661e56088635FCb72A</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketSTETHETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x72D11A78A291a031259e5C9c1aBD88C282DAd56a">0x72D11A78A291a031259e5C9c1aBD88C282DAd56a</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketSTETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xB2A4d1428238955De5764A6F15ad45bBF26A2646">0xB2A4d1428238955De5764A6F15ad45bBF26A2646</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketSUIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x995F05BD7D57969Ca5b7F48D6bfe6043c04477De">0x995F05BD7D57969Ca5b7F48D6bfe6043c04477De</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketSUSHIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xE996f47c177E5248FD2060C5eAb392a4f4a789C6">0xE996f47c177E5248FD2060C5eAb392a4f4a789C6</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketSettings</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketSettings.sol">PerpsV2MarketSettings.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xedf10514EF611e3808622f24e236b83cB9E51dCe">0xedf10514EF611e3808622f24e236b83cB9E51dCe</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketState1INCHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x48001E5B2e7788850C92e10430495d9c39C348ba">0x48001E5B2e7788850C92e10430495d9c39C348ba</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateAAVEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x10dF51036b612f9f7Da63c05D283D831B22B096a">0x10dF51036b612f9f7Da63c05D283D831B22B096a</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateADAPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2137267cD09B38999BFf146f4F01B3908b9967CD">0x2137267cD09B38999BFf146f4F01B3908b9967CD</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateALGOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xc0dA9Bc52EF4770FD687925208363D8810eaA9c9">0xc0dA9Bc52EF4770FD687925208363D8810eaA9c9</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateAPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0071e75f1aB715F1Ea9e94363943A1623394C97D">0x0071e75f1aB715F1Ea9e94363943A1623394C97D</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateAPTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1542b0b722D82E3015Eb65b636E752bFF5dc5fBb">0x1542b0b722D82E3015Eb65b636E752bFF5dc5fBb</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateARBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xC1f771656BD5fF3cdB5A7467eDEbE81CD1089622">0xC1f771656BD5fF3cdB5A7467eDEbE81CD1089622</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateATOMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xC7FFbd92769be0514b350FAAB9AA7aF3568f8e1B">0xC7FFbd92769be0514b350FAAB9AA7aF3568f8e1B</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateAUDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x559F610570f21DCbdD789A54469900b30b455Fca">0x559F610570f21DCbdD789A54469900b30b455Fca</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateAVAXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x215bde0E44cb07A382c7E0923B0124250A72D2aD">0x215bde0E44cb07A382c7E0923B0124250A72D2aD</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateAXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x8f24442A6447c0d780d23278D88ea0cb9b79D93d">0x8f24442A6447c0d780d23278D88ea0cb9b79D93d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateBALPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x365E4FB59a6dbbF7f0A9bA7D2f96b590Dc994527">0x365E4FB59a6dbbF7f0A9bA7D2f96b590Dc994527</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateBCHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x9341E4E08f89F6db7A4Dd0a86bC4B08491cA6b5E">0x9341E4E08f89F6db7A4Dd0a86bC4B08491cA6b5E</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateBLURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xb0d5718E6b977bb5Cd05fc5cdd761b0a7254c96b">0xb0d5718E6b977bb5Cd05fc5cdd761b0a7254c96b</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateBNBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xD7A097A7260CaaB5f82F5969B4deDFDa94B4B67b">0xD7A097A7260CaaB5f82F5969B4deDFDa94B4B67b</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xd8485b0f7c9144580a6f68b462ceC0aE6EA6d138">0xd8485b0f7c9144580a6f68b462ceC0aE6EA6d138</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateCELOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x9b951e16CAfB129286fEe54183939dC485986365">0x9b951e16CAfB129286fEe54183939dC485986365</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateCOMPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x7378c1d56274Dc83f69193e6707c22799ED33eE4">0x7378c1d56274Dc83f69193e6707c22799ED33eE4</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateCRVPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xD86f3B9F8b95EB5972C527c1a43341C2bA522d29">0xD86f3B9F8b95EB5972C527c1a43341C2bA522d29</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateDOGEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x08b0C0CB383B6454774eA383346E1b956F82e8c1">0x08b0C0CB383B6454774eA383346E1b956F82e8c1</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateDOTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xb51Dab27A3257515C7dd310F618c187c3C0544C5">0xb51Dab27A3257515C7dd310F618c187c3C0544C5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateDYDXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x905c93ad6654bb55c3845E48BFa152Bd74479a3e">0x905c93ad6654bb55c3845E48BFa152Bd74479a3e</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateENJPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x01e57792CC8e32be4164dc3A14D9F5176CE97cB7">0x01e57792CC8e32be4164dc3A14D9F5176CE97cB7</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateEOSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xD0ea062d68d1722c8DCCBFDE1bc5A5Fa692b9CF0">0xD0ea062d68d1722c8DCCBFDE1bc5A5Fa692b9CF0</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateETCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x934BD5cA82372b0F9EB056Fe9C5D1E075a1Ffc5D">0x934BD5cA82372b0F9EB056Fe9C5D1E075a1Ffc5D</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateETHBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xBd4f399bF3712ffb5754A5997E2319031a47714A">0xBd4f399bF3712ffb5754A5997E2319031a47714A</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x55d9f2c6eEaeA4d1Cc1E5C1a82886e6b54f40e1d">0x55d9f2c6eEaeA4d1Cc1E5C1a82886e6b54f40e1d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateEURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xc285E2BB8332bd9Ff96289fe79BF63b828037Ce2">0xc285E2BB8332bd9Ff96289fe79BF63b828037Ce2</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateFILPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x079d3513E73ddABfD8E3f57589D610b28932553f">0x079d3513E73ddABfD8E3f57589D610b28932553f</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateFLOKIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xfd4bCbA2b3FF9D3011D73069955e41419d8FE34b">0xfd4bCbA2b3FF9D3011D73069955e41419d8FE34b</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateFLOWPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x5e35159D2A3989e125EAf6d0A40Ef3A956106ba3">0x5e35159D2A3989e125EAf6d0A40Ef3A956106ba3</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateFTMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x6602A43F838c4Ba5C7717Ce260A634b817b91BfC">0x6602A43F838c4Ba5C7717Ce260A634b817b91BfC</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateFXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xfE49128f2C8CE05B48A53134A9318a5959d4D036">0xfE49128f2C8CE05B48A53134A9318a5959d4D036</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateGBPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x87E7C1972B3409aB84e01c03e1D6c6023844225a">0x87E7C1972B3409aB84e01c03e1D6c6023844225a</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateGMXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xB200D88E23557721FA9b43f65588E345918B6921">0xB200D88E23557721FA9b43f65588E345918B6921</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateICPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x94EC95591D347C6865402e72C503E2E58b3adFd2">0x94EC95591D347C6865402e72C503E2E58b3adFd2</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateINJPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1b8aa54e85D0a72Ca833edA147898edC57AdFE43">0x1b8aa54e85D0a72Ca833edA147898edC57AdFE43</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateKNCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xe3dbc17d9543AB5AB3d30D6b7eaE71f6Ee487ee6">0xe3dbc17d9543AB5AB3d30D6b7eaE71f6Ee487ee6</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateLDOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x4402919FcF316510b4E5D651C77325757C1aEC4E">0x4402919FcF316510b4E5D651C77325757C1aEC4E</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateLINKPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x32450Ecd69EeE7162715fD09785fd287E035395f">0x32450Ecd69EeE7162715fD09785fd287E035395f</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateLTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xEbf0c8d6AE4Ee2538F24e514FF4705d599644Aa7">0xEbf0c8d6AE4Ee2538F24e514FF4705d599644Aa7</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateMATICPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xc26571b8a1ab1cc940C6336816F98B22C9845965">0xc26571b8a1ab1cc940C6336816F98B22C9845965</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateMAVPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x4d69878cF675501C413534C183A79d5c0f8ccA6c">0x4d69878cF675501C413534C183A79d5c0f8ccA6c</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateMKRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x64ea5527b76e5B77d2Dc90D220951BB43A56D081">0x64ea5527b76e5B77d2Dc90D220951BB43A56D081</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateNEARPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xb1E8f8Dc78b3e6c20e78a4BC6DCbBb6412927Ec4">0xb1E8f8Dc78b3e6c20e78a4BC6DCbBb6412927Ec4</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateONEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x480CB2fD05cce27d01a9024263b13cB5A864885E">0x480CB2fD05cce27d01a9024263b13cB5A864885E</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateOPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xb07b587478e59d5a73cDB3146aC6c8cb452Ee324">0xb07b587478e59d5a73cDB3146aC6c8cb452Ee324</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStatePEPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x7edAEB2f67a6fE97f336a87A4f668C1Ccc203f69">0x7edAEB2f67a6fE97f336a87A4f668C1Ccc203f69</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStatePERPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xa46D6811eBAd6f0E33fcb6C5A08b2d4C7d65079c">0xa46D6811eBAd6f0E33fcb6C5A08b2d4C7d65079c</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateRNDRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x532221c53cD442446CAFFffbA6e33F6Fc3365D8C">0x532221c53cD442446CAFFffbA6e33F6Fc3365D8C</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateRPLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x8666F40888a31F09d994A3ac8B5c3bc4d8934fb0">0x8666F40888a31F09d994A3ac8B5c3bc4d8934fb0</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateRUNEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3C141aC3EAa12f8082298338fCD9D854874C3c31">0x3C141aC3EAa12f8082298338fCD9D854874C3c31</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateSEIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xb19cc213004E8790c7Adaf952849fd934b57d2DC">0xb19cc213004E8790c7Adaf952849fd934b57d2DC</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateSHIBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x4DA51173fF4a4BbfBc328D05F760673D6CE1d4A8">0x4DA51173fF4a4BbfBc328D05F760673D6CE1d4A8</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateSOLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xF2736f2ea5821bb2F8F43FDca448B22B2EA1A1b9">0xF2736f2ea5821bb2F8F43FDca448B22B2EA1A1b9</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateSTETHETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x8652A9EC3fd710eA63e8A4Ad2DdFCa613E19F277">0x8652A9EC3fd710eA63e8A4Ad2DdFCa613E19F277</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateSTETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xB9FbE7647dA76791b07285e5a082dB4B94b9E457">0xB9FbE7647dA76791b07285e5a082dB4B94b9E457</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateSUIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3B75d73b1a8Ed1DA4eDE5FE4b2381764941f5070">0x3B75d73b1a8Ed1DA4eDE5FE4b2381764941f5070</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateSUSHIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x01771aCbAbF9fdf4160Ed5D83Ea38B7Df2b9699b">0x01771aCbAbF9fdf4160Ed5D83Ea38B7Df2b9699b</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateTRXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xfF5beBcE46d0A226b18C3eE38fc12dC8a2e00607">0xfF5beBcE46d0A226b18C3eE38fc12dC8a2e00607</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateUMAPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x907C6dF6Dc8daaE4F7F77be0CEDb7381ee3c7AAE">0x907C6dF6Dc8daaE4F7F77be0CEDb7381ee3c7AAE</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateUNIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xCeCC45973987C8eD46D84851888EBae5696D4fEC">0xCeCC45973987C8eD46D84851888EBae5696D4fEC</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateUSDTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xC7e69B66592f75A3BC3dCF1e0a3C1BFe882Dc83e">0xC7e69B66592f75A3BC3dCF1e0a3C1BFe882Dc83e</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateWLDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x25750ACdb8aB62111311873B7d60222293b1F509">0x25750ACdb8aB62111311873B7d60222293b1F509</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateXAGPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xE8dbD3FA1A46Bf0274990f560e6FdA60825Da92f">0xE8dbD3FA1A46Bf0274990f560e6FdA60825Da92f</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateXAUPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xe84350E38A7FD8177E2cf3e65C0392785A132C0C">0xe84350E38A7FD8177E2cf3e65C0392785A132C0C</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateXLMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x7F914Bb43882fAf35C18f85EbF273859caAd394E">0x7F914Bb43882fAf35C18f85EbF273859caAd394E</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateXMRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xfAC2072D19Dad763ba39378559164E3ad80DeCF6">0xfAC2072D19Dad763ba39378559164E3ad80DeCF6</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateXRPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xfC2030B9C1d8B170240770006D52E9F81Ecb4642">0xfC2030B9C1d8B170240770006D52E9F81Ecb4642</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateXTZPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x30BDCf2e1b12CE8389fcBaBB3CCcef29762ff6d9">0x30BDCf2e1b12CE8389fcBaBB3CCcef29762ff6d9</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateYFIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x92c5F7184ff19d6638b84F6E3C70BF420C886c87">0x92c5F7184ff19d6638b84F6E3C70BF420C886c87</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateZECPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2D09A023DbB4677596486aD23EA65D13D73Fd751">0x2D09A023DbB4677596486aD23EA65D13D73Fd751</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateZILPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xB3F2dF7142A483bfdF680d6DFbcaEBA3ac450c4C">0xB3F2dF7142A483bfdF680d6DFbcaEBA3ac450c4C</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketStateZRXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketState.sol">PerpsV2MarketState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x716f2C681eaaB0af3e500934eCFBBD9A9Bf0fD3e">0x716f2C681eaaB0af3e500934eCFBBD9A9Bf0fD3e</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketTRXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0897B2A0F15EFA488B4CbB9bcB44f30732E303e6">0x0897B2A0F15EFA488B4CbB9bcB44f30732E303e6</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketUMAPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xc26e5f30AD8B3bC626B88f87D23b1C011754d110">0xc26e5f30AD8B3bC626B88f87D23b1C011754d110</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketUNIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x595B25AD4caA9832dB2D2356c9e697692d64A5a6">0x595B25AD4caA9832dB2D2356c9e697692d64A5a6</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketUSDTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x5C3e7A416F3004212f93A05f4CB4c7c7Ad682CFC">0x5C3e7A416F3004212f93A05f4CB4c7c7Ad682CFC</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViews1INCHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x00cdC012bDD26801962b2FF877bF4B4Be4B5bE13">0x00cdC012bDD26801962b2FF877bF4B4Be4B5bE13</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsAAVEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x9A6690Eb972E25B6bac51C5EfAB7647Bc1b699f5">0x9A6690Eb972E25B6bac51C5EfAB7647Bc1b699f5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsADAPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xfC0f6E399A3cBd2b15b832FbcC21F32293157126">0xfC0f6E399A3cBd2b15b832FbcC21F32293157126</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsALGOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1f0Ded7598d82151df61a15BFfb05977E64454f7">0x1f0Ded7598d82151df61a15BFfb05977E64454f7</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsAPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x758d3e0aE9f5836afbb8727E275550e8671d7746">0x758d3e0aE9f5836afbb8727E275550e8671d7746</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsAPTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0AECf40653aAC5fF1da1916a2eBE3fc439014c90">0x0AECf40653aAC5fF1da1916a2eBE3fc439014c90</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsARBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xa641e31A7772c484AE505654a9E144583211e7d8">0xa641e31A7772c484AE505654a9E144583211e7d8</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsATOMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x45426deD580d431E9A143674a600595D3C11BB1E">0x45426deD580d431E9A143674a600595D3C11BB1E</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsAUDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x7AD92E8bE7404e0C4a4bBefb6B4FB7195D8C8247">0x7AD92E8bE7404e0C4a4bBefb6B4FB7195D8C8247</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsAVAXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x00a98D73193515f02fd4D67ffe5463c81A98988e">0x00a98D73193515f02fd4D67ffe5463c81A98988e</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsAXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x9EBbA62E0f553C9c78491F4113575adf8f0337f3">0x9EBbA62E0f553C9c78491F4113575adf8f0337f3</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsBALPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x783f3a7e0aAc4273E6631FB1865cc598793e16c2">0x783f3a7e0aAc4273E6631FB1865cc598793e16c2</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsBCHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x31DbBa66F9f9CC633074849e7BE355862bc39842">0x31DbBa66F9f9CC633074849e7BE355862bc39842</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsBLURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x8978d31228BDA7453D842f4FcBD52D6aB4ccC0b7">0x8978d31228BDA7453D842f4FcBD52D6aB4ccC0b7</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsBNBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x09f9F716aE8d26Db126e120F9Bbfd06615428058">0x09f9F716aE8d26Db126e120F9Bbfd06615428058</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0BeFda37686a53B0A7A817e58D98ed9f6f1aCf4d">0x0BeFda37686a53B0A7A817e58D98ed9f6f1aCf4d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsCELOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xfdc1d1F8a44184f57C9067ec4d19291622B78960">0xfdc1d1F8a44184f57C9067ec4d19291622B78960</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsCOMPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x10DD43Dca38b0978Dff0784E286fA09bc3356824">0x10DD43Dca38b0978Dff0784E286fA09bc3356824</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsCRVPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x4075A8F48c87BE9Ae230CB57C41436d8B5d5cC67">0x4075A8F48c87BE9Ae230CB57C41436d8B5d5cC67</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsDOGEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x65A8063Dbf6207ABDae8147695824019258BfE5F">0x65A8063Dbf6207ABDae8147695824019258BfE5F</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsDOTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xA88627BfF4FbEfB2e8EA11D2CbC32aFf573E47Eb">0xA88627BfF4FbEfB2e8EA11D2CbC32aFf573E47Eb</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsDYDXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x4E7aa202630a75741153E8dd65eD693D85745050">0x4E7aa202630a75741153E8dd65eD693D85745050</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsENJPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x563e2079468b009C24b2028dBF0E533687E73773">0x563e2079468b009C24b2028dBF0E533687E73773</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsEOSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x25581c8DCBe006D49757b51482c8831FaDeBFBba">0x25581c8DCBe006D49757b51482c8831FaDeBFBba</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsETCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3b11DAB2a0EAE40144DE750f41872CAb1409482B">0x3b11DAB2a0EAE40144DE750f41872CAb1409482B</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsETHBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xb541A602D3a4BfA719B7c16369fFa134fAd4e244">0xb541A602D3a4BfA719B7c16369fFa134fAd4e244</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xf2D9a9A2d79fFC36912bE87d504FA476A339E1Bb">0xf2D9a9A2d79fFC36912bE87d504FA476A339E1Bb</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsEURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xFa271598f5B8394e75Db81c25Ed48D591D6B4277">0xFa271598f5B8394e75Db81c25Ed48D591D6B4277</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsFILPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xbbBa72bb1F3e85BED842F37DA579d3506db57E1D">0xbbBa72bb1F3e85BED842F37DA579d3506db57E1D</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsFLOKIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x4BCC1fD14eaDD198750F0820FBd4f3b7B1Ff163B">0x4BCC1fD14eaDD198750F0820FBd4f3b7B1Ff163B</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsFLOWPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x35E3BdA371055942A8F6EF119756b3F0271b4b97">0x35E3BdA371055942A8F6EF119756b3F0271b4b97</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsFTMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0cE058D5FBa7203B1A90813E8ae1d4d1573972a5">0x0cE058D5FBa7203B1A90813E8ae1d4d1573972a5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsFXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xe386cE54698BC35D2C5C5c2862bd18A2027CD188">0xe386cE54698BC35D2C5C5c2862bd18A2027CD188</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsGBPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x31ACA2A5F2A077F1F2960A70991A751CA104a38b">0x31ACA2A5F2A077F1F2960A70991A751CA104a38b</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsGMXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x5b23d126002F9b3ECa163c71E6229Ab4CfAe0227">0x5b23d126002F9b3ECa163c71E6229Ab4CfAe0227</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsICPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xa7977cAABd4062FDc3fF1802f00b3265678287C6">0xa7977cAABd4062FDc3fF1802f00b3265678287C6</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsINJPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x7487DBFa722b331af636A99E2cdDA0913A7Ea1aa">0x7487DBFa722b331af636A99E2cdDA0913A7Ea1aa</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsKNCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xf4b110E5006A4Cb9615BD520Ed6a82b0aB0e5649">0xf4b110E5006A4Cb9615BD520Ed6a82b0aB0e5649</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsLDOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2f6BC0e372e0e5E101aC789235549a68a82b0E68">0x2f6BC0e372e0e5E101aC789235549a68a82b0E68</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsLINKPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xB65Ef66CD9Ad5BF2A26530242f638F9d47b8726b">0xB65Ef66CD9Ad5BF2A26530242f638F9d47b8726b</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsLTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0C6F8eA3C6c9124f937AF541a4C08656d4F1977e">0x0C6F8eA3C6c9124f937AF541a4C08656d4F1977e</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsMATICPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x111c50A90d493cd1D04F58d43Ce472A8edE2A2B5">0x111c50A90d493cd1D04F58d43Ce472A8edE2A2B5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsMAVPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xcd5D152CAb9B91d5EE46f456df86D9BF8df4449a">0xcd5D152CAb9B91d5EE46f456df86D9BF8df4449a</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsMKRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x5bd2FA198f0e4822f819E53c4e5342C357013C4c">0x5bd2FA198f0e4822f819E53c4e5342C357013C4c</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsNEARPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xA2bB9A7151cc65751e63F25b135453ddB78E7C2F">0xA2bB9A7151cc65751e63F25b135453ddB78E7C2F</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsONEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xA726D6f681ae1AB6Dc611f2ad24A8D600CbCe23F">0xA726D6f681ae1AB6Dc611f2ad24A8D600CbCe23F</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsOPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x7C7518149D56ad9fcfF2BD1406e74fadf278603C">0x7C7518149D56ad9fcfF2BD1406e74fadf278603C</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsPEPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xed536607DEb0528547c0C0903c943C1e85345a0e">0xed536607DEb0528547c0C0903c943C1e85345a0e</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsPERPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x968024f6856f2a32A1424897A7f5BCFBa79c76ba">0x968024f6856f2a32A1424897A7f5BCFBa79c76ba</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsRNDRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x88a2646FE013F6A2CaFE90eC3c9d983816Fd5109">0x88a2646FE013F6A2CaFE90eC3c9d983816Fd5109</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsRPLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x7E2282418f355f56986cC85270E87315633Dca93">0x7E2282418f355f56986cC85270E87315633Dca93</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsRUNEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x974Eb9322f5319079fcebF61D577D16A50b5519d">0x974Eb9322f5319079fcebF61D577D16A50b5519d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsSEIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xf55FdFCbcEF7E66A02A8beE3dDA0630c9EfbcC39">0xf55FdFCbcEF7E66A02A8beE3dDA0630c9EfbcC39</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsSHIBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xB3809f84e56E9d1115B4420D23029d3Bb68e2519">0xB3809f84e56E9d1115B4420D23029d3Bb68e2519</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsSOLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xCd69120b7bfA7b0999b8e27314370D765eccED8e">0xCd69120b7bfA7b0999b8e27314370D765eccED8e</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsSTETHETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x72039cBF90Ce971A46fe2F9943770AcDd9aD0FBc">0x72039cBF90Ce971A46fe2F9943770AcDd9aD0FBc</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsSTETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xB74056a20c9b3a4429bbCD9a67962C17b1526A69">0xB74056a20c9b3a4429bbCD9a67962C17b1526A69</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsSUIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x50E751c803b49c1B3628cfA07CCB789Fd6C4661C">0x50E751c803b49c1B3628cfA07CCB789Fd6C4661C</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsSUSHIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xec9Ae77028F15279D12CAC9C59085E8608da4091">0xec9Ae77028F15279D12CAC9C59085E8608da4091</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsTRXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xec81A1d5B5Dc69b7b16A6BFbCBe93447615Fd0AA">0xec81A1d5B5Dc69b7b16A6BFbCBe93447615Fd0AA</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsUMAPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x135F50dA290B5c564290Eea198aeDF55595af110">0x135F50dA290B5c564290Eea198aeDF55595af110</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsUNIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x7e1e2A5Cd2A22c97b26E25702c103feAc0CA28b5">0x7e1e2A5Cd2A22c97b26E25702c103feAc0CA28b5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsUSDTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x98b6082403D88128199C97cD9B8FbfA60201470b">0x98b6082403D88128199C97cD9B8FbfA60201470b</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsWLDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3b69c32EbAD8a675414E67854CDa3783E3bB033b">0x3b69c32EbAD8a675414E67854CDa3783E3bB033b</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsXAGPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xe0f40EFC5115C854975d89748d5656b86AfF904D">0xe0f40EFC5115C854975d89748d5656b86AfF904D</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsXAUPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x27C66346e7253B1036921E0A169BD9bA91968f2F">0x27C66346e7253B1036921E0A169BD9bA91968f2F</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsXLMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x430f7BeA08BA53FA8a8A641bB887cEF325f80EBC">0x430f7BeA08BA53FA8a8A641bB887cEF325f80EBC</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsXMRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xa4C3709247CD97dC132d7ad4a16ef908a4c9ce5D">0xa4C3709247CD97dC132d7ad4a16ef908a4c9ce5D</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsXRPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x6d83E8EC54832d6991f127A7e87179794030Aa0a">0x6d83E8EC54832d6991f127A7e87179794030Aa0a</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsXTZPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x723024639F2f0226e4308aB732b8E7e2FbAaBfF1">0x723024639F2f0226e4308aB732b8E7e2FbAaBfF1</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsYFIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xc08177E25f2d178Ee3c458F9A7a4Fbc2D84620e4">0xc08177E25f2d178Ee3c458F9A7a4Fbc2D84620e4</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsZECPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x7E8284db929908937F8DBedFa5b17F2EA29e79bB">0x7E8284db929908937F8DBedFa5b17F2EA29e79bB</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsZILPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xc98bD33EA81411FF0De0e66A6f1ad24803b41C38">0xc98bD33EA81411FF0De0e66A6f1ad24803b41C38</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketViewsZRXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketViews.sol">PerpsV2MarketViews.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0BB241B6980B63B0aBE11f131490DE745494caa0">0x0BB241B6980B63B0aBE11f131490DE745494caa0</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketWLDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x345cfF238693AB931d5283ff94459744B4936Fce">0x345cfF238693AB931d5283ff94459744B4936Fce</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketXAGPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x4e33bb607A40440a215c9E5Ac6755476A143c250">0x4e33bb607A40440a215c9E5Ac6755476A143c250</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketXAUPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xDEfDfd2E27D9D259427d08a429B6469f52b857e5">0xDEfDfd2E27D9D259427d08a429B6469f52b857e5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketXLMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xAd97d0bCef40772ABa8f7Fb2727a8eDcF413d3ED">0xAd97d0bCef40772ABa8f7Fb2727a8eDcF413d3ED</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketXMRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x30de915dC33E3370CC6ea07F8322824C615f958F">0x30de915dC33E3370CC6ea07F8322824C615f958F</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketXRPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0128e5022296d5a606Ae401995d71145e9aE23f1">0x0128e5022296d5a606Ae401995d71145e9aE23f1</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketXTZPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x95141EAa3891af731c81a6797098bD21B5cc185F">0x95141EAa3891af731c81a6797098bD21B5cc185F</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketYFIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x147Fd7a1800CA6B839b461bCBF9FAfE712E780F5">0x147Fd7a1800CA6B839b461bCBF9FAfE712E780F5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketZECPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3175B049138959840f5d949C9b5Ad6aE0e130875">0x3175B049138959840f5d949C9b5Ad6aE0e130875</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketZILPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1c41D856bB7Ba4AA43A4Db0aF34D3e84aeFD2669">0x1c41D856bB7Ba4AA43A4Db0aF34D3e84aeFD2669</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2MarketZRXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2Market.sol">PerpsV2Market.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xA45C1077bB7EBFa50c2c72CE5594Ea8Dc1843C4C">0xA45C1077bB7EBFa50c2c72CE5594Ea8Dc1843C4C</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2OffchainDelayedOrderAAVEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol">PerpsV2MarketDelayedOrdersOffchain.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xf3c60f60Ee2F981f107B6E19c784653dAe912bdd">0xf3c60f60Ee2F981f107B6E19c784653dAe912bdd</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2OffchainDelayedOrderAPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol">PerpsV2MarketDelayedOrdersOffchain.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xf6f173C31B3a24Fbe23cC7f30D5F98fe929172DE">0xf6f173C31B3a24Fbe23cC7f30D5F98fe929172DE</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2OffchainDelayedOrderATOMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol">PerpsV2MarketDelayedOrdersOffchain.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x79754B07f0a0816dD32f128f10537D27032045E9">0x79754B07f0a0816dD32f128f10537D27032045E9</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2OffchainDelayedOrderAUDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol">PerpsV2MarketDelayedOrdersOffchain.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xdfbE490fD9eB03f842CF065Fd220ac3fCb3e58C8">0xdfbE490fD9eB03f842CF065Fd220ac3fCb3e58C8</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2OffchainDelayedOrderAVAXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol">PerpsV2MarketDelayedOrdersOffchain.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x14b1568725aeD20b5CD76e3E784F43310738a38b">0x14b1568725aeD20b5CD76e3E784F43310738a38b</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2OffchainDelayedOrderAXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol">PerpsV2MarketDelayedOrdersOffchain.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xb71a41cB1B8e0E60B850a43249e326E80fea6de5">0xb71a41cB1B8e0E60B850a43249e326E80fea6de5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2OffchainDelayedOrderBNBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol">PerpsV2MarketDelayedOrdersOffchain.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xC8e7252e3c4b2A33db51AdC68331423268b1d939">0xC8e7252e3c4b2A33db51AdC68331423268b1d939</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2OffchainDelayedOrderBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol">PerpsV2MarketDelayedOrdersOffchain.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x9335fAb54147265A4Cce5333455adceA2b241194">0x9335fAb54147265A4Cce5333455adceA2b241194</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2OffchainDelayedOrderDOGEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol">PerpsV2MarketDelayedOrdersOffchain.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x694A632cCb1231FFaF1c64cbAB96fc0e8d4577e2">0x694A632cCb1231FFaF1c64cbAB96fc0e8d4577e2</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2OffchainDelayedOrderDYDXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol">PerpsV2MarketDelayedOrdersOffchain.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0800ee8341119E2d47aE33e30f6843cdaB677f54">0x0800ee8341119E2d47aE33e30f6843cdaB677f54</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2OffchainDelayedOrderETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol">PerpsV2MarketDelayedOrdersOffchain.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x4Ce0D35AcE88e88599b3ca5DC613029D6240274d">0x4Ce0D35AcE88e88599b3ca5DC613029D6240274d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2OffchainDelayedOrderEURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol">PerpsV2MarketDelayedOrdersOffchain.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x19F9D73e405D93cb77D327249D2f747CF9636c9B">0x19F9D73e405D93cb77D327249D2f747CF9636c9B</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2OffchainDelayedOrderFLOWPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol">PerpsV2MarketDelayedOrdersOffchain.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xd1210dDA1b9b9c667e6FCCb0C09bC36De6B48B8b">0xd1210dDA1b9b9c667e6FCCb0C09bC36De6B48B8b</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2OffchainDelayedOrderFTMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol">PerpsV2MarketDelayedOrdersOffchain.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xc52a7D57B3EBFee52b7B8c99fE3Ab66C0Bdf1Fd5">0xc52a7D57B3EBFee52b7B8c99fE3Ab66C0Bdf1Fd5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2OffchainDelayedOrderGBPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol">PerpsV2MarketDelayedOrdersOffchain.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xe762dc242408530D37f1a57dbF627e7DE0eE8415">0xe762dc242408530D37f1a57dbF627e7DE0eE8415</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2OffchainDelayedOrderLINKPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol">PerpsV2MarketDelayedOrdersOffchain.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xEa599A48D290123148ba9128e7941D6C86EE5C6d">0xEa599A48D290123148ba9128e7941D6C86EE5C6d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2OffchainDelayedOrderMATICPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol">PerpsV2MarketDelayedOrdersOffchain.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x92DC5545D8Febc241D7942e1bB9656009b063393">0x92DC5545D8Febc241D7942e1bB9656009b063393</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2OffchainDelayedOrderNEARPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol">PerpsV2MarketDelayedOrdersOffchain.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x59D5c61456462e8D5aE57F6B0422B3c6D8629FFC">0x59D5c61456462e8D5aE57F6B0422B3c6D8629FFC</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2OffchainDelayedOrderOPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol">PerpsV2MarketDelayedOrdersOffchain.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xe64beb261C5CBAA761c997Fdb17a6906b10D8792">0xe64beb261C5CBAA761c997Fdb17a6906b10D8792</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2OffchainDelayedOrderSOLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol">PerpsV2MarketDelayedOrdersOffchain.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x4967d1987930b2CD183dAB4B6C40B8745DD2eba1">0x4967d1987930b2CD183dAB4B6C40B8745DD2eba1</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2OffchainDelayedOrderUNIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol">PerpsV2MarketDelayedOrdersOffchain.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0e9A31335A17a7Da18989753290aA1199ECfe89f">0x0e9A31335A17a7Da18989753290aA1199ECfe89f</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2OffchainDelayedOrderXAGPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol">PerpsV2MarketDelayedOrdersOffchain.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xBE14F44dc2DE3A905019f06e5279c60e45102659">0xBE14F44dc2DE3A905019f06e5279c60e45102659</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2OffchainDelayedOrderXAUPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol">PerpsV2MarketDelayedOrdersOffchain.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x55b86E086BA3f80D674F31fEE174DE9c10B758b8">0x55b86E086BA3f80D674F31fEE174DE9c10B758b8</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2Proxy1INCHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x98D9C1A153a8396db8D928e5a375560d72961852">0x98D9C1A153a8396db8D928e5a375560d72961852</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyAAVEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3410215D8A0BD57dAc5911785F2A832402D5c828">0x3410215D8A0BD57dAc5911785F2A832402D5c828</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyADAPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xa28bd9971a920563828E3e26681Cb4820A829300">0xa28bd9971a920563828E3e26681Cb4820A829300</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyALGOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xB4601F5A308071f0583C3F5D481B29Da63287ff0">0xB4601F5A308071f0583C3F5D481B29Da63287ff0</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyAPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xeff373efBD352531F680575796AE14764bE0391B">0xeff373efBD352531F680575796AE14764bE0391B</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyAPTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1E236dA716cbB7bC6C4246b8b07263BEb7522f70">0x1E236dA716cbB7bC6C4246b8b07263BEb7522f70</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyARBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xa101C726335bDA98E5Fd73967B31063D5aa48aD8">0xa101C726335bDA98E5Fd73967B31063D5aa48aD8</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyATOMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xcCdc541a12CA359216913c1893C080d951874346">0xcCdc541a12CA359216913c1893C080d951874346</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyAUDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x95b78e2E07090587754f3088Ef8a8232f1Ab7E47">0x95b78e2E07090587754f3088Ef8a8232f1Ab7E47</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyAVAXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xe140356AB1F0558e020610C9C6BccdAA4FDDE2f4">0xe140356AB1F0558e020610C9C6BccdAA4FDDE2f4</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyAXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x9CE0556a563f18AeA0E89F407B0b1710F095956f">0x9CE0556a563f18AeA0E89F407B0b1710F095956f</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyBALPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x493DbABc3e2173463A51a4d7a8c25009cA105D59">0x493DbABc3e2173463A51a4d7a8c25009cA105D59</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyBCHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x7de607f45ea85512689566D786e513aF384D6CBb">0x7de607f45ea85512689566D786e513aF384D6CBb</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyBLURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xA21e82290b468CC3A26319132E1f382004E83a76">0xA21e82290b468CC3A26319132E1f382004E83a76</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyBNBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x307072038D47bAE97CaE56C0eA87F2a5f0CD8389">0x307072038D47bAE97CaE56C0eA87F2a5f0CD8389</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xd5844EA3701a4507C27ebc5EBA733E1Aa2915B31">0xd5844EA3701a4507C27ebc5EBA733E1Aa2915B31</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyCELOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x18ceb55c8f4cb4Bb4d0285A28bc60dD4deC05719">0x18ceb55c8f4cb4Bb4d0285A28bc60dD4deC05719</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyCOMPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xA678885BcED8d184132eB35377b5D5927a41d597">0xA678885BcED8d184132eB35377b5D5927a41d597</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyCRVPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xF1c1862101916d19d3EF7721B09f02854EAc1266">0xF1c1862101916d19d3EF7721B09f02854EAc1266</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyDOGEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3A4D5262b10C670a06550FCf7346cd408343B3FB">0x3A4D5262b10C670a06550FCf7346cd408343B3FB</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyDOTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xC069D9cb017af5697eA33C6fcEd0DBAa1F706198">0xC069D9cb017af5697eA33C6fcEd0DBAa1F706198</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyDYDXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xb97e868a340BA00C10557c234C9F17cC41B0f667">0xb97e868a340BA00C10557c234C9F17cC41B0f667</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyENJPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2E7d38c390fA8aB9bE5fFeACB29160b79Fa50F27">0x2E7d38c390fA8aB9bE5fFeACB29160b79Fa50F27</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyEOSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xbBb1d14d35D0247E2b833cab54e8E8B4a71029c3">0xbBb1d14d35D0247E2b833cab54e8E8B4a71029c3</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyETCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2FBB6cbe38889Dd11b7759C890079396e2e58334">0x2FBB6cbe38889Dd11b7759C890079396e2e58334</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyETHBTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x52636AfbA57448f4A4a17c2BD0D629F64735f0A1">0x52636AfbA57448f4A4a17c2BD0D629F64735f0A1</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x111BAbcdd66b1B60A20152a2D3D06d36F8B5703c">0x111BAbcdd66b1B60A20152a2D3D06d36F8B5703c</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyEURPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x9C54994933205E33628A8870c05AFF0878b1A56b">0x9C54994933205E33628A8870c05AFF0878b1A56b</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyFILPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xEC9AB8399E4Ba4fcb7E03A6cc5d5Dd485b72fC85">0xEC9AB8399E4Ba4fcb7E03A6cc5d5Dd485b72fC85</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyFLOKIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xB9E66de34695c790972F7D865b45D2A0b08a2356">0xB9E66de34695c790972F7D865b45D2A0b08a2356</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyFLOWPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xcFA34059b55E1a1c820e4D62A6CA4f8e00522eBB">0xcFA34059b55E1a1c820e4D62A6CA4f8e00522eBB</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyFTMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x70362529cCfF83f586EB48e978eF3b60384cE050">0x70362529cCfF83f586EB48e978eF3b60384cE050</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyFXSPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xeC8CD1e4B391a4D90bD0D44fD1C163f2Dd9A8182">0xeC8CD1e4B391a4D90bD0D44fD1C163f2Dd9A8182</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyGBPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x534181B37bdaFdD1E28104Bc5117184F40e1056F">0x534181B37bdaFdD1E28104Bc5117184F40e1056F</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyGMXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x662Ce20c34f9Eff955bADbdcFA7641D095a96252">0x662Ce20c34f9Eff955bADbdcFA7641D095a96252</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyICPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xc02A7b898096D197Aedbd028aDa1dB6f8F50B469">0xc02A7b898096D197Aedbd028aDa1dB6f8F50B469</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyINJPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x584576Cf989c0Aac6cC059102E8E70Ec87d1a1F2">0x584576Cf989c0Aac6cC059102E8E70Ec87d1a1F2</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyKNCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xa12BE8272bBf3138A8cbc2a2C118915192BE1797">0xa12BE8272bBf3138A8cbc2a2C118915192BE1797</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyLDOPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1DB4EBe25E1081487D89492a8b7fd38f0CBA22Fa">0x1DB4EBe25E1081487D89492a8b7fd38f0CBA22Fa</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyLINKPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x6141dcfF3494921e1C4Cdb115daD20C6656f6EFA">0x6141dcfF3494921e1C4Cdb115daD20C6656f6EFA</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyLTCPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xd2e7D43f0A4c482DAb4cB1E76EAD47Dc7B79Da4B">0xd2e7D43f0A4c482DAb4cB1E76EAD47Dc7B79Da4B</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyMATICPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x7bBEa20899d358ed6d877f32af1BCb525a5fCF31">0x7bBEa20899d358ed6d877f32af1BCb525a5fCF31</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyMAVPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x5DedE7103b2205545aF09a6e243126D60801D14F">0x5DedE7103b2205545aF09a6e243126D60801D14F</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyMKRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x91aE32606C8929769AFd54397F6515b9509f3EBa">0x91aE32606C8929769AFd54397F6515b9509f3EBa</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyNEARPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xf503e527854b510C1952425d4b61c6bba40028CE">0xf503e527854b510C1952425d4b61c6bba40028CE</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyONEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x653312A4de349a3E8F752794285857665A961373">0x653312A4de349a3E8F752794285857665A961373</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyOPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x4926222EDDa82965Aa08080f281928f8cba5922A">0x4926222EDDa82965Aa08080f281928f8cba5922A</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyPEPEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0E7C0B288C14E29eb3125C0812687E1d4F14F6bC">0x0E7C0B288C14E29eb3125C0812687E1d4F14F6bC</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyPERPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x945e9913f1E31E6a8A73fad220899B96B854A77A">0x945e9913f1E31E6a8A73fad220899B96B854A77A</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyRNDRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1455B8D6E727e71995e638166394A79aD2AC3558">0x1455B8D6E727e71995e638166394A79aD2AC3558</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyRPLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x452D1e4960d330fDE2B5D7Ec94dCC52F0608D78e">0x452D1e4960d330fDE2B5D7Ec94dCC52F0608D78e</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyRUNEPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x4D96363516F75f597719662Da273A6D6fC5BB109">0x4D96363516F75f597719662Da273A6D6fC5BB109</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxySEIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x035A18d0D7c6E29BB6cabB459C1d1ccCdBfe77A2">0x035A18d0D7c6E29BB6cabB459C1d1ccCdBfe77A2</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxySHIBPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xBF0dEA3A088bAdd3A40ef8A0C5F148CDB686AA6F">0xBF0dEA3A088bAdd3A40ef8A0C5F148CDB686AA6F</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxySOLPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x62068eBDCEbcB0eB984aBfEa4c7f9A244050e0Ca">0x62068eBDCEbcB0eB984aBfEa4c7f9A244050e0Ca</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxySTETHETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3A512e9050EA62BF4444b12ad2B066c03384d7b3">0x3A512e9050EA62BF4444b12ad2B066c03384d7b3</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxySTETHPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x896dEc99176a0fc3160CB5796ADe25ACe8f2A7D4">0x896dEc99176a0fc3160CB5796ADe25ACe8f2A7D4</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxySUIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xCE09B4b71F46cC6Fa9b137943aE1803395A6B2fC">0xCE09B4b71F46cC6Fa9b137943aE1803395A6B2fC</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxySUSHIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x64b9F72F7D5a78B597A108aaE5fE2dCB17a6B1F3">0x64b9F72F7D5a78B597A108aaE5fE2dCB17a6B1F3</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyTRXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xB2A2a1Cf6f59Cc711Eb2eC81765aC65e4e4bB3f5">0xB2A2a1Cf6f59Cc711Eb2eC81765aC65e4e4bB3f5</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyUMAPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xf31C13ef6D7B6De0902a1dD0B82723AF1445BCBf">0xf31C13ef6D7B6De0902a1dD0B82723AF1445BCBf</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyUNIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xaF11B4281259D7Ae31F945a2911Ba75347C2799d">0xaF11B4281259D7Ae31F945a2911Ba75347C2799d</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyUSDTPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x90cCe6Ea3c6CE1280A679E2c0007A2bA4Ae0E31F">0x90cCe6Ea3c6CE1280A679E2c0007A2bA4Ae0E31F</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyWLDPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x843E61b441f9c7Da31495227F9914B9053f2A043">0x843E61b441f9c7Da31495227F9914B9053f2A043</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyXAGPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x78D1232449387571D652E2a893DC0feaC6E92436">0x78D1232449387571D652E2a893DC0feaC6E92436</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyXAUPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xcC312F5Bac1C36CC70AbcbE76De913633Af88FFB">0xcC312F5Bac1C36CC70AbcbE76De913633Af88FFB</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyXLMPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x293a54bA6928B70591c201D46D4866c843A288E9">0x293a54bA6928B70591c201D46D4866c843A288E9</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyXMRPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x915074a4193A703e10fa73CE605F3773B2f522A0">0x915074a4193A703e10fa73CE605F3773B2f522A0</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyXRPPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xa649754A8Ad0Be3fa745A592aa435bD4F9908a1a">0xa649754A8Ad0Be3fa745A592aa435bD4F9908a1a</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyXTZPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x27166831c59156CC5bB560474cf52A59F3187228">0x27166831c59156CC5bB560474cf52A59F3187228</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyYFIPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xd2AB53d5D618c16801D4Dc018Dee8aE6B902BA01">0xd2AB53d5D618c16801D4Dc018Dee8aE6B902BA01</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyZECPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2c936245aE304C12492e2fD11f9f6ca811Dca6B2">0x2c936245aE304C12492e2fD11f9f6ca811Dca6B2</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyZILPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xeBBF262CBF76BD434873C278C05249A863ed93f3">0xeBBF262CBF76BD434873C278C05249A863ed93f3</a>
                </td>
              </tr>
              <tr>
                <td>PerpsV2ProxyZRXPERP</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyPerpsV2.sol">ProxyPerpsV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2E6c40D36fbAe7c924d1Bd9c673F0de8a3734698">0x2E6c40D36fbAe7c924d1Bd9c673F0de8a3734698</a>
                </td>
              </tr>
              <tr>
                <td>ProxyFeePool</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x4Fa8252a6C60C891BE35Db51F1F4F5973b88dF98">0x4Fa8252a6C60C891BE35Db51F1F4F5973b88dF98</a>
                </td>
              </tr>
              <tr>
                <td><span style="color: #AAA; text-decoration: line-through">ProxySynthetix</span><sup>Use ProxyERC20</sup></td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2E5ED97596a8368EB9E44B1f3F25B2E813845303">0x2E5ED97596a8368EB9E44B1f3F25B2E813845303</a>
                </td>
              </tr>
              <tr>
                <td>ProxysBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x23c7a77D22Fc1274eCecB703f74699500db106E6">0x23c7a77D22Fc1274eCecB703f74699500db106E6</a>
                </td>
              </tr>
              <tr>
                <td>ProxysETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x6c3856488e664C6b0380AAEfBFD1c28cd6727eC8">0x6c3856488e664C6b0380AAEfBFD1c28cd6727eC8</a>
                </td>
              </tr>
              <tr>
                <td><span style="color: #AAA; text-decoration: line-through">ProxysUSD</span><sup>Use ProxyERC20sUSD</sup></td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xeBaEAAD9236615542844adC5c149F86C36aD1136">0xeBaEAAD9236615542844adC5c149F86C36aD1136</a>
                </td>
              </tr>
              <tr>
                <td>ReadProxyAddressResolver</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ReadProxy.sol">ReadProxy.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x9Fc84992dF5496797784374B810E04238728743d">0x9Fc84992dF5496797784374B810E04238728743d</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrowV2</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/ImportableRewardEscrowV2.sol">ImportableRewardEscrowV2.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xF6C92Ad11fa67b7b685aDb435FbE932c049B670c">0xF6C92Ad11fa67b7b685aDb435FbE932c049B670c</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrowV2Storage</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/RewardEscrowV2Storage.sol">RewardEscrowV2Storage.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x0C90f734a1c716540549D22509578331061CBff2">0x0C90f734a1c716540549D22509578331061CBff2</a>
                </td>
              </tr>
              <tr>
                <td>RewardsDistribution</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/RewardsDistribution.sol">RewardsDistribution.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xb12704F8BddA7CF3eBa5F9A463404D4ba5d0e282">0xb12704F8BddA7CF3eBa5F9A463404D4ba5d0e282</a>
                </td>
              </tr>
              <tr>
                <td>SafeDecimalMath</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SafeDecimalMath.sol">SafeDecimalMath.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x6Bb3B18694A6849654379F040DcB112E07da9DC7">0x6Bb3B18694A6849654379F040DcB112E07da9DC7</a>
                </td>
              </tr>
              <tr>
                <td>SignedSafeDecimalMath</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SignedSafeDecimalMath.sol">SignedSafeDecimalMath.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x6d2eA159C128eC361a9a23b1456Ef0aAD0bec46b">0x6d2eA159C128eC361a9a23b1456Ef0aAD0bec46b</a>
                </td>
              </tr>
              <tr>
                <td>SynthRedeemer</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SynthRedeemer.sol">SynthRedeemer.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x2A8338199D802620B4516a557195a498595d7Eb6">0x2A8338199D802620B4516a557195a498595d7Eb6</a>
                </td>
              </tr>
              <tr>
                <td>SynthUtil</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SynthUtil.sol">SynthUtil.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xC647DecC9c4f9162dBF77E4367199F5ED0950355">0xC647DecC9c4f9162dBF77E4367199F5ED0950355</a>
                </td>
              </tr>
              <tr>
                <td>Synthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MintableSynthetix.sol">MintableSynthetix.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xCAe990698AAA1929Ed3dCE882239AB5C2Be5C580">0xCAe990698AAA1929Ed3dCE882239AB5C2Be5C580</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixBridgeToBase</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SynthetixBridgeToBase.sol">SynthetixBridgeToBase.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xD2b3F0Ea40dB68088415412b0043F37B3088836D">0xD2b3F0Ea40dB68088415412b0043F37B3088836D</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixDebtShare</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SynthetixDebtShare.sol">SynthetixDebtShare.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x3c710172e7f95aCAaDeD243982a90F8F235fF9f1">0x3c710172e7f95aCAaDeD243982a90F8F235fF9f1</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixEscrow</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SynthetixEscrow.sol">SynthetixEscrow.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xFaFd00D0CaA6D5cd5161c5C1F18AaB24942aCAFA">0xFaFd00D0CaA6D5cd5161c5C1F18AaB24942aCAFA</a>
                </td>
              </tr>
              <tr>
                <td>SynthsBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xFdB84151Bfc76857398BC3efd8d1b32A32c571f2">0xFdB84151Bfc76857398BC3efd8d1b32A32c571f2</a>
                </td>
              </tr>
              <tr>
                <td>SynthsETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x7D442107e2AD048C02F06332C918b1F81bd6850d">0x7D442107e2AD048C02F06332C918b1F81bd6850d</a>
                </td>
              </tr>
              <tr>
                <td>SynthsUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xfDa54191F3C0999dbf4c193dEF1B83EDD3e3Ba39">0xfDa54191F3C0999dbf4c193dEF1B83EDD3e3Ba39</a>
                </td>
              </tr>
              <tr>
                <td>SystemSettings</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SystemSettings.sol">SystemSettings.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x418B1025f74E8BB889D35e9F37205d587743Ec9b">0x418B1025f74E8BB889D35e9F37205d587743Ec9b</a>
                </td>
              </tr>
              <tr>
                <td>SystemSettingsLib</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SystemSettingsLib.sol">SystemSettingsLib.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x6B2554A8349319597D1a8a36DeeD07Fb7c70400d">0x6B2554A8349319597D1a8a36DeeD07Fb7c70400d</a>
                </td>
              </tr>
              <tr>
                <td>SystemStatus</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/SystemStatus.sol">SystemStatus.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x9D89fF8C6f3CC22F4BbB859D0F85FB3a4e1FA916">0x9D89fF8C6f3CC22F4BbB859D0F85FB3a4e1FA916</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateSynthetix</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/LegacyTokenState.sol">LegacyTokenState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0xB9525040A5B6a2d9e013240397079Fd1320559C4">0xB9525040A5B6a2d9e013240397079Fd1320559C4</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesBTC</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x716044850a48DeD57B0581298018D2d8502B1091">0x716044850a48DeD57B0581298018D2d8502B1091</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesETH</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x1557769Cf42EE9e7c8D98CCFE0b454c2DEC125B6">0x1557769Cf42EE9e7c8D98CCFE0b454c2DEC125B6</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesUSD</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x43CA5848a2957C0718D240c02A4381A90111591e">0x43CA5848a2957C0718D240c02A4381A90111591e</a>
                </td>
              </tr>
              <tr>
                <td>TradingRewards</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/TradingRewards.sol">TradingRewards.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x08fb827Ee5A00232aDe347964225Ba4344665eD5">0x08fb827Ee5A00232aDe347964225Ba4344665eD5</a>
                </td>
              </tr>
              <tr>
                <td>WrapperFactory</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v2.94.1/contracts/WrapperFactory.sol">WrapperFactory.sol</a></td>
                <td><a target="_blank" href="https://goerli-optimism.etherscan.io/address/0x507cbddCF4e01396981190F0Ced8Ea37ca25b452">0x507cbddCF4e01396981190F0Ced8Ea37ca25b452</a>
                </td>
              </tr></table>

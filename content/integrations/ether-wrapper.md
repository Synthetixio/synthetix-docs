# Ether Wrapper: Minting sETH with Ether directly

The EtherWrapper, introduced with [SIP-112](https://sips.synthetix.io/sips/sip-112), brings with it the ability to mint `sETH` directly using either `ETH` in the `NativeEtherWrapper` or `WETH` in the `EtherWrapper` itself.

!!! tip "Tip: Native Ether"

    As the `EtherWrapper` has been designed for both L1 and L2 Optimism, it supports WETH (wrapped ether) by default. Thus when using the `NativeEtherWrapper` contract on L1, the Ether is simply wrapped on it's way and as such to see the total amount of Ether in both wrappers, simply look at the WETH holdings of https://contracts.synthetix.io/EtherWrapper.

## Using Wrapper Ether (all environments)

**Destination contract (address & ABI):** [`EtherWrapper`](https://contracts.synthetix.io/EtherWrapper)

### Views

- [`burnFeeRate`](/contracts/source/contracts/EtherWrapper/#burnfeerate) The percentage (stored as a decimal with 18 places) of sETH that will be deducted when burning
- [`capacity`](/contracts/source/contracts/EtherWrapper/#capacity) The remaining amount of WETH that can be sent to the `EtherWrapper`
- [`mintFeeRate`](/contracts/source/contracts/EtherWrapper/#mintfeerate) The percentage (stored as a decimal with 18 places) of sETH that will be deducted when minting
- [`getReserves`](/contracts/source/contracts/EtherWrapper/#getreserves) The amount of WETH held in the `EtherWrapper` (this includes all Ether that was sent via the `NativeEtherWrapper` which wraps to `WETH` first)

### Mint sETH with WETH

##### Methods

- [`mint(uint amount)`](/contracts/source/contracts/EtherWrapper/#mint)

!!! tip "WETH Approval Required to Mint"

    `EtherWrapper` needs to be approved to spend the user's `WETH` (as it needs to send it to itself for payment)

##### Events Emitted

For each mint, among other events, one primary event will be emitted:

| name                                                         | emitted on     | `address account` | `uint principal`                                                                                                                                                        | `uint fee`                                                                                                        | `uint amountIn`      |
| ------------------------------------------------------------ | -------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------- |
| [`Minted`](/contracts/source/contracts/EtherWrapper/#minted) | `EtherWrapper` | `msg.sender`      | The `amount` minus the `fee` (or the remaining [`capacity`](/contracts/source/contracts/EtherWrapper/#capacity) of the EtherWrapper if `amount` would reach the limit.) | the fee in `sETH` that is deducted via the [`mintFeeRate`](/contracts/source/contracts/EtherWrapper/#mintfeerate) | the total `amountIn` |

##### Example Transactions on Mainnet

- `EtherWrapper.mint(6e18)` <a target=_blank href="https://dashboard.tenderly.co/tx/main/0x7831fe5a754f91cef882f0bb61859c1bffbfc6e28289e25c934a915882410e7f/logs"><img src="https://tenderly.co/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0x7831fe5a754f91cef882f0bb61859c1bffbfc6e28289e25c934a915882410e7f#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a>

### Burn sETH to WETH

#### Contract

**Destination contract (address & ABI):** [`EtherWrapper`](https://contracts.synthetix.io/EtherWrapper)

#### Methods

- [`burn(uint amount)`](/contracts/source/contracts/EtherWrapper/#burn)

!!! tip "No Approval Required to Burn"

    `EtherWrapper` does NOT need approval to burn, as `sETH` can be burned in-place directly using protected functionality.

#### Events Emitted

For each burn, among other events, two will be emitted:

| name                                                         | emitted on     | `address account` | `uint principal`                                                                                                                                   | `uint fee`                                                                                                        | `uint amountIn`      |
| ------------------------------------------------------------ | -------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------- |
| [`Burned`](/contracts/source/contracts/EtherWrapper/#burned) | `EtherWrapper` | `msg.sender`      | The `amount` minus the `fee` (or the remaining reserves in the contract ([`getReserves`](/contracts/source/contracts/EtherWrapper/#getreserves)).) | the fee in `sETH` that is deducted via the [`burnFeeRate`](/contracts/source/contracts/EtherWrapper/#burnfeerate) | the total `amountIn` |

## Using native Ether (L1 only)

**Destination contract (address & ABI):** [`NativeEtherWrapper`](https://contracts.synthetix.io/NativeEtherWrapper)

### Views

- (Use `EtherWrapper` views above - the `NativeEtherWrapper` is simply a convenience contract that wraps ETH to WETH then forwards the WETH to the `EtherWrapper`)

### Mint sETH with ETH

#### Methods

- [`mint() payable`](/contracts/source/contracts/NativeEtherWrapper/#mint)

!!! tip "No Approval Requied"

    `NativeEtherWrapper` does not need approval to mint sETH as it accepts `payable` Ether

#### Events Emitted

For each mint, among other events, two will be emitted:

| name                                                         | emitted on     | `address account` | `uint principal`                                                                                                                                                        | `uint fee`                                                                                                        | `uint amountIn`                                                         |
| ------------------------------------------------------------ | -------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [`Minted`](/contracts/source/contracts/EtherWrapper/#minted) | `EtherWrapper` | `msg.sender`      | The `amount` minus the `fee` (or the remaining [`capacity`](/contracts/source/contracts/EtherWrapper/#capacity) of the EtherWrapper if `amount` would reach the limit.) | the fee in `sETH` that is deducted via the [`mintFeeRate`](/contracts/source/contracts/EtherWrapper/#mintfeerate) | the amount of Ether sent with the transaction (the transaction `value`) |

| name                                                               | emitted on           | `address account` | `uint amountIn`      |
| ------------------------------------------------------------------ | -------------------- | ----------------- | -------------------- |
| [`Minted`](/contracts/source/contracts/NativeEtherWrapper/#minted) | `NativeEtherWrapper` | `msg.sender`      | the total `amountIn` |

#### Example Transactions on Mainnet

- `NativeEtherWrapper.mint(1e18)` <a target=_blank href="https://dashboard.tenderly.co/tx/main/0x4602c526f6e7602af0e91719e96bcd073256e18acc1aea8e0fa03bfb578d4e54/logs"><img src="https://tenderly.co/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0x4602c526f6e7602af0e91719e96bcd073256e18acc1aea8e0fa03bfb578d4e54#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a>

### Burn sETH to ETH

#### Methods

- [`burn(uint amount)`](/contracts/source/contracts/NativeEtherWrapper/#burn)

!!! tip "sETH Approval Required to Burn"

    `NativeEtherWrapper` needs to be approved to spend the user's `sETH` (as it needs to send it to itself in order to invoke `EtherWrapper.burn()`)

#### Events Emitted

For each burn, among other events, two will be emitted:

| name                                                         | emitted on     | `address account` | `uint principal`                                                                                                                                   | `uint fee`                                                                                                        | `uint amountIn`      |
| ------------------------------------------------------------ | -------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------- |
| [`Burned`](/contracts/source/contracts/EtherWrapper/#burned) | `EtherWrapper` | `msg.sender`      | The `amount` minus the `fee` (or the remaining reserves in the contract ([`getReserves`](/contracts/source/contracts/EtherWrapper/#getreserves)).) | the fee in `sETH` that is deducted via the [`burnFeeRate`](/contracts/source/contracts/EtherWrapper/#burnfeerate) | the total `amountIn` |

| name                                                               | emitted on           | `address account` | `uint amountIn`      |
| ------------------------------------------------------------------ | -------------------- | ----------------- | -------------------- |
| [`Burned`](/contracts/source/contracts/NativeEtherWrapper/#burned) | `NativeEtherWrapper` | `msg.sender`      | the total `amountIn` |

#### Example Transactions on Mainnet

- `NativeEtherWrapper.burn(0.98e18)` <a target=_blank href="https://dashboard.tenderly.co/tx/main/0xd2d19cc65e3cdffe9d84947a21b647e8440a743fdea33c17fc1635debffd9d64/logs"><img src="https://tenderly.co/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0xd2d19cc65e3cdffe9d84947a21b647e8440a743fdea33c17fc1635debffd9d64#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a>

---

#### Code Snippets

!!! example "Exchanging ETH for sUSD"

    === "Synthetix JS (with ethers.js)"
        ```javascript hl_lines="24 25 26 27 28"
        // npm install @synthetix/contracts-interface

        // For node environments:
        const { synthetix } = require('@synthetixio/contracts-interface');

        // For others, see the contracts-interface README:
        // https://github.com/Synthetixio/js-monorepo/tree/master/packages/contracts-interface
        const provider = ethers.providers.getDefaultProvider('sepolia');

        // create a signer with a provider attached
        const signer = new ethers.Wallet(
          // just a dummy sepolia wallet with a little keth from the faucet
          '0xa0d951c494421559c63089093b020cf2f7aac003c916967dc36e989bc695222e',
          provider
        );

        // and then instantiate synthetix with the signer
        const snxjs = synthetix({ network: 'sepolia', signer });

        (async () => {
          try {

          // mint 0.01 sETH via the NativeEtherWrapper
          const response = await snxjs.contracts.NativeEtherWrapper.mint({
            value: parseEther('0.01'),
            gasPrice: parseUnits('5', 'gwei'),
            gasLimit: 500e3,
          });
          console.log('Submitted', response.hash);

          await response.wait();
          console.log('Mined', `https://etherscan.io/tx/${response.hash}`);

        })();
        ```

    === "Solidity"
        ```solidity hl_lines="26"
        pragma solidity 0.5.16;

        import "synthetix/contracts/interfaces/IAddressResolver.sol";
        import "synthetix/contracts/interfaces/IEtherWrapper.sol";

        contract MyContract {

          // This should be instantiated with our ReadProxyAddressResolver
          // it's a ReadProxy that won't change, so safe to code it here without a setter
          // see https://docs.synthetix.io/addresses for addresses in mainnet and testnets
          IAddressResolver public synthetixResolver;

          constructor(IAddressResolver _snxResolver) public {
              synthetixResolver = _snxResolver;
          }

          function mintsETH() payable external {
            IEtherWrapper nativeEtherWrapper = synthetixResolver.requireAndGetAddress("NativeEtherWrapper", "NativeEtherWrapper is missing from Synthetix resolver");

            IEtherWrapper etherWrapper = synthetixResolver.requireAndGetAddress("EtherWrapper", "EtherWrapper is missing from Synthetix resolver");

            // this will be checked in the transaction below, but added here as an example
            require(etherWrapper.capacity() >= msg.value, "There isn't enough capacity left for this mint");

            // forward the ETH paid here to the native ether wrapper
            nativeEtherWrapper.mint.value(msg.value)();
          }

        }
        ```

## Tracking changes to parameters

There are three parameters in the EtherWrapper, which are managed by Synthetix governance and can be changed through the [SCCP](/governance/#synthetix-configuration-change-proposal-sccps) process (see [SCCP-102](https://sips.synthetix.io/SCCP/sccp-102) for a good example).

| Parameter   | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| maxETH      | the maximum amount of ETH held by contract                   |
| mintFeeRate | the fee for depositing ETH into the contract                 |
| burnFeeRate | the fee for burning sETH and releasing ETH from the contract |

These can be tracked via listening to events on the [SystemSettings](/contracts/source/contracts/SystemSettings/) contract:

| name                                                                                                 | emitted on       | `uint maxETH`                           |
| ---------------------------------------------------------------------------------------------------- | ---------------- | --------------------------------------- |
| [`EtherWrapperMaxETHUpdated`](/contracts/source/contracts/SystemSettings/#etherwrappermaxethupdated) | `SystemSettings` | The new maximum ETH cap of the wrapper. |

| name                                                                                                           | emitted on       | `uint rate`           |
| -------------------------------------------------------------------------------------------------------------- | ---------------- | --------------------- |
| [`EtherWrapperMintFeeRateUpdated`](/contracts/source/contracts/SystemSettings/#etherwrappermintfeerateupdated) | `SystemSettings` | The new mint fee rate |
| [`EtherWrapperBurnFeeRateUpdated`](/contracts/source/contracts/SystemSettings/#etherwrapperburnfeerateupdated) | `SystemSettings` | The new burn fee rate |

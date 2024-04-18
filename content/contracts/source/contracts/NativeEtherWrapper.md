# NativeEtherWrapper

## Description

**Source:** [contracts/NativeEtherWrapper.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/NativeEtherWrapper.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/NativeEtherWrapper.sol#L21)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/NativeEtherWrapper.sol#L26)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Internal Functions

### `etherWrapper`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/NativeEtherWrapper.sol#L33)</sub>

??? example "Details"

    **Signature**

    `etherWrapper() view returns (contract IEtherWrapper)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthsETH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/NativeEtherWrapper.sol#L41)</sub>

??? example "Details"

    **Signature**

    `synthsETH() view returns (contract IERC20)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `weth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/NativeEtherWrapper.sol#L37)</sub>

??? example "Details"

    **Signature**

    `weth() view returns (contract IWETH)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `burn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/NativeEtherWrapper.sol#L66)</sub>

??? example "Details"

    **Signature**

    `burn(uint256 amount)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "amount must be greater than 0")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/NativeEtherWrapper.sol#L67)

    **Emits**

    * [Burned](#burned)

### `mint`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/NativeEtherWrapper.sol#L47)</sub>

??? example "Details"

    **Signature**

    `mint() payable`

    **Visibility**

    `public`

    **State Mutability**

    `payable`

    **Requires**

    * [require(..., "msg.value must be greater than 0")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/NativeEtherWrapper.sol#L49)

    **Emits**

    * [Minted](#minted)

## Events

### `Burned`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/NativeEtherWrapper.sol#L97)</sub>

**Signature**: `Burned(address account, uint256 amount)`

### `Minted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/NativeEtherWrapper.sol#L96)</sub>

**Signature**: `Minted(address account, uint256 amount)`

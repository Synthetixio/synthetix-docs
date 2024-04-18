# SynthetixBridgeEscrow

## Description

**Source:** [contracts/SynthetixBridgeEscrow.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeEscrow.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeEscrow.sol#L14)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Restricted Functions

### `approveBridge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeEscrow.sol#L16)</sub>

??? example "Details"

    **Signature**

    `approveBridge(address _token, address _bridge, uint256 _amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [BridgeApproval](#bridgeapproval)

## Events

### `BridgeApproval`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeEscrow.sol#L26)</sub>

**Signature**: `BridgeApproval(address _token, address spender, uint256 value)`

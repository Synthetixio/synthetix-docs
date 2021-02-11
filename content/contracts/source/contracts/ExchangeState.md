# ExchangeState

## Description

!!! Info "Documentation Pending"

    This contract documentation is missing some descriptions.

**Source:** [contracts/ExchangeState.sol](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/ExchangeState.sol)

## Variables

### `exchanges`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/ExchangeState.sol#L11)</sub>

**Type:** `mapping(address => mapping(bytes32 => struct IExchangeState.ExchangeEntry[]))`

### `maxEntriesInQueue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/ExchangeState.sol#L13)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/ExchangeState.sol#L15)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _associatedContract)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Restricted Functions

### `appendExchangeEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/ExchangeState.sol#L25)</sub>

??? example "Details"

    **Signature**

    `appendExchangeEntry(address account, bytes32 src, uint256 amount, bytes32 dest, uint256 amountReceived, uint256 exchangeFeeRate, uint256 timestamp, uint256 roundIdForSrc, uint256 roundIdForDest)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Max queue length reached")](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/ExchangeState.sol#L36)

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `removeEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/ExchangeState.sol#L52)</sub>

??? example "Details"

    **Signature**

    `removeEntries(address account, bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `setMaxEntriesInQueue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/ExchangeState.sol#L19)</sub>

??? example "Details"

    **Signature**

    `setMaxEntriesInQueue(uint256 _maxEntriesInQueue)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

## External Functions

### `getEntryAt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/ExchangeState.sol#L62)</sub>

??? example "Details"

    **Signature**

    `getEntryAt(address account, bytes32 currencyKey, uint256 index) view returns (bytes32 src, uint256 amount, bytes32 dest, uint256 amountReceived, uint256 exchangeFeeRate, uint256 timestamp, uint256 roundIdForSrc, uint256 roundIdForDest)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getLengthOfEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/ExchangeState.sol#L58)</sub>

??? example "Details"

    **Signature**

    `getLengthOfEntries(address account, bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getMaxTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/ExchangeState.sol#L93)</sub>

??? example "Details"

    **Signature**

    `getMaxTimestamp(address account, bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

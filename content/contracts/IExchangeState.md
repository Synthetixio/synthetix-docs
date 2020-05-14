# IExchangeState

**Source:** [contracts/interfaces/IExchangeState.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchangeState.sol)

## Structs

## Variables

## Functions

---

### `getLengthOfEntries`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchangeState.sol#L6)</sub>

??? example "Details"

    **Signature**

    `getLengthOfEntries(address account, bytes32 currencyKey) external`

---

### `getEntryAt`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchangeState.sol#L8)</sub>

??? example "Details"

    **Signature**

    `getEntryAt(address account, bytes32 currencyKey, uint256 index) external`

---

### `getMaxTimestamp`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchangeState.sol#L26)</sub>

??? example "Details"

    **Signature**

    `getMaxTimestamp(address account, bytes32 currencyKey) external`

---

### `appendExchangeEntry`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchangeState.sol#L29)</sub>

??? example "Details"

    **Signature**

    `appendExchangeEntry(address account, bytes32 src, uint256 amount, bytes32 dest, uint256 amountReceived, uint256 exchangeFeeRate, uint256 timestamp, uint256 roundIdForSrc, uint256 roundIdForDest) external`

---

### `removeEntries`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchangeState.sol#L41)</sub>

??? example "Details"

    **Signature**

    `removeEntries(address account, bytes32 currencyKey) external`

---

## Modifiers

## Events


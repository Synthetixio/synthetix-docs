# IWrapper

## Description

**Source:** [contracts/interfaces/IWrapper.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWrapper.sol)

## Views

### `burnFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWrapper.sol#L23)</sub>

??? example "Details"

    **Signature**

    `burnFeeRate() view returns (int256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `calculateBurnFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWrapper.sol#L17)</sub>

??? example "Details"

    **Signature**

    `calculateBurnFee(uint256 amount) view returns (uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `calculateMintFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWrapper.sol#L15)</sub>

??? example "Details"

    **Signature**

    `calculateMintFee(uint256 amount) view returns (uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `capacity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWrapper.sol#L11)</sub>

??? example "Details"

    **Signature**

    `capacity() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxTokenAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWrapper.sol#L19)</sub>

??? example "Details"

    **Signature**

    `maxTokenAmount() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `mintFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWrapper.sol#L21)</sub>

??? example "Details"

    **Signature**

    `mintFeeRate() view returns (int256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWrapper.sol#L13)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynths() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `burn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWrapper.sol#L9)</sub>

??? example "Details"

    **Signature**

    `burn(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `mint`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWrapper.sol#L7)</sub>

??? example "Details"

    **Signature**

    `mint(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

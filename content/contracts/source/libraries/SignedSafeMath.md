# SignedSafeMath

## Description

**Source:** [contracts/SignedSafeMath.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SignedSafeMath.sol)

## Internal Functions

### `add`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SignedSafeMath.sol#L117)</sub>

??? example "Details"

    **Signature**

    `add(int256 a, int256 b) pure returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

    **Requires**

    * [require(..., "SignedSafeMath: addition overflow")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SignedSafeMath.sol#L119)

### `div`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SignedSafeMath.sol#L81)</sub>

??? example "Details"

    **Signature**

    `div(int256 a, int256 b) pure returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

    **Requires**

    * [require(..., "SignedSafeMath: division by zero")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SignedSafeMath.sol#L82)

    * [require(..., "SignedSafeMath: division overflow")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SignedSafeMath.sol#L83)

### `mul`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SignedSafeMath.sol#L53)</sub>

??? example "Details"

    **Signature**

    `mul(int256 a, int256 b) pure returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

    **Requires**

    * [require(..., "SignedSafeMath: multiplication overflow")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SignedSafeMath.sol#L61)

    * [require(..., "SignedSafeMath: multiplication overflow")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SignedSafeMath.sol#L64)

### `sub`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SignedSafeMath.sol#L100)</sub>

??? example "Details"

    **Signature**

    `sub(int256 a, int256 b) pure returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

    **Requires**

    * [require(..., "SignedSafeMath: subtraction overflow")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SignedSafeMath.sol#L102)

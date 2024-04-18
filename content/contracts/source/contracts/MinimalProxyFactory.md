# MinimalProxyFactory

## Description

**Source:** [contracts/MinimalProxyFactory.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MinimalProxyFactory.sol)

## Internal Functions

### `_cloneAsMinimalProxy`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MinimalProxyFactory.sol#L5)</sub>

??? example "Details"

    **Signature**

    `_cloneAsMinimalProxy(address _base, string _revertMsg) returns (address clone)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "string memory")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MinimalProxyFactory.sol#L17)

### `_generateMinimalProxyCreateData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MinimalProxyFactory.sol#L20)</sub>

??? example "Details"

    **Signature**

    `_generateMinimalProxyCreateData(address _base) pure returns (bytes)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

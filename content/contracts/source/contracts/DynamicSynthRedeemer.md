# DynamicSynthRedeemer

## Description

**Source:** [contracts/DynamicSynthRedeemer.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol)

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L19)</sub>

**Type:** `bytes32`

### `discountRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L21)</sub>

**Type:** `uint256`

### `redemptionActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L22)</sub>

**Type:** `bool`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L29)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `getDiscountRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L57)</sub>

??? example "Details"

    **Signature**

    `getDiscountRate() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L35)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `resumeRedemption`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L131)</sub>

??? example "Details"

    **Signature**

    `resumeRedemption()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Redemption not suspended")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L132)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [RedemptionResumed](#redemptionresumed)

### `setDiscountRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L119)</sub>

??? example "Details"

    **Signature**

    `setDiscountRate(uint256 _newRate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid rate")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L120)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [DiscountRateUpdated](#discountrateupdated)

### `suspendRedemption`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L125)</sub>

??? example "Details"

    **Signature**

    `suspendRedemption()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Redemption suspended")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L126)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [RedemptionSuspended](#redemptionsuspended)

## Internal Functions

### `_exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L47)</sub>

??? example "Details"

    **Signature**

    `_exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L43)</sub>

??? example "Details"

    **Signature**

    `_issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_proxyAddressForKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L63)</sub>

??? example "Details"

    **Signature**

    `_proxyAddressForKey(bytes32 currencyKey) returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid synth")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L65)

### `_redeem`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L91)</sub>

??? example "Details"

    **Signature**

    `_redeem(address synthProxy, bytes32 currencyKey, uint256 amountOfSynth)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "No balance of synth to redeem")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L96)

    * [require(..., "Cannot redeem sUSD")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L97)

    * [require(..., "Synth not redeemable")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L102)

    **Emits**

    * [SynthRedeemed](#synthredeemed)

### `_redeemingActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L51)</sub>

??? example "Details"

    **Signature**

    `_redeemingActive() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Redemption deactivated")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L52)

## External Functions

### `redeem`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L78)</sub>

??? example "Details"

    **Signature**

    `redeem(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [requireRedemptionActive](#requireredemptionactive)

### `redeemAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L71)</sub>

??? example "Details"

    **Signature**

    `redeemAll(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [requireRedemptionActive](#requireredemptionactive)

### `redeemPartial`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L83)</sub>

??? example "Details"

    **Signature**

    `redeemPartial(bytes32 currencyKey, uint256 amountOfSynth)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Insufficient balance")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L87)

    **Modifiers**

    * [requireRedemptionActive](#requireredemptionactive)

## Modifiers

### `requireRedemptionActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L112)</sub>

## Events

### `DiscountRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L141)</sub>

**Signature**: `DiscountRateUpdated(uint256 discountRate)`

### `RedemptionResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L140)</sub>

**Signature**: `RedemptionResumed()`

### `RedemptionSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L139)</sub>

**Signature**: `RedemptionSuspended()`

### `SynthRedeemed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DynamicSynthRedeemer.sol#L142)</sub>

**Signature**: `SynthRedeemed(address synth, address account, uint256 amountOfSynth, uint256 amountInsUSD)`

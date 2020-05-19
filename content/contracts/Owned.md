# Owned

## Description

Allows inheriting contracts to have an owner and provides the [`onlyOwner`](#onlyowner) modifier, which restricts function access to that owner.
The owner can be changed by a nomination process, where the nominated owner must accept ownership before it is switched.



**Source:** [contracts/Owned.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Owned.sol)

## Architecture


---
### Inheritance Graph

<centered-image>
    ![Owned inheritance graph](../img/graphs/Owned.svg)
</centered-image>


## Events


---
### `OwnerChanged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Owned.sol#L33)</sub>



Ownership has been handed over from `oldOwner` to `newOwner`, which is the new value of [`owner`](#owner).


**Signature:** `OwnerChanged(address oldOwner, address newOwner)`


- `(address oldOwner, address newOwner)`


---
### `OwnerNominated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Owned.sol#L32)</sub>



`newOwner` has been set as the [`nominatedOwner`](#nominatedowner).


**Signature:** `OwnerNominated(address newOwner)`


- `(address newOwner)`

## Function (Constructor)


---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Owned.sol#L9)</sub>



??? example "Details"

    **Signature**

    `(address _owner)`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Owner address cannot be 0)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Owned.sol#L10)

    **Emits**

    * [OwnerChanged](#ownerchanged)

## Functions


---
### `acceptOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Owned.sol#L20)</sub>



If called by [`nominatedOwner`](#nominatedowner), ownership is transferred to that address.
The nominated owner is reset to the zero address.


??? example "Details"

    **Signature**

    `acceptOwnership()`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., You must be nominated before you can accept ownership)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Owned.sol#L21)

    **Emits**

    * [OwnerChanged](#ownerchanged)

## Functions (onlyOwner)


---
### `nominateNewOwner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Owned.sol#L15)</sub>



??? example "Details"

    **Signature**

    `nominateNewOwner(address _owner)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [OwnerNominated](#ownernominated)

## Modifiers


---
### `onlyOwner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Owned.sol#L27)</sub>



Reverts the transaction if `msg.sender` is not the [`owner`](#owner).


## Variables


---
### `nominatedOwner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Owned.sol#L7)</sub>



The currently-nominated owner.




**Type:** `address`


---
### `owner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Owned.sol#L6)</sub>



The contract owner.




**Type:** `address`


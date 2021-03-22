!!! info "Notice"

    Imported from https://github.com/Synthetixio/synthetix-cli

# synthetix-cli

A set of cli utilities for the Synthetix protocol

## Installation

Clone repo and install npm.

## Usage

`node src/commands/<a-command.js> --help`

## Linking with a local Synthetix repo

This allows the cli to use deployment.json files from a local sytnethix repo, i.e. allowing you to use the cli on non-official deployments.

```
$ cd synthetix
$ npm link
$ cd ..
$ cd synthetix-cli
$ npm link synthetix
```

## Ethereum provider

By default, uses Ethers default Ethereum provider, but this provider is most likely saturated at any time. To specify your own infura provider, copy `.env.example` as `.env` and set PROVIDER_URL. Note that "network" will be replaced by the network a command is run in.

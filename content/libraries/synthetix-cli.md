!!! info "Notice"

    Imported from https://github.com/Synthetixio/synthetix-cli/

# synthetix-cli

A set of non-official scripts to run against the Synthetix protocol

## Installation

Clone repo and install npm.

## Usage

`node src/commands/<some-script.js> --help`

## Ethereum provider

By default, uses Ethers default Ethereum provider, but this provider is most likely saturated at any time. To specify your own infura provider, copy `.env.example` as `.env` and set PROVIDER_URL. Note that "network" will be replaced by the network a command is run in.

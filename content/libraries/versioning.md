# Versioning

Synthetix versions are denoted as follows

`<major>.<minor>.<patch>[-environment]`

Where `environment` is either omitted for `mainnet` or is one of the following:

- `alpha` is for the newest version of contracts, and is reserved for deploys to `sepolia`

When a new version of the contracts makes its way through all testnets, it eventually becomes promoted in `master`, with [semver](https://semver.org/) reflecting contract changes in the `major` or `minor` portion of the version (depending on backwards compatibility). `patch` changes are simply for changes to the JavaScript interface.

E.g. `v2.19.3-alpha` denotes a build deployed to `sepolia`.

!!! info

    There are occasions when builds skip and enviroment on the way to mainnet, but in those instances the Synthetix team will endeavour to backport changes to testnets promptly.

# Synthetix

The addresses, ABIs and list of deployed synths of Synthetix contracts are persisted as an npm module, alongside every deploy.

## Quick Start

```javascript
// With Ethers
import ethers from "ethers"; // es modules
import synthetix from "synthetix";

const provider = ethers.getDefaultProvider();

const network = "mainnet";
const { abi } = synthetix.getSource({
  network,
  contract: "Synthetix"
});
const { address } = synthetix.getTarget({
  network,
  contract: "ProxySynthetix"
});

// see https://docs.ethers.io/ethers.js/html/api-contract.html#connecting-to-existing-contracts
const Synthetix = new ethers.Contract(address, abi, provider);

(async () => {
  const totalIssuedSynths = await Synthetix.totalIssuedSynths(
    synthetix.toBytes32("sUSD")
  );
  console.log(ethers.utils.formatEther(totalIssuedSynths));
})();
```

## Interface

- `toBytes32(string: input):string`
- `getTarget({ network: string, contract?: string })`
- `getSource({ network: string, contract?: string })`
- `getSynths({ network: string })`

### As an npm module

```javascript
const snx = require("synthetix");

snx.toBytes32("sUSD");
// '0x7355534400000000000000000000000000000000000000000000000000000000'

// retrieve an object detailing the contract deployed to the given network.
snx.getTarget({ network: "rinkeby", contract: "ProxySynthetix" });
/*
{
  name: 'ProxySynthetix',
  address: '0x322A3346bf24363f451164d96A5b5cd5A7F4c337',
  source: 'Proxy',
  link: 'https://rinkeby.etherscan.io/address/0x322A3346bf24363f451164d96A5b5cd5A7F4c337',
  timestamp: '2019-03-06T23:05:43.914Z',
  network: 'rinkeby'
}
*/

// retrieve an object detailing the contract ABI and bytecode
snx.getSource({ network: "rinkeby", contract: "Proxy" });
/*
{
  bytecode: '0..0',
  abi: [ ... ]
}
*/

// retrieve the array of synths used
snx.getSynths({ network: "rinkeby" }).map(({ name }) => name);
// ['XDR', 'sUSD', 'sEUR', ...]
```

### As an npm CLI tool

Same as above but as a CLI tool that outputs JSON:

```bash
npx synthetix target --network rinkeby --contract ProxySynthetix
# {
#   "name": "ProxySynthetix",
#   "address": "0x322A3346bf24363f451164d96A5b5cd5A7F4c337",
#   "source": "Proxy",
#   "link": "https://rinkeby.etherscan.io/address/0x322A3346bf24363f451164d96A5b5cd5A7F4c337",
#   "timestamp": "2019-03-06T23:05:43.914Z",
#   "network": "rinkeby"
# }

npx synthetix source --network rinkeby --contract Proxy
# {
#   "bytecode": "0..0",
#   "abi": [ ... ]
# }

npx synthetix synths --network rinkeby --key name
# ["XDR", "sUSD", "sEUR", ... ]
```

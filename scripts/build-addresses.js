/* eslint-disable indent */
'use strict';

const fs = require('fs');
const path = require('path');
const snx = require('synthetix');

const { version } = require('./utils');

console.log('Building addresses.md');

// This function generates the latest addresses for all environments
const generateAddresses = () => {
	const outputPath = path.join(__dirname, '..', 'content', 'addresses.md');
	const currentVersion = 'v' + version();

	let headerContent = `Here is the list of all contracts within the current Synthetix system.\n\n**Version**: [${currentVersion}](https://github.com/Synthetixio/synthetix/tree/${currentVersion})\n\n`;

	headerContent +=
		'!!! info "Naming Conventions"\n\n    Within the developer ecosystem, the names of Synthetix contracts are referred to by their `source` Solidity file.' +
		'If the same source is used for multiple instances of contracts with different constructor arguments - such as `Synth.sol`, `TokenState.sol` and `ProxyERC20.sol`' +
		' - then the convention is to suffix the name of the differing feature to the end - be it the proxy target ' +
		'e.g. `FeePool` for `ProxyFeePool` or the synth currencyKey eg: `sETH` for `SynthsETH`';

	headerContent +=
		'\n\n!!! tip "Handy Contract Links"\n\n    All of the below contracts can be accessed by our [contract linker](https://github.com/Synthetixio/contract-linker) utility. Simply suffix the contract name to the end of' +
		' https://contracts.synthetix.io to get a link that will always redirect to the latest version of the contract on Etherscan.\n\n    For example, try https://contracts.synthetix.io/Synthetix to get linked to the latest Synthetix underlying.' +
		'\n\n    For testnets, insert the testnet name before the contract, as in https://contracts.synthetix.io/sepolia/Synthetix';

	const contractContent = ['mainnet', 'mainnet-ovm', 'sepolia', 'sepolia-ovm']
		.map(networkLabel => {
			const [network, useOvm] = networkLabel.split('-');

			const targets = snx.getTarget({ network, useOvm });

			const header = `\n## ${network.toUpperCase()}${useOvm ? ' Optimism (L2)' : ''} ${
				['goerli'].indexOf(network) > -1 ? '[unsupported]' : ''
			}\n`;
			return (
				header +
				'<table><tr><th>Name</th><th>Source</th><th>Address</th></tr>' +
				Object.keys(targets)
					.sort()
					.map(targetContract => {
						const { address, source } = targets[targetContract];
						let label = targetContract;
						const addressLink = `<a target="_blank" href="https://${
							!useOvm
								? network !== 'mainnet'
									? network + '.'
									: ''
								: network !== 'mainnet'
								? network + '-optimism.'
								: 'optimistic.'
						}etherscan.io/address/${address}">${address}</a>`;

						if (targetContract === 'ProxysUSD' || targetContract === 'ProxySynthetix') {
							label = `<span style="color: #AAA; text-decoration: line-through">${targetContract}</span><sup>Use ${
								targetContract === 'ProxysUSD' ? 'ProxyERC20sUSD' : 'ProxyERC20'
							}</sup>`;
						}

						return `
              <tr>
                <td>${label}</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/v${version()}/contracts/${source}.sol">${source}.sol</a></td>
                <td>${addressLink}
                </td>
              </tr>`;
					})
					.join('') +
				'</table>'
			);
		})
		.join('\n');

	const content = `${headerContent}\n\n ${contractContent}`;

	fs.writeFileSync(outputPath, content);
};

generateAddresses();

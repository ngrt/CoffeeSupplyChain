const HDWallet = require('truffle-hdwallet-provider');
const MNEMONIC = 'MNEMONIC HERE';

module.exports = {
	networks: {
		development: {
			host: "127.0.0.1",     // Localhost (default: none)
			port: 7545,            // Standard Ethereum port (default: none)
			network_id: "*",       // Any network (default: none)
		},
		develop: {
			host: "127.0.0.1",     // Localhost (default: none)
			port: 7545,            // Standard Ethereum port (default: none)
			gas: 4712388,
			gasPrice: 100000000000,
			network_id: "*",       // Any network (default: none)
		},
		rinkeby: {
			provider: () => new HDWallet(MNEMONIC, `https://rinkeby.infura.io/v3/37b03f66c2b94ccb8f0046f1e16113c3`),
			network_id: 4,       // Ropsten's id
			gas: 4712388,
			gasPrice: 100000000000,
			confirmations: 2,    // # of confs to wait between deployments. (default: 0)
			timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
			skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
		},
	},
	mocha: {
		timeout: 100000
	},
	compilers: {
		solc: {
			// version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
			// docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
			// settings: {          // See the solidity docs for advice about optimization and evmVersion
			//  optimizer: {
			//    enabled: false,
			//    runs: 200
			//  },
			//  evmVersion: "byzantium"
			// }
		}
	}
}

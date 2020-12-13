# Supply chain & data auditing

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

The DApp User Interface when running should look like...

![truffle test](images/ftc_product_overview.png)

![truffle test](images/ftc_farm_details.png)

![truffle test](images/ftc_product_details.png)

![truffle test](images/ftc_transaction_history.png)

## Contract Addresses

* FarmerRole: 0x1aB06732FA46e2a139f206A1629F9878c263531c
* DistributorRole: 0xC8D314013437081f4c375db7614F6e5D4E34014C
* RetailerRole: 0x5055E53A90c06d5E92d14ADc3951a3479f456Fae
* ConsumerRole: 0x8C15861ab152828Cbdb4696a42EAB8d8D3f22A29
* SupplyChain: 0xB2A725f13Db9CB16257586E4e4bd67455116bD20

## Transaction hashes

* harvestItem: 0x66ce18a1e712c70171a44ce907578e2fd65b4443091d8f3e1611982c35a3e303
* processItem: 0x86072c14523fb691cc72ff1e11a120a162e01268c15a5027764d100540496cf6
* packItem: 0xdb8a5cbaa06874a0661f8954c310f07cc4d663d1415d63e5b8bf90b83eea6a33
* sellItem: 0xbc77784665fea49272568f556cc79bd212886a4d677f887d8d5499464535cbfa
* buyItem: 0x2fdb822aeded0ac7d15fb5fbb38be9d4ddc73200d1d54e2cb7f7d842fa6e0b11
* shipItem: 0xe814f5f6a076961a857466327cde13f90762467c0b22bc8d16561ad9bcd01064
* receiveItem: 0xc112faeece8e3c8554c0af56b0d62430dc1d8410f029ace84295fe37d71f14c3
* purchaseItem: 0x92afa17fffdc37df59d82bc75e63651ac5837caf66397655093212dfad456128


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

```
Give examples (to be clarified)
```

### Installing

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/udacity/nd1309/tree/master/course-5/project-6
```

Change directory to ```project-6``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd project-6
npm install
```

Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

Your terminal should look something like this:

![truffle test](images/ganache-cli.png)

In a separate terminal window, Compile smart contracts:

```
truffle compile
```

Your terminal should look something like this:

![truffle test](images/truffle_compile.png)

This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Your terminal should look something like this:

![truffle test](images/truffle_migrate.png)

Test smart contracts:

```
truffle test
```

All 10 tests should pass.

![truffle test](images/truffle_test.png)

In a separate terminal window, launch the DApp:

```
npm run dev
```

## Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [IPFS](https://ipfs.io/) - IPFS is the Distributed Web | A peer-to-peer hypermedia protocol
to make the web faster, safer, and more open.
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.


## Authors

See also the list of [contributors](https://github.com/your/project/contributors.md) who participated in this project.

## Acknowledgments

* Solidity
* Ganache-cli
* Truffle
* IPFS

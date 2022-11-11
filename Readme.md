# Cosmos Discord Faucet

A discord faucet for cosmos sdk based projects that is fully configurable for any chain.

## Getting Started

These instructions will cover usage information and for the docker container

### Prerequisites

In order to run this container you'll need docker installed.

* [Windows](https://docs.docker.com/windows/started)
* [OS X](https://docs.docker.com/mac/started/)
* [Linux](https://docs.docker.com/linux/started/)

### Usage

#### Container Parameters

Example

```bash
    docker run -ti --restart=always \
    -e ADDRESS_PREFIX=address_prefix \
    -e DENOMINATION=denomination \
    -e AMOUNT=amount \
    -e CHAIN_NAME=chain_name \
    -e RPC_ENDPOINT=rpc_endpoint \
    -e API_ENDPOINT=api_endpoint \
    -e MNEMONIC=mnemonic \
    -e TIMEOUT=timeout_in_ms \
    -e TX_EXPLORER=https://your_explorer \
    -e DISCORD_CHANNEL=discord_channel \
    -e DISCORD_TOKEN=discord_token \
    0x4139/cosmos-discord-faucet
```

#### Environment Variables

All the following variables are required:

* `ADDRESS_PREFIX` - Chain address prefix ex `cosmos`
* `DENOMINATION` - Denomination that the faucet releases ex `uatom`
* `AMOUNT` - Amount that the faucet releases in `u'
* `CHAIN_NAME` - Chain name as defined in genesis ex `testnet-1`
* `RPC_ENDPOINT` - Node RPC to use `ex: http://your_node:26657`
* `API_ENDPOINT` - Node API to use `ex: http://your_node:1317`
* `MNEMONIC` - Seed phrase of the account that the faucet will release coins from
* `TIMEOUT` - Timeout between coin request in milliseconds
* `TX_EXPLORER` - Explorer base uri to append the transaction hash to `ex:http://192.168.100.46:8080/testnet/tx`
* `DISCORD_CHANNEL` - The discord channel the faucet should listen on `ex: testnet` (warning: be sure to include emojis if needed)
* `DISCORD_TOKEN` - [Create your own discord token](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token)
#### Faucet Commands

* Help command
  
  `$help`

* Request coins through the faucet
  
  `$request cosmos178jjyne475dnh5jpuqfjt30ak4r64xlsxy7xsf`

* Displays the current status of the node where faucet is running
  
  `$faucet_status`

* Show tap address
  
  `$faucet_address`

* Show transaction information for a specific transaction ID
  
  `$tx_info 009CEA347EAFD795E8B10088D18156BC15F24362416BEEF1073BFDFD936E19B0`

* Show address balance

  `$balance cosmos178jjyne475dnh5jpuqfjt30ak4r64xlsxy7xsf`


## Built With

* docker
* node.js
* discord.js
* cosmjs

## Find Us

* [GitHub](https://github.com/0x4139/cosmos-discord-faucet)
* [Dockerhub](https://hub.docker.com/r/0x4139/cosmos-discord-faucet)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the
[tags on this repository](https://github.com/0x4139/cosmos-discord-faucet/tags).

## Authors

* **Vali Malinoiu** - *Initial work* - [0x4139](https://github.com/0x4139)

See also the list of [contributors](https://github.com/0x4139/cosmos-discord-faucet/contributors) who
participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

* People you want to thank
* If you took a bunch of code from somewhere list it here
  
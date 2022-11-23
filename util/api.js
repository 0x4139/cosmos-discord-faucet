const encoding = require('@cosmjs/encoding')
const axios = require('axios')
const { SigningStargateClient } = require('@cosmjs/stargate')
const { FaucetWallet, FaucetAccount } = require('./wallet')

module.exports = {
  VerifyAddress: (addr) => {
    try {
      const { prefix } = encoding.fromBech32(addr)
      if (prefix !== process.env.ADDRESS_PREFIX) { throw Error(`${prefix} prefix is not supported`) }
    } catch (err) {
      throw Error(`[${err}] - Invalid address!`)
    }
  },
  CosmosGetBalance: (addr) => {
    return axios.get(`${process.env.API_ENDPOINT}/cosmos/bank/v1beta1/balances/${addr}/by_denom?denom=${process.env.DENOMINATION}`)
  },
  CosmosGetTxInfo: (txhash) => {
    return axios.get(`${process.env.API_ENDPOINT}/cosmos/tx/v1beta1/txs/${txhash}`)
  },
  CosmosGetNodeStatus: () => {
    return axios.get(`${process.env.RPC_ENDPOINT}/status`)
  },
  CosmosTransfer: async (addr) => {
    const wallet = await FaucetWallet()
    const address = await FaucetAccount()
    const client = await SigningStargateClient.connectWithSigner(process.env.RPC_ENDPOINT, wallet, {
      prefix: process.env.ADDRESS_PREFIX
    })
    const amount = {
      denom: process.env.DENOMINATION,
      amount: process.env.AMOUNT
    }

    const result = await client.sendTokens(address.address, addr, [amount], {
      amount: [
        {
          denom: `${process.env.DENOMINATION}`,
          amount: `${process.env.TX_FEE_AMOUNT}`
        }
      ],
      gas: `${process.env.TX_GAS_AMOUNT}` // 180k
    })
    return result
  }

}

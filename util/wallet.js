const { DirectSecp256k1HdWallet } = require('@cosmjs/proto-signing')
module.exports = {
  FaucetAccount: async () => {
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(process.env.MNEMONIC, { prefix: process.env.ADDRESS_PREFIX })
    const [firstAccount] = await wallet.getAccounts()
    return firstAccount
  },
  FaucetWallet: async () => {
    return DirectSecp256k1HdWallet.fromMnemonic(process.env.MNEMONIC, { prefix: process.env.ADDRESS_PREFIX })
  }

}

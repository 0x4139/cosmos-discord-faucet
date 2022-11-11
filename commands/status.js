const { CosmosGetNodeStatus, CosmosGetBalance } = require('../util/api')
const { FaucetAccount: FaucetWallet } = require('../util/wallet')

module.exports = async () => {
  const address = await FaucetWallet()
  const nodeStatus = await CosmosGetNodeStatus()
  const balance = await CosmosGetBalance(address.address)
  return {
    moniker: nodeStatus.data.result.node_info.moniker,
    address: address.address,
    syncs: nodeStatus.data.result.sync_info.catching_up,
    last_block: nodeStatus.data.result.sync_info.latest_block_height,
    voting_power: nodeStatus.data.result.validator_info.voting_power,
    denomination: balance.data.balance.denom,
    amount: balance.data.balance.amount
  }
}

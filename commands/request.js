const api = require('../util/api')
const { CheckIn } = require('../util/registry')

module.exports = (addr) => {
  CheckIn(addr)
  return api.CosmosTransfer(addr)
}

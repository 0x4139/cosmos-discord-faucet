const api = require('../util/api')
const { CheckIn } = require('../util/registry')

module.exports = (addr, user) => {
  CheckIn(addr)
  CheckIn(user)
  return api.CosmosTransfer(addr)
}

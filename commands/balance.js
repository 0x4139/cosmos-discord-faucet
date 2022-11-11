const { VerifyAddress, CosmosGetBalance } = require('../util/api')

module.exports = (addr) => {
  VerifyAddress(addr)
  return CosmosGetBalance(addr)
}

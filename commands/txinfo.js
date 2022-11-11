const { CosmosGetTxInfo } = require('../util/api')

module.exports = (tx) => {
  return CosmosGetTxInfo(tx)
}

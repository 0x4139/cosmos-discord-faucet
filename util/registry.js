const millisecondsInHour = 3600000
module.exports = {
  CheckIn: (addr) => {
    if (!global.registry) {
      global.registry = {}
    }
    if (!global.registry[addr] || global.registry[addr] + Number(process.env.TIMEOUT) < new Date().getTime()) {
      global.registry[addr] = new Date().getTime()
    } else {
      const delay = (global.registry[addr] + Number(process.env.TIMEOUT)) - (new Date().getTime())
      throw Error(`You can request your \`${process.env.DENOMINATION}\` every ${(Number(process.env.TIMEOUT / millisecondsInHour).toFixed(2))} hours, please try again in ${(delay / millisecondsInHour).toFixed(2)} hours!`)
    }
  }
}

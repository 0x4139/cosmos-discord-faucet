const millisecondsInHour = 3600000
module.exports = {
  CheckIn: (key) => {
    if (!global.registry) {
      global.registry = {}
    }
    if (!global.registry[key] || global.registry[key] + Number(process.env.TIMEOUT) < new Date().getTime()) {
      global.registry[key] = new Date().getTime()
    } else {
      const delay = (global.registry[key] + Number(process.env.TIMEOUT)) - (new Date().getTime())
      throw Error(`You can request your \`${process.env.DENOMINATION}\` every ${(Number(process.env.TIMEOUT / millisecondsInHour).toFixed(2))} hours, please try again in ${(delay / millisecondsInHour).toFixed(2)} hours!`)
    }
  }
}

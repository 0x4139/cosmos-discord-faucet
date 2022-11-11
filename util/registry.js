module.exports = {
  CheckIn: (addr) => {
    if (!global.registry) {
      global.registry = {}
    }
    if (!global.registry[addr] || global.registry[addr] + Number(process.env.TIMEOUT) < new Date().getTime()) {
      global.registry[addr] = new Date().getTime()
    } else {
      throw Error(`You have already requested your \`${process.env.DENOMINATION}\`, please try again later!`)
    }
  }
}

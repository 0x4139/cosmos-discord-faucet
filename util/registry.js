module.exports = {
  CheckIn: (addr) => {
    if (!global.registry) {
      global.registry = {}
    }
    if (!global.registry[addr] || global.registry[addr] + Number(process.env.TIMEOUT) < new Date().getTime()) {
      global.registry[addr] = new Date().getTime()
    } else {
      const delay = (global.registry[addr] + Number(process.env.TIMEOUT)) - (new Date().getTime())
      throw Error(`You can request your \`${process.env.DENOMINATION}\` every ${convertMsToHM(Number(process.env.TIMEOUT))}, please try again in ${convertMsToHM(delay)}!`)
    }
  }
}
function convertMsToHM (milliseconds) {
  let seconds = Math.floor(milliseconds / 1000)
  let minutes = Math.floor(seconds / 60)
  let hours = Math.floor(minutes / 60)

  seconds = seconds % 60
  // 👇️ if seconds are greater than 30, round minutes up (optional)
  minutes = seconds >= 30 ? minutes + 1 : minutes

  minutes = minutes % 60

  // 👇️ If you don't want to roll hours over, e.g. 24 to 00
  // 👇️ comment (or remove) the line below
  // commenting next line gets you `24:00:00` instead of `00:00:00`
  // or `36:15:31` instead of `12:15:31`, etc.
  hours = hours % 24

  return `${padTo2Digits(hours)} hours and ${padTo2Digits(minutes)}`
}
function padTo2Digits (num) {
  return num.toString().padStart(2, '0')
}

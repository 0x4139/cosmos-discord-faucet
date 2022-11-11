require('dotenv').config()
const Commands = require('./commands')
const { Client, Events, GatewayIntentBits } = require('discord.js')

const COMMAND_HELP = '$help'
const COMMAND_REQUEST = '$request'
const COMMAND_STATUS = '$faucet_status'
const COMMAND_ADDRESS = '$faucet_address'
const COMMAND_BALANCE = '$balance'
const COMMAND_TXINFO = '$tx_info'

const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent]
})

client.once(Events.ClientReady, async (c) => {
  const addr = await Commands.address()
  console.log(`Ready! Logged in as ${c.user.tag} with faucet address - ${addr.address}`)
})

client.on(Events.MessageCreate, async (m, k) => {
  if (m.channel.name === process.env.DISCORD_CHANNEL && m.content.startsWith('$')) {
    const data = m.content.split(' ')
    const command = data[0]
    const address = data[1]
    const txhash = data[1]
    try {
      switch (command) {
        case COMMAND_HELP:
          m.channel.send(Commands.help())
          break
        case COMMAND_REQUEST: {
          const result = await Commands.request(address)
          m.channel.send(`\`${JSON.stringify({
             transaction: result.transactionHash,
             block: result.height,
             gas: result.gasUsed
          }, null, 2)}\``)
        }
          break
        case COMMAND_STATUS: {
          const status = await Commands.status()
          m.channel.send(`\`${JSON.stringify(status, null, 2)}\``)
        }
          break
        case COMMAND_ADDRESS: {
          const wallet = await Commands.address()
          m.channel.send(`\`${JSON.stringify({
            address: wallet.address
          }, null, 2)}\``)
        }
          break
        case COMMAND_BALANCE:{
          const balance = await Commands.balance(address)
          m.channel.send(`\`${JSON.stringify(balance.data.balance, null, 2)}\``)
        }
          break
        case COMMAND_TXINFO:{
          const txinfo = await Commands.txinfo(txhash)
          m.channel.send(`\`${JSON.stringify({
            from: txinfo.data.tx.body.messages[0].from_address,
            to: txinfo.data.tx.body.messages[0].to_address,
            amount: txinfo.data.tx.body.messages[0].amount,
            fee: txinfo.data.tx.auth_info.fee

          }, null, 2)}\``)
        }
          break
        default:
          m.channel.send(`Invalid command \`${data[0]}\`, please use \`$help\` for more information. `)
          break
      }
    } catch (err) {
      if (err.name === 'AxiosError') {
        m.channel.send(`\`[Err: ${err.response.data.message}] - blockchain error!\``)
      } else {
        if (err.message) {
          m.channel.send(err.message)
        }
      }
    }
  }
})

// Log in to Discord with your client's token
client.login(process.env.DISCORD_TOKEN)

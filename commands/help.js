const millisecondsInHour = 3600000

module.exports = () => {
  return `
List of available commands:
1. Request coins through the faucet
$request ${process.env.ADDRESS_PREFIX}178jjyne475dnh5jpuqfjt30ak4r64xlsxy7xsf

2. Displays the current status of the node where faucet is running
$faucet_status

3. Show tap address
$faucet_address

4. Show transaction information for a specific transaction ID
$tx_info 009CEA347EAFD795E8B10088D18156BC15F24362416BEEF1073BFDFD936E19B0

5. Show address balance
$balance ${process.env.ADDRESS_PREFIX}178jjyne475dnh5jpuqfjt30ak4r64xlsxy7xsf

Notes

Users are throttled in requesting ${process.env.AMOUNT}${process.env.DENOMINATION} (${parseFloat((process.env.AMOUNT / 1000000).toFixed(3))} ${process.env.DENOMINATION.slice(1, process.env.DENOMINATION.length).toUpperCase()}) once every ${(process.env.TIMEOUT / millisecondsInHour).toFixed(2)} hours, any other request will not be fulfilled.
After the throttle expires users can request again.

Created with <3 by 0x4139

USING THIS FAUCET OR RUNNING A TESTNET NODE DOES NOT ENTITLE YOU TO ANY AIRDROP OR OTHER DISTRIBUTION OF MAINNET ${process.env.CHAIN_NAME.toUpperCase()} TOKENS. MAINNET ${process.env.CHAIN_NAME.toUpperCase()} TOKENS DO NOT CURRENTLY EXIST AND THERE ARE NO PUBLIC SALES OR OTHER PUBLIC DISTRIBUTIONS OF ANY MAINNET ${process.env.CHAIN_NAME.toUpperCase()} TOKENS.
`
}

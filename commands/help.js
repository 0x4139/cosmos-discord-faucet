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
Only the requester of a given account can ask again the same account after lock timeout.

Created with <3 by 0x4139

USING THIS FAUCET OR RUNNING A TESTNET NODE DOES NOT ENTITLE YOU TO ANY AIRDROP OR OTHER DISTRIBUTION OF MAINNET ${process.env.CHAIN_NAME.toUpperCase()} TOKENS. MAINNET ${process.env.CHAIN_NAME.toUpperCase()} TOKENS DO NOT CURRENTLY EXIST AND THERE ARE NO PUBLIC SALES OR OTHER PUBLIC DISTRIBUTIONS OF ANY MAINNET ${process.env.CHAIN_NAME.toUpperCase()} TOKENS.
`
}

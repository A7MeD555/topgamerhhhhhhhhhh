const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'
client.on('ready', () => {
    console.log('I am ready!');
});







// CODES HERE







// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

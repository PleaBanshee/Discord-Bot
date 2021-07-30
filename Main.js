const Discord = require("discord.js");
const client = new Discord.Client() // bot object
const config = require('dotenv').config()

const PREFIX = '!'; // command prefix

client.on("ready", () => { // executes when running the script
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => { // message the bot
  if (msg.content === "hello") {
    msg.reply( `Hello I'm ${client.user.tag}! Welcome to the server!`);
  }
})

client.on("message", msg => { // bot command
  let args = msg.content.substring(PREFIX.length).split(' '); // splits entered words with spaces
  switch (args[0]) {
    case 'ping':
      msg.channel.sendMessage('pong'); // sends message over a channel
      break;
  }
})

client.login(process.env.BOT_TOKEN);
const Discord = require("discord.js");
const client = new Discord.Client() // bot object
const config = require('dotenv').config()

const PREFIX = '!'; // command prefix

client.on("ready", () => { // executes when running the script
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => { // bot commands
  let args = msg.content.substring(PREFIX.length).split(' '); // splits entered words with spaces
  switch (args[0]) {
    case 'ping':
      msg.channel.send('pong'); // sends message over a channel
      break;
    case ('feeling'):
      if (args[1] === "lonely") {
        msg.channel.send(`Do not worry, ${client.user} loves you!!! ❤️️`)
      }
      break;
    case 'play':
      if (args[1]) {

      } else {
        msg.channel.send('Oops! Something went wrong... try again!')
      }
      if (!msg.member.voice.channel) {
        msg.channel.send('You\'re not in a voice channel dummy!')
      }
    break;
  }
  if (msg.content === "hello") {
    msg.channel.send( `Hello I'm ${client.user.tag}! Welcome to the server!`);
  }
})

client.login(process.env.BOT_TOKEN);
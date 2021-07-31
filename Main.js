const Discord = require("discord.js");
const client = new Discord.Client() // bot object
const config = require('dotenv').config()
const { Player } = require("discord-player");

// Create a new Player (you don't need any API Key)
const player = new Player(client);
// To easily access the player
client.player = player;

const PREFIX = '!'; // command prefix

client.on("ready", () => { // executes when running the script
  console.log(`Logged in as ${client.user.tag}!`)
})

// bot commands
client.on("message", async msg =>  {
  let args = msg.content.substring(PREFIX.length).split(" "); // splits entered words with spaces
  let command = args.shift().toLowerCase();
  switch (args[0]) {
    case 'ping':
      msg.channel.send('pong'); // sends message over a channel
      break;
      case 'play':
        let track = await client.player.play(msg.member.voice.channel,args[0],msg.member.user.tag);
        msg.channel.send(`Currently playing ${track.name} --- Requested by ${track.requestedBy}`);
      break;
      case 'stop':
        let track = await client.player.stop(msg.guild.id);
        msg.channel.send('PAUSED');
      break;
  }
})
      

client.login(process.env.BOT_TOKEN);
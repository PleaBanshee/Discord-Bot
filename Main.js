const Discord = require("discord.js");
const client = new Discord.Client() // bot object
const config = require('dotenv').config()
const ytdl = require("ytdl-core");
const opusscript = require("opusscript");

const PREFIX = '!'; // command prefix

var servers = {};

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
      const play = (connection, message) => {
        var server = servers[msg.guild.id];
        server.dispatcher = connection.playStream(ytdl(server.queue[0],{filter: "audioonly"}));
        server.dispatcher.on("end",() => {
          if (server.queue[0]) {
            play(connection,message);
          } else {
            connection.disconnect();
          }
        })
      }
      if (!args[1]) {
        msg.channel.send('Oops! Soemthing went wrong... try again!')
        return;
      } 
      if (!msg.member.voice.channel) {
        msg.channel.send('You\'re not in a voice channel dummy!')
        return;
      }
      if (!servers[msg.guild.id]) {
        servers[msg.guild.id] = { queue: [] }
      }
      var server = servers[msg.guild.id];
      if (!msg.guild.voice.connection) { // if user not connected to voicechannel, connect to voicechannel
        msg.member.voice.channel.join().then((conn) => {
          play(conn,msg);
        });
      }
    break;
  }
  if (msg.content === "hello") {
    msg.channel.send( `Hello I'm ${client.user.tag}! Welcome to the server!`);
  }
})

client.login(process.env.BOT_TOKEN);
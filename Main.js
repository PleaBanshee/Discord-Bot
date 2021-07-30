const Discord = require("discord.js");
const client = new Discord.Client() // bot object
const config = require('dotenv').config()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "hello") {
    msg.reply( `Hello I'm ${client.user.tag}! Welcome to the server!`);
  }
})

client.login(process.env.BOT_TOKEN);
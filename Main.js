const Discord = require("discord.js");
const client = new Discord.Client()
const config = require('dotenv').config()

// console.log(process.env);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply( `Hello I'm ${client.user.tag}!\npong`);
  }
})

client.login(process.env.BOT_TOKEN);
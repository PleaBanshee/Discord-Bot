const { MessageEmbed } = require('discord.js');
const api = require('imageapi.js');

module.exports = {
    name : 'meme',
    category : 'fun',
    cooldown : 5000,
    run: async(client,message) => {
        const subreddits = ['meme','dankmemes','memes'];
        const subreddit = subreddits[Math.floor(Math.random() * (subreddits.length))];
        const meme = await api.advanced(subreddit);

        return message.channel.send(new MessageEmbed()
            .setTitle(`r/${subreddit}`)
            .setURL(`https://reddit.com/r/${subreddit}`)
            .setDescription(`${meme.upvoteRatio}% of people liked this. Posted by u/**${meme.author}**`)
            .setImage(meme.img)
        )
    }
}

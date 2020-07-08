const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "ping",
    category: "information",
    description: "Grabs API & User ping",
    run: async (client, message, args) => {
            const _ = new Discord.MessageEmbed()
                .setAuthor("Pong!", message.author.displayAvatar)
                .setDescription(
                    `:hourglass: -- **My** Latency is ${Math.floor(
            message.createdTimestamp - message.createdTimestamp
          )}ms\n:electric_plug:  -- **API** Latency is ${Math.round(client.ws.ping)}ms`
                )
                .setColor(colours.CM)
                message.channel.send(_)
        }}
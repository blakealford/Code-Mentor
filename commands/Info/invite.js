const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "invite",
    category: "information",
    description: "invite me",
    run: async (client, message, args) => {
            let _ = new Discord.MessageEmbed()
            .setDescription("So, you want to invite me? [invite me](https://discord.com/oauth2/authorize?client_id=727847629714882590&scope=bot) by clicking on the link")
            .setColor("RANDOM")
            message.channel.send(_)
    }}


    
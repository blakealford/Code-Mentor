const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "links",
    category: "Misc",
    description: "Link to invite the bot and support server",
    run: async (client, message, args) => {
        let links = new Discord.MessageEmbed()
        .setTitle("Check Out My Links | 🌎")
        .setDescription("Did you learn something from me? If so share me with your friends and upvote us on [**Top.gg**](https://top.gg). But maybe you got an error then join our discord and we will be gald to help you in person!")
        .addField("Upvote on Top.gg", "If you like to upvote me click [here](https://top.gg)")
        .addField("Invite Me", "Did you learn something from me? If so share me with your friends, lets see if I can help them! Invite me [here](https://discord.com/oauth2/authorize?client_id=727847629714882590&scope=bot)")
        .addField("Support Server", "Do you need some help with your code. Or I faild you :frowning: then join our support server [here](https://discord.gg/xeVZG8a)")
        .setFooter("Code Mentor | Made With ❤ By Zylo#0001")
        .setColor(colours.JS)
        message.channel.send(links)
    }}
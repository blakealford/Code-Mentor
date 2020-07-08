const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "js",
    category: "information",
    description: "Help command for Js",
    run: async (client, message, args) => {
        let JS = new Discord.MessageEmbed()
        .setTitle("Code Mentor | JavaScript")
        .setDescription("So, I see you like JS \n------------------\n ```js\n To see information on each command do $[command]```------------------")
        .addField("What is JavaScript?", "`Under Development`")
        .addField("Definers Information", "`Under Development`")
        .addField("Data Type Information", "`Under Development`")
        .setFooter("JavaScript | Under Development")
        .setColor(colours.JS)
        message.channel.send(JS)
    }}
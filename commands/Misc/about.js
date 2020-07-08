const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "about",
    category: "misc",
    description: "About mEEE",
    run: async (client, message, args) => {
let guildAdd = new Discord.MessageEmbed()
.setColor(colours.CM)
.setTitle("Let Me Introduce Myself")
.setDescription("Hello! My name is `Code Mentor` and I am here to help you get better at coding. Weather your a **beginner** or a **profesional** typer `(coder)` I can help you with progrmas like:\n> **HTML**\n> **CSS**\n> **JavaScript**\n> **Python**\n To get started do `$help` and then find the lanuage you want to learn. You can also do `$suser` and setup up your user profile!")
.setFooter("Code Mentor | Made With ❤ By Zylo#0001")
message.channel.send(guildAdd)
}}
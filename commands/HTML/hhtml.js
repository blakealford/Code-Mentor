const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "hhtml",
    category: "HTML",
    description: "Help command for HTML",
    run: async (client, message, args) => {
            let _ = new Discord.MessageEmbed()
            .setColor(colours.INVISIBLE)
            .setTitle("Code Mentor Help Menu | HTML")
            .setDescription("Welcome to the **HELP MENU** for `HTML`. Here you can find a list of __all__ my commands!\n------------------\n ```js\n My prefix is $ | all commands are $<command>```------------------")
            .addField("Stable Commands", "`favicon`, `learnhtml`,`html`, `htmltest`")
            .addField("UnStable Commands [Buggy]", "No Buggy Commands! <:hypers:710915906087420087>")
            message.channel.send(_)
    }}
const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "p2-warn",
    category: "JS Guide",
    description: "Warning for Part 2 ",
    run: async (client, message, args) => {
        let hello = new Discord.MessageEmbed()
        .setDescription(":warning: **WARNING**:\nECMAScript also has rules for automatic insertion of semicolons ([ASI](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion)) to end statements. (For more information, see the detailed reference about JavaScript's [lexical grammar.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar))")
        .setColor(colours.JS)
        message.channel.send("Make sure your DMS are on!")
        message.author.send(hello)
    }}
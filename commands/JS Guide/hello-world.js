const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "hello-world",
    category: "JS Guide",
    description: "Hello World!",
    run: async (client, message, args) => {
        let hello = new Discord.MessageEmbed()
        .setTitle("JavaScript Guid | Hello World!")
        .setDescription("In the following pages, this guide introduces you to the JavaScript syntax and language features, so that you will be able to write more complex applications\n\nBut for now, remember to always include the `(function(){\"use strict\";` before your code, and add `})();` to the end of your code. You will learn [what these mean](https://developer.mozilla.org/en-US/docs/Glossary/IIFE), but for now they can be thought of as doing the following:\n\n**1**.  Massively improve performance.\n\n**2**.  Prevent stupid semantics in JavaScript that trip up beginners.\n\n**3**.  Prevent code snippets executed in the console from interacting with one-another (e.g., having something created in one console execution being used for a different console execution).")
        .setColor(colours.JS)
        message.channel.send(hello)
    }}
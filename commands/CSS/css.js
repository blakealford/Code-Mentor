const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "css",
    category: "information",
    description: "Help command for CSS",
    run: async (client, message, args) => {
        let CSS = new Discord.MessageEmbed()
        .setTitle("Code Mentor | CSS")
        .setDescription("So, I see you like CSS \n------------------\n ```js\nFor more info on each command do $[command]```------------------")
        .addField("What is CSS?", "CSS (Cascading Style Sheets) is a styling language. It describes the presentation of a markup langauge, like **HTML**. CSS is a cornerstone of we development, it comes along side **HTML** and **JavaScript**.")
        .addField("Why Use CSS", "CSS is used to __define__ styles for your web pages, including the `design`, `layout` and variations in display for different **devices** and screen sizes.")
        .addField("CSS Syntax", "CSS like every other programing language has a syntax, the CSS syntax consits of a selector and a decleration block. (See Image Below)")
        .addField("Example", "```css\n{\ncolor: red;\ntext-align: center;\n}```")
        .setImage("https://media.discordapp.net/attachments/728993068702892082/730207937028685834/Untitled-1.png?width=364&height=76")
        .setColor(colours.CSS)
        message.channel.send(CSS)
    }}


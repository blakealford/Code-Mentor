const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "learnhtml",
    category: "HTML",
    description: "Learn HTML",
    run: async (client, message, args) => {
        const _ = new Discord.MessageEmbed()
        .setColor(colours.HTML)
        .setTitle("📚Lets Learn HTML")
        .addField("What Is HTML?", "• **HTML** stands for`Hyper Text Markup Language`\n• **HTML** is the __standard__ markup language for creating Web pages\n• **HTML** describes the structure of a Web page\n• **HTML** consists of a series of elements\n• **HTML** elements tell the browser how to display the content\n• **HTML** elements label pieces of content such as \"this is a heading\", \"this is a paragraph\", \"this is a link\", etc.")
        .addField("HTML Example (Basic)", "```html\n<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n\n<h1>My First Heading</h1>\n<p>My first paragraph.</p>\n</body>\n </html>```")
        .addField("HTML Elemnts | What is an HTML Element?", "An **HTML** element is defined by a start tag, some content, and an end tag:\n```html\n<tagname>Content goes here...</tagname>```\nThe **HTML** element is everything from the start tag to the end tag:```html\n<h1>My First Heading</h1>\n<p>My first paragraph.</p>```\n Output Is below:")
        .addField("Soruce", "Information and images sourced from [`w3schools`](https://www.w3schools.com/html/html_intro.asp)\n```Quick Links```\n- [`HTML Crash Course For Beginers - Traversy Media`](https://www.youtube.com/watch?v=UB1O30fR-EE)")
        .setImage("https://media.discordapp.net/attachments/728993068702892082/730217019860975624/img_chrome.png?width=508&height=289")
        message.channel.send(_)
        message.channel.send("Basic **HTML** elemets are attached: https://media.discordapp.net/attachments/728993068702892082/730215908697440327/unknown.png?width=823&height=123")
    }}
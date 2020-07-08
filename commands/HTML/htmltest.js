const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "htmltest",
    category: "HTML",
    description: "Test your skills!",
    run: async (client, message, args) => {
        let quiz = new Discord.MessageEmbed()
        .setAuthor("Take The w3school VERIFIED test", "https://media.discordapp.net/attachments/728993068702892082/730221584421355520/340.png?width=272&height=272")
        .setDescription("Want to test your **HTML** knowledge? Then take the test!\n\n[`wsschools test`](https://www.w3schools.com/quiztest/quiztest.asp?qtest=HTML)")
        .setThumbnail("https://media.discordapp.net/attachments/728993068702892082/730221296729718875/w3certified_logo_250.png?width=200&height=68")
        .setColor(colours.W3SCHOOL)
        message.channel.send(quiz)
    }}
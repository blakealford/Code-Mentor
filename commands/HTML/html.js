const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "html",
    category: "information",
    description: "Help command for HTML",
    run: async (client, message, args) => {
        let HTML = new Discord.MessageEmbed()
        .setTitle("Code Mentor | HTML")
        .setDescription("So, I see you like HTHML \n------------------\n ```js\n To Learn HTML do $learnhtml or tkae the test $htmltest```------------------")
        .addField("What is HTML?", "**Hypertext Markup Language** `(HTML)` is the __standard__ markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as **Cascading Style Sheets** `(CSS)` and scripting languages such as **JavaScript**")
        .addField("Why use HTML?", "**Hypertext Markup Language** or HTML, is used to make web pages and is the base to CSS, but why should you use it? Using HTML is if not the only way one of the best ways to make a website. Although it may look complicated it not!")
        .addField("HTML Syntax", "**HTML** uses tags for its syntax. The tag is composed with special charatcers, these are used when displaying greater then or smaller then `(<->)`. They must end with a `/` to close the element. For information do `$learnhtml`")
        .addField("Example", "```html\nWrong: <h1>Header Here<h1>\n\nCorrect: <h1>Header Here</h1>```")
        .setColor(colours.HTML)
        message.channel.send(HTML)
    }}
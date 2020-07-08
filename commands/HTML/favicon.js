const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "favicon",
    category: "HTML",
    description: "How to add a favicon to your website",
    run: async (client, message, args) => {
        let _ = new Discord.MessageEmbed()
        .setTitle("Lets add a favicon!")
        .setDescription("We have all seen that little image next to the page name on a website. But how mnay poeple know what its called. Well its called a `favicon`. And I am going to shwo you how you can add it.")
        .addField("Requirments", "To add a favicon to your Web site, you'll need both an image and a method for specifying that the image is to be used as a favicon. I am going to show you 2 different ways.")
        .addField("Option 1", "The first approach for specifying a favicon is to use the **rel** attribute value \"icon\" and to define what the value means via a profile. Your document should look like this:```html\n<!DOCTYPE html>\n<head>\n<link rel = \"icon\"\ntype = \"image/png\"\nhref = \"icon link\"\n</head>```")
        .addField("Option 2", "The second approach is the same as the first one although we are using differnt code: ```html\n<!DOCTYPE html>\n<head>\n<link rel=\"icon\" href=\"image_link\">\n</head>```\n```Quick Links```\n- [`How to add a favicon - 101 computing`](https://www.101computing.net/html-how-to-add-a-favicon/) **WEBSITE** \n- [`Adding a Favicon - mmtus`](https://www.youtube.com/watch?v=kEf1xSwX5D8) **VIDEO**")
        .addField("Setting an Favicon", "After:")
        .setImage("https://media.discordapp.net/attachments/709144894240718959/730236782221852792/unknown.png?width=184&height=28")
        .setColor(colours.HTML)
        message.channel.send(_)
    }}

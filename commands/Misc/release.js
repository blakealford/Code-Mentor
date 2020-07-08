const { Message } = require("discord.js")
const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "release",
    category: "Misc",
    description: "Valid for 2 months during the early days of CM",
    run: async (client, message, args) => {
const _ = new Discord.MessageEmbed()
.setTitle("Hello!")
.setDescription("My name is **Code Mentor!** I am discord bot and I am here to help you get good at coding. I help you with languages like `HTML`, `CSS`, `JavaScript` & `Python`and more languages coming. I help with libraries such as `Discor.Js` and `Discord.Py`. So if your looking to code I am the bot for you!\n\n:bookmark_tabs: **Features**\nI have features like helping you with your errors, adding elements to your HTML websites and much more.\nI can help you learn to code and in your selected language\nReputation system. Owners can give people reputation scores or as I call it `coder coins`. These can be rewarded when someone helps someone or just does something good. \nI have a custom badge system. When you do a certain amount of things I will reward you with reputation. You can then purchase things in my store. Like a **Profile Badge**. (They do nothing Like discords)\n\n:heavy_plus_sign: **Want to add me?**\nYou can invite me here -> [`Invite Link`](https://discord.com/oauth2/authorize?client_id=727847629714882590&scope=bot)\n\n*P.S I am free*\n\n:crown: **Who mad me?**\nWell, my master <@587499208937046036> made me using `discord.js` (he is a nerd at this stuff) \"Hey watch it before I turn you off\". Sorry.. .")
.setColor(colours.JS)
message.channel.send(_)
}}
const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "suser",
    category: "Config",
    description: "Setup the bot for your account",
    run: async (client, message, args) => {
        let setupMsg = new Discord.MessageEmbed()
        .setColor(colours.CM)
        .setTitle("User Setup 🙊")
        .setDescription("**Code Mentor** has lots of features that are set for you `(Your Discord Acount)`. You can select your coding skill level along with if you want to recieve the latest `Discord API` announcments in dms.\n\n```Types of User Config```\n > :mega: -- `$user-api-news`\nRecieve the latest API news from the [**Official Discord API server**](https://discord.gg/discord-api)\n > :moneybag: --  `$user-rewards`\n Check what rewards you are elgiable for\n > :trophy: -- `$skill-level`\n Select your skill level, this is showed on your user card for **ALL** servers with **ME**")
        message.channel.send(setupMsg)
    }}
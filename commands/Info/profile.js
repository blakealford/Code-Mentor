const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "profile",
    category: "info",
    description: "This one is all about you!",
    run: async (client, message, args) => {
        let user = message.author
        let profileCard = new Discord.MessageEmbed()
            .setColor(colours.JS)
            .setTitle(user.tag + " Profile Card")
            .setDescription("Check out your profile card!")
            .addField(":first_place: | Profile Badges", "`Under Development` - run `$PB-info`", true)
            .addField(":moneybag: | Profile Balance", "**0** `Coder Coins`", true)
            .addField("People Helped", `I have helped **0** coders`, true)
        message.channel.send(profileCard)
    }
}
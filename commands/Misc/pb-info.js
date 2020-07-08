const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "pb-info",
    category: "Misc",
    description: "What are CMs profile badges",
    run: async (client, message, args) => {
        let _ = new Discord.MessageEmbed()
        .setTitle("🥇 Profile Badges")
        .setColor(colours.INVISIBLE)
        .setDescription("**Code Mentor** has a built in badge system. When users are reward with **Code Coins** you can check out the shop and get some sweat badges on your profile card `($profile)`.\n\nBadges do nothing just like Discord, but they do look really cool on your profile card.")
        message.channel.send(_)
    }}  
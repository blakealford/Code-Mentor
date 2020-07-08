const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "setup",
    category: "Config",
    description: "Setup The Server For CM",
    run: async (client, message, args) => {

        let leveling = "Disabled"
        let apiNews = "Disabled"
        let newsChannel = "None Selected"
        
            let _ = new Discord.MessageEmbed()
            .setColor(colours.JS)
            .setTitle("Setup Code Mentor For Your Server!")
            .addField(":point_up: Leveling", `\`${leveling}\` -- **Under Development**`)
            .addField(":mega: API Announcments", `\`${apiNews}\`` - `${newsChannel}\` -- **Under Development**`)
            message.channel.send(_)
    }}
const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "bot",
    category: "info",
    description: "Bot info",
    run: async (client, message, args) => {
        const guild = client.guilds.cache.size.toLocaleString()
        const user = client.users.cache.size.toLocaleString()
        const channel = client.channels.cache.size.toLocaleString()
        let _ = new Discord.MessageEmbed()
        .setColor(colours.JS)
            .setTitle("Bot Information")
            .setDescription("----------")
            .addField("Guilds", `Watching **${guild}** Guildss`, true)
            .addField("Users", `Watching **${user}** Users code`, true)
            .addField("Channels", `Replying in **${channel}** Channels`, true)
            .addField("Commands [38]", "Do `$help` for all my commands", true)
            .addField("Master/Developer", "`Zylo#0001`", true)
            .addField("Bot Version", "I am currently working on verison `1.0.1` **[BETA]**")
            message.channel.send(_)

    }
}
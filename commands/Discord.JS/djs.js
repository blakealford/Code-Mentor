const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "djs",
    category: "Discord.Js",
    description: "Help command for djs",
    run: async (client, message, args) => {
            let _ = new Discord.MessageEmbed()
            .setColor(colours.DISCORD_JS)
            .setAuthor("Code Mentor Help Menu | Discord.JS", "https://images-ext-2.discordapp.net/external/1E-Ub4mqRHCnzsBsVB2Hd-SNAdp_ghJCdUSRGXq6kT4/https/cdn.discordapp.com/emojis/729621521214996540.png?width=102&height=102")
            .setDescription("Welcome to the **HELP MENU** for `Discord.JS`. Here you can find a list of __all__ my commands!\n------------------\n ```js\n My prefix is $ | all commands are $<command>```------------------\n I am going to be teaching you in Discord.Js `V12` as this is the latest version.\n\n - **Setup Your Project** Check out __DashCrufts__ video on making a discord bot:\n [`Making A Discord Bot`]( https://www.youtube.com/watch?v=gU-uNZz2O8s)")
            .addField("Stable Commands", "`mentioning`, `docs`, `messageembed`, `checkroles`, `errors`, `invalid-token`")
            .addField("UnStable Commands [Buggy]", "No Buggy Commands! <:hypers:710915906087420087>")
            message.channel.send(_)
    }}
const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "hjs",
    category: "JavaScript",
    description: "Help command for Js",
    run: async (client, message, args) => {
            let _ = new Discord.MessageEmbed()
            .setColor(colours.INVISIBLE)
            .setTitle("Code Mentor Help Menu | JS")
            .setDescription("Welcome to the **HELP MENU** for `Js`. Here you can find a list of __all__ my commands!\n------------------\n ```js\n My prefix is $ | all commands are $<command>```------------------")
            .addField("Stable Commands", "`learnjs`, `js`, `djs`, `jserrors`, `refrences`")
            .addField("Guide Commands", "`jsguides`, \n **Part 1** - `hello-world`, `introduction`")
            .addField("UnStable Commands [Buggy]", "`jsguide` {Doesn't Work As of **Version 1.0.1**}")
            message.channel.send(_)

            //No Buggy Commands! <:hypers:710915906087420087>
    }}
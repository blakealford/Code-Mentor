const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "help",
    category: "information",
    description: "Hlep command for CM",
    run: async (client, message, args) => {
            let _ = new Discord.MessageEmbed()
            .setColor(colours.CM)
            .setTitle("Code Mentor Help Menu")
            .setDescription("Welcome to the **HELP MENU**. Here you can find a list of __all__ my commands!\n------------------\n ```js\n My prefix is $ | all commands are $<command>```------------------")
            .addField("General Commands", "`docs`, `profile`, `ping`, `help`, `soruces`, `wtw`, `links`, `about`, `pb-info`")
            .addField("Config Commands", "`suser`, `setup`, `skill-level`, `user-rewards`, `user-api-news`")
            .addField("HTML Commands", "Type `$hhtml` to get all my `HTML` commands")
            .addField("JS Commands", "Type `$hjs` to get all my `JavaScript` commands")
            .addField("CSS Commands", "Type `$hcss` to get all my `CSS` commands")
            .addField("Python Commands", "Type `$hpy` to get all my `Python` commands")
            .addField("Additional", "------------------\n - **Discord.Js** Type `$djs` to find all the commands for discord.js")
            .setFooter("Code Mentor | Made With ❤ By Zylo#0001")
            message.channel.send(_)
    }}

    //\<:HTML:729621519667560469> \<:Js:729621519952642058>  \<:CSS:729621519730343996>  \<:Pyhton:729621522221629510> 

    
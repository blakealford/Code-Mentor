const Discord = require('discord.js')
const colours = require('../../JSON Files/colours.json')
const paginationEmbed = require('discord.js-pagination');
module.exports = {
        name: "changelog",
        category: "Misc",
        description: "Change log",
        run: async (client, message, args) => {
        message.channel.send("My master snuck a little update into me this morning, changes are listed below:\n- added `$jsguide` will help you learn js with a complete guide.  [Only has 2 parts (Introduction `$introduction` & Grammar and Types `$gat`)]\n- All commands related to the **JS Guide**:\n >`$introduction` -- **Introduction To JavaScript**  \n >`$gat` -- **Grammar and Types**\n >`$p2-warn` -- **Warning in Part 2 of the guide [GAT]**\n\n > I have also added the `jserrors` command. It will display all of the frequent errors within in JavaScript.\n > You can find discord.js errors and how to debug them by doing `$errors`.\n\nI will be adding to the js guide command through out the day. you can skip to a certain part of the guide. Or do `$jsguide` and scroll through each part using the arrows down the bottom. I am going to work on getting the **Discord.js** side of things ready. You can get a list of the stable commands by doing `$djs`\n\n**Learn Today Not Tomorrow**")

}}

const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "mentioning",
    category: "Discord.JS",
    description: "Find out how to mention a role or a user in a message!",
    run: async (client, message, args) => {
        const M = new Discord. MessageEmbed()
        .setColor("0x2f3136")
        .setAuthor("Discord.js v12", "https://images-ext-2.discordapp.net/external/1E-Ub4mqRHCnzsBsVB2Hd-SNAdp_ghJCdUSRGXq6kT4/https/cdn.discordapp.com/emojis/729621521214996540.png?width=102&height=102")
        .setTitle("Mentioning (Stable)")
        .setURL("https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=mentions")
        .setDescription("Discord.js Documentation For [**Mentioning**](https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=mentionable)\n\nTo start off were going to need to learn how to get the ids.\n > The Easist Way\n**1.** Click the gear icon near your user tag (`eg: Zylo#0001`)\n**2.** Then head down to `Appearance`, scroll down and you can see `Develper Mode` click yes.\n And your all setup to continue.\n\n```Mentioning Users``` **Geting User IDS**\nTo grab a user ID right click on a member and click `Copy ID`. This will copy a ID. This will be **18** characters long.\n**Mentioning Users**\nTo mention someone all you need to do in your code is `<@USER_ID>`.\n\n```Mentioning Roles``` **Getting Role IDS**\nHead to server setting and `roles` and right click on the rule you want to mention. This will also be **18** characters long.\n**Mentiong A Role**\nMentioning a role is just like mentioning a user, instad of `@` do `&` | Output = `<&ROLE_ID>`")
        message.channel.send("Discord has a very easy mentioning system. Although its still very easy when using it in coding but not as easy as just @ing someone. You may have thought to yourself `\"Whats the point of user & role ids?\"` Well there used to mention in coding.")
        message.channel.send(M)
    }}
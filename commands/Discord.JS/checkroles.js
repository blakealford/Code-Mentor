const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "checkroles",
    category: "Discord.JS",
    description: "Find out how to check roles",
    run: async (client, message, args) => {
        const M = new Discord. MessageEmbed()
        .setColor(colours.INVISIBLE)
        .setAuthor("Discord.js v12", "https://images-ext-2.discordapp.net/external/1E-Ub4mqRHCnzsBsVB2Hd-SNAdp_ghJCdUSRGXq6kT4/https/cdn.discordapp.com/emojis/729621521214996540.png?width=102&height=102")
        .setTitle("Check Roles (Stable)")
        .setURL("https://discord.js.org/#/docs/main/stable")
        .setDescription("If you want to keep your bots permission checks simple, you might find it sufficient to just check if the member executing the command has a certain role.\n\nIf you have the role ID, you can simply check if the `.roles` Collection on a GuildMember object includes it, using `.has()`. Should you not know the ID and want to check for something like a role named \"Mod\", you can use `.some()`.```js\nmember.roles.cache.has('role-id-here');\n// returns true if the member has the role\n\nmember.roles.cache.some(role => role.name === 'Mod');\n// returns true if any of the member's roles is exactly named\"Mod\"```")
        message.channel.send(M)
    }}


    

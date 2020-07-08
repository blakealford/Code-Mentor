const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "invalid-token",
    category: "Discord.JS",
    description: "You got an invalid token?",
    run: async (client, message, args) => {
        let I = new Discord.MessageEmbed()
        .setColor(colours.JS)
        .setDescription("**WARNING**\nPlease make sure that you do not sure your token what so ever. If you do people can acess and control your bot. Under any circumstances do **NOT** share your token.")
        const M = new Discord. MessageEmbed()
        .setColor(colours.DISCORD_JS)
        .setAuthor("Discord.js v12", "https://images-ext-2.discordapp.net/external/1E-Ub4mqRHCnzsBsVB2Hd-SNAdp_ghJCdUSRGXq6kT4/https/cdn.discordapp.com/emojis/729621521214996540.png?width=102&height=102")
        .setTitle("Invalid Token")
        .setDescription("```(node:72712) UnhandledPromiseRejectionWarning: Error [TOKEN_INVALID]: An invalid token was provided.```\n This is a very common error within discord.js. It occurs when you pass the client token though either the `client.login(TOKEN)`, `bot.login(TOKEN)`. Heres some ways that we can debug this error.\n\n --- **Debuging** ---\n - This could occur if you havent imported the config or env file right\n - Some people will put the `CLIENT_SECRET` instead of the bot token.\n - Try re generationg the token, due to discord now detecting if your token has been posted ot the web and will auto regenerate it.\n > You would have recieved from `Discords Ssystem` in dms")
        message.channel.send(I)
        message.channel.send(M)
    }}


    



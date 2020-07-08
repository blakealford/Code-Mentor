const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
module.exports = {
  name: "docs",
  category: "Discord.JS",
  description: "Seach the discord.js docs",
  run: async (client, message, args) => {

    const [query, src] = args;
    if(!query) return message.channel.send("Check out the docs here: https://discord.js.org");
    
    const embed = await (await fetch(`https://djsdocs.sorta.moe/v2/embed?src=${src|| "stable"}&q=${query.replace(/#/g, ".")}`)).json();
    if (!embed || embed.error) return message.reply("What is that!");
    const docEmbed = new MessageEmbed(embed)
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      .setTitle(`Discord.js (${args[1] || "stable"}`)
      .setTimestamp();
    
    return message.channel.send(docEmbed);
    
}}

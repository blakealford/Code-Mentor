const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "messageembed",
    category: "Discord.JS",
    description: "Find out how to make a message embed.",
    run: async (client, message, args) => {
        const M = new Discord. MessageEmbed()
        .setColor(colours.INVISIBLE)
        .setAuthor("Discord.js v12", "https://images-ext-2.discordapp.net/external/1E-Ub4mqRHCnzsBsVB2Hd-SNAdp_ghJCdUSRGXq6kT4/https/cdn.discordapp.com/emojis/729621521214996540.png?width=102&height=102")
        .setTitle("MessageEmbed (Stable)")
        .setURL("https://discord.js.org/#/docs/main/stable/class/MessageEmbed")
        .setDescription("I take that most of you have seen a embed before. Its that cool mesage that has a coloured border. And I take you want to know how to use it? Well lets find out how.\n```js\n// at the top of your file\nconst Discord = require('discord.js');\n\n// inside a command, event listener, etc.\nconst exampleEmbed = new Discord.MessageEmbed()\n.setColor('#0099ff')\n.setTitle('Some title')\n.setURL('https://discord.js.org/')\n.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')\n.setDescription('Some description here')\n.setThumbnail('https://i.imgur.com/wSTFkRM.png')\n.addFields(\n{ name: 'Regular field title', value: 'Some value here' },\n{ name: '\u200B', value: '\u200B' },\n{ name: 'Inline field title', value: 'Some value here', inline: true },\n{ name: 'Inline field title', value: 'Some value here', inline: true },\n)\n.addField('Inline field title', 'Some value here', true)\n.setImage('https://i.imgur.com/wSTFkRM.png')\n.setTimestamp()\n.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');\n\nchannel.send(exampleEmbed);```")
        .addField("Properties", "`type` `title` `description` `url` `color` `timestamp` `fields` `thumbnail` `image` `video` `author` `provider` `footer` `files` `createdAt` `hexColor` `length`")
        .addField("Method", "`addField` `addFields` `spliceFields` `attachFiles` `setAuthor` `setColor` `setDescription` `setFooter` `setImage` `setThumbnail` `setTimestamp` `setTitle` `setURL` `toJSON` `normalizeField` `normalizeFields`")
        .addField('Credits:','Information from [`Discord.JS Guide`](https://discordjs.guide/popular-topics/embeds.html#embed-preview)')
        message.channel.send(M)
    }}


    
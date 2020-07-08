const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "shutdown",
    category: "Bot Owner",
    description: "Shut down the bot",
    run: async (client, message, args) => {
        let warning = new Discord.MessageEmbed()
        .setDescription(":warning: **WARNING**\nAccess denied, reason: You are not client owner `(Zylo#0001)`")
        .setColor(colours.JS)
        let shutdownM = new Discord.MessageEmbed()
        .setDescription(":warning: **WARNING**\n Are you show you want to turn the bot off. Doing so will require you to manualy restart me.")
        .setColor(colours.JS)
    if(message.author.id !== "587499208937046036") {
    return message.channel.send(warning)
    } else {
    const newMessage = await message.channel.send(shutdownM);
    newMessage.react('👍').then(() => newMessage.react('👎'));

    const filter = (reaction, user) => {
        return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
    };

    newMessage.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(async collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
            let channelS  = client.channels.cache.get('730286345708109854');
            let restartLog = new Discord.MessageEmbed()
            .setTitle('Bot Has Shut Down')
            .setDescription("**Code Mentor** Has shut down, exiting all processes. <@587499208937046036> has shut me down for a reason, please do not hesiate as he will get me back **asap**")
            .setColor(colours.CM)
            channelS.send("<&730285471929860219>")
            channelS.send(restartLog)
            message.athor.send("<@587499208937046036> If this was not your doing please investigate.")
            await message.channel.send("Exiting All Processes");
            process.exit();
        } else {
            message.channel.send("Exiting the shutdown sequence");
        }
    })
    let error = new Discord.MessageEmbed()
    .setColor(colours.HTML)
    .setDescription(":read_circle: **ERROR**\nTimeout reached. Exiting the shutdown sequence. ")

    .catch(collected => {
        message.channel.send('You reacted with neither a thumbs up, nor a thumbs down.');
    })}}};
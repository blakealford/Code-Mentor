const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
const config = require("./JSON Files/config.json")
const colours = require("./JSON Files/colours.json")
const prefix = config.prefix
client.mongoose = require("./Utils/mongoose")

client.on('ready', () => {
    console.log(`I am online in ${client.guilds.cache.size} servers and ready to help people code!`)
    client.user.setActivity(`People Code | $help`, {
        type: 'WATCHING'
    })
})
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.catergories = fs.readdirSync(__dirname + "/commands/");
["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});

fs.readdir("./commands/", (err, files) => {
    if (err) console.error(err);

    var jsfiles = files.filter((f) => f.split(".").pop() === "js");
    if (jsfiles.length <= 0) {} else {
        console.log(jsfiles.length + " commands found");
    }

    jsfiles.forEach((f, i) => {
        var cmds = require(`./commands/${f}`);
        console.log * `Command ${f} loading...`;
        client.commands.set(cmds.config.command, cmds);
    });
});

client.on("message", async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.guild) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length == 0) return;
    let command = client.commands.get(cmd)
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) command.run(client, message, args)

})

client.on("guildCreate", async guildCreate => {
    const channel = guildCreate.channels.cache
    .filter(c => c.type === "text")
    .random();
    let guildAdd = new Discord.MessageEmbed()
    .setColor(colours.CM)
    .setTitle("Thanks For Adding Me! 🎉")
    .setDescription("Hello! My name is `Code Mentor` and I am here to help you get better at coding. Weather your a **beginner** or a **profesional** typer `(coder)` I can help you with progrmas like:\n> **HTML**\n> **CSS**\n> **JavaScript**\n> **Python**\n To get started run `$setup` and pick your langauge")
    .setFooter("Code Mentor | Made With ❤ By Zylo#0001")
    channel.send(guildAdd)
})
client.mongoose.init
client.login(config.token)
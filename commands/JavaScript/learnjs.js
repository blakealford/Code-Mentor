const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "learnjs",
    category: "JavaScript",
    description: "Learn JS",
    run: async (client, message, args) => {
        const _ = new Discord.MessageEmbed()
        .setColor(colours.JS)
        .setTitle("📚Lets Learn JavaScript")
        .setDescription("Check Out **My** Repository - [`My Repository`](https://github.com/GiftedZylo)\n Check Out **Zylos** Repositories - [`Zylos Repositories`](https://github.com/GiftedZylo)\n\n**NOTE**: To start learning JavaScript head over to **Zylos** repository and find the `Learn JS` repo. [`Learn JS`](https://github.com/GiftedZylo)You will find files with topic of JavaScript. From there there will be a file in each with a **link** to a video.\n```Quick Links```\n For some quick videos and JavaScript crash courses check out these videos!\n\n- [`JavaScript For Beginners - Anson The Developer`](https://www.youtube.com/watch?v=G_miVJbLraA&list=PL_cUvD4qzbkzrpH8det0pvoT_Oxu1JV34)\n- [`JavaScript Crash Course For Beginers - Traversy Media`](https://www.youtube.com/watch?v=hdI2bqOjy3c)")
        message.channel.send(_)
    }}
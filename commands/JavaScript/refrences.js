const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
const paginationEmbed = require('discord.js-pagination');
module.exports = {
    name: "refrences",
    category: "JavaScript",
    description: "Errors within the javascript library",
    run: async (client, message, args) => {
    let _1 = new Discord.MessageEmbed()
    .setAuthor("Functions Within The JavaScript Library", "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png")
    .setDescription("```Arrow function expressions\nDefault parameters\nMethod definitions\nRest parameters\nThe arguments object\ngetter\nsetter```")
    .setColor(colours.JS)
    let _2 = new Discord.MessageEmbed()
    .setAuthor("Classes Within The JavaScript library", "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png")
    .setDescription("```Class fields\nconstructor\nextends\nstatic```")
    .setColor(colours.JS)
    let _3 = new Discord.MessageEmbed()
    .setAuthor("Misc Links", "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png")
    .setDescription("[`JavaScript technologies overview`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview)\n[`Lexical grammar`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)\n[`JavaScript data structures`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)\n[`Enumerability and ownership of properties`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)\n[`Iteration protocols`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)\n[`Strict mode`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)\n[`Transitioning to strict mode`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode)\n[`Template literals`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)\n[`Deprecated features`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)")
    .setColor(colours.JS)
    const pages = [    
        _1,
        _2,
        _3,
    ];

    const emojiList = ['⏪', '⏩']

    const timeout = '1200000';

    paginationEmbed(message, pages, emojiList, timeout);
}}
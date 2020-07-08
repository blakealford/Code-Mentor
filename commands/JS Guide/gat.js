const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "gat",
    category: "JS Guide",
    description: "Part 2",
    run: async (client, message, args) => {                
                let GrammarAndTypes = new Discord.MessageEmbed()
                .setURL("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types")
                .setTitle("Getting Started With JavaScript | Part 2")
                .setDescription("**WARNING** Type `$p2-warn` to see the warning\n\nLet's take a look at `grammar and types`. \nThis part has a lot of information so I will sum it up for you. To see the full doc click the title")
                .addField("Basics", "JavaScript borrows most of its syntax from Java, C, and C++, but it has also been influenced by Awk, Perl, and Python.\n\nJavaScript is **case-sensitive** and uses the **Unicode** character set. For example, the word Früh (which means \"early\" in German) could be used as a variable name.\n```js\nlet Früh = \"foobar\"```\nBut, the variable `früh` is not the same as `Früh` because JavaScript is case sensitive.\n\nIn JavaScript, instructions are called [statements](https://developer.mozilla.org/en-US/docs/Glossary/Statement) and are separated by semicolons (;).\n\nA semicolon is not necessary after a statement if it is written on its own line. But if more than one statement on a line is desired, then they must be separated by semicolons.")
                .addField("Basics Cotinued", "It is considered best practice, however, to always write a semicolon after a statement, even when it is not strictly needed. This practice reduces the chances of bugs getting into the code.\n\nThe source text of JavaScript script gets scanned from left to right, and is converted into a sequence of input elements which are *tokens*, *control characters*, *line terminators*, *comments*, or [whitespace](https://developer.mozilla.org/en-US/docs/Glossary/whitespace). (Spaces, tabs, and newline characters are considered whitespace.)")
                .setColor(colours.JS)
                message.channel.send(GrammarAndTypes)
    }}
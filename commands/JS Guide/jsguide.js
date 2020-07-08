const Discord = require('discord.js')
const colours = require('../../JSON Files/colours.json')
const paginationEmbed = require('discord.js-pagination');
module.exports = {
        name: "jsguide",
        category: "JavaScript",
        description: "lets learn JavaScript",
        run: async (client, message, args) => {
            // let warning = new Discord.MessageEmbed()
            //     .setDescription(":warning: **WARNING**\nAccess denied, reason: You are not client owner `(Zylo#0001)` | Coming `Version 1.0.2`")
            //     .setColor(colours.JS)
            // if (message.author.id !== "587499208937046036") {
            //     return message.channel.send(warning)
            // } else {
                message.channel.send("**NOTE:**\nThe following guide is a brief over view of information sourced from MND. To get a more advance look into the guide check out the website. I will be sneding these in embed form. So to skip to parts instead of going through every part do `$jsguide-<section>` ")
                let notice = new Discord.MessageEmbed()
                .setTitle("Lets learn JS and discusses some of itsfundamental concepts.")
                .setDescription("This guide contains **[17]** topics. All come from [MND](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)")
                .addField("What You Should Already Know", " ● A general understanding of the Internet and the World Wide Web (WWW).\n ● Good working knowledge of HyperText Markup Language (HTML).\n ● Some programming experience")     
                .addField("Helpful Links", "[Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn) provides information for beginners and introduces basic concepts of programming and the Internet.\n\n- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) `(Info Sourced From Here)` provides an overview about the JavaScript language and its objects.\n\n- [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) provides detailed reference material for JavaScript.\n\nIf you are new to JavaScript, start with the articles in the [learning area](https://developer.mozilla.org/en-US/Learn) and the [JavaScript Guide.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) Once you have a firm grasp of the fundamentals, you can use the [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) to get more details on individual objects and statements.")           
                .addField("Extra Information", "For more information on JavaScript use `$js` this will explain what js is and alot more.")
                .setColor(colours.JS)
                let introduction = new Discord.MessageEmbed()
                .setURL("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction")
                .setTitle("Getting Started With JavaScript | Part 1")
                .setDescription("Getting started with JavaScript is easy: all you need is a modern Web browser. This guide includes some JavaScript features which are only currently available in the latest versions of Firefox, so using the most recent version of Firefox is recommended.\n\nThe *Web Console* tool built into Firefox is useful for experimenting with JavaScript; you can use it into two modes: single-line input mode, and multi-line input mode.")
                .addField("Getting The Terminal/Console", "The Web Console shows you information about the currently loaded Web page, and also includes a JavaScript interpreter that you can use to execute JavaScript expressions in the current page.\nTo open the Web Console (`Ctrl+Shift+I` on Windows and Linux or `Cmd-Option-K` on Mac), open the **Tools** menu in Firefox, and select \"**Developer** ▶ **Web Console**\". \n\nThe Web Console appears at the bottom of the browser window. Along the bottom of the console is an input line that you can use to enter JavaScript, and the output appears in the panel above:")
                .addField("Console", "The console works the exact same way as `eval`: the last expression entered is returned. For the sake of simplicity, it can be imagined that every time something is entered into the console, it is actually surrounded by `console.log` around `eval`, like so:\n```js\nfunction greetMe(yourName) {\nalert(\"Hello \" + yourName)\n}\nconsole.log(eval('3 + 5'))```")
                .addField("Multi-line input in the Web Console", "The single-line input mode of the Web Console is great for quick testing of JavaScript expressions, but although you can execute multiple lines, it's not very convenient for that. For more complex JavaScript, you can use the [multi-line line input mode.](https://developer.mozilla.org/en-US/docs/Tools/Web_Console/The_command_line_interpreter#Multi-line_mode)")
                .addField("Hello World", "To get started with writing JavaScript, open the Web Console in multi-line mode, and write your first \"Hello world\" JavaScript code:```js\n(function(){\n\"use strict\";\n/* Start of your code */\nfunction greetMe(yourName) {\nalert('Hello ' + yourName);\n}\n\ngreetMe('World');\n/* End of your code */\n})();```\n For Extra info do `$hello-world`\n\nPress `Cmd+Enter` or `Ctrl+Ente`r (or click the Run button) to watch it unfold in your browser!")
                .setColor(colours.JS)
                let GrammarAndTypes = new Discord.MessageEmbed()
                .setURL("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types")
                .setTitle("Getting Started With JavaScript | Part 2")
                .setDescription("**WARNING** Type `$p2-warn` to see the warning\n\nLet's take a look at `grammar and types`. \nThis part has a lot of information so I will sum it up for you. To see the full doc click the title")
                .addField("Basics", "JavaScript borrows most of its syntax from Java, C, and C++, but it has also been influenced by Awk, Perl, and Python.\n\nJavaScript is **case-sensitive** and uses the **Unicode** character set. For example, the word Früh (which means \"early\" in German) could be used as a variable name.\n```js\nlet Früh = \"foobar\"```\nBut, the variable `früh` is not the same as `Früh` because JavaScript is case sensitive.\n\nIn JavaScript, instructions are called [statements](https://developer.mozilla.org/en-US/docs/Glossary/Statement) and are separated by semicolons (;).\n\nA semicolon is not necessary after a statement if it is written on its own line. But if more than one statement on a line is desired, then they must be separated by semicolons.")
                .addField("Basics Cotinued", "It is considered best practice, however, to always write a semicolon after a statement, even when it is not strictly needed. This practice reduces the chances of bugs getting into the code.\n\nThe source text of JavaScript script gets scanned from left to right, and is converted into a sequence of input elements which are *tokens*, *control characters*, *line terminators*, *comments*, or [whitespace](https://developer.mozilla.org/en-US/docs/Glossary/whitespace). (Spaces, tabs, and newline characters are considered whitespace.)")
                .setColor(colours.JS)
                const pages = [    
                notice,
                introduction,
                GrammarAndTypes,
                
            ];  
        
            const emojiList = ['⏪', '⏩']
        
            const timeout = '1200000';
        
            paginationEmbed(message, pages, emojiList, timeout);
}}
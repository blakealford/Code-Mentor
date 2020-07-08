const Discord = require('discord.js');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "js-introduction",
    category: "JS Guide",
    description: "Part 1 | Introduction",
    run: async (client, message, args) => {
        let introduction = new Discord.MessageEmbed()
                .setTitle("Getting Started With JavaScript | Part 1")
                .setDescription("Getting started with JavaScript is easy: all you need is a modern Web browser. This guide includes some JavaScript features which are only currently available in the latest versions of Firefox, so using the most recent version of Firefox is recommended.\n\nThe *Web Console* tool built into Firefox is useful for experimenting with JavaScript; you can use it into two modes: single-line input mode, and multi-line input mode.")
                .addField("Getting The Terminal/Console", "The Web Console shows you information about the currently loaded Web page, and also includes a JavaScript interpreter that you can use to execute JavaScript expressions in the current page.\nTo open the Web Console (`Ctrl+Shift+I` on Windows and Linux or `Cmd-Option-K` on Mac), open the **Tools** menu in Firefox, and select \"**Developer** ▶ **Web Console**\". \n\nThe Web Console appears at the bottom of the browser window. Along the bottom of the console is an input line that you can use to enter JavaScript, and the output appears in the panel above:")
                .addField("Console", "The console works the exact same way as `eval`: the last expression entered is returned. For the sake of simplicity, it can be imagined that every time something is entered into the console, it is actually surrounded by `console.log` around `eval`, like so:\n```js\nfunction greetMe(yourName) {\nalert(\"Hello \" + yourName)\n}\nconsole.log(eval('3 + 5'))```")
                .addField("Multi-line input in the Web Console", "The single-line input mode of the Web Console is great for quick testing of JavaScript expressions, but although you can execute multiple lines, it's not very convenient for that. For more complex JavaScript, you can use the [multi-line line input mode.](https://developer.mozilla.org/en-US/docs/Tools/Web_Console/The_command_line_interpreter#Multi-line_mode)")
                .addField("Hello World", "To get started with writing JavaScript, open the Web Console in multi-line mode, and write your first \"Hello world\" JavaScript code:```js\n(function(){\n\"use strict\";\n/* Start of your code */\nfunction greetMe(yourName) {\nalert('Hello ' + yourName);\n}\n\ngreetMe('World');\n/* End of your code */\n})();```\n For Extra info do `$hello-world`\n\nPress `Cmd+Enter` or `Ctrl+Ente`r (or click the Run button) to watch it unfold in your browser!")
                .setColor(colours.JS)
        message.channel.send(introduction)
    }}
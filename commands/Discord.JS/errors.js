const Discord = require('discord.js');
const paginationEmbed = require('discord.js-pagination');
const colours = require("../../JSON Files/colours.json");
module.exports = {
    name: "errors",
    category: "Discord.JS",
    description: "Common Discord.JS Erros",
    run: async (client, message, args) => {
        const embed1 = new Discord.MessageEmbed()
            .setTitle("Common Discord.Js Errors")
            .setDescription("Discord.Js are differnt to `JavaScript` erros. for JS erros do `$jserrors`\n\n There is no doubt that you have encountered errors while making bots. While errors are very useful at warning you of what is going wrong, many people are stumped by them and how to track them down and fix them, but don't worry, I have you covered. I will show you how to dignose erros and how to fix them.\n\n**Types of Errors**")
            .addField("API Errors", "API Errors or DiscordAPIErrors are errors which are thrown by the Discord API when an invalid request is carried out. API Errors can be mostly diagnosed using the message that is given. \n > **Example:**\n```js\nDiscordAPIError: Cannot send an empty message```")
            .addField("Discord.js Errors", "Discord.js Errors are errors which are thrown by the library itself, they can usually be easily tracked down using the stacktrace and error message.\n > **Example:**\n```js\nThe messages must be an Array, Collection, or number.```")
            .addField("JS Errors", "JS Errors are simple errors which can be thrown by node itself, or by discord.js. These types of errors can easily be fixed by looking at the type of error, and the stacktrace. You can find a full list of common js errors by doing `$jserrors`\n > **Example:**")
            .addField('Websocket & Network Errors', 'Websocket and Network errors are common system errors thrown by Node in response to something wrong with the websocket connection. Unfortunately, these errors do not have a concrete solution and can be (usually) fixed by getting a better, more stable, and stronger connection. Discord.js will automatically try to reconnect to the websocket if an error occurs.')
            .setColor(colours.DISCORD_JS)
        const embed2 = new Discord.MessageEmbed()
            .setTitle("API Errors")
            .setDescription("**How to Diagnose API errors**\n\nAPI Errors can be tracked down by adding an event listener for unhandled rejections and looking at the extra info that is given. This can be done by easily adding this to your main file\n```js\nprocess.on('unhandledRejection', error => {\nconsole.error('Unhandled promise rejection:', error);\n});\nThe next time you get the error it will show info along the bottom of the error which will look something like this for ```example:\n```js\n name: 'DiscordAPIError',\nmessage: 'Invalid Form Body\nmessage_id: Value \"[object Object]\" is not snowflake.',\npath: '/api/v7/channels/638200642359525387/messages/[object%20Object]',\ncnode: 50035,\nmethod: 'GET'```")
            .addField("Message", "The most important part of the error is the message, it tells you what actually went wrong which can help you track down where it came from. You can find a full list of messages [`here`](https://discordapp.com/developers/docs/topics/opcodes-and-status-codes#json) in the Discord API Docs.")
            .addField("Path", "The path is another helpful piece of information, the path tells you where you tried to execute an action. We cannot possibly cover all API paths but they are usually very descriptive, for example, in our example above the path tells us we are first in the channels path, then judging by the id after it we can see we got a specific channel. After the `/api/v7/channels/638200642359525387` we can see that we get the `messages` of that channel, and in the same way we saw before, we see we try to access a specific message by id, however we gave it an invalid id, which is the origin of the message.")
            .addField("Code", "The code is another partial representation of the message, in this case `Invalid Form Body`. You can find a full list of codes here The code is also very useful if you want to only handle a specific error. Say we were trying to delete a message which may or may not be there, and we wanted to simply ignore unknown message errors. This can be done by checking the code, either manually, or using discord.js's constants.\n```js\nmessage.delete().catch(error => {\n// Only log the error if it is not an Unknown Message error\nif (error.code !== 10008) {\nconsole.error('Failed to delete the message:', error);\n}\n});```\n Or using Constants:\n```js\nmessage.delete().catch(error => {\nif (error.code !== Discord.Constants.APIErrors.UNKNOWN_MESSAGE) {\nconsole.error('Failed to delete the message:', error);\n}\n});```\nYou can find a list of constants [`here`](https://github.com/discordjs/discord.js/blob/stable/src/util/Constants.js#L552)")
            .addField("Mehtod", "The final piece of information can tell us a lot about what we tried to do to the path, there are a set of predefined keywords which describe our actions on the path.\n```js\nGET    - Used to retrieve a piece of data\nPOST   - Used to send a piece of data\nPATCH  - Used to modify a piece of data\nPUT    - Used to completely replace a piece of data\nDELETE - Used to completely delete a piece of data```\nIn this particular example we can see we are trying to access a piece of data, specifically, a message.")
            .setColor(colours.DISCORD_JS)

        const embed3 = new Discord.MessageEmbed()
        .setColor(colours.DISCORD_JS)
        .setTitle("Common API Errors")
        .setDescription("[`MessageEmbed field names may not be empty.`](https://discordjs.guide/popular-topics/errors.html#messageembed-field-names-may-not-be-empty)\n[`MessageEmbed field values may not be empty.`](https://discordjs.guide/popular-topics/errors.html#messageembed-field-values-may-not-be-empty)\n[`The messages must be an Array, Collection, or number.`](https://discordjs.guide/popular-topics/errors.html#the-messages-must-be-an-array-collection-or-number)\n[`The messages must be an Array, Collection, or number.`](https://discordjs.guide/popular-topics/errors.html#members-didn-t-arrive-in-time)\n[`Members didn't arrive in time.`](https://discordjs.guide/popular-topics/errors.html#members-didn-t-arrive-in-time)\n[`MaxListenersExceededWarning: Possible EventEmitter memory leak detected...`](https://discordjs.guide/popular-topics/errors.html#maxlistenersexceededwarning-possible-eventemitter-memory-leak-detected)\n[`Cannot send messages to this user.`](https://discordjs.guide/popular-topics/errors.html#cannot-send-messages-to-this-user)\n[`Common miscellaneous errors`](https://discordjs.guide/popular-topics/errors.html#common-miscellaneous-errors)\n[`code ELIFECYCLE`](https://discordjs.guide/popular-topics/errors.html#code-elifecycle)")
        const pages = [    
            embed1,
            embed2,
            embed3,
        ];

        const emojiList = ['⏪', '⏩']

        const timeout = '1200000';

        paginationEmbed(message, pages, emojiList, timeout);

    }
}
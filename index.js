// This file contains the basic stuff. Logging in, and replying. The list of memes can be found in despacito.js.
const Discord = require("discord.js");
const despacito = require("./despacito.js");
const client = new Discord.Client();

const itemCount = despacito.getItemCount();

client.on("ready", () => {
    console.log("Bot online! 👌")
});

client.on("message", msg => {
    var lowerMessage = String(msg.content).toLowerCase();
    //console.log(lowerMessage); //this was for testing purposes

    if (lowerMessage === "this is so sad play despacito") {
        var embed = despacito.getRandom(); //calls function in despacito.js
        msg.reply("i hope this cheers you up.", {
            embed: embed
        });
    }
    if (lowerMessage === "despacito help") {
        msg.reply("just say `this is so sad play despacito` for a random despacito related video. \n for some *other commands*; start a message with `despacito` and then use one of the following: \n `help` shows you... this. \n `about` brings you stuff about this bot. \n `changelog` shows you a bit of a changelog. \n `playlist` gives you a link to the current despacito memes playlist.")
    }
    if (lowerMessage === "despacito about") {
        msg.reply("@despacitoBot;#3814 was made by @AndzCLiv3#7664 in an insomnia-fueled stupor. \n `v0.0.3dev` last updated 20 september 2019. despacito.js currently contains `" + itemCount + "` items. \n the [bad] source code of this bot can be found here: https://github.com/AndyThePie/despacitoBot-semicolon")
    }
    if (lowerMessage === "despacito changelog") {
        msg.reply("the current version of @despacitoBot;#3814 is `v0.0.3`, released tbd. this added: \n `this is so sad` - the bot now asks you if you want to play despacito. it will also insult other people now. neato. \n `despacito changelog` - you're reading it right now. wow. \n `despacito stats` - will now show you numbers and stuff. cool. \n further version history can be found in releases: https://github.com/AndyThePie/despacitoBot-semicolon/releases")
    }
    if (lowerMessage === "despacito playlist") {
        msg.reply("here. https://www.youtube.com/playlist?list=PLchhjXy0uG8pfrYkYFwG_IwnoR0PozqJs \n do you have a video that you think should be added to this playlist? DM @AndzCLiv3#7664 or something if he's still functioning.")
    }
});

client.login(process.env.BOT_TOKEN); 
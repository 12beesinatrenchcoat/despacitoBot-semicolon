// This file contains the basic stuff. Logging in, and replying. The list of memes can be found in despacito.js.
const Discord = require("discord.js");
const despacito = require("./despacito.js");
const client = new Discord.Client();

const itemCount = despacito.getItemCount();

client.on("ready", () =>{
    console.log("Bot online! 👌")
});

client.on("message", msg=>{
    if(msg.content === "this is so sad play despacito"){
        var embed = despacito.getRandom(); //calls function in despacito.js
        msg.reply("i hope this cheers you up.",{
            embed: embed
        });
    }
    if(msg.content === "despacito help"){
        msg.reply("just say `this is so sad play despacito` for a random despacito related video. \n for some *other commands*; start a message with `despacito` and then use one of the following: \n `help` shows you... this. \n `about` brings you stuff about this bot. \n `playlist` gives you a link to the current despacito memes playlist.")
    }
    if(msg.content === "despacito about"){
        msg.reply("`despacitoBot;` was made by @AndzCLiv3#7664 in an insomnia-fueled stupor. \n `v0.0.2` last updated 18 august 2019. despacito.js currently contains" + itemCount + "items. \n the [bad] source code of this bot can be found here: https://github.com/AndyThePie/despacitoBot-semicolon")
    }
    if(msg.content === "despacito playlist"){
        msg.reply("here. https://www.youtube.com/playlist?list=PLchhjXy0uG8pfrYkYFwG_IwnoR0PozqJs \n do you have a video that you think should be added to this playlist? DM @AndzCLiv3#7664 or something if he's still functioning.")
    }
});

client.login(process.env.BOT_TOKEN); 
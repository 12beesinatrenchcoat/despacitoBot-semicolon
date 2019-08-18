// This file contains the basic stuff. Logging in, and replying. Getting what to reply *with* can be found in despacito.js.
const Discord = require("discord.js");
const despacito = require("./despacito.js");
const client = new Discord.Client();

client.on("ready", () =>{
    console.log("Bot online! 👌")
});

client.on("message", msg=>{
    if(msg.content === "this is so sad play despacito"){
        console.log("ok");
        var embed = despacito.getRandom();
        msg.reply("i hope this makes you happy",{
            embed: embed
        });
    }
    if(msg.content === "despacito help"){
        msg.reply("just say `this is so sad play despacito` for a random despacito related video. \n for some *other commands*; start a message with `despacito` and then use one of the following: \n `help` shows you... this. \n `about` brings you stuff about this bot. \n `playlist` gives you a link to the current despacito memes playlist.")
    }
    if(msg.content === "despacito about"){
        msg.reply("despacito bot was made by @AndzCLiv3#7664 in an insomnia-fueled stupor.")
    }
    if(msg.content === "despacito playlist"){
        msg.reply("here. https://www.youtube.com/playlist?list=PLB2AcRG34VQUHV5ht7-TpTYE7-xqPoYy4 \n do you have a video that you think should be added to this playlist? PM @AndzCLiv3#7664 or something if he's still functioning.")
    }
});

client.login(process.env.BOT_TOKEN);
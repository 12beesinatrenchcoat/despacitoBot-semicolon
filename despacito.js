//DISCOOOOOOOORD
const Discord = require("discord.js");
//This is the part with all the videos, and the bit that chooses one of them.

//a bunch of the common artist names.
const siivagunner = 
    {
        name: "SiIvagunner",
        avatar: "https://lh3.google.com/u/2/d/11RHyyxGo4OpEJkDmfC3j2CYRbgHpZuU5=w1918-h595-iv2",
        url: "https://www.youtube.com/channelurl/UC9ecwl3FTG66jIKA9JRDtmg"
    }
const makiLigon =    
    {
        name: "maki ligon",
        avatar: "https://lh3.google.com/u/2/d/1A2HiyPywEm-WpYl8qS_AnULHDGA6wekd=w1918-h595-iv2",
        url: "https://www.youtube.com/channelurl/UCB1XBWo7OMmvAsbiwdNpx1Q"
    }
const recordcollector1972 =   
    {
        name: "recordcollector1972",
        avatar: "https://lh3.google.com/u/2/d/1pi7d0OfOvFiFeaFk3diNr9cKAJYpCuS6=w1918-h1002-iv2",
        url: "https://www.youtube.com/channelurl/UCiGK0KvXhB2D7bKSz-b3y0w"
    }
// a listing of all the memes.
const maymays =[
    {
        title: "Luis Fonsi - Despacito (feat. Daddy Yankee)",
        description: "it's despacito. the og one. fonsi.",
        author: "Luis Fonsi",
        channelavatar: "https://lh3.google.com/u/2/d/1bOrtnJLuOQmSrDhwJIrIr3u43b8_pd8M=w1918-h595-iv2",
        channelurl: "https://www.youtube.com/user/LuisFonsiVivo",
        id: "kJQP7kiw5Fk"
    },{
        title: "Shovel Knightspacito",
        description: "absolutely groundbreaking (2018).",
        author: "UUN4 from SiIvagunner",
        channelavatar: siivagunner.avatar,
        channelurl: siivagunner.url,
        id: "BoOjcBiZu0I"
    },{
        title: "Take on Despacito",
        description: "ba ba ba ba ba ba",
        author:"Knight of Games from SiIvagunner",
        channelavatar: siivagunner.avatar,
        channelurl: siivagunner.url,
        id: "9BdsS3jK7no"
    },{
        title: "INITIAL Despito",
        description: "slowly, they said",
        author: "maki ligon",
        channelavatar: makiLigon.avatar,
        channelurl: makiLigon.url,
        id: "zR4GkZcPF_o"
    },{
        title: "Basics in Despacito",
        description: "walk *slowly* in the halls!",
        author: "not the living tombstone (maki ligon)",
        channelavatar: makiLigon.avatar,
        channelurl: makiLigon.url,
        id: "gh5hyBy7hks"
    },{
        title: "Despacito 2",
        description: "after 6 months in development, i hope it was worth the wait",
        author: "FlyingKitty",
        channelavatar: "https://lh3.google.com/u/2/d/1ofV61f8qgy-fbb-f-GZ2ZBeSWLh9AX59=w1918-h1002-iv2",
        channelurl: "https://www.youtube.com/user/FlyingKitty900",
        id: "W3GrSMYbkBE"
    },{
        title: "Despacito (PewDiePie Cover)",
        description: "DEeSpAaAAcIIiIIiTOo",
        author: "PewDiePie",
        channelavatar: "https://lh3.google.com/u/2/d/1v17729W_xN4oQxH4ZON21P0ZH-qWbITW=w1918-h1002-iv2",
        channelurl: "https://youtube.com/user/pewdiepie",
        id: "obwYkg_LFNQ"
    },{
        title: "Luis Fonsi - Despacito (HQ)",
        description: "hacker get hacked",
        author: "1337HaX0R_Prosox vs. FaZe Kuro'ISH vs. xX_silvain grr_Xx",
        channelavatar: recordcollector1972.avatar,
        channelurl: recordcollector1972.url,
        id: "n0PnmauFL4Q"
    },{
        title: "We Are Number Despacito",
        description: "this is going down in history",
        author: "Grandayy",
        channelavatar: "https://lh3.google.com/u/2/d/12kmuiNvIBF-ZUSeb8R6AsTGyvBy1fs0P=w1918-h1002-iv1",
        channelurl: "https://www.youtube.com/channel/UCa6TeYZ2DlueFRne5DyAnyg",
        id: "nhcEoLxEPyg"
    },{
        title: "Minecraftcito",
        description: "everyone look out fonsi has a diamond sword",
        author: "ReptileLegit",
        channelavatar: "https://lh3.google.com/u/2/d/18Ugd2NsLCec-YsyxLhYh7_-QcdqEEFP6=w1918-h595-iv1",
        channelurl: "https://www.youtube.com/user/ReptileWarriorGaming",
        id: "Gl6ekgobG2k"
    },{
        title: "Minecraftcito 13",
        description: "now playing: notch fonsi - despacito 13 ft. daddy steve",
        author: "grande1899",
        channelavatar: "https://lh3.google.com/u/2/d/1FXnGHcmvaP3NYM9XfFwc-6NuMeD3DA37=w1918-h595-iv1",
        channelurl: "https://www.youtube.com/user/grande1899",
        id: "IQrYcvDQAS8"
    },{
        title: "Despatrousle",
        description: "the song that might play when you date a skeleton",
        author: "maki ligon",
        channelavatar: makiLigon.avatar,
        channelurl: makiLigon.url,
        id: "4N26Lb95tF8"
    },{
        title: "Touhoucito",
        description: "zun's gonna need another beer after this",
        author: "maki ligon",
        channelavatar: makiLigon.avatar,
        channelurl: makiLigon.url,
        id: "yD9PCvE-kDg"
    },{
        title: "Desplatcito",
        description: "woo oo oomy",
        author: "maki ligon",
        channelavatar: makiLigon.avatar,
        channelurl: makiLigon.url,
        id: "K_2KOPxwrFY"
    }
    /* template.
    ,{
        title: "",
        description: "",
        author: "",
        id: ""
    }*/
]
module.exports = {
    //Will be run by .index.js.
    getRandom: function (){
        var itemnum = Math.floor(Math.random() * maymays.length);
        var randmem = maymays[itemnum]; //This line (and the previous line) were stolen from Kelly's answer to this question: https://stackoverflow.com/a/5915122/
        //embed is the variable passed to index.js.
        var embed = new Discord.RichEmbed()
            .setColor("#FF0000")
            .setTitle(randmem.title)
            .setDescription(randmem.description)
            .setAuthor(randmem.author,randmem.channelavatar,randmem.channelurl)
            .setURL("https://youtu.be/" + randmem.id)
            .setThumbnail("https://img.youtube.com/vi/" + randmem.id + "/hqdefault.jpg")
            .setFooter("(item number " + itemnum + " of " + maymays.length-1 + ")");
        console.log("ran getRandom" + embed);
        return (embed);
    },
    getItemCount: function(){
        return(maymays.length)
    },
    test: function(){
        console.log("OwO");
    }
}
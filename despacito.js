//DISCOOOOOOOORD
const Discord = require("discord.js");
//This is the part with all the videos, and the bit that chooses one of them.

//a bunch of the common artist names.
const siivagunner = 
    {
        name: "SiIvagunner",
        avatar: "../channelavatars/siivagunner.jpg",
        url: "https://www.youtube.com/channelurl/UC9ecwl3FTG66jIKA9JRDtmg"
    }
const makiLigon =    
    {
        name: "maki ligon",
        avatar: "../channelavatars/maki-ligon.jpg",
        url: "https://www.youtube.com/channelurl/UCB1XBWo7OMmvAsbiwdNpx1Q"
    }
const recordcollector1972 =   
    {
        name: "recordcollector1972",
        avatar: "../channelavatars/recordcollector1972.jpg",
        url: "https://www.youtube.com/channelurl/UCiGK0KvXhB2D7bKSz-b3y0w"
    }
// a listing of all the memes.
const maymays =[
    {
        title: "Luis Fonsi - Despacito (feat. Daddy Yankee)",
        description: "it's despacito. the og one. fonsi.",
        author: "Luis Fonsi",
        channelavatar: "../channelavatars/luis-fonsi.jpg",
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
        channelavatar: "../channelavatars/flyingkitty.jpg",
        channelurl: "https://www.youtube.com/user/FlyingKitty900",
        id: "W3GrSMYbkBE"
    },{
        title: "Despacito (PewDiePie Cover)",
        description: "DEeSpAaAAcIIiIIiTOo",
        author: "PewDiePie",
        channelavatar: "../channelavatars/pewdiepie.jpg",
        channelurl: "https://youtube.com/user/pewdiepie",
        id: "obwYkg_LFNQ"
    },{
        title: "Luis Fonsi - Despacito (HQ)",
        description: "hacker get hacked",
        author: "1337HaX0R_Prosox vs. FaZe Kuro'ISH vs. xX_silvain grr_Xx",
        channelavatar: recordcollector1972.avatar,
        channelurl: recordcollector1972.url,
        id: "n0PnmauFL4Q"
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
    getRandom: function () {
        console.log("getRandom function activated");
        var itemnum = Math.floor(Math.random() * maymays.length);
        var randmem = maymays[itemnum]; //This line was stolen from Kelly's answer to this question: https://stackoverflow.com/a/5915122/
        //embed is the variable passed to index.js.
        var embed = new Discord.RichEmbed()
            .setColor("#FF0000")
            .setTitle(randmem.title)
            .setDescription(randmem.description)
            .setAuthor(randmem.author)
            .setURL("https://youtu.be/" + randmem.id)
            .setThumbnail("https://img.youtube.com/vi/" + randmem.id + "/hqdefault.jpg")
            .setFooter("(item number " + itemnum + " of " + maymays.length + ")");
        console.log(embed);
        return (embed);
    },
    test: function(){
        console.log("OwO");
    }
}
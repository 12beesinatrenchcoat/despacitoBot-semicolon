//DISCOOOOOOOORD
const Discord = require("discord.js");
//This is the part with all the videos, and the bit that chooses one of them.

//a bunch of the common artist names.
const siivagunner = 
    {
        name: "SiIvagunner",
        avatar: "https://lh3.googleusercontent.com/UrirdLzUrbj0ojPtdCrRaS5ufsYWtrnwM06PqKF0IsYcjHgEAGxlL481dUrBXlNtyapJCZOWsFqyDicP1lOKdGqkfOrpNalkjhZPU2BW2TAaAMkz_KtQc6b0CjijJ8SsQUKXpnTY8QLnkcKFCCebtCCon6UukmufhMBZiUxf2doLTPUgWBbuzDo6Gcp6KpYJ2y-RfJiEQg_QFXuV9vK8HlV92n9Dk6f3NpY4rBV997D7aW8gpeu_EuZET5PmsfNx1a6A_tyvsKRyCDjHze8aqXli6DQrfDur_WdP9NFU7w3Jw7sGhIsn6tTgCQJIYqcXqoJQtnr6R9tM44M5IRKLx2MtU-5p0biPAIXySKTINqenqL-00fV5Fg0hNf-x2f8adsZytn5FUxkszSjIF737zDv0SK7tYZG8HeWe7ZMEVgpTQALbNm87wFGpQAxD8zlaev-LRsij0XFc855ObP--hSunW_Sg7G8iuPGxrwr6yZ4k_AhSwynXOrsDLEGhi9RpogfZ0N6Avp5FzDFc7n-5d4P3jCxL_axDrGNcKrfMIHhDXuPock10rJMRl4-Fv8vmTIJzUo3fHpH_AqJ2HPpkLdZTWpqEEJxVOTkN4ZJq4NUtrYtimHuz5a5wzhm_Hg=w1918-h595",
        url: "https://www.youtube.com/channelurl/UC9ecwl3FTG66jIKA9JRDtmg"
    }
const makiLigon =    
    {
        name: "maki ligon",
        avatar: "https://lh3.googleusercontent.com/YnoH75dWWeeQ3zi1ax3nl3XRb5azYZyB6QlNxd0dURds7ClxZBlAoOCicvC0tsv7IXIgkdhRLnigXlGKtDmPk0IEov6SvKVZYQep17JrLbbtJPjFRIhn5ZQSlDqpHhPWmRGIGFssL4sDRLdm_ot-V64oofGOBmRZp0-tTq9-vX5OSh_4Ij9KAGeRFVQGKiJYldhjEnsduh1pFd2n85dDktVxM-tGSKa49uQJDKwRcIXSd5jwJlLqCCYNBxPFIEyfZ3XYX2huA2Dy0vLY3q3FmiZb7GlIoqtuYzEzDbfiIjMP5SEL5yraLab0o71ouzo7jvx5SLXtSvlI1wyuGv68nrBpOMpWhsfF04bG0Z1djRv7MYUsUm19_fXDpeGDxKHgfee-S1EBvkSznH1Sh1UHVAp24XPgyF2GxN2I8T3HoP8Yayla4QqjGB1oUpNVx5C5uZMxDtpr-FouxoKkKxkLdfmYf-hnU2XKMW27Ll_la8TSs2MHOE3iRz8QprM5ofr22APy2EOndFGxUbim9-AFFx7bMkCAritII1DoLrY54wdsKWBWDQgZUKVmWoW0-pu6Bcd2c0G6W98p5TA5ViGxC7pM2GzlZdq-nua0XRVmT4ep98pe3zCpbAqh7FIOIA=w1918-h595",
        url: "https://www.youtube.com/channelurl/UCB1XBWo7OMmvAsbiwdNpx1Q"
    }
const recordcollector1972 =   
    {
        name: "recordcollector1972",
        avatar: "https://lh3.googleusercontent.com/FeuGfkDYS1iPTRYdbu9M53xlxhXDBPJoLUywM271RwBTMsXHKQqI23cz_dnG0ccoKS2PrbYwIZuuLgs7QjMRx98tYNlIHdw2vDKA6dOtoD5uHSRki1dEOSjIEg2VBQwyWehr-zJf4-Dtaz186THVYlx6Wznb_4-3rpcyMcRYK83DOv-Z3UawBQEt_-YV37MODEsIP5GV8qka8P__EFWDgufYrgaQRhPBlhfsoEcfkxlTjbz7nY1WxLKdLmLM2NBrPcb99ySu40KlDy6cqf6Foq-oHNb4PQvwxERYjhRMcWTTD2eazlBOIDLcJlVgPCYWk41lpthyzcStLyPK0LXiE7TErSC-0ICL_clOQgZuAgQDy-vhbWRI4SpfjwsinACEzzQueomfIqYwZY_plw9XiWar7uncqoNPq_Eu_3oQZ5IqHvepy_5sj7JCbMtgzCI37ikH1g9Q-Dip8rxbSHO1s2GKfaEa7zHRb6YkR7_UVKLQIu-QDk60bn5K6FY8RclkkfFlUGR38y3Y4JLrLQD84p6JzpUekbmrRBS6B3dYEQMdywZjrXG4agwViosynKyomKL4UpZX2hVoJcSbMR0qrsHX42hr1UxIyQqD-NCXNJI1vf0-YOa3rSnpUgwoNw=w1918-h1002",
        url: "https://www.youtube.com/channelurl/UCiGK0KvXhB2D7bKSz-b3y0w"
    }
// a listing of all the memes.
const maymays =[
    {
        title: "Luis Fonsi - Despacito (feat. Daddy Yankee)",
        description: "it's despacito. the og one. fonsi.",
        author: "Luis Fonsi",
        channelavatar: "https://lh3.googleusercontent.com/RLegsXix_cMv--nDivkWwkI0xpXT7R-c-OUQromv74j8_q0eujl4UvJSz8KNNqdE_82ly1p-d-gVW5ZOQw8J_KON-CDedjInHhwNre4-k_HITB87rtmN-UmnZXcTc86fxCZRQWKP-tkoZtwmhSpy1cQFrp29CoghbiV-HyjwVLZNXqCoBujpl68S0MQtf66xzV3lTIqAKRCUIoWBMVhCPdde68Njd5oK3r4Y2x7QgudK_kG4q3sE6j6IUvC0r8Udz5HVLWlrNviD068pbIH9kamftmZWJxl2dqjEe_7RvN6dnFMxJOCDxjeIw4wTopl012frTtxRxlKTUVsujeI_8w6Ow6-aC4seeu7lHQz2s7Fouizv7Y-YLkdhLUpiHLq7sRlYMCqrzQkzEoMv5gZK683pdXMi-_1NtxZQWa9uLSQFos2qNGA6geN9MsLKyqVHDO0s2DHWgiTJQyfsCw9qCDJA3BIKOXTcldPmKJxg_0nXtckVZfReNXUCY1CKFy7b4Fx2aTAI8qaUwWzk_cctm8m2KBNLT_pXGpKq3NvbuYzjrVvPJWyEW1dNXEQyJCepiyue87FLyiyJlC8prevE_HOyAYTPPY8UvMPMumdjeUiBqw5U3jzaib3ThqRwLg=w1918-h595",
        channelurl: "https://www.youtube.com/user/LuisFonsiVivo",
        id: "kJQP7kiw5Fk"
    },{
        title: "Shovel Knightspacito",
        description: "absolutely groundbreaking (2018).",
        author: "SiIvagunner (UUN4)",
        channelavatar: siivagunner.avatar,
        channelurl: siivagunner.url,
        id: "BoOjcBiZu0I"
    },{
        title: "Take on Despacito",
        description: "ba ba ba ba ba ba",
        author:"SiIvagunner (Knight of Games)",
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
        channelavatar: "https://lh3.googleusercontent.com/3cgWasbSadUWIKVS168W0LTOWaXbpEmLelFU7nuv43ItVFupWArgkcHIQFEs78PDPBUPu9f994DKHEHPaf8qUHqCJLZzkkdENCi_gBVxtqAUzs9e80ZYs5SxSJ1XX6uygdNt6j0Ik8ItOX6IYnSoYI3uryFNl9_mSU1uid2ElauHhIbKbAzMm00O_NFSbHXojxvvlW258gJ5Sif0_8DKHszhvL5Oq5TZg-uoRk7YpP3_hwJ7cu6E-t6mDUwJp3NFY7-4Wcbs3UOX8Rie9e8Dw6qsNE8M5jbjtU2KV9TqAwxUhf1pXuLEmGmqSm96PovcnsgJ1KCd56kl4DN3NlUP-8GJR1MqUZtJCD3qgu7c2jymLuwn2hP3w9EpY0AtO4vQ6ZR4Z21gqgdsyQ1SdZKaPPAsu0u6bcfLaUVJx93_GDEB1R6-8ADuqbT19RC8SVviV48PkMQvouqYuwqkdFuJGErPsw1R7NOA2GNUk4GsftMHLy0nYhNH_ilJtm_k7N_04SIN9Nm22CAZGM0hT1JsbQbuyZ_3Bqx9PHZC12Fsbm8EjsamUJryhpNN9fOv-_eKbQ5Nyq6MtMTIZAh72BXMEcGxwrVdRAM4_rhG6UWcG4qPxpCG43PfCzflEo1Xxw=w1918-h1002",
        channelurl: "https://www.youtube.com/user/FlyingKitty900",
        id: "W3GrSMYbkBE"
    },{
        title: "Despacito (PewDiePie Cover)",
        description: "DEeSpAaAAcIIiIIiTOo",
        author: "PewDiePie",
        channelavatar: "https://lh3.googleusercontent.com/0ZFeaxWnekHLncfnsUAt1XUTP2_F0B_X6oD6-wfOmAyaj6m5IVL1AayDV4bBgdAEGrkiu861KHndZRmVodkIB3FI1mWs6Vwh6rQ5g8mJqhezgLvb687ySNXVrDmzaaVPyrAJ0W6mpAxOMDXIGwgXN1OHm7nfD-ENdOo4FcJnUeQyxEsiWYRFXNQHK4cEeBCw_QK0Nj46taS2qFxOBbW0KD5ag1bomJOR2YVPPvve5WYpGJ8775pfXhy65f7MGrfnjY83Rr3jP_bp5QW4cN4Bqu0yHhppQz1wc6fgHaCGJG6l9VUR-SbSrCHnVsgSkaa6dOgAGzLo_a13XQrNmKs7D-yvIlHuGcmjTiach1dZEOFxSBs7QAfjnX9QCkAfAHS-y24EZmuXFAokxVrWW12T2E5HP4pna76l_ai04qZNr1aAC9ZTAhg7AoCdf3Mi30PxAS7oGASX2MrEpb7MevlLuogBQysKYjUaMvi12m3P30pzaP9lj19_wsfV7V_eB2WAKmzebWYcG7rLH6wdSQITDTj_LVMrfeV1dvBCm-F0sQBPqE5chYn50PcSIyDgOxoLxUBZdQYval8YrInYGZ3fPPuVarWuYrch8gnkA8ujgailS3nR2KpgqlOlo4a__A=w1918-h1002",
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
        channelavatar: "https://lh3.googleusercontent.com/Str3kzpcCIRCymJht4sghLbPvvUvaJEHBhXj4FUU8k2vM4E2b6DxYBATUWDlOiN_mNo2z_Iivs4N74T-Xr9EefO1nrpLLz_nLZHZi17k9bgPEs1rP5iDUzYtChsUbVXXnJ8KdR-55OkloE-Pz7cgrc0UGvfxMLNmAS49n2fBXyJL2uNJjdartYQPsDhfzfEs9OJSko_np_HfeE1ENPEG13gWxA-nkfl6-mwZ9QbGj0vi6CZrAClf4_wSHdS77uxjCZBsUdxZ7_Hu0yUA2QdlG2SKlDGYVCw6MfDYwLIbfau0ntylf_tCjoxniu0jA5N5vE1Q8JT-fEyqAgVnZ9O_1cqRIKwFD_QcFjBZkuL8u0bwpNFmkZmvunPXTAkmcCB_X1Zkw-t9VGtOBkEO06zCIFiaewyBX35AOXxPUxrIBfgpy3dX9THv8axUABTGJ66VX_E3zOhTCHoBNofotEbYohuS6V_ONeKezezyG4TjRZ25xkzSrTTvNEXdV6O-mmudzywipUEZpHe9_SE3RkZ-ju3rOONecS3Xyn_3BTLMnFtLydftsuvgPRaVz5Mc3Z9zLpeB3w2PWd5QksjFl8ZwVdcMVgdpgoK6hY4IphPTm9nXC_5jo5M7AMgVmHsQRA=w1918-h1002",
        channelurl: "https://www.youtube.com/channel/UCa6TeYZ2DlueFRne5DyAnyg",
        id: "nhcEoLxEPyg"
    },{
        title: "Minecraftcito",
        description: "everyone look out fonsi has a diamond sword",
        author: "ReptileLegit",
        channelavatar: "https://lh3.googleusercontent.com/2W9vGt3tBxt0EMV-FgSTIZpuwCJ7AJ7G10bWl1GZDeLuFeTpW6ajbAlTrTS5jF93E7d5lDKf8Q6wMmAzT8NBGJgAG5elieeinXlPnXQyJfwyu9cfNkzuN-dmlNrgqAXE4nfAD2YXlCQ_1iUYznLxDXQcyGHM5WrW103JxAGvbPtdGP5PrIjFznlArd24gfoOiQqv79N5iEwF4n4EeoULn5z9-x4uAfbVTEzPoJnVJH3TFhQ9F02mrxrwDikGg7v8Gkx3TXTcmgkK9dg_mHv9MCHFUkyEsvRx4CP_vpqOVUezi5mtio2MwEt4NTlQwnJteA3fI1EVWhrwUOEK5RuShacTpG08TA5QNIQUY07T4MIvUgxuHIojSmzPDNoTSCBc4RazVfr3GPNdzv-ir-8xG3uFAv3ltrWjsQjwYJ689DQ503EjLta6E8osF86pEX0DWF430-JwuFkmTNcigvWblG-D_JPsRnaW3Wu20CAOyIGU-KArXlDhSzkjuk5P3OHrpvqLC-04Z2ua07L_3TtebBiSCUYM8QjfWSFL_ZDH-yLhMqfxgLk0EopZT566kYr2KpaoFw1exRyQNvhqKB4TNYL4M5EoZXwH245iOurlebmriLKXWQDCfS5W_maiEg=w1918-h595",
        channelurl: "https://www.youtube.com/user/ReptileWarriorGaming",
        id: "Gl6ekgobG2k"
    },{
        title: "Minecraftcito 13",
        description: "now playing: notch fonsi - despacito 13 ft. daddy steve",
        author: "grande1899",
        channelavatar: "https://lh3.googleusercontent.com/nolBNSBBqCBnP3c6oZ1uVPCW4Gq_zRDUv1xnf0edOkSdVu4U5EvKrbd2k3jNRFFrZHsV_ix6Wbagx0USL2TrWggaJabeUWBXHF1T9zU-7tJt240uquvWcM8DbXLVrkwVE6-ti_HQ-FZ4KrsRSK_wwNw-BwXm1nU_bKiGPBiMwmGk2BIeJP--9cV2uFSdMjTKWUSwjFIPqP6ydhuLqEsmnUcIiKb17pCd5rWLb0msc69JupvPfW2OnI_aX3rZP1n50COdTQ3ujHDOcZMDQHQvhD6Y2w3E_hOUHF26SuZm3aiNpgodhU6Au1HGAk2NQdTK6z5XMAzHX2hX-kZwwZ2kmgNtL9HdOEfMJdGdTHu6mCKOFa2XfQrwGtdnkOZK_OoOdNasXreCB6-MagNYPUGRATALRfUY5ypUa71rKL7fJ2os7f9jsA-NMYNUy9sfwVhJt9x3vFMbEcbJ-3JaUZ3N8BEX4Wt8W2oF9piiJDkil7mum7Lg962omzcMoWgjTlh4N5M88sLs22BNe1gCIhRXvrIZm8BaR3Wwfh7m5ey2kMnVw9a3U5pT05kQGT-FdauyHist6JfQn5UyEQWXY-jX7iUHXg56Xr27_XVuIcI1bOql3hcEOHUfQhMNorWs8Q=w1918-h595",
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
            .setFooter("(item number " + itemnum + " of " + (maymays.length-1) + ")");
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
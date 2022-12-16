const { Client, Discord, Intents, GuildMember, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const client = new Client({
    intents: [Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS]
});

client.on("ready", () => {
    console.log(`${client.user.username} is Ready!`);
    
    // สถานะของบอทกำลังสตรีมอยู่, Bot Streaming status
    client.user.setActivity('ซับช่องผมด้วย',{ type: "STREAMING",url: "https://www.twitch.tv/z0teext" });
});

client.on('message', async message => {

    if (message.author.bot) return;

    // เปลี่ยนชื่อ CH , name change channel 
    if (message.channel.id === 'Enter_Your_ChannelID'){     
        const word = "\'\"\\!@#$%&_+-*/^(){}[]<>`,.?฿=";
        if(message.content){
            for(let x=0; x<word.length; x++){
                if (message.content.startsWith(word[x])){ 
                    message.delete();
                    return message.channel.send("ไม่สามารถตั้งชื่อขึ้นต้นด้วยตัวอักษรพิเศษ").then((s)=>{setTimeout(()=>{s.delete();},3000)});
                }
            }
            if(message.content.length > 22){
                message.delete();
                return message.channel.send("ตัวอักษรมากกว่า 22 ตัวจ้า").then((s)=>{setTimeout(()=>{s.delete();},3000)});
            }
            let name = message.content;
            message.delete();
            let bname = message.member.nickname;
            let x = bname.split(' ').reverse();
            message.member.setNickname(name+" "+x[0]);
            message.channel.send("ทำการเปลี่ยนชื่อเรียบร้อยแล้ว").then((s)=>{setTimeout(()=>{s.delete();},3000)});
        }
    }
});

client.login("DISCORD_BOT_TOKEN");

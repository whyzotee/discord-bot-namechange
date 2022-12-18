const { Client, Discord, Intents, GuildMember, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const client = new Client({
    intents: [Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS]
});

require('dotenv').config();

client.on("ready", () => {
    console.log(`${client.user.username} Ready To Online!`);
    client.user.setActivity('ซับช่องผมด้วย', { type: "STREAMING", url: "https://www.twitch.tv/z0teext" });
});

client.on('message', async message => {

    if (message.author.bot) return;

    //เปลี่ยนชื่อ CH
    if (message.channel.id === process.env.Change_Name_CH_ID) {
        const word = "\'\"\\!@#$%&_+-*/^(){}[]<>`,.?฿=";
        if (message.content) {
            for (let x = 0; x < word.length; x++) {
                if (message.content.startsWith(word[x])) {
                    message.delete();
                    return message.channel.send("ไม่สามารถตั้งชื่อขึ้นต้นด้วยตัวอักษรพิเศษ").then((s) => { setTimeout(() => { s.delete(); }, 3000) });
                }
            }
            if (message.content.length > 22) {
                message.delete();
                return message.channel.send("ตัวอักษรมากกว่า 22 ตัวจ้า").then((s) => { setTimeout(() => { s.delete(); }, 3000) });
            }

            let cname = message.content;
            let nick = message.member.nickname;
            message.delete();

            if (nick == null || nick.charAt(nick.length - 1) != ']') {
                message.member.setNickname(cname + ` [${message.author.username}]`);
                message.channel.send("ทำการเปลี่ยนชื่อเรียบร้อยแล้ว").then((s) => { setTimeout(() => { s.delete(); }, 3000) })
            } else {
                let x = nick.split(' ').reverse();
                message.member.setNickname(cname + " " + x[0]);
                message.channel.send("ทำการเปลี่ยนชื่อเรียบร้อยแล้ว").then((s) => { setTimeout(() => { s.delete(); }, 3000) });
            }
        }
    }
});

client.login(process.env.Discord_Token_Key);
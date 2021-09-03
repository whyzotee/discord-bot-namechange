const { Client, Discord, Intents, GuildMember, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const client = new Client({
    intents: [Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS]
});

client.on("ready", () => {
    console.log(`${client.user.username} Ready To Online!`);
    client.user.setActivity("with depression", {
        type: "LISTENING",
        name: "Music"
    });
});
client.on('guildCreate', (guild) => {
    if (guild.systemChannel) {
        let embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle("Bot")
            .setDescription("โปรดให้สิทธิ์การเข้าถึงของบอท,ให้เชื่อมต่อห้องเสียงและพูดได้\nเริ่มต้นใช้งานโปรดพิม \`!help\` เพื่อทำการตั้งค่าเกี่ยวกับบอท\nขอให้สนุกกับการฟังเพลงนะ. . .🥰")
            .setFooter(`ขอบคุณที่เชิญบอทเข้าเซิร์ฟเวอร์ 😉`)
            .setColor("F0F0F0");
        guild.systemChannel.send({ embeds: [embed] });
    }
});

client.on('message', async message => {

    if (message.author.bot) return;

    //เปลี่ยนชื่อ
    if (message.channel.id === '883459115668607076'){     
        if(message.content){
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

client.login("ODc3MDkxODE1MTU5ODk4MTMz.YRtlaA.VNfmooMEFtbZoluK9JFh3l9DiWY");
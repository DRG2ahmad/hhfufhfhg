  const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://rose-sprint.glitch.me/`);
}, 280000);

// كل البكجات الي ممكن تحتجها في اي بوت 
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
 
 //كود للتجربة 

client.on('message', message =>{
  if(message.content === '-ping'){
let start = Date.now(); message.channel.send('pong').then(message => { 
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
  });
  }
});



console.log("==================================")
console.log("1")
console.log("2")
console.log("3")
console.log("=========> Bot Online <=========")
console.log("========> TestBot <========")
console.log("=======> Token Bot **** <=======")
console.log("3")
console.log("2")
console.log("1")
console.log("====================================")
console.log("Bot Online 24/7");




let sfa = JSON.parse(fs.readFileSync('./sfa.json', 'utf8')); // الملف الي بتحط به الحسابات الفل داتا
let nfa = JSON.parse(fs.readFileSync('./nfa.json', 'utf8')); // الملف الي بتحط به الحسابات العاديه
let SFAP = 8500;/*سعر الحساب الواحد الفل داتا*/let NFAP = 250;/*سعر الحساب الواحد العادي*/let URID = '432231487916736542'//مين بيتحوله الكريديت// ahmeD_Hossam
client.on('message',async message => {// ahmeD_Hossam
if(message == prefix+'stock') {let ahmed = 0;let hossam = 0;// ahmeD_Hossam
  sfa.forEach(acc =>{if(!acc.email) return;ahmed++;});// ahmeD_Hossam
  nfa.forEach(acc =>{if(!acc.email) return;hossam++;});// ahmeD_Hossam // i will kill you soon ok ? xD
  message.channel.send(new Discord.RichEmbed().setTitle('💵 متجر اوريو 💵')// ahmeD_Hossam
  .addField('**[SFA | فل داتا] > **',`**${ahmed} Account(s)**`,true)  .addField('**[NFA | عادي] > **',`**${hossam} Account(s)  **`,true).setColor('GREEN')// ahmeD_Hossam
.addField('**هل تعلم ؟**',`**\`[SFA]\` > فل داتا - حساب يمكنك اللعب وتغيير الاسم والباسوورد والسكن
\`[NFA]\` > العادي = حساب لا يمكنك تغيير اي شيئ فيه, للعب فقط**`)// ahmeD_Hossam
.addField('**الاسعار**',`\`[1 SFA] > 8500 Credits ProBot\` \n \`[1 NFA] > 250 Credits ProBot\``)// ahmeD_Hossam
.setFooter(`$buy [sfa/nfa] [الحسابات لا يوجد عليها ضمان | لشراء حساب الرجاء كتابة الأمر التالي [الكمية`) )}// ahmeD_Hossam
if(message.content.startsWith(prefix+'buy')){// ahmeD_Hossam
let cmd = message.content.split(" ")[1];// ahmeD_Hossam
let args = message.content.split(" ")[2];// ahmeD_Hossam
if(!cmd || !args || isNaN(args)) return message.channel.send(`**استخدام خاطئ ّ! \n Correct Usage Example: $buy SFA 1**`);// ahmeD_Hossam
if(cmd == 'sfa') {// ahmeD_Hossam
  let ahmed = 0
  sfa.forEach(acc =>{if(!acc.email) return;ahmed++;});
      if(ahmed < 1) return message.channel.send("لا يوجد حسابات")
  if(ahmed < args) return message.channel.send("لا يوجد حسابات كافية") // 
message.author.send('✅ Nothing.. Just Check  If Your DM open or no').then(()=>{// ahmeD_Hossam
let P = Math.floor(args*(SFAP))// ahmeD_Hossam
message.channel.send(new Discord.RichEmbed().setAuthor(message.author.tag,message.author.avatarURL).setColor('#918383')// ahmeD_Hossam
.setDescription(`**اكتب الامر التالي لأكمال عمليه الشراء
#credits <@603456072954544141> ${P}
لديك 3 دقائق قبل الالغاء.**`));// ahmeD_Hossam
let P2 = Math.floor(P-(P*(5/100)));// ahmeD_Hossam
let filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`**:moneybag: | ${message.author.username}, has transferred \`$${P2}\` to <@603456072954544141> **`);// ahmeD_Hossam// ahmeD_Hossam
message.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })// ahmeD_Hossam
.then( collected =>{// ahmeD_Hossam
let C = 0;let Accs = [];// ahmeD_Hossam
sfa.forEach(acc =>{if(!acc.email) return;if(C == args)return;;Accs.push(`Email: ${acc.email} | pass: ${acc.pass}`);C++;// ahmeD_Hossam// ahmeD_Hossam
delete acc.email;delete acc.pass;// ahmeD_Hossam// ahmeD_Hossam// ahmeD_Hossam// ahmeD_Hossam// ahmeD_Hossam// ahmeD_Hossam// ahmeD_Hossam
fs.writeFile("./sfa.json", JSON.stringify(sfa), (err) => {if (err) console.error(err)})// ahmeD_Hossam// ahmeD_Hossam// ahmeD_Hossam
});message.channel.send('**Done,,\nNow Check Your DM**!')
message.author.send(`Your Accs :)\`\`\`json\n${Accs.join("\n")}\n\`\`\`سيتم خذف الرساله بعد 5 دقائق !`).then(M =>M.delete(5*60*1000))
});}).catch(err=>{return message.channel.send('**:x: Please Open Your DM**!')}) }
if(cmd == 'nfa') {
  let hossam = 0;
  sfa.forEach(acc =>{if(!acc.email) return;hossam++;})
  if(hossam < 1) return message.channel.send("لا يوجد حسابات")
  if(hossam < args) return message.channel.send("لا يوجد حسابات كافية")
  message.author.send('✅ Nothing.. Just Check If Your DM open or no').then(()=>{
  let P = Math.floor(args*(NFAP))// ahmeD_Hossam
  message.channel.send(new Discord.RichEmbed().setAuthor(message.author.tag,message.author.avatarURL).setColor('#918383')
  .setDescription(`**اكتب الامر التالي لأكمال عمليه الشراء
  Ex : #credits <@603456072954544141> ${P2}
  لديك 3 دقائق قبل الالغاء.**`));
  let P2 = Math.floor(P-(P*(5/100)));
  let filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`**:moneybag: | ${message.author.username}, has transferred \`$${P2}\` to <@603456072954544141> **  `)
  message.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })
  .then( collected =>{
  let C = 0;let Accs = [];
  nfa.forEach(acc =>{if(!acc.email) return;if(C == args)return;;Accs.push(`Email: ${acc.email} | pass: ${acc.pass}`);C++;  delete acc.email;delete acc.pass;
  fs.writeFile("./nfa.json", JSON.stringify(nfa), (err) => {if (err) console.error(err)})
  });message.channel.send('**Done,,\nNow Check Your DM**!')
  message.author.send(`Your Accs :)\`\`\`json\n${Accs.join("\n")}\n\`\`\`سيتم خذف الرساله بعد 5 دقائق !`).then(M =>M.delete(5*60*1000))
  });}).catch(err=>{return message.channel.send('**:x: Please Open Your DM**!')}) } }
})


  

const verifyChannelID = "659110931388956682";//ايدي الروم التفعيل
const verifyRoleName = "not verified";//اسم الرتبة الي تجي للعضو يوم مايكون مفعل
const roleName = "Member";//رتبة الي تجيه يوم يفعل نفسه
client.on('guildMemberAdd', async(member)=> {
    var guild = member.guild;

    var vchannel=guild.channels.find(r => r.id===verifyChannelID);
    
    if(!vchannel)return console.log("I cant find the channel.");
    
    var role = guild.roles.find(r => r.name===roleName);
    
    if(!role)return console.log("I cant find the role.");
    
    var verifyRole = guild.roles.find(r =>r.name===verifyRoleName);
    
    if(!verifyRole)return;

    member.addRole(verifyRole);
    var stevNum = Math.floor(Math.random() * 9000)+1000;
let number = stevNum;
    var stevEmbed = new Discord.RichEmbed();
    stevEmbed
    .setColor("RED")
    .setDescription("To verify your self please type these numbers: "+number);
    const message = await vchannel.send(stevEmbed);
    vchannel.awaitMessages(stevM => stevM.author.id === member.user.id, {max:1, time: 1000 * 64, errors: ["time"]})
    .then(collected => {
        if(collected.first().content.startsWith(number)){
            member.removeRole(verifyRole);
            member.addRole(role.id);
            member.send("**Successfully you have been verified on "+guild.name+"**");
            message.delete();
            collected.first().delete();
        }else{
            message.delete();
            collected.first().delete();
            member.send(`**You have been kicked from ${guild.name} because, You have specifed incorrect verifaction number.**`)
            member.kick("Incorrect verifaction number specifed.");
        }

    })
    .catch(()=> {
        message.delete();
            member.send(`**You have been kicked from ${guild.name} because, Verifaction time is out.**`)
            member.kick("Verifaction time is out.");
    })
})//3Mo_Steve the best xD


client.on('message', message => {
  if(message.content.split(' ')[0] == `${prefix}ban`){
  if(!message.guild || message.author.bot) return undefined;
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You don\'t have permission.');
      if(!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) return message.channel.send('I don\'t have permission.');
      let args = message.content.split(" ").slice(1);
      let user = message.guild.members.get(message.content.split(' ')[1]) || message.mentions.members.first();
      let reason = message.content.split(" ").slice(2).join(" ");
      if(!user) return message.channel.send(`Usage: ${prefix}ban @mention reason`);
      if(!reason) reason = 'No reason provided.';
      if(user.user.id === message.author.id) return message.channel.send('You can\'t ban yourself!');
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`You can't ban **${user.user.tag}** because his role highest than your role!`);
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`I can't ban **${user.user.tag}** because his role highest than my role!`);
      if(message.guild.member(user.user).hasPermission('MANAGE_GUILD') || user.user.id == message.guild.owner.id) return message.channel.send(`You can't ban **${user.user.tag}** because he have Administration permissions!`);
      if(!message.guild.member(user.user).bannable) return message.channel.send(`I can't ban **${user.user.tag}**.`);
                message.gulid.member.send(`**You have been kicked from ${guild.name} because, Verifaction time is out.**`)
      message.guild.member(user).ban(reason, user);
      message.channel.send(`Done :+1:, I Banned ${user.user.username} from the server!\nReason: \`\`${reason}\`\``);
    }
});
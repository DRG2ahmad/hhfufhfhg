          const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
    response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
    http.get(`http://.glitch.me/`);
}, 280000);
const n =  ['667030309031641089'];
const {
    Client,
    RichEmbed
} = require("discord.js");
var {
    Util
} = require('discord.js');
const {
    prefix,
    devs
} = require('./config')
const client = new Client({
    disableEveryone: true
})
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const {
    get
} = require('snekfetch');
const db = require('quick.db')
client.login("NzE5MTYyMzU0Mjc3MDIzODI2.XtzaIg.weoZZIXxfj0qN34do34Zi6BsLt0");
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');

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




client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === prefix + "help") {
    message.channel.send(`**اوامـر الـبوت
● | ${prefix}buy sfa/nfa amount -> لشراء حساب
● | ${prefix}stock -> لمعرفة كمية الحسابات المتوفرة
● | ${prefix}add sfa/nfa email pass -> لاضافة حساب للبوت
● | ${prefix}give mention sfa/nfa amount -> لإرسال حساب لشخص
**`);
  }
});





const cools = [];
let sfa = JSON.parse(fs.readFileSync('./sfa.json', 'utf8')); // الملف الي بتحط به الحسابات الفل داتا
let nfa = JSON.parse(fs.readFileSync('./nfa.json', 'utf8')); // الملف الي بتحط به الحسابات العاديه
let SFAP = 10000; /*سعر الحساب الواحد الفل داتا*/
let NFAP = 1000; /*سعر الحساب الواحد العادي*/
let URID = '667030309031641089' //مين بيتحوله الكريديت
client.on('message', async message => { 
    let bOn = await db.fetch(`bOn_${message.guild.id}`)
    if (message == prefix + 'stock') {
        let ahmed = 0;
        let hossam = 0; 
      
        if (bOn === "off") return message.reply("**Sorry, Buying mode are disabled**")

        sfa.forEach(acc => {
            if (!acc.email) return;  
            ahmed++;
        }); 
        nfa.forEach(acc => {
            if (!acc.email) return;
            hossam++;
        }); 
        message.channel.send(new Discord.RichEmbed().setTitle('💵 shop 💵') ///1
            .addField('**[SFA | فل داتا] > **', `**${ahmed} Account(s)**`, true).addField('**[NFA | عادي] > **', `**${hossam} Account(s)  **`, true).setColor('GREEN') 
            .addField('**هل تعلم ؟**', `**\`[SFA]\` > فل داتا - حساب يمكنك اللعب وتغيير الاسم والباسوورد والسكن
\`[NFA]\` > العادي = حساب لا يمكنك تغيير اي شيئ فيه, للعب فقط**`) 
            .addField('**الاسعار**', `\`[1 SFA] > ${SFAP} Credits ProBot\` \n \`[1 NFA] > ${NFAP} Credits ProBot\``) 
            .setFooter(`$buy [sfa/nfa] [الحسابات لا يوجد عليها ضمان | لشراء حساب الرجاء كتابة الأمر التالي [الكمية`))
    } 
    if (message.content.startsWith(prefix + 'buy')) { 
        if (bOn === "off") return message.reply("**Sorry, Buying mode are disabled**")

        let cmd = message.content.split(" ")[1]; 
        let args = message.content.split(" ")[2]; 
        if (!cmd || !args || isNaN(args)) return message.channel.send(`**Correct Usage Example: ${prefix}buy SFA 1**`); ///2
        if (cmd == 'sfa') { 
          if (cools [message.author.id + message.guild.id] && cools [message.author.id + message.guild.id].status == "on")return message.reply("**لديك عملية شراء بل فعل.**"); 
            let ahmed = 0
            sfa.forEach(acc => {
                if (!acc.email) return;
                ahmed++;
            });
            if (ahmed < 1) return message.channel.send("لا يوجد حسابات")
            if (ahmed < args) return message.channel.send("لا يوجد حسابات كافية") // 
            message.author.send('✅ Nothing.. Just Check  If Your DM open or no').then(() => {
              
              
              cools[message.author.id + message.guild.id] = {
                status: "on"
              };
              let P = Math.floor(args * (SFAP)) 
                message.channel.send(new Discord.RichEmbed().setAuthor(message.author.tag, message.author.avatarURL).setColor('#918383')
                    .setDescription(`**اكتب الامر التالي لأكمال عمليه الشراء
#credits <@${URID}> ${P}
لديك 3 دقائق قبل الالغاء.**`));
                let P2 = Math.floor(P - (P * (5 / 100)));///3
                let filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`**:moneybag: | ${message.author.username}, has transferred \`$${P2}\` to <@${URID}> **`); 
                message.channel.awaitMessages(filter, {
                        maxMatches: 1,
                        time: 240000,
                        errors: ['time']
                    })
                    .then(collected => { 
                        let C = 0;
                        let Accs = []; 
                        sfa.forEach(acc => {
                            if (!acc.email) return;
                            if (C == args) return;;
                            Accs.push(`Email: ${acc.email} | pass: ${acc.pass}`);
                            C++;
                            delete acc.email;
                            delete acc.pass;
                            fs.writeFile("./sfa.json", JSON.stringify(sfa), (err) => {
                                if (err) console.error(err)
                            })
                        });
                  delete cools [message.author.id + message.guild.id];
                        message.channel.send('**Done,,\nNow Check Your DM**!')
                        message.author.send(`Your Accs :)\`\`\`json\n${Accs.join("\n")}\n\`\`\`سيتم حذف الرساله بعد 5 دقائق !`).then(M => M.delete(5 * 60 * 1000))
                    });
            }).catch(err => {
                  delete cools [message.author.id + message.guild.id];
                return message.channel.send('**:x: Please Open Your DM**!')
            })
        }
        if (cmd == 'nfa') {
                    if (cools [message.author.id + message.guild.id] && cools [message.author.id + message.guild.id].status == "on")return message.reply("**لديك عملية شراء بل فعل.**"); 

            let ahmed = 0;
            nfa.forEach(acc => {
                if (!acc.email) return;
                ahmed++;
            })
            if (ahmed < 1) return message.channel.send("لا يوجد حسابات")
            if (ahmed < args) return message.channel.send("لا يوجد حسابات كافية")
            message.author.send('✅ Nothing.. Just Check If Your DM open or no').then(() => {
                let P = Math.floor(args * (NFAP)) 
                cools[message.author.id + message.guild.id] = {
                status: "on"
              };
                        let P3 = Math.floor(args * (NFAP)) 
                message.channel.send(new Discord.RichEmbed().setAuthor(message.author.tag, message.author.avatarURL).setColor('#918383')
                    .setDescription(`**اكتب الامر التالي لأكمال عمليه الشراء
#credits <@${URID}> ${P3}
لديك 3 دقائق قبل الالغاء.**`));
                 P = Math.floor(P3 - (P3 * (5 / 100))); ///4
                   let filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`**:moneybag: | ${message.author.username}, has transferred \`$${P}\` to <@${URID}> **`); 
                message.channel.awaitMessages(filter, {
                        maxMatches: 1,
                        time: 240000,
                        errors: ['time']
                    })
                    .then(collected => { 
                        let C = 0;
                        let Accs = []; 
                        nfa.forEach(acc => {
                            if (!acc.email) return;
                            if (C == args) return;;
                            Accs.push(`Email: ${acc.email} | pass: ${acc.pass}`);
                            C++;
                            delete acc.email;
                            delete acc.pass;
                            fs.writeFile("./nfa.json", JSON.stringify(nfa), (err) => {
                                if (err) console.error(err)
                            })
                        });
                  delete cools [message.author.id + message.guild.id];
                        message.channel.send('**Done, Now Check Your DM**!')
                        message.author.send(`Your Accs :)\`\`\`json\n${Accs.join("\n")}\n\`\`\`سيتم خذف الرساله بعد 5 دقائق !`).then(M => M.delete(5 * 60 * 1000))
                    });
            }).catch(err => {
                  delete cools [message.author.id + message.guild.id];
            })
        }
    }

  if (message.content.startsWith(prefix + 'add')) {
if (!n.includes(message.author.id)) return;
     let type = message.content.split(" ");
  let email = message.content.split(" ")[1];
        let pass = message.content.split(" ")[2];

        
        if (!email) return message.reply("Email?");
        if (!pass) return message.reply("Password !")
        if (type == "sfa") {
            let alt = {
                "email": `${email}`,
                "pass": `${pass}`
            }
            sfa.push(alt)
            fs.writeFile("./sfa.json", JSON.stringify(sfa), (err) => {
                if (err) console.error(err)
            })

            message.reply("**Successfully adedd this account.**");


        } else if (type == "nfa") {
let alt = {      
  "email" : `${email}`,
"pass" : `${pass}`
}
            nfa.push(alt)
            fs.writeFile("./nfa.json", JSON.stringify(nfa), (err) => {
                if (err) console.error(err)
            })

            message.reply("**Successfully adedd this account.**");


        } 
    }
    
        }

    

)












const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'
client.on('ready', () => {
    console.log('I am ready!');
});
client.on('ready', () => {
     client.user.setActivity("$help",{type: 'WATCHING'});

});



client.on('message', message => {
  if (message.content.startsWith("رابط")) {

message.channel.createInvite({
      thing: true,
      maxUses: 2,
      maxAge: 86400
  }).then(invite =>
    message.author.sendMessage(invite.url)
  )
message.channel.send("**تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 2**`)


  }
});

client.on('message', function(msg) {
  if(msg.content.startsWith (prefix + 'server')) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .addField(':globe_with_meridians: **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
    .addField(':earth_africa: ** موقع السيرفر :**',`**[ ${msg.guild.region} ]**`,true)
    .addField(':military_medal:** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
    .addField(':bust_in_silhouette:** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
    .addField(':white_check_mark:** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
    .addField(':pencil:** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
    .addField(':loud_sound:** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
    .addField(':crown:** صاحب السيرفر :**',`**[ ${msg.guild.owner} ]**`,true)
    .addField(':id:** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
    .addField(':date:** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});

client.on('message', async message => {
  if(message.content.includes('discord.gg')){ 
      if(message.member.hasPermission("MANAGE_GUILD")) return;
if(!message.channel.guild) return;
message.delete()
var command = message.content.split(" ")[0];
let muterole = message.guild.roles.find(`name`, "Muted");
if(!muterole){
try{
muterole = await message.guild.createRole({
name: "Muted",
color: "#000000",
permissions:[]
})
message.guild.channels.forEach(async (channel, id) => {
await channel.overwritePermissions(muterole, {
  SEND_MESSAGES: false,
  ADD_REACTIONS: false
});
});
}catch(e){
console.log(e.stack);
}
}
 if(!message.channel.guild) return message.reply('** This command only for servers**');
message.member.addRole(muterole);
const embed500 = new Discord.RichEmbed()
.setTitle("Muted Ads")
  .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
  .setColor("c91616")
  .setThumbnail(`${message.author.avatarURL}`)
  .setAuthor(message.author.username, message.author.avatarURL)
.setFooter(`${message.guild.name} `)
message.channel.send(embed500)
message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');


}
})

client.on('message', message => {
  if(message.content.startsWith(prefix + "invites")) {
   message.guild.fetchInvites().then(invs => {
     let user = message.mentions.users.first() || message.author
     let personalInvites = invs.filter(i => i.inviter.id === user.id);
     let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
              let mmmmEmbed = new Discord.RichEmbed()
                        .setAuthor(client.user.username)
                        .setThumbnail(message.author.avatarURL)
.addField(` لقد قمت بدعوة :`, ` ${inviteCount} `)
          .setFooter(`- Requested By: ${message.author.tag}`);
          message.channel.send(mmmmEmbed)
});
 }
});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});

var cats = [

  "https://cdn.discordapp.com/attachments/479044877745782801/479045993132720128/download_1.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046003937247253/download_2.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046011956887552/download_3.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046019904962562/download_4.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046030214692864/download_5.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046039794352151/download_6.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046055581974549/download_7.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046065367154712/download.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046084442980354/images_1.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046105674547216/images_4.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046113945583639/images_5.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046119838580756/images_6.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046131796672513/images_7.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046143318425621/images_8.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046152491368448/images_9.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046158979825686/images_10.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046162247188498/images_11.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046196434960416/images_12.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046214571130882/images_13.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046219528929290/images_14.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479072892022161408/images_15.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046222045511685/images_16.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046225086382081/images_18.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046228047560736/images_19.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046230794829834/images_20.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046233533710336/images_21.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479074274850766863/images_22.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046289477337089/images_23.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046293436629041/images_24.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046294925606914/images_25.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046303330992169/images_26.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046307072311317/images_27.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046315100340224/images_28.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046325619392537/images_29.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046333114875907/images_30.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046334825889807/images_31.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046338718466058/images_32.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046340379148288/images_33.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046342795198484/images_34.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046349644365827/images.jpg"
  ]
      client.on('message', message => {
          var args = message.content.split(" ").slice(1);
      if(message.content.startsWith(prefix + 'هل تعلم')) {
           var cat = new Discord.RichEmbed()
  .setImage(cats[Math.floor(Math.random() * cats.length)])
  message.channel.sendEmbed(cat);
      }
  });


   client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** من جد تنشر لي خاص؟ ترا انا بوت يحمار ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** ممنوع نشر روابط ياحلو ! :angry: !**`)
    }
}
});

client.on('message', message => {
    if(message.content.startsWith(prefix + 'move all')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
    if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)


     }
       });
	   
	   client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='$member')  /// By KillerFox_ حقوق الفا كودز
      var IzRo = new Discord.RichEmbed() /// By KillerFox_ حقوق الفا كودز
      .setThumbnail(message.author.avatarURL)  /// By KillerFox_ حقوق الفا كودز
      .setFooter(message.author.username, message.author.avatarURL) /// الفا كودز
      .setTitle('🌷| Members info') /// By KillerFox_ حقوق الفا كودز
      .addBlankField(true)
      .addField('📗| Online',  /// By KillerFox_ حقوق الفا كودز
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)  /// By KillerFox_ حقوق الفا كودز  /// By KillerFox_ حقوق الفا كودز
      .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)  /// By KillerFox_ حقوق الفا كودز
      .addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`) /// By KillerFox_ حقوق الفا كودز
      .addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`) /// By KillerFox_ حقوق الفا كودز
      .addField('➡| Server Members',`${message.guild.memberCount}`) /// By KillerFox_ حقوق الفا كودز
      message.channel.send(IzRo);
    
    });

	         client.on('message', message => {
            if (message.content.startsWith(prefix + "bot")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' السيرفرات🌐',`[${client.guilds.size}]  `)
.addField(' الاعضاء👥 ',` [${client.users.size}] `)
.addField('الرومات📚 ',`[${client.channels.size}]`) 
.addField(' البنق🚀 ',`[${Date.now() - message.createdTimestamp}]`) 
.addField('مصمم  + صاحب البوت ',`@! Ã7MeĐ♕#3933`)
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
   let embed = new Discord.RichEmbed()

    let args = message.content.split(' ').slice(1).join(' ');
     if(!message.channel.guild) return;
if(message.content.split(' ')[0] == '$bc') {
         message.react("✔️")
          let embed = new Discord.RichEmbed()
    .setColor("#FF00FF")
    .setThumbnail(message.author.avatarURL)   
                                      .addField('تم الارسال بواسطة :', "<@" + message.author.id + ">")
                 message.channel.sendEmbed(embed);
        message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
.addField('**:thinking: » المرسل::**', `*** → ${message.author.username}#${message.author.discriminator}***`)
            .addField('***:earth_americas:  » السيرفر::***', `*** → ${message.guild.name}***`)               
    .setColor('#ff0000')
                 .addField('ّ', args)
            m.send(``,{embed: bc});
        });
    }
})

  client.on("message",  message => {

         let args = message.content.split(' ').slice(1);
    if(message.content.startsWith('$nickname')) {
        if (!message.member.hasPermission("MANAGE_NICKNAMES")) {
            message.channel.send("حط الاسم")
        } else {
            if (!message.guild.member(client.user).hasPermission('MANAGE_NICKNAMES')) return message.reply(' ❌البوت ما عنده خاصية MANAGE_NICKNAMES.').catch(console.error);
            let changenick = message.mentions.users.first();
            let username = args.slice(1).join(' ')
            if (username.length < 1) return message.reply('حط الاسم').catch(console.error);
            if (message.mentions.users.size < 1) return message.author.send('You must mention a user to change their nickname. ❌').catch(console.error);
            message.guild.member(changenick.id).setNickname(username);
            message.channel.send("تم تغيير الاسم الى: " + changenick + "")
        }
    }});
	
  client.on('message', message => {
    if (message.content.startsWith("$id")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO Name Bot`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true) 
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
            .addField("``Your Name``", `${message.author.username}`)
            .addField('``your tag``', message.author.discriminator)
            .addField('``Your id``', message.author.id)
            .addField('``Bot``', message.author.bot)
            .addField('``date of registration``', message.author.createdAt)
    })
}
});

 client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('# - ملحوظة :  يجب ان يكون لديك برمشن أداري . ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('# - ملحوظة : يجب ان يكون البوت لديه برمشن أداري').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let mention = message.mentions.members.first();
    if(!mention) return message.reply('# - ملحوظة : يجب ان تقوم بمنشن شخص معين .').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('# - ملحوظة : لا يمكنك اعطاء ميوت لشخص اعلي من رتبتك .').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('# - ملحوظه : لا يمكنك اعطاء ميوت لشخص اعلي من رتبتك').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.id === message.author.id) return message.reply('# - ملحوظه : لا يمكنك ان تعطي ميوت لنفسك .').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let duration = args[2];
    if(!duration) return message.reply('# - ملحوظه : يجب ان تضع وقت .').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(isNaN(duration)) return message.reply('# - ملحوظه : يجب تحديد وقت زمني صحيح').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let sbb = message.content.split(" ").slice(3).join(" ");
    if(!sbb) sbb = "غير معروف .";

    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('# - لقد تم أعطائك ميوت .')
    .setThumbnail(mention.user.avatarURL)
    .addField('# - السيرفر',message.guild.name,true)
    .addField('# - تم اعطائك ميوت بواسطة',message.author,true)
    .addField('# - السبب',reason)

    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false,
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      });
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username} Muted ! :zipper_mouth:  **  `);
      mention.setMute(true);
    });
    setTimeout(() => {
      if(duration === 0) return;
      if(!mention.has.roles(role)) return;
      mention.setMute(false);
      mention.removeRole(role);
      message.channel.send(`**:white_check_mark: ${mention.user.username} Unmuted **   `);
    },duration * 60000);
  } else if(message.content.startsWith(prefix + "unmute")) {
    let mention = message.mentions.members.first();
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('# - ملحوظة :  يجب ان يكون لديك برمشن أداري . ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('# - ملحوظة : يجب ان يكون البوت لديه برمشن أداري').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!mention) return message.reply('# - ملحوظه : يجب منشن شخص لفك الميوت عنهه .').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

      mention.removeRole(role);
      mention.setMute(false);
      message.channel.send(`**:white_check_mark: ${mention.user.username} Unmuted ! **  `);
  }
});
  
client.on('message', message => {
    if(message.content == '$bans'){
        message.guild.fetchBans().then(bans => {
            bans.forEach(user => {
               message.channel.send('\`#\` <@'+ user.id + '>');
            });
        });
    }
});

client.on('message',async message => {
if(message.content === '$unbanall') {
message.guild.fetchBans().then(ba => {
ba.forEach(ns => {
message.guild.unban(ns);
});
});
}
});

 client.on("ready", () => {

    var guild;

    while (!guild)

        guild = client.guilds.get("464096317896130561");

    guild.fetchInvites().then((data) => {

        data.forEach((Invite, key, map) => {

            var Inv = Invite.code;

            dat[Inv] = Invite.uses;

        });

    });

});

 

 

 

client.on("guildMemberAdd", (member) => {

    let channel = member.guild.channels.get("470073878178430977");

    if (!channel) {

        console.log("!the channel id it's not correct");

        return;

    }

    if (member.id == client.user.id) {

        return;

    }

    console.log('-');

    var guild;

    while (!guild)

        guild = client.guilds.get("464096317896130561");

    guild.fetchInvites().then((data) => {

        data.forEach((Invite, key, map) => {

            var Inv = Invite.code;

            if (dat[Inv])

                if (dat[Inv] < Invite.uses) {

 channel.send(`تم دعوته بواسطة  ${Invite.inviter} `) ;       

 }

            dat[Inv] = Invite.uses;

       

       });

    });

});

client.on('message', message => {
    if (message.content === '$roles') {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='$member')  /// By KillerFox_ حقوق الفا كودز
      var IzRo = new Discord.RichEmbed() /// By KillerFox_ حقوق الفا كودز
      .setThumbnail(message.author.avatarURL)  /// By KillerFox_ حقوق الفا كودز
      .setFooter(message.author.username, message.author.avatarURL) /// الفا كودز
      .setTitle('🌷| Members info') /// By KillerFox_ حقوق الفا كودز
      .addBlankField(true)
      .addField('📗| Online',  /// By KillerFox_ حقوق الفا كودز
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)  /// By KillerFox_ حقوق الفا كودز  /// By KillerFox_ حقوق الفا كودز
      .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)  /// By KillerFox_ حقوق الفا كودز
      .addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`) /// By KillerFox_ حقوق الفا كودز
      .addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`) /// By KillerFox_ حقوق الفا كودز
      .addField('➡| Server Members',`${message.guild.memberCount}`) /// By KillerFox_ حقوق الفا كودز
      message.channel.send(IzRo);
    
    });
	
client.on('message', message => {
  if (message.author.id === client.user.id) return;
          if (message.content.startsWith(prefix + "ping")) {
      message.channel.sendMessage(':ping_pong: Pong! In `' + `${client.ping}` + ' ms`');
  }
});


client.on('message', msg => {
  if(msg.content === '$help')
              setTimeout(function() {  
msg.reply('نتأسف البوت تحت التطوير لاستفسأر كل الفوندر')
              }, 10000)
});







// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

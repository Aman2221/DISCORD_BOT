const Discord = require('discord.js')
const client = new Discord.Client();
require('dotenv').config()

client.on('ready', () => {
    console.log('Our bot is ready to go');
})

client.on('message', msg  => {
    if(msg.content == 'Hey') {
        msg.reply('Hi..');
        //msg.channel.send('bot : i'm not going to tag user')
    }
    
    if(msg.content == 'Hi') {
        msg.reply("Hey, buddy, I'm a bot created by AMAN currently he is offline if you want to talk to him please live a message I'll inform him...")
    }

    if(msg.content == 'help') {
        msg.reply('Hey, how can i help you ?');
    }
})

client.on('message', msg  => {
    if(msg.content == 'Yellow') {
        msg.member.roles.add('821291680644202496')
        //msg.channel.send('bot : i'm not going to tag user')
    }
})


client.on('message', msg  => {
    if(msg.content == 'Pink') {
        msg.member.roles.add('821291677749608479')
        //msg.channel.send('bot : i'm not going to tag user')
    }
})

client.on('messageDelete', msg => {
    msg.channel.send("Please don't don't delete messages ")
})

client.on('message', msg => {
    if(msg.content == 'i love React and NODE'){
        msg.react("❤️");
    }
})
client.login(process.env.BOT_TOKEN)
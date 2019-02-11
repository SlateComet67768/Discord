require("http").createServer(async (req,res) => { res.statusCode = 200; res.write("ok"); res.end(); }).listen(3000, () => console.log("Now listening on port 3000"));


const commando = require('discord.js-commando');
const bot = new commando.Client();
const TOKEN = process.env.TOKEN
bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");


bot.on('message', function(message){
   if(message.content == 'Hello')
   {
message.channel.sendMessage('Hello,' + message.author + ' how are you?');
   } 
});

bot.on('ready',function(){
    console.log("ready");
})


bot.login(TOKEN);

const yt = require("ytdl-core");
const dt = require("opusscript")
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
const prefix = ";";
const antispam = require("discord-anti-spam");
bot.commands = new Discord.Collection();


function play(connection, message) {


    servers.dispatcher = connection.playStream(yt(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", function(){
      if(server.queue[0]) play(connection, message);
      else connection.disconnect();
    });
}

antispam(bot, {
  warnBuffer: 3, //Maximum amount of messages allowed to send in the interval time before getting warned.
  maxBuffer: 5, // Maximum amount of messages allowed to send in the interval time before getting banned.
  interval: 1000, // Amount of time in ms users can send a maximum of the maxBuffer variable before getting banned.
  warningMessage: "Hello, don't spam. Oblivyus has anti spam features. You'll be banned if you continue.", // Warning message send to the user indicating they are going to fast.
  banMessage: " was banned for spamming. Don't test Oblivyus anti spam. Would anyone else like a try?", // Ban message, always tags the banned user in front of it.
  maxDuplicatesWarning: 7,// Maximum amount of duplicate messages a user can send in a timespan before getting warned
  maxDuplicatesBan: 10, // Maximum amount of duplicate messages a user can send in a timespan before getting banned
  deleteMessagesAfterBanForPastDays: 7 // Delete the spammed messages after banning for the past x days.
});

fs.readdir("./cmi/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./cmi/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});



bot.on("ready", async () => {

  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("Oblivyus|Twitch", {type: "PLAYING"});

});


bot.on("message", async message =>{
    if(message.author.bot) return;
  
   

    let MessageAraay = message.content.split(" ");
    let command = MessageAraay[0];
    let args = MessageAraay.slice(1);

    if(!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length))
    if(cmd) cmd.run(bot, message, args);
});

bot.login("NTI2OTA3NTA2OTQ2MjExODYy.DwMAlw.wLyJZdQIn90ukBS6thWp5tShQZA");
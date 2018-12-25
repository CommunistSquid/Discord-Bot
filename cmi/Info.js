const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Commands!")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Commands:", bot.user.createdAt)
    .addField("1: ;Cmds","This is the command you just used! It lists all the commands I have to offer.")
    .addField("2. ;Report","Did someone break a rule, Report them! Please, don't abuse this. It will lead to issues with the bot.")
    .addField("3. ;Ban","Moderation tool: Bans a person! Add a reason!")
    .addField("4. ;Kick","Moderation tool: Kick a person. Add a reason!")
    .addField("5. ;8ball","Talk to the magic 8ball!")
    .addField("7. ;Rule", "Whats the rules?")
    .addField("9. ;Warn","How many warns do you have?")
    .addField("10. ;ListWarn","Lists the ammount of warnings an user has.")
    .addField("11. ;Trump","Sends a trump gif.")
    .addField("12. ;Meme","Sends a meme.")
    .addField("13. ;Poll","Starts a poll.")
    .addField("14. ;Wyr","Would you rather?")
    .addField("15. ;Purge","Moderation tool: Clears the chat. Make sure you don't clear more than 100 messages.")
    .addField("16. ;Decode","Decode a word!")
    
    message.channel.send(botembed);
}

module.exports.help = {
  name:"Cmds"
}

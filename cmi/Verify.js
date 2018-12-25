const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    let role = message.guild.roles.find(role => role.name === 'Verified');
    if (message.channel.name !== 'welcome') return message.reply('You must go to the channel #welcome');
    message.member.addRole(role);
    if (message.member.roles.has(role.id)) {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor('#36393f')
            .setDescription('Your account has already been verified!')
        return message.channel.send((verifyEmbed));
    } else {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor('#36393f')
            .setDescription('Your account has been successfully verified.')
            await(wUser.addRole(muterole.id));
        return message.channel.send((verifyEmbed));
        
        
    }
}

module.exports.help = {
    name: 'verify',
    description: 'you must have the Verified role'
}
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let user;
  if (message.mentions.users.size) {
    user = message.mentions.users.first();
  }
  else if (args.id) {
    user = await Bastion.fetchUser(args.id);
  }
  if (!user) {
    return Bastion.emit('commandUsage', message, this.help);
  }

  await message.channel.send({
    embed: {
      color: Bastion.colors.RED,
      description: `**${message.author.tag}** has banned **${user.tag}** from this server.*`,
      footer: {
      
      }
    }
  });
};

exports.help = {
  name: 'ban',
  description: 'Bans a user from the server*. Oh, not really though, just to mess with them.',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'fakeBan [ @USER_MENTION | USER_ID ]',
  example: []
};

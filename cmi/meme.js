const { RichEmbed } = require("discord.js"), 
      { get } = require("superagent");

exports.run = async (client, message, args, color) => {
  
  let m = await message.channel.send(`*Hold up...*`);
  try {
  const { body } = await get('https://api-to.get-a.life/meme')

  let memeEmbed = new RichEmbed() 
  .setColor(color) 
  .setTitle(body.text)
  .setImage(body.url)
  .setTimestamp()
  .setFooter(`Request by: ${message.author.tag}`);
  
  message.channel.send(memeEmbed).then(() => { m.delete();});
  } catch (e) {
    message.channel.send(`Oh no an error occurred :( \`${e.message}\` try again later!`);
  } 
}

exports.conf = {
    aliases: [],
    cooldown: "10"
}

exports.help = {
    name: "Meme",
    description: "Get a random meme",
    usage: "meme"
}
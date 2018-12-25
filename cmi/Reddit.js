const Discord = require("discord.js"); // Discord Module Required
exports.run = async (client, message, args1) => { 
     var replys = [
    "https://i.redd.it/7x182g4ciw521.jpg",
    "https://i.redd.it/l9wqk9q78v521.png",
    "https://i.redd.it/kj50innfbw521.png",
    "https://i.redd.it/g4uqtmyk5u521.jpg",
    "https://i.redd.it/cn038bw4jt521.jpg",
    "https://i.redd.it/28xhtcawfr521.jpg",
    "https://i.redd.it/eugsjkj3wv521.png",
    "https://i.chzbgr.com/full/9250329088/h6E70F024/",
    "https://i.redd.it/9w5j2mbk3v521.jpg",
     "https://i.redd.it/aow05xegdr521.jpg"
          ];
          let gif = (replys[Math.floor(Math.random() * replys.length)])
          var embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setImage(gif)
          .setFooter("Very cool.")

  
  message.channel.send(embed)
  console.log("Dank")}
module.exports.help = {
    name:"Dank"
}

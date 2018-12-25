const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

    const responses = [
        'What?',
        'Later.',
        'Yes!',
        'Yes!',
        'Yes!',
        'Yes!',
        'No!',
        'Never',
        'Leave a message after the beep...BEEEEEEP...',
        'Well I never...'
    ];
    
    if(args[1]) return message.channel.sendMessage(responses[Math.floor(Math.random() * responses.length)]);
    else message.channel.sendMessage("NIGGER SAY SOMETHING")
};

module.exports.help = {
  name:"8ball"
}

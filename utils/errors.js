const Discord = require("discord.js");
const fs = require("fs");
let config = require("../botconfig.json");

module.exports.noPerms = (message, perm) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTitle("Insufficient Permission")
        .setColor(config.red)
        .addField("Permission needed", perm);

    message.channel.send(embed).then(m => m.delete(5000));
}

module.exports.equalPerms = (message, user, perms) => {

    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor(config.red)
        .setTitle("Error")
        .addField(`${user} has perms`, perms);

    message.channel.send(embed).then(m => m.delete(5000));

}

module.exports.botuser = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("You cannot ban a bot.")
        .setColor(config.red);

    message.channel.send(embed).then(m => m.delete(5000));
}

module.exports.cantfindUser = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("Could not find that user.")
        .setColor(config.red);

    channel.send(embed).then(m => m.delete(5000));
}

module.exports.noReason = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("Please supply a reason.")
        .setColor(config.red);

    channel.send(embed).then(m => m.delete(5000));
}

module.exports.number = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Please put a number.")
        .setDescription("Make sure the number is less than 100!")
        .setColor(config.red);

    message.channel.send(embed).then(m => m.delete(5000));
}

module.exports.noTime = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("Please supply a time.")
        .setColor(config.red);

    channel.send(embed).then(m => m.delete(5000));
}

module.exports.Mhm = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Synth's fault.")
        .setDescription("I made a gay error and I don't know how to fix it. Just ping me.")
        .setColor(config.red);

    channel.send(embed).then(m => m.delete(5000));
}

module.exports.MusicPlay = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("I don't know what to play, please provide a link!")
        .setColor(config.red);

    channel.send(embed).then(m => m.delete(5000));
}
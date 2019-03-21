exports.run = (client, message, args) => {
    if(message.guild.voiceConnection) {
        message.member.voiceChannel.leave()
            message.reply("Channel wurde verlassen!")
    }
    else {
        message.reply("Ich bin in keinem Voice Channel!")
    }

}
exports.help = {
    name: 'join',
    aliases: []
}
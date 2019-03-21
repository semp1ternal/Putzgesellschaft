const YTDL = require("ytdl-core")

exports.run = (client, message, args) => {

    if (message.member.voiceChannel) {
        if (!message.guild.voiceConnection) {
            message.member.voiceChannel.join()
                .then(connection => {
                    message.reply("Verbunden mit dem Voice Vhannel!")
                })
        }
    }
    else {
        message.reply("Verbinde dich erst mit nem Voice Channel!")
    }

}
exports.help = {
    name: 'join',
    aliases: []
}
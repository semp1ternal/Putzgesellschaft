const yt = require('ytdl-core')

exports.run = (client, message, args) => {

    let queue = {};
    if (queue[message.guild.id] === undefined) return message.reply(`Erst Songs hinzufügen`);
    if (!message.guild.voiceConnection) return message.member.join(message).then(() => queue.push(args))
    if (queue[message.guild.id].playing) return message.reply('Spielt bereits!')

    let dispatcher;
    queue[message.guild.id].playing = true

    console.log(queue);
    (function play(song) {
        console.log(song)
        if (song === undefined) return message.reply('Queue ist leer!').then(() => {
            queue[message.guild.id].playing = false
            message.member.voiceChannel.leave()
        })
        message.reply(`Spielt **${song.title}**, gewünscht von **${song.requester}**`)
        dispatcher = message.guild.voiceConnection.playStream(yt(song.url, { audioonly: true }))

    })
}
exports.help = {
    name: 'play',
    aliases: []
}
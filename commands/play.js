const yt = require('ytdl-core')
const settings = require('../settings.json')

exports.run = (client, message, args) => {
	let queue = [];
	let url = message.content.split(' ')[1];

	if (url != undefined || url != null) { // Check if exists
		if (url == "" | !url.includes("youtube")) return message.reply("Not a youtube link."); // Check if valid link, if not reply with nonexistent or not valid
		const voiceChannel = message.member.voiceChannel;
		if (!voiceChannel) return message.reply("You aren't in any voice channels"); // Check if user in voice channel, if not reply with message
		// Get info and add to queue
		yt.getInfo(url, (err, info) => {
			if (err) return message.channel.send('Invalid YouTube Link: ' + err);
			//queue.push(url)
			voiceChannel.join()
				.then(connection => {
					const streamOptions = { seek: 0, volume: 1, passes: 4 };
					const stream = yt(url, { filter: 'audioonly' });
					const dispatcher = connection.playStream(stream, streamOptions);
					let collector = message.channel.createCollector(m => m);
					collector.on('collect', m => {
						if (m.content.startsWith(settings.prefix + 'pause')) {
							message.reply('paused').then(() => { dispatcher.pause(); });
						} else if (m.content.startsWith(settings.prefix + 'resume')){
							message.reply('resumed').then(() => {dispatcher.resume()})
						}
					})
				})
		})

	}
}
	exports.help = {
		name: 'play',
		aliases: []
	}

/* Hints
Guild is the server
Guild.ID is the server id (Used if the bot is running on multiple servers)


*/
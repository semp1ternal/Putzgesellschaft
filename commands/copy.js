const { RichEmbed } = require('discord.js')

exports.run = (client, message, args) => {
        const embed = new RichEmbed()
            .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
            .setThumbnail(message.guild.iconURL)
            .setDescription(message.content.replace("!copy", ""))
            .setTimestamp(new Date())
            .setColor('0xFFD600');
        message.channel.send(embed);

        message.delete().catch(O_o => { });
    }
    exports.help = {
        name: 'copy',
        aliases: []
    }

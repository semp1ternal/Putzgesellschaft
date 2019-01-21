const { RichEmbed } = require('discord.js')

exports.run = async (client, message, args) => {

    await message.delete().catch(O_o => {});

    const verify = message.guild.roles.get('536747666965790730'); //verify

    const embed = new RichEmbed()
    .setTitle('Server Regeln')
    .setDescription(`Hiermit bestätigst du, dass du dir die Regeln durchgelesen hast!`)
    .setColor(0xFFD600)
    .setFooter(`Guild ID: ${message.guild.id}`);

    message.channel.send(embed).then(async msg => {

        await msg.react('✅');
        await msg.react('❌')
    });
};

exports.help = {
    name: 'welcomeroles'
}
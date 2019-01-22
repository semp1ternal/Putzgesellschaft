const { RichEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
    if (message.member.hasPermission("MANAGE_ROLES")) {
        await message.delete().catch(O_o => { });

        const verify = message.guild.roles.get('536747666965790730'); //verify

        const embed = new RichEmbed()
            .setTitle('Server Regeln')
            .setDescription(`Hiermit bestätigst du, dass du dir die Regeln durchgelesen hast!`)
            .setColor(0xFFD600)
            .setFooter(`Solltest du Ablehnen wirst du von dem Server gekickt!`,
                'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojidex/112/warning-sign_26a0.png')

        message.channel.send(embed).then(async msg => {

            await msg.react('✅');
            await msg.react('❌')
        });
    } else {
        message.reply("U SHALL NOT PASS!")
    }
};

exports.help = {
    name: 'welcomeroles'
}
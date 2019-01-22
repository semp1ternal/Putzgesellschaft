const { RichEmbed } = require('discord.js')


exports.run = async (client, message, args) => {
    if(message.member.hasPermission("MANAGE_ROLES")) {

    const roles = require("../roles.json");
    await message.delete().catch(O_o => { });

    console.log(roles[0].reaction);
    const embed1 = new RichEmbed()
    .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
    .setTitle(` ▂▃▄▅▆▇ **Gamingränge** der **${message.guild.name}** ▇▆▅▄▃▂`)
    .setThumbnail(message.guild.iconURL)
    .setDescription(`

    Hier könnt ihr eure Spiele auswählen, die ihr Besitzt.
    damit habt ihr zugriff auf die dazugehörigen Voice & Textkanäle.

    __Hier alle rollen:__`)
    .setColor(0xFFD600)
    const embed2 = new RichEmbed()
    .setFooter(`Jede Rolle kann durchs klicken des Emojis hinzugefügt oder wieder entfernt werden! \u200b \u200b \u200b \u200b  \u200b \u200b Durch hinzufügen einer Rolle kannst du getagt werden!`,
    'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojidex/112/warning-sign_26a0.png')
    .setColor(0xFFD600)
    
    
    roles.forEach(role => {
        embed2.addField(role.name, role.reaction, true);
    });
    
    message.channel.send(embed1);
    message.channel.send(embed2.addBlankField()).then(async msg => {
        await msg.react('531696110805188608')
        await msg.react('434241113239584768');
        await msg.react('362304044179521537');
        await msg.react('536399195523907594');
        await msg.react('536706296196366336');
        await msg.react('536710948614832164');
        await msg.react('536397790062968872');
        await msg.react('434241138958794752');
        await msg.react('536395320808964096');
        await msg.react("536398124298797057");
        await msg.react('536707816157872159');
        await msg.react('536399598692990976');
        
        message.channel.send(` \u200b `).then(async msg => {
            await msg.react('536392716284723200');
            await msg.react('536708654846705680');
            await msg.react('434240848511631381');
            await msg.react('536697783315464193');
            await msg.react('536399883398021131');
            await msg.react('536709695751192606');
            await msg.react('536710923218452490');
            await msg.react('536401444673290240');
            await msg.react('536710897259773983');
            await msg.react('536391372912197652');
            await msg.react('536705433205866506');
            await msg.react('536399883398021131');
            await msg.react('536697484534349825')
        })
    })
    } else {
        message.reply("U SHALL NOT PASS!") 
    }
}

exports.help = {
    name: 'PGSS_welcomeroles'
}
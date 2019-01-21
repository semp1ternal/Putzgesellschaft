module.exports = async (client, messageReaction, user) => {

    const message = messageReaction.message;
    const welcomeChannel = message.guild.channels.find(c => c.name === '🎮game-list');
    const verifyChannel = message.guild.channels.find(c => c.name === '📕infos-und-regelwerk')
    const member = message.guild.members.get(user.id)
    if (member.user.bot) return

    if (messageReaction.emoji.name === '✅' && message.channel.id === verifyChannel.id) {
        member.addRole('536747666965790730').catch(console.error);
        return messageReaction.remove(member).catch(console.error);
    } else {
        let reason = "Dieser wollte nicht Akzeptieren!"
        member.kick(reason)
    }

    const roles = require("../roles.json");

    const role = roles.find(element => {
        return element.reaction.split(":").includes(messageReaction.emoji.name);
    });
    if(!role) return;
    
    member.addRole(role.roleID)
    .catch(console.error);
};
module.exports = async (client, messageReaction, user) => {

    const message = messageReaction.message;
    const channel = message.guild.channels.find(c => c.name === '🎮game-list')
    const member = message.guild.members.get(user.id)
    if (member.user.bot) return;

    const roles = require("../roles.json");

    const role = roles.find(element => {
        return element.reaction.split(":").includes(messageReaction.emoji.name);
    });
    if(!role) return;
    
    member.removeRole(role.roleID)
    .catch(console.error);
};
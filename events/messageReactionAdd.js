module.exports = async (client, messageReaction, user) => {

    const message = messageReaction.message;
    const welcomeChannel = message.guild.channels.find(c => c.name === '🎮game-list');
    const verifyChannel = message.guild.channels.find(c => c.name === '📕infos-und-regelwerk')
    const member = message.guild.members.get(user.id)
    if (member.user.bot) return;
    switch (message.channel.id) {
        case verifyChannel.id:
            if(messageReaction.emoji.name === '✅') {
                const verify = message.guild.roles.get('536747666965790730')
                member.addRole(verify).catch(console.error);
                return messageReaction.remove(member).catch(console.error);
            }
            if(messageReaction.emoji.name === '❌') {
                let reason = "Dieser wollte nicht Akzeptieren!";
                member.kick(reason);
            }
            break;

        case welcomeChannel.id:
            
            const roles = require("../roles.json");
        
            const role = roles.find(element => {
                return element.reaction.split(":").includes(messageReaction.emoji.name);
            });
            if (!role) return;
        
            member.addRole(role.roleID)
                .catch(console.error);
            break;
    
        default:
            break;
    }
};
exports.run = (client, message, args) => {
    const rolesList = message.guild.roles.map((e, x) => (x + ' = ' + e) + ' | ' +e.name).join('\n');
    message.channel.send(rolesList, {split: `\n`});
 }
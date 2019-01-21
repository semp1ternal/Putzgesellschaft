module.exports = client => {
    console.log(`Eingelog als ${client.user.tag}!`)

    const welcome = client.channels.find(c => c.name === '🎮game-list')
    const verify = client.channels.find(c => c.name === '📕infos-und-regelwerk')


    welcome.fetchMessages({ limit: 10 }).then(collected => console.log('Fetched ' + collected.size + ' messages.')).catch(console.error);
    verify.fetchMessages({ limit: 10 }).then(collected => console.log('Fetched ' + collected.size + ' messages.')).catch(console.error)


}
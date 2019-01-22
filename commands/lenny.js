exports.run = (client, message, args) => {
	rand = Math.floor(Math.random() * 6) + 1
	if(rand === 1){
		message.channel.send("( ͡° ͜ʖ ͡°)").catch(console.error)
	} else if (rand === 2){
		message.channel.send("( ͡◉ ͜ʖ ͡◉)").catch(console.error)
	} else if (rand === 3){
		message.channel.send("( ͡☉ ͜ʖ ͡☉)").catch(console.error)
	} else if (rand === 4){
		message.channel.send("( ͡o ͜ʖ ͡o)").catch(console.error)
	} else if (rand === 5){
		message.channel.send("( ʘ̆ ╭͜ʖ╮ ʘ̆ )").catch(console.error)
	} else if (rand === 6){
		message.channel.send("(˵ ͡⚆ ͜ʖ ͡⚆˵)").catch(console.error)
	}
}
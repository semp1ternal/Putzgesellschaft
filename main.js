const Discord = require('discord.js');
const fs = require('fs');
const Enmap = require('enmap')

const client = new Discord.Client();
const config = require("./settings.json")

client.config = config;
global.servers = {};

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`)
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        const props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(commandName, props);
        client.commands.set(commandName, props)

    })
});

client.login(config.token)

client.on("message", (message) => {
    if(!message.member.hasPermission("MANAGE_ROLES")) {
        return message.re
    }
})

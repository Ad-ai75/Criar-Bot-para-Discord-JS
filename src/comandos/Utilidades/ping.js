const Discord = require('discord.js');

module.exports = {
    config: {
        name: "ping",
        aliases: ['pingar'],
        description: "Mostra o ping do bot!",
        usage: "/ping"
    },
    run: async (bot, message, args) => {
        const ping = new Discord.MessageEmbed()
            .setDescription(`Ping do bot: ${bot.ws.ping}`)
            
        message.channel.send(ping)
    }
}

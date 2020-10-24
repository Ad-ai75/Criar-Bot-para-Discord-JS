const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-br')

module.exports = {
    config: {
        name: "botinfo",
        aliases: ['bot-info'],
        description: 'Mostra infos do bot!',
        example: "/botinfo",
        usage: "/botinfo"
    },
    run: async (bot, message, args) => {
        const embed = new Discord.MessageEmbed()
            .setTitle(`BotInfo`)
            .setColor("RANDOM")
            .setThumbnail(bot.user.displayAvatarURL())
            .setDescription(`Aqui você verá minhas informações!`)
            .addField(`Nome:`, `${bot.user.username}`)
            .addField(`ID:`, `${bot.user.id}`)
            .addField(`Criação:`, `${moment(bot.user.createdTimestamp).format('LLL')}`)
            .addField(`Criador:`, `<@463421520686088192>`)

        message.channel.send(embed)
    }
}
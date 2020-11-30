const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-BR');

module.exports = async (bot, member) => {
	const canal = member.guild.channels.cache.get('ID DO CANAL AQUI');

	const embed = new Discord.MessageEmbed()
		.setTitle('SEJA BEM-VINDO!')
		.setDescription(`Seja bem-vindo ao servidor **${member.guild.name}**, \`${member.user.tag}\``)
		.addField(`Membro:`, `${member.user.username}`)
		.addField(`ID:`, `${member.user.id}`)
		.addField(`Data da Entrada:`, moment(member.joinedAt).format('ll'))
		.setFooter(`Usuário: ${member.user.username}`, member.user.displayAvatarURL({ dynamic: true }))
		.setTimestamp();

	canal.send(embed);
};

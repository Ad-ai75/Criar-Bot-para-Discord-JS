module.exports = async (bot, ready) => {
  console.log(`COMANDOS E EVENTOS LIGADOS!`);
  console.log(`Bot foi iniciado com sucesso!`);

  const status = [
    "online",
    "dnd",
    "idle"
  ]

  const atividades = [
    [`Use /ping`, "WATCHING"],
    [`${bot.users.cache.size}`, "PLAYING"]
  ]

  setInterval(async () => {
    let i = Math.floor(Math.random() * atividades.length + 1) - 1
    await bot.user.setActivity(atividades[i][0], {
      type: atividades[i][1]
    });
  }, 20000)

  setInterval(async () => {
    let b = Math.floor(Math.random() * status.length + 1) - 1
    await bot.user.setStatus(status[b])
  }, 20000)

}

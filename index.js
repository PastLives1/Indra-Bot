const Discord = require("discord.js")

const TOKEN = "OTMxMzU2MTMyMTU5Njc2NDY2.YeDO_Q.uTaexu5fUPeyu-b9gQZe9X4PhMA"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World!")
    }
})

client.login(TOKEN)
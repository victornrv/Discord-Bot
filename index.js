var Discord = require("discord.js");
var Client = new Discord.Client({intents: []});

Client.on("ready", () => {
    console.log("bot on");
});

Client.login("OTk4OTYwMDM2MjYyOTgxNzk0.GYAi8-.RWfVHvDxE516IfHa6hGk9mzup0mL-J0OlXJ67w");

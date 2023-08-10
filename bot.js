const { Telegraf } = require('telegraf');
const express = require('express');
const Token = '6561647272:AAEf7qawKDZjeIz0FzgxjbeeeknmqcYOroQ';
const bot = new Telegraf(Token);
const botz = express.Router();


bot.start((zeev) => {
  zeev.reply('Hai saya bot...!');
});

bot.hears('Ping',async(zeev) => {
  zeev.reply('Pong..!!')
});

bot.launch();

module.exports = botz;
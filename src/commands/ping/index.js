import { SlashCommandBuilder } from 'discord.js';

export const command = new SlashCommandBuilder()
.setName('ping')
.setDescription('reply pong!');

export const action = async (ctx) => {
    ctx.reply('pong!');
}
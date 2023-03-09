import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
.setName('Hi!')
.setDescription('Say Hi! to ABB!!!');

export const action = async (ctx) => {
    ctx.reply('Hi!!!');
}
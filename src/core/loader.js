import { REST, Routes } from 'discord.js'
import fg from 'fast-glob'

const updateSlashCommands = (guildID) => {
    const rest = new REST({ version: 10 }).setToken(process.env.TOKEN);
    rest.put(
        Routes.applicationGuildCommands(
            process.env.APPLICATION_ID, 
            guildID
        ),
        {
            body
        }
    )


}

export const loadCommands = async() => {
    const files = await fg('../src/commands/**/index.js') 
    for(const file of files){
        const cmd = await import(file)
        console.log(cmd)
    }
}
const {Discord, Client, Message, MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');
const {SlashCommandBuilder} = require('@discordjs/builders');
const {getTime2} = require('../function/getTime');
const prefix =  process.env['prefix'];
let command = 'off';
module.exports = {
    data: new SlashCommandBuilder()
    .setName(command)
    .setDescription('Off Topic'),
    async execute(client, interaction){
        try{

            let setName= 'off';
            getTime2(client, interaction, command, setName);

            let ranNum = Math.floor((Math.random() * 3) + 1);
            if (ranNum == 1) {
                await interaction.reply('https://cdn.discordapp.com/attachments/960469353319526400/1034409090962702417/off.png');
            } else if (ranNum == 2){
                await interaction.reply('https://cdn.discordapp.com/attachments/653718872360222760/1067119158355046410/off2.png');
            } else{
                await interaction.reply('https://cdn.discordapp.com/attachments/653718872360222760/1067119158577336471/off3.png');
            }

        } catch (error) {
            console.log(error);
            let channel2 = client.channels.cache.get('959120662188933191');
            await channel2.send("Error at help.js");
        }
    }
}
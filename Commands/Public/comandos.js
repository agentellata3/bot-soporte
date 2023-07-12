const {
    ChatInputCommandInteraction, 
    SlashCommandBuilder,
    EmbedBuilder,
} = require("discord.js");
   
   
   module.exports = {
     data: new SlashCommandBuilder()
      .setName("comandos")
      .setDescription("te enseño todos mis comandos"),
   
      /** 
       * 
       * 
       * @param {ChatInputCommandInteraction} interaction
      */
     
      execute(interaction) {                                                
       interaction.reply({ content: "utiliza </ping:1127290770999738451>", ephemeral: true});
       
      
    },
}; 
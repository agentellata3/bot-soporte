const {
    ChatInputCommandInteraction, 
    SlashCommandBuilder,
   } = require("discord.js");
   
   
   module.exports = {
     data: new SlashCommandBuilder()
      .setName("info")
      .setDescription("te doy informacion del bot"),
   
      /** 
       * 
       * 
       * @param {ChatInputCommandInteraction} interaction
      */
     
      execute(interaction) {
       interaction.reply({ content: "Hola soy un bot de moderacion y de mas cosas pru ba algunos de mis comandos tanpoco es que sea de los mejores", ephemeral: true});
      
     
     },
   };
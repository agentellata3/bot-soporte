const {
    ChatInputCommandInteraction, 
    SlashCommandBuilder,
     ActionRowBuilder,
     ButtonBuilder,
     ButtonStyle,
     Collection,
  } = require("discord.js");
   
   
   module.exports = {
     data: new SlashCommandBuilder()
      .setName("boton")
      .setDescription("si me pulsas te creo un boton"),
   
      /** 
       * 
       * 
       * @param {ChatInputCommandInteraction} interaction
      */
      async execute(interaction) {
        const button = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
            .setCustomId(`test`)
            .setLabel(`buenas`)
            .setStyle(ButtonStyle.Success),
        );
      await interaction.reply({ components: [button] });
    
      const collector = interaction.channel.createMessageComponentCollector();

      collector.on(`collect`, async (i) => {
         await i.update({ content: `hi`, components: [button]})});
    },
      
};

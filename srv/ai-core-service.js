async function getPersonalizedEmail(data) {
    try {
        const template = `
                            Você é Christian, CEO da Azira.

                            Gere uma mensagem personalizada para o funcionário parabenizando-o por sua contribuição à equipe.

                            As informações do funcionário estão formatadas como um dicionário. A chave no dicionário é "Atributo do Funcionário" e o valor é "Valor do Funcionário".

                            Aqui estão as informações do funcionário formatadas como um dicionário
                            ${data}

                            Inclua pelo menos dois parágrafos. O e-mail deve ser escrito levando em consideração esses valores.

                            Importante: Em vez de usar o valor do funcionário no e-mail, use o atributo correspondente do funcionário com aspas duplas. Isto é muito importante pois os próximos passos dependem disso.

                            Não inclua nenhuma informação adicional além do corpo do e-mail. Enderece o funcionário usando "NOME" entre aspas duplas.

                            Finalmente, verifique se o e-mail gerado contém algum valor do funcionário, se sim substitua-o pelo atributo correspondente do funcionário com aspas duplas.
                        `
        
        const payload = {
            messages: [{ role: "user", content: template }],
            max_tokens: 16000,
            temperature: 0.0,
        };
        const capllmplugin = await cds.connect.to("cap-llm-plugin");
        const chatModelConfig = cds.env.requires["gen-ai-hub"]["chat"];
        
        const chatCompletion = await capllmplugin.getChatCompletionWithConfig(chatModelConfig,payload);

        return chatCompletion.completion.choices[0].message.content
    }
    catch (error) {
        // Handle any errors that occur during the execution
        console.log("Erro ao gerar resposta para consulta do usuário:", error);
        throw error;
    }
}


module.exports=getPersonalizedEmail;
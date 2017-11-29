function inputFields(form){
    var numProcess = getValue("WKNumProces");
    form.setValue("numProcess", numProcess);
    form.setValue("campoDescritor", form.getValue("nomeParticipante") + " - " + form.getValue("nomeCurso") );
    
    // ANALYTICS
    // Informações do participante e treinamento.
    form.setValue("custom_0", form.getValue("nomeParticipante") );
    form.setValue("custom_1", form.getValue("matParticipante") );
    form.setValue("custom_2", form.getValue("cargoParticipante") );
    form.setValue("custom_3", form.getValue("lotacaoParticipante") );
    form.setValue("custom_4", form.getValue("nomeCurso") );
    form.setValue("custom_5", form.getValue("dataInicio") );
    form.setValue("custom_6", form.getValue("dataTermino") );
    //RESULTADO AVALIAÇÃO
    
    var pergunta1, pergunta2;
    pergunta1 = form.getValue("pergunta1");
    pergunta2 = form.getValue("pergunta2");
    form.setValue("custom_7", getPorcentagem(pergunta1, 3) );
    form.setValue("custom_8", getPorcentagem(pergunta2, 4) );
}

function getPorcentagem(avaliacao, proporcao) {
    if ( proporcao == 3 ) {
        if ( avaliacao == "Sim" ) return "100"; 
        if ( avaliacao == "Parcialmente" ) return "66"; 
        if ( avaliacao == "Não" ) return "33"; 
        return 0;
    }
    if ( proporcao == 4 ) {
        if ( avaliacao == "aplicavel" ) return "100"; 
        if ( avaliacao == "parcialmente_aplicavel" ) return "75"; 
        if ( avaliacao == "pouco_aplicavel" ) return "50"; 
        if ( avaliacao == "nao_aplicavel" ) return "25"; 
        return 0;
    }
}
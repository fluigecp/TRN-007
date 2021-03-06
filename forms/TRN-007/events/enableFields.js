function enableFields(form) {
    var activity = getValue('WKNumState');

    /** Life Cycle */
    if ( activity == 0 || activity == 3 || activity == 4 || activity == 9 || activity == 23 ){
        form.setEnabled('pergunta1', false, true);
        form.setEnabled('justificativa1', false, true);
        form.setEnabled('pergunta2', false, true);
        form.setEnabled('justificativa2', false, true);
        form.setEnabled('pergunta3', false, true);
    }

    if ( activity != 0 && activity != 3 && activity != 7 && activity != 9 ) {
        form.setEnabled("nomeCurso", false, true);
        form.setEnabled("dataInicio", false, true);
        form.setEnabled("dataTermino", false, true);
        form.setEnabled("nomeParticipante", false, true);
        form.setEnabled("matParticipante", false, true);
        form.setEnabled("cargoParticipante", false, true);
        form.setEnabled("lotacaoParticipante", false, true);
        form.setEnabled("avaliadorTreinamento", false, true);
        form.setEnabled("responsavelArea", false, true);
        form.setEnabled("usuarioParticipou", false, true);
        form.setEnabled("conteudoProgramatico", false, true);
    }

    if ( activity == 7 ) {
        form.setEnabled("avaliadorTreinamento", false, true);
        form.setEnabled("responsavelArea", false, true);
        form.setEnabled("usuarioParticipou", false, true);
    }
    /** FIM - Life Cycle */

}

function validaCampos(atividade, proximaAtividade) {
	/** Life Cycle Workflow */

	if (atividade == 0 || atividade == 3 || atividade == 9) {
		addHasFree("nomeCurso");
		addHasFree("nomeParticipante");
		addHasFree("matParticipante");
		addHasFree("avaliadorTreinamento");
		addHasFree("aprovadorTreinamento");
		addHasFree("usuarioParticipou");
		addHasFree("conteudoProgramatico");
	}

	if (atividade != 0 && atividade != 3 && atividade != 9) {
		addHasFree('pergunta1');
		if ( getValue("pergunta1") != "Sim" ) {
			addHasFree('justificativa1');
		}
		addHasFree('pergunta2');
		addHasFree('pergunta3');
		addHasFree('justificativa2');
		if ( atividade == 7 ) {
			addHasFree("dataInicio");
			addHasFree("dataTermino");
			addHasFree("cargoParticipante");
			addHasFree("lotacaoParticipante");
		}
	}

	if ( atividade == 4 ) {
		addHasFree("aprovarAvaliacao");
	}

	if ( atividade == 23 ) {
		addHasFree("aprovarAvaliacaoRH");
	}

	/** Fim Life Cycle Workflow */
}

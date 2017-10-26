function validaCampos(atividade, proximaAtividade) {
	/** Life Cycle Workflow */

	if (atividade == 0 || atividade == 3 || atividade == 9) {
		addHasFree("nomeCurso");
		addHasFree("data1");
		addHasFree("data2");
		addHasFree("nomeParticipante");
		addHasFree("matParticipante");
		addHasFree("cargoParticipante");
		addHasFree("lotacaoParticipante");
		addHasFree("avaliadorTreinamento");
		addHasFree("usuarioParticipou");
	}

	if (atividade != 0 && atividade != 3 && atividade != 9) {
		addHasFree('pergunta1');
		if ( getValue("pergunta1") != "Sim" ) {
			addHasFree('justificativa1');
		}
		addHasFree('pergunta2');
		addHasFree('pergunta3');
	}

	if (atividade == 4) {
		addHasFree("aprovarAvaliacao");
	}

	/** Fim Life Cycle Workflow */
}

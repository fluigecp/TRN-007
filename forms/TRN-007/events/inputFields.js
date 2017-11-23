function inputFields(form){
    var numProcess = getValue("WKNumProces");
    form.setValue("numProcess", numProcess);
    form.setValue("campoDescritor", form.getValue("nomeParticipante") + " - " + form.getValue("nomeCurso") );
    if ( activity != 0 ) {
        form.setValue("numProcess", numProcess);
    }
}
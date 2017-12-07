function servicetask36(attempt, message) {
 try {
	var Service = ServiceManager.getService('ECMCardService');
	log.warn('%%%%%% Service: ' + Service);

	var serviceHelper = Service.getBean();
	log.warn('%%%%%% serviceHelper: ' + serviceHelper);

	var serviceInstance = serviceHelper.instantiate("com.totvs.technology.ecm.dm.ws.ECMCardServiceService");
	log.warn('%%%%%% serviceInstance: ' + serviceInstance);

	var cardFieldDtoArray = serviceHelper.instantiate("com.totvs.technology.ecm.dm.ws.CardFieldDtoArray");
	log.warn('%%%%%% cardFieldDtoArray: ' + cardFieldDtoArray);

	var portServico = serviceInstance.getCardServicePort();
	log.warn('%%%%%% portServico: ' + portServico);

	var user = hAPI.getAdvancedProperty("loginUserWS");
	log.warn('%%%%%% user: ' + user);

	var password = hAPI.getAdvancedProperty("passwdUserWS");
	log.warn('%%%%%% password: ' + password);

	var empresa = parseInt(getValue("WKCompany"));
	log.warn('%%%%%% empresa: ' + empresa + ' TypeOf: ' + typeof empresa);

	// INICIANDO A IMPLEMENTAÇÃO DA INTEGRAÇÃO COM A FICHA DO PARTICIPANTE

	
 } catch(error) { 
	log.error(error);
	throw error;
 }
}
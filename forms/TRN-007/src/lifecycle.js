/**
 * @module Lifecycle
 */

 var lifecycle = (function() {
    /** Lifecycle Variables */
    var activity = 0,
    modo = "";

    var setup = function () {
        activity = getAtividade();
        modo = getFormMode();
    };

    var logActiveInformation = function () {
        console.log("Activity: ", activity);
        console.log("Modo: ", modo);
    };

    var control = function () {
        // GLOBAL LISTENERS 
        $(".expand").on("click ", manipulateDOM.actions4Listeners.expandTextAreaListener);
        
        /** Início - Life Cycle */
        if ( activity == 0 || activity == 3 || activity == 9 ) {
            manipulateDOM.initCalendar('input[data-date-hour]');
        }

        if ( activity == 7 ) {
            var aberturaAutomatica = $("#aberturaAutomatica").val();
            if ( aberturaAutomatica == "Sim" ) {
                var numSolicAvaliacaoReacao = $("#solicAvaliacaoReacao").val();
                var numSolicTreinamento = $("#numSolicTreinamento").val();
                $("#btnShowAvaliacaoReacao").on("click", { numSolic: numSolicAvaliacaoReacao }, manipulateDOM.actions4Listeners.showSolicitacaoListener);
                $("#btnShowTreinamento").on("click", { numSolic: numSolicTreinamento },  manipulateDOM.actions4Listeners.showSolicitacaoListener);
            }
            $("#btnPrint").on("click", manipulateDOM.actions4Listeners.printAvaliacaoListener);
        }
        /** Modo VIEW  */

        if ( modo == "VIEW" ) {

        }	

        /** Fim - Life Cycle */
    };

    var init = function () {
        setup();
        logActiveInformation();
        control();
    };

    var windowLoadEvents = function () {
        /** Events onload, zoomFields etc.. */
    };

    return {
        init: init,
        windowLoadEvents: windowLoadEvents
    };
 })();
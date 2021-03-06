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
        if ( activity == 0 || activity == 3 || activity == 7 || activity == 9 ) {
            manipulateDOM.initCalendar('input[data-date-hour]');
            if ( activity != 7 ) {
                $("#matParticipante").on("blur", manipulateDOM.actions4Listeners.checkIfParticipanteHasFluigListener);
                if ( activity == 9 ) {
                    setTimeout(manipulateDOM.actions4Listeners.checkIfParticipanteHasFluigListener, 10000);
                    setTimeout(manipulateDOM.actions4Listeners.checkLotacaoParticipante, 10000);
                }
            }
        }

        if ( activity == 0 || activity == 3 || activity == 4 || activity == 6 || activity == 7 || activity == 9 || activity == 23 || activity == 27 ) {
            var aberturaAutomatica = $("#aberturaAutomatica").val();
            if ( aberturaAutomatica == "Sim" ) {
                var numSolicAvaliacaoReacao = $("#solicAvaliacaoReacao").val();
                var numSolicTreinamento = $("#numSolicTreinamento").val();
                $("#btnShowAvaliacaoReacao").on("click", { numSolic: numSolicAvaliacaoReacao }, manipulateDOM.actions4Listeners.showSolicitacaoListener);
                $("#btnShowTreinamento").on("click", { numSolic: numSolicTreinamento },  manipulateDOM.actions4Listeners.showSolicitacaoListener);
            }
            manipulateDOM.enablePopOvers();
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
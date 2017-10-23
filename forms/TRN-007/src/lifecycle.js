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
"use strict"
/** @module DOMManipulationModule */

var manipulateDOM = (function () {
    var actions4Listeners = {
        /**
         * @description Função listener para expandir um textarea
         */
        expandTextAreaListener: function (event) {
            event.preventDefault();
            var type = $(this).prop("tagName");
            var classe = ($(this).attr("class")).indexOf("expand");
            $(this).css("resize", "none");
            if (classe > -1) {
                $(this).show("slow", function () {
                    $(this).css({
                        "display": "block",
                        "overflow-y": "hidden"
                    });
                    expandTextarea(this.id);
                });
            }
        },

    };

    var zoomFields = {
        eventZoom: function (selectedItem) {
            
        }
    }
    /**
    * @description expande textarea do histórico
    * @param id id do campo
    */
    var expandTextareaHistorico = function (id) {
        var objTextArea = document.getElementById(id)
        if (objTextArea.scrollHeight > objTextArea.offsetHeight) {
            objTextArea.rows += 1
        }
    }
    /**
    * @description Mostra o histórico completo
    */
    var mostraHistorico = function () {
        var historico = "historico"
        document.getElementById(historico).style.display = "inline"
        expandTextarea(historico)
    }
    return {
        actions4Listeners: actions4Listeners,
        expandTextareaHistorico: expandTextareaHistorico,
        mostraHistorico: mostraHistorico,
        zoomFields: zoomFields
    }
})();
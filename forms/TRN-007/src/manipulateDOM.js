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

        /**
         * @description Função listener para imprimir a avaliação.
         */
        printAvaliacaoListener: function(event) {
            event.preventDefault();
            printModule.print();
        },

        /**
         * @description Função listener para abrir uma solicitação pelo seu código.
         */
        showSolicitacaoListener: function(event) {
            event.preventDefault();
            var numSolic = event.data.numSolic;
            if (numSolic != "" && numSolic != undefined && numSolic != null) {
                var htmlRef = "/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID=" + numSolic;
                window.open(htmlRef, "_blank");
            }
        },

        /**
         * @description Função listener para verificar se a matrícula do participante está cadastrada no fluig,
         * caso estiver, o campo avaliador é setado automaticamente com o nome do participante.
         */
        checkIfParticipanteHasFluigListener: function () {
            var matricula = document.getElementById("matParticipante").value;
            if ( servicesModule.searchUserMat(matricula) ) {
                var nameMat = servicesModule.findNameByMat(matricula);
                manipulateDOM.zoomFields.setZoomData("avaliadorTreinamento", nameMat);
                document.getElementById("avaliadorMat").value = matricula;
            } else {
                manipulateDOM.zoomFields.clearZoomData("avaliadorTreinamento");
                document.getElementById("avaliadorMat").value = "";
            }    
        }

    };

    var zoomFields = {
        eventZoom: function (selectedItem) {

            if (selectedItem.inputName == "aprovadorTreinamento") {
                $("#aprovadorMat").val(selectedItem.colleagueId);
            }

            if (selectedItem.inputName == "avaliadorTreinamento") {
                if ( $("#aberturaAutomatica") != "Sim") {
                    var matricula = $("#matParticipante").val();
                    if ( servicesModule.searchUserMat(matricula) ){
                        $("#avaliadorMat").val(matricula);
                    } else {
                        $("#avaliadorMat").val(selectedItem.colleagueId);
                    }
                }
            }
        },

        setZoomData: function(instance, value){
            window[instance].setValue(value);
        },

        clearZoomData: function(instance) {
            window[instance].clear();
        }
    };

    var enablePopOvers = function () {
        FLUIGC.popover('.bs-docs-popover-hover', {
            trigger: 'hover',
            placement: 'auto'
        });
    };

    var expandTextarea = function (id) {
        var element = document.getElementById(id);
        if (element.scrollHeight != null) {
            var altura = element.scrollHeight + 'px';
            $(element).animate({
                overflow: 'hidden',
                height: 0,
                height: altura
            });
        }
    };


    /**
    * @description expande textarea do histórico
    * @param id id do campo
    */
    var expandTextareaHistorico = function (id) {
        var objTextArea = document.getElementById(id)
        if (objTextArea.scrollHeight > objTextArea.offsetHeight) {
            objTextArea.rows += 1
        }
    };
    /**
    * @description Mostra o histórico completo
    */
    var mostraHistorico = function () {
        var historico = "historico"
        document.getElementById(historico).style.display = "inline"
        expandTextarea(historico)
    };
    /**
     * @description Inicia as máscaras em todos os elementos da DOM que possuem o atributo 'mask'
    */
    var initMasks = function () {
        var inputs = $("[mask]")
        MaskEvent.initMask(inputs)
    };

        /**
     * @description Inicia o calendário em um objeto na DOM
     * @param input Objeto em que o calendário será inicializado
     */
    var initCalendar = function (input) {
        //Atribuindo calendário a cada campo de data/hora;
        $(input).css("background-color", "white")
        $(input).focus(function (event) {
            var data = $(this).attr("data-date-hour")
            dateFunctions.calendar.get(this, data)
        })
        // Limpa campo calendar ao clicar no botão limpar do respectivo campo.
        $("span.sp-clear").on("click", function (event) {
            $(this).closest(".form-group").find("input").val("").change()
        })
    };

    return {
        actions4Listeners: actions4Listeners,
        expandTextareaHistorico: expandTextareaHistorico,
        mostraHistorico: mostraHistorico,
        zoomFields: zoomFields,
        initMasks: initMasks,
        initCalendar: initCalendar,
        enablePopOvers: enablePopOvers,
        expandTextarea: expandTextarea
    }
})();
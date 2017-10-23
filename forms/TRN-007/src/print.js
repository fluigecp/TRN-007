"use strict";
/**
 * @module PrintModule
 */
var printModule = (function(){
    var modo = "";

    var setup = function () {
        modo = getFormMode();
    };

    var geraAvaliacao = function () {
        try {
            var myWindow;
            if(/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)){				
                myWindow = window.open("print/print.html", "myWindow");
                setup();
                setTimeout(function() {
                    var list = getData();
                    setData(myWindow, list);
                }, 3000);

                
            } else {
                alert('Navegador incompatível! Utilizar o Google Chrome');
            }
        } catch (err) {
            console.log(err.message);
            alert('DESCULPE! Ocorreu um erro, contate o administrador');
        }
    };

    var getData = function () {
       
    };

    var getHeader = function (){
        
    };

    function setData(myWindow, list) {
        try{
            
        }catch(err){
            console.log('Erro na funcao '+ err.message);
            alert('DESCULPE, OCORREU UM ERRO! Tente novamente ou Contate o administrador');
            myWindow.close();
        }
    };

    return {
        print: geraAvaliacao
    };
})();
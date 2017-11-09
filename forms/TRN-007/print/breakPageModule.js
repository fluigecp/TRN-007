/**
 * @module breakPageModule
 * 
 */
var breakPageModule = (function () {
    "use strict";

    var run = function() {
        var height = 0;
        var nextElementWillBreak = false;
        $("#aprovacaoEficaciaForm .row").each(function(){
            var currentElement = $(this);
            height += currentElement.outerHeight();
            /* console.log("HEIGHT: ",height); */
            
            if (nextElementWillBreak) {
                var sum = currentElement.outerHeight() + height;
                if ( sum > 842 ) {
                    /* console.log("NEXT ELEMENT WAS BROCK") */
                    currentElement.addClass("next-page");
                    height = 0;
                    nextElementWillBreak = false;
                }
            }

            if ( height > 842 ) {
                /* console.log("BREAK HEIGHT > 790"); */
                currentElement.addClass("next-page");
                height = 0;
            }
            
            if ( height <= 842 ) {
                var sum = currentElement.outerHeight() + height;
                /* console.log("SUM: "+sum); */
                if ( sum > 842 ) {
                    console.log("Break sum > 842");
                    currentElement.addClass("next-page");
                    height = 0;
                } else {
                    /* console.log("WILL BREAK"); */
                    nextElementWillBreak = true;
                }
            }

        });
    }
    return {
        run: run
    }
})();
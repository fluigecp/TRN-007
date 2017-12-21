/**
 * @module printLifeCycleModule
 */
var printLifeCycleModule = (function() {
    "use strict";
    var init = function() {
        setTimeout(function() {
            breakPageModule.run();
            print();
            close();
        }, 3000);
    }
    return {
        init: init
    }
})();

// IIFE - Immediately Invoked Function Expression
(function ($, window, document) {
    /** The $ is now locally scoped 
    Listen for the jQuery ready event on the document */
    $(printLifeCycleModule.init);

}(window.jQuery, window, document));
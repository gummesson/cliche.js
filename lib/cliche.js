/*
 *  Cliche.js
 *
 *  Effortlessly map click events.
 *
 *  Version: 0.1.0
 *  License: MIT
 *
 *  Support: IE9+
 *
 */
(function(window, document) {
 
  'use strict';
 
  var Cliche = function(selectors) {
    Object.keys(selectors).forEach(function(selector) {
      var targets = document.querySelectorAll(selector);
      var action  = selectors[selector];
      [].forEach.call(targets, function(target) {
        target.addEventListener('click', function(event) {
          return action(event);
        }, false);
      });
    });
  };
  
  window.Cliche = Cliche;
 
})(window, document);

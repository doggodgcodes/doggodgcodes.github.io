// chatgpt 5 mini wrote this code
(function() {
  var isIE = false;

  // Conditional compilation trick for IE <= 10
  /*@cc_on
    isIE = true;
  @*/

  // For IE 11
  if (!isIE && !!window.MSInputMethodContext && !!document.documentMode) {
    isIE = true;
  }

  // Extra check for very old IE (6-8)
  if (!isIE && !!document.all && !window.atob) {
    isIE = true;
  }

  if (isIE) {
    window.location.href = "https://doggodgcodes.github.io/safety/ie.htm";
  }
})();

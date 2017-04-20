;(function() {

  "use strict" ;

  var noindex = document.getElementsByTagName('noindex');

  for (var i = 0; i < noindex.length; i++) {
    if (noindex[i].innerHTML.indexOf('http://kinogo.club') < 0 || noindex[i].innerHTML.indexOf('iframe') > -1) {
      console.log(noindex[i]);
      noindex[i].style.display = 'none';
    }
    // noindex[i].style.display = 'none';
  }

})();

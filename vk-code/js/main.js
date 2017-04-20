;(function() {

  "use strict" ;

  console.log("CONTENT READY!");
  
  function start() {
    console.log(Prism);
    var allPosts = document.getElementsByClassName('wall_post_text');
    console.log(allPosts);
    for (var i = 0; i < allPosts.length; i++) {
      var postText = allPosts[i].innerHTML;
      postText = postText.replace(/\'\'\'(\w*)<br>([\w\W]+?)<br>\'\'\'/g, function(match, language, source) {
        // console.log(source);
        source = source.replace('Показать полностью…', '').replace(/<br>/g, '');
        var tmp = document.createElement('pre');
        tmp.innerHTML = source;

        // return '<pre class="language-' + language + '"><code class="language-' + language + '">' + 'LOL' + '</code></pre>';
        // return '<code class="language-javascript"><pre class="language-javascript">' + Prism.highlight(source, Prism.languages[language]) + '</pre></code>';
        return '<code class="language-javascript"\>\<pre class="language-javascript">' + Prism.highlight(source, Prism.languages[language]) + '</pre></code>';
      });
      allPosts[i].innerHTML = postText;
    }
  }


  // loadPrism();
  start();

})();

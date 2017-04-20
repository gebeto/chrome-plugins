;(function() {

  "use strict" ;

  console.log("CONTENT READY!");
  
  function loadPrism() {
    var PRISM_JS = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/prism.min.js';
    var PRISM_JS_PHP = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/components/prism-php.min.js'

    var jfStyleEl = document.createElement('style') ;
    jfStyleEl.id = 'jfStyleEl' ;
    document.head.appendChild(jfStyleEl) ;
    jfStyleEl.innerHTML = `code[class*="language-"],pre[class*="language-"] { color: black; background: none; text-shadow: 0 1px white; font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; word-wrap: normal;  line-height: 1.5; -moz-tab-size: 4; -o-tab-size: 4; tab-size: 4;  -webkit-hyphens: none;  -moz-hyphens: none; -ms-hyphens: none;  hyphens: none;}pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {  text-shadow: none;  background: #b3d4fc;}pre[class*="language-"]::selection, pre[class*="language-"] ::selection,code[class*="language-"]::selection, code[class*="language-"] ::selection {  text-shadow: none;  background: #b3d4fc;}@media print { code[class*="language-"], pre[class*="language-"] {   text-shadow: none;  }}/* Code blocks */pre[class*="language-"] {  padding: 1em; margin: .5em 0; overflow: auto;}:not(pre) > code[class*="language-"],pre[class*="language-"] {  background: #f5f2f0;}/* Inline code */:not(pre) > code[class*="language-"] {  padding: .1em;  border-radius: .3em;  white-space: normal;}.token.comment,.token.prolog,.token.doctype,.token.cdata { color: slategray;}.token.punctuation {  color: #999;}.namespace { opacity: .7;}.token.property,.token.tag,.token.boolean,.token.number,.token.constant,.token.symbol,.token.deleted { color: #905;}.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted {  color: #690;}.token.operator,.token.entity,.token.url,.language-css .token.string,.style .token.string {  color: #a67f59; background: hsla(0, 0%, 100%, .5);}.token.atrule,.token.attr-value,.token.keyword { color: #07a;}.token.function {  color: #DD4A68;}.token.regex,.token.important,.token.variable { color: #e90;}.token.important,.token.bold { font-weight: bold;}.token.italic {  font-style: italic;}.token.entity { cursor: help;}`;

    var prismScript = document.createElement('script');
    prismScript.src = PRISM_JS;
    document.head.appendChild(prismScript);
    prismScript.onload = function() {
      start();
    }
  }
  
  function start() {
    var allPosts = document.getElementsByClassName('wall_post_text');
    console.log(allPosts);
    for (var i = 0; i < allPosts.length; i++) {
      var postText = allPosts[i].innerHTML;
      postText = postText.replace(/\'\'\'(\w*)<br>([\w\W]+?)<br>\'\'\'/g, function(match, language, source) {
        console.log(match);
        console.log(language);
        console.log(source);
        return '<pre class="language-' + language + '"><code class="language-' + language + '">' + source.replace('Показать полностью… ', '') + '</code></pre>';
      });
      allPosts[i].innerHTML = postText;
    }
  }


  loadPrism();
  // start();


console.log(jfStyleEl);

})();

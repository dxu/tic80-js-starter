
// title:  game
// author: David <xudavidb@gmail.com>
// desc:   A short description for your game.
// script: js
const bundle = (function(){var r={},e={},o={};function u(t,n){return o[t]||(e[t]={exports:{},loaded:!1},o[t]=!0,0===t&&"function"==typeof require?require.main=e[0]:e[t].parent=e[n],r[t].call(this,e[t],e[t].exports),e[t].loaded=!0),e[t].exports}if(r[0]=function(t,n){var r=u(1,0);return t.exports.TIC=function(){r()},t.exports},r[1]=function(t,n){var r=0,e=96,o=24;return t.exports=function(){btn(0)&&o--,btn(1)&&o++,btn(2)&&e--,btn(3)&&e++,cls(13),spr(1+2*(r%60/30|0),e,o,14,3,0,0,2,2),print("Loading modules!",84,84),r++},t.exports},"object"!=typeof module)return u(0);module.exports=u(0)})();
function TIC() {
  bundle.TIC()
}
  
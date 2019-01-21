
// title:  game
// author: David <xudavidb@gmail.com>
// desc:   A short description for your game.
// script: js
const bundle = (function(){var t={},n={},e={};function o(o,r){return e[o]||(n[o]={exports:{},loaded:!1},e[o]=!0,0===o&&"function"==typeof require?require.main=n[0]:n[o].parent=n[r],t[o].call(this,n[o],n[o].exports),n[o].loaded=!0),n[o].exports}if(t[0]=function(t,n){var e=o(1,0);return t.exports.TIC=function(){e()},t.exports},t[1]=function(t,n){const e=0,o=96,r=24;return t.exports=function(){btn(0)&&r--,btn(1)&&r++,btn(2)&&o--,btn(3)&&o++,cls(13),spr(1+2*(e%60/30|0),o,r,14,3,0,0,2,2),print("Loading modules!",84,84),e++},t.exports},"object"!=typeof module)return o(0);module.exports=o(0)})();
function TIC() {
  bundle.TIC()
}
  
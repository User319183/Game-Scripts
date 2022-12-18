/** [[ ==UserScript==
// @name         Cookie Clicker Cookie Script
// @version      0.0.1
// @description  A simple script that adds cookies to your cookie clicker game. More will be added later!
// @author       User319183
// @match        https://orteil.dashnet.org/cookieclicker/
// @grant        none
/ ==/UserScript==

]]

**/

(function() {
    'use strict';

var num = prompt("How many cookies do you want?");


function addCookies(num) {
    Game.Earn(num);
    Game.WriteSave();
    Game.LoadSave();
}


addCookies(num);

})();

/** [[ ==UserScript==
// @name         T-rex Game Script
// @version      0.0.1
// @description  A simple script that adds speed, andgod mode. More will be added later!
// @author       User319183
// @match        https://trex-runner.com/
// @grant        none
/ ==/UserScript==

]]

**/

(function() {
    'use strict';

var speed = 100;
function addSpeed(speed) {
    Runner.instance_.currentSpeed = speed;

}
addSpeed(speed);


})();

Runner.prototype.gameOver = function() { return; };

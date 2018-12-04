// ==UserScript==
// @name       Twitch Color Change on Enter
// @require    http://code.jquery.com/jquery-3.3.1.js
// @namespace  https://www.twitch.tv
// @version    0.1
// @description  will randomly select a new color for your twitch chatname each time you hit Enter
// @match      https://www.twitch.tv/*
// @copyright  2012+, You
// ==/UserScript==
    document.querySelector('div textarea:last-of-type').addEventListener("keypress", onKeyPress);
    alert("loaded");

function onKeyPress() {
    var key = window.event.keyCode;
    //
    if (key === 13) {
        RainbowSelector();
        return false;
    }
    else {
        return true;
    }
}

function RainbowSelector() {
    var color = '#'+('0000'+(Math.random()*0xFFFFFF<<0).toString(16)).slice(-6);
    sendMessage(color);
};

function sendMessage(message) {
    document.querySelector('div textarea:last-of-type').focus();
    document.querySelector('div textarea:last-of-type').value = message;
    document.querySelector('div button:last-of-type').focus();
    document.querySelector('div button:last-of-type').click();
}

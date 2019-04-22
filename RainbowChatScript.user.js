// ==UserScript==
// @name       Twitch Color Change on Enter
// @require    http://code.jquery.com/jquery-3.3.1.js
// @namespace  https://www.twitch.tv
// @version    0.1.1
// @description  will randomly select a new color for your twitch chatname each time you hit Enter
// @match      https://www.twitch.tv/*
// @copyright  2012+, You
// ==/UserScript==
    document.querySelector('div textarea:last-of-type').addEventListener("keypress", onKeyPress); 
    //Document Selector non-functional. Need to determine what new identifier is for desired textarea.
    alert("loaded"); //Not firing if previous statement finds item

function onKeyPress() { // New capture from Twitch hides certain keypresses when in desired textarea.
    var key = window.event.keyCode;
    //
    if (key === 13) {
        RainbowSelector(); //generates and sends colorcode
        //return false;  
        //Carryover from old twitch layout. in order to pass validation all if statements required a return condition
    }
    else {
        //return true;
        //Carryover from old twitch layout. in order to pass validation all if statements required a return condition
    }
}

function RainbowSelector() {
    var color = '#'+('0000'+(Math.random()*0xFFFFFF<<0).toString(16)).slice(-6);
    sendMessage(color);
};

function sendMessage(message) { 
    //The document item selectors are non-functional and do not actually select desired item. 
        //Need to determine their new identifiers.
    document.querySelector('div textarea:last-of-type').focus(); 
    //Ideally focus tags are not going to be necessary on the newest twitch version. 
        //Old versions would reject message sending if item focus was not maintained properly.
    document.querySelector('div textarea:last-of-type').value = message;
    document.querySelector('div button:last-of-type').focus();
    document.querySelector('div button:last-of-type').click(); 
    //Potentially able to be skipped by hooking directly on the twitch function to send a message directly. 
        //If this is possible, it would be possible to skip entering the data into the textarea itself.
}

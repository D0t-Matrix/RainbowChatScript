// ==UserScript==
// @name       Twitch Color Change on Enter
// @require http://code.jquery.com/jquery-3.1.1.js
// @namespace  UNSET
// @version    0.1
// @description  will randomly select a new color for your twitch chatname each time you hit Enter
// @match      https://www.twitch.tv/*
// @copyright  2012+, You
// ==/UserScript==
$(document).ready(function() {
    alert('Rainbowchat Script initialized.');
    $('.js-chat_input').keyup(function(e) {
            if (e.keyCode == 13) {
                 $('.js-chat-buttons__submit').focus();
                 $('.js-chat-buttons__submit').click();
                 $('.js-chat-buttons__submit').blur();
                 $('.js-chat_input').focus();
                 var letters = '0123456789ABCDEF';
                 var color = fucker();
                 var command = "/color " + color;
                 $('.js-chat_input').val(command);
                 $('.js-chat-buttons__submit').focus();
                 $('.js-chat-buttons__submit').click();
                 $('.js-chat_input').focus();
        }
    });
    function fucker() {
        var letters = '0123456789ABCDEF';
        var colorcode = '#';
        colorcode += letters[Math.floor(Math.random() * 16)];
        colorcode += letters[Math.floor(Math.random() * 16)];
        colorcode += 0;
        colorcode += 0;
        colorcode += letters[Math.floor(Math.random() * 16)];
        colorcode += letters[Math.floor(Math.random() * 16)];
        return colorcode;
    }
});

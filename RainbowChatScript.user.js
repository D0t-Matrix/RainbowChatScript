// ==UserScript==
// @name       Twitch Color Change on Enter
// @require http://code.jquery.com/jquery-3.1.1.js
// @namespace  https://www.twitch.tv
// @version    0.1
// @description  will randomly select a new color for your twitch chatname each time you hit Enter
// @match      https://www.twitch.tv/*
// @copyright  2012+, You
// ==/UserScript==
$(document).ready(function() {
    $('.js-chat_input').keyup(function(e) {
        if (e.keyCode == 13) {
             colorchanger();
        }
        if (e.keyCode == 35) {
             hotkey("I AM A HOTKEY SwiftRage");
        }
        if (e.keyCode == 36) {
             hotkey("blank hotkey for future use");
        }
    });
    var toggle = true;
    function hotkey(text) {
        if (toggle) {
        var hotkeycommand = "/me " + text;
        messagesender(hotkeycommand);
        colorchanger();
        }
        toggle = !toggle;
    }
    function colorchanger() {
        var letters = '0123456789ABCDEF';
        var command = "/color #";
        for (var i = 0; i < 3; i++ ) {
            command += letters[Math.floor(Math.random() * 16)];
            command += letters[(1 + Math.floor(Math.random() * 14))];
        }
        messagesender(command);
    }
    function messagesender(string) {
        $('.js-chat-buttons__submit').focus();
        $('.js-chat-buttons__submit').click();
        $('.js-chat-buttons__submit').blur();
        $('.js-chat_input').focus();
        $('.js-chat_input').val(string);
        $('.js-chat-buttons__submit').focus();
        $('.js-chat-buttons__submit').click();
        $('.js-chat_input').focus();
    }
});


// ==UserScript==
// @name       Twitch Color Change on Enter
// @require http://code.jquery.com/jquery-3.1.1.js
// @namespace  https://github.com/Do-Matrix/RainbowChatScript/blob/master/RainbowChatScript.user.js
// @version    0.1
// @description  will randomly select a new color for your twitch chatname each time you hit Enter
// @match      https://www.twitch.tv/*
// @copyright  2012+, You
// ==/UserScript==
$(document).ready(function() {
    //alert("Colour randomizer initialized");
    $('.js-chat_input').keyup(function(e) {
            if (e.keyCode == 13) {
                 $('.js-chat-buttons__submit').focus();
                 $('.js-chat-buttons__submit').click();
                 $('.js-chat_input').focus();
                 var letters = '0123456789ABCDEF';
                 var color = '#';
                 for (var i = 0; i < 6; i++ ) {
                     if ((i == 2) || (i == 3)) {
                         color += "0";
                     }
                     else {
                         color += letters[Math.floor(Math.random() * 16)];

                     }
                 }
                 var command = "/color " + color;
                //alert(command);
                 $('.js-chat_input').val(command);
                 $('.js-chat-buttons__submit').focus();
                 $('.js-chat-buttons__submit').click();
                 $('.js-chat_input').focus();
        }
    });
});


import $ = require("jquery");

const newsletter = (id) => {
    'use strict';
    const $form = $('#' + id);
    const $message = $form.children('.newsletter').children('.newsletter__messages');
    if ( $form.length > 0 ) {
        $form.submit((event) => {
            event.preventDefault();
            const url = $form.attr('action');
            $.ajax({
                type: $form.attr('method'),
                url: url,
                data: $form.serialize(),
                dataType    : 'jsonp',
                jsonpCallback: 'subscribeSalesforce'
            }).done(function(json) {
                if (json.success == 'True') {
                    $message.text(json.message).css("color", "green");
                    $('.popup-success').show();
                } else {
                    $message.text(json.message).css("color", "red");
                }
            }).fail(function() {
                $message.text('Internal Error! Check your internet connection!').css("color", "red");
            });
        });
    }
};

export = newsletter;
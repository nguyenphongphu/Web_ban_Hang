var common = {
    init: function () {
        common.registerEvent();
    },
    registerEvent: function () {
        $("#txtKeyword").autocomplete({
            minLength: 0,
            source: function( request, response ) {
                $.ajax({
                    url: "/Home/ListName",
                    dataType: "json",
                    data: {
                        q: request.term
                    },
                    success: function( res ) {
                        response(res.data);
                    }
                });
            },
            focus: function (event, ui) {
                $("#txtKeyword").val(ui.item.label);
                return false;
            },
            select: function (event, ui) {
                $("#txtKeyword").val(ui.item.label);
                return false;
            }
        })
     .autocomplete("instance")._renderItem = function (ul, item) {
         return $("<li>")
           .append("<a>" + item.label + "</a>")
           .appendTo(ul);
     };
    }
}
common.init();
function hoverx(n) {
    $(n).attr("src", $(n).attr("usrc"))
}
function unhoverx(n) {
    $(n).attr("src", $(n).attr("osrc"))
}
$(document).on('click', '.number-spinner button', function () {
    var btn = $(this)
        oldValue = btn.closest('.number-spinner').find('input').val().trim(),
        newVal = 0;

    if (btn.attr('data-dir') == 'up') {
        if (parseInt(oldValue) < 5) {
            newVal = parseInt(oldValue) + 1;
        } else {
            newVal = 1;
        }
        
    } else {
        if (oldValue > 1) {
            newVal = parseInt(oldValue) - 1;
        } else {
            newVal = 1;
        }
    }
    btn.closest('.number-spinner').find('input').val(newVal);
});
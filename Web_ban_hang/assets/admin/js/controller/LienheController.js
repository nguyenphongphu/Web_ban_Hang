var user = {
    init: function () {
        user.registerEvents();
    },
    registerEvents: function () {       
        $(document).on('click', '#suaid', function () {
            var row = $(this).closest("tr");
            var id = $("td:eq(0)", row).text();
            var ten = $("td:eq(1)", row).text();
            var email = $("td:eq(3)", row).text();
            var nd = $("td:eq(6)", row).text();
            $("#FeedbackID").val(id);
            $("#Name").val(ten);
            $("#Email").val(email);
            $("#Content").val(nd);
        });        
    }
}
user.init();
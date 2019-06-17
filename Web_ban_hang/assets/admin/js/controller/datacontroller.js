var so = 0;
var data = {
    init: function () {
        data.registerEvents();
        data.updatedata();
        
    },
    registerEvents: function () {      
        $(document).on('click', '#suaid', function () {           
            var row = $(this).closest("tr");
            so = $("td:eq(0)", row).text();
            var id = $("td:eq(1)", row).text();
            var ten = $("td:eq(2)", row).val('id');
            $("#Ten").val(id);
            $("#MaLSP").val(ten[0].id);
        })
        $(document).on('click', '#sualsp', function () {
            var row = $(this).closest("tr");
            var id = $("td:eq(1)", row).text();
            var ten = $("td:eq(2)", row).text();
            $("#TenLSP").val(id);
            $("#Link").val(ten);
        })
        $(document).on('click', '#suamodel', function () {
            var row = $(this).closest("tr");
            var id = $("td:eq(1)", row).text();
            var tenhang = $("td:eq(2)", row).val('id');
            var tenlsp = $("td:eq(3)", row).val('id');
            console.log(id + tenhang[0] + tenlsp[0].id);
            $("#Ten").val(id);
            $("#IDHang").val(tenhang[0].id);
            $("#MaLSP").val(tenlsp[0].id);
        })
    },
    updatedata: function () {
        $(document).on('click', '#btn_suabonho', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateBoNho",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma
                },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    if (response.status == true) {
                        alert("da cap nhat thanh cong ");
                        location.reload();
                    }
                    else {
                        alert("da cap nhat that bai ");
                    }
                }
            });
        });
        $(document).on('click', '#btn_suaboxl', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateBoXL",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma
                },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    if (response.status == true) {
                        alert("da cap nhat thanh cong ");
                        location.reload();
                    }
                    else {
                        alert("da cap nhat that bai ");
                    }
                }
            });
        });
    }
}
data.init();
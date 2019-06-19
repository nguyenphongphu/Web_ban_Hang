var so = 0;
var user = {
    init: function () {

        user.loadLSP();
        user.registerEvent();
    },
    registerEvent: function () {
        $('#MaLSP').off('change').on('change', function () {
            var id = $(this).val();
            if (id != '') {
                user.loadHang(parseInt(id));
            }
            else {
                $('#IDHang').html('');
            }
        });
        $(document).on('click', '#suamodel', function () {           
            var row = $(this).closest("tr");
            so = $("td:eq(0)", row).text();;
            var id = $("td:eq(1)", row).text();
            var tenhang = $("td:eq(2)", row).val('id');
            var tenlsp = $("td:eq(3)", row).val('id');
            console.log(id + tenhang[0] + tenlsp[0].id);
            $("#Ten").val(id);
            user.loadHang1(parseInt(tenlsp[0].id), tenhang[0].id);
            $("#MaLSP").val(tenlsp[0].id);
        });
        $(document).on('click', '#btn_suaModel', function () {
            var ten = $('#Ten').val();
            var ma = $('#IDHang').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateModel",
                data: {
                    id: so,
                    ten: ten,
                    hang: ma,
                    stt: stt1
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
    },
    loadLSP: function () {

        $.ajax({
            url: '/Data/LoadLSP',
            type: "POST",
            dataType: "json",
            success: function (response) {
                console.log(response);
                if (response.status == true) {
                    var html = '<option value="">--Chọn Loại Sản Phẩm--</option>';
                    var data = response.data;
                    $.each(data, function (i, item) {
                        html += '<option value="' + item.MaLSP + '">' + item.Ten + '</option>'
                    });
                    $('#MaLSP').html(html);
                }
            }
        })
    },
    loadHang: function (id) {
        $.ajax({
            url: '/Data/LoadHang',
            type: "POST",
            data: { MaLSP: id },
            dataType: "json",
            success: function (response) {
                if (response.status == true) {
                    var html = '<option value="">--Chọn Hãng--</option>';
                    var data = response.data;
                    $.each(data, function (i, item) {
                        html += '<option value="' + item.IDHang + '">' + item.Ten + '</option>'
                    });
                    $('#IDHang').html(html);
                }
            }
        })
    },
    loadHang1: function (id,so) {
        $.ajax({
            url: '/Data/LoadHang',
            type: "POST",
            data: { MaLSP: id },
            dataType: "json",
            success: function (response) {
                if (response.status == true) {
                    var html = '<option value="">--Chọn Hãng--</option>';
                    var data = response.data;
                    $.each(data, function (i, item) {
                        html += '<option value="' + item.IDHang + '">' + item.Ten + '</option>'
                    });
                    $('#IDHang').html(html).val(so);
                }
            }
        })
    }
}
user.init();
function loaddatadelete(response, id) {
    if (response.status == true) {
        alert("Đã xóa thành công ");
        $('#row_' + id).remove();
        location.reload();
    }
    else {
        alert("Đã xóa thất bại ");
    }
}
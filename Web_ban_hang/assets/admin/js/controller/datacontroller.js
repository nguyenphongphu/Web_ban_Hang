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
        });
        $(document).on('click', '#sualsp', function () {
            var row = $(this).closest("tr");
            var id = $("td:eq(1)", row).text();
            var ten = $("td:eq(2)", row).text();
            $("#TenLSP").val(id);
            $("#Link").val(ten);
        });
        $(document).on('click', '#suamodel', function () {
            var row = $(this).closest("tr");
            var id = $("td:eq(1)", row).text();
            var tenhang = $("td:eq(2)", row).val('id');
            var tenlsp = $("td:eq(3)", row).val('id');
            console.log(id + tenhang[0] + tenlsp[0].id);
            $("#Ten").val(id);
            $("#IDHang").val(tenhang[0].id);
            $("#MaLSP").val(tenlsp[0].id);
        });
       
    },
    updatedata: function () {
        $(document).on('click', '#btn_suabonho', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateBoNho",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
                    stt:stt1
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
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateBoXL",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
                    stt:stt1
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
        $(document).on('click', '#btn_suaCamera', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateCamre",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaCard', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateCard",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaCase', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateCaes",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaChatlieu', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateChatlieu",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_ChoNgoi', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateChoNgoi",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaDoiSx', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateDoiSx",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_DophanGia', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateDophanGia",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaHang', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateHang",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaHedieuHanh', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateHedieuHanh",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaHopSo', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateHopSo",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaKichThuoc', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateKichThuoc",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaKieuDang', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateKieuDang",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaLoaiSanPham', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateLoaiSanPham",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_sualoaiTR', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateLoaiTR",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaMausac', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateMausac",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaMua', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateMua",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaPhienBan', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdatePhienBan",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaPhuKien', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdatePhuKien",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaPin', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdatePin",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaQuangDuong', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateQuangDuong",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaRam', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateRam",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
    deletedata: function () {
        $(document).on('click', '#btn_suabonho', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateBoNho",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaboxl', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateBoXL",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaCamera', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateCamre",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaCard', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateCard",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaCase', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateCaes",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaChatlieu', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateChatlieu",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_ChoNgoi', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateChoNgoi",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaDoiSx', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateDoiSx",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_DophanGia', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateDophanGia",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaHang', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateHang",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaHedieuHanh', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateHedieuHanh",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaHopSo', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateHopSo",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaKichThuoc', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateKichThuoc",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaKieuDang', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateKieuDang",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaLoaiSanPham', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateLoaiSanPham",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_sualoaiTR', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateLoaiTR",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaMausac', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateMausac",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaMua', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateMua",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaPhienBan', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdatePhienBan",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaPhuKien', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdatePhuKien",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaPin', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdatePin",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaQuangDuong', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateQuangDuong",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
        $(document).on('click', '#btn_suaRam', function () {
            var ten = $('#Ten').val();
            var ma = $('#MaLSP').val();
            var stt1 = $('#STT').val();
            $.ajax({
                url: "/Admin/UpdateData/UpdateRam",
                data: {
                    id: so,
                    ten: ten,
                    malsp: ma,
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
    }
}
data.init();
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
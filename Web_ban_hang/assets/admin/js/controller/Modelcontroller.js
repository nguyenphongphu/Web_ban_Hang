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
    }
}
user.init();

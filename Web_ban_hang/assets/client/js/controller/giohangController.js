var tong = 0;
var sanphamid = {
    init: function () {

        sanphamid.uploaddnagt();
    },
    uploaddnagt: function () {
        $("document").ready(function () {
            var tb = $('#datagioH tbody');
            for (i = 0; i < tb.length; i++) {
                var tb = $('#datagioH:eq('+i+') tbody');
                tb.find("tr").each(function (index, element) {
                    $(element).find('td').each(function (index, element) {
                        var colVal = $(element).text();
                        if (index == 5) {
                            var tien = colVal.trim();
                            for (i = 0; i < colVal.trim().length / 3; i++) {
                                tien = tien.replace(",", "");
                            }
                            tong = tong + parseInt(tien);                          
                        }                        
                    });
                });
               
            }
            $('#tong_tien').html(parseInt($('#tong_tien').text()) + tong);                     
        })
        $('.btn-delete').off('click').on('click', function (e) {
            e.preventDefault();
            $.ajax({
                data: { id: $(this).data('id') },
                url: '/GioHang/Delete',
                dataType: 'json',
                type: 'POST',
                success: function (res) {
                    if (res.status == true) {
                        window.location.href = "/gio-hang";
                    }
                }
            })
        });
    }

}
sanphamid.init();

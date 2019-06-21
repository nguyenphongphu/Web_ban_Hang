var sanphamid = {
    init: function () {

        sanphamid.uploaddnagt();       
    },
    uploaddnagt: function () {
        $(document).ready(function () {
            var id = $('#sanphamid h2').attr('id'); 
            if (id != '') {
                $.ajax({
                    url: '/ChitietSP/dataSP',
                    data: { malsp: id },
                    dataType: 'json',
                    type: 'POST'                   
                });
            }            
        });
        $(document).on('click', '.number-spinner button', function () {
            var btn = $(this)
            oldValue = btn.closest('.number-spinner').find('input').val().trim(),
                newVal = 0;
            so = btn.closest('.number-spinner').find('input').attr('max');
            console.log(so);
            if (btn.attr('data-dir') == 'up') {
                if (parseInt(oldValue) < so) {                    
                    newVal = parseInt(oldValue) + 1;
                    $('#bt_gh').attr("href", "/them-gio-hang?productId=" + $('#maSPCT').text() + "&quantity=" + newVal);
                } else {
                    newVal = 1;
                }

            } else {
                if (oldValue > 1) {
                    newVal = parseInt(oldValue) - 1;
                    $('#bt_gh').attr("href", "/them-gio-hang?productId=" + $('#maSPCT').text() + "&quantity=" + newVal);
                } else {
                    newVal = 1;
                }
            }
            btn.closest('.number-spinner').find('input').val(newVal);
        });
    }
    
}
sanphamid.init();

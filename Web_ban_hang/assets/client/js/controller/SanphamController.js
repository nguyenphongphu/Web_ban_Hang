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
    }
    
}
sanphamid.init();

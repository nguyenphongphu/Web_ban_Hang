var so = 0;
var dataMaSP = {};
var tong = 0;
var cart = {
    init: function () {
        cart.regEvents();
        cart.loaddata();
    },
    regEvents: function () {
        $('input[type="checkbox"]').change(function () {
            var checkbox = $(this);
            var state = checkbox.prop('checked');
            var row = $(this).closest("tr");          
            var tien = $("td:eq(6)", row).text();
            for (i = 0; i < tien.length/3; i++) {
                tien = tien.replace(",", "");
            }
            if (state) {
                $('#btnPayment').show();
                dataMaSP["row_" + row.attr('id')] = row.attr('id');
                tong = parseInt($('#tong_tien').text()) + parseInt(tien);
                $('#tong_tien').html( tong);
                so++;
            } else {
                if (so == 0) {
                    $('#btnPayment').hide();                   
                } else {
                    delete dataMaSP["row_" + row]; 
                    tong = tong - parseInt(tien);
                    $('#tong_tien').html(tong);
                    so--;
                }
                if (so == 0) {
                    $('#btnPayment').hide();
                }
            }
        })
        $('#btnPayment').hide();

        $('#btnContinue').off('click').on('click', function () {
            window.location.href = "/";
        });
        $('#btnPayment').off('click').on('click', function () { 
            var data1 = dataMaSP;
            console.log(data1);
            $.ajax({
                data: { MaSP: JSON.stringify( data1) },
                url: '/GioHang/Check',
                dataType: 'json',
                type: 'POST',
                success: function (res) {
                    if (res.status == true) {
                        window.location.href = "/thanh-toan";
                    }
                }
            })           
        });
        $('#btnUpdate').off('click').on('click', function () {
            var listProduct = $('.txtQuantity');
            var cartList = [];
            $.each(listProduct, function (i, item) {
                cartList.push({
                    Quantity: $(item).val(),
                    sanpham: {
                        MaSP: $(item).data('id')
                    }
                });
            });

            $.ajax({
                url: '/GioHang/Update',
                data: { cartModel: JSON.stringify(cartList) },
                dataType: 'json',
                type: 'POST',
                success: function (res) {
                    if (res.status == true) {
                        window.location.href = "/gio-hang";
                    }
                }
            })
        });

        $('#btnDeleteAll').off('click').on('click', function () {


            $.ajax({
                url: '/GioHang/DeleteAll',
                dataType: 'json',
                type: 'POST',
                success: function (res) {
                    if (res.status == true) {
                        window.location.href = "/gio-hang";
                    }
                }
            })
        });

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
    },
    loaddata: function () {
      
    }
}
cart.init();


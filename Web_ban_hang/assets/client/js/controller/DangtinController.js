var common = {
    init: function () {
        common.registerEvent();
    },
    registerEvent: function () {
        $("#sanpham>li>ul>li>a").on('click', function () {
            $.ajax({
                url: '/DangTin/data',
                data: { malsp: $(this).attr('id') },
                dataType: 'json',
                type: 'POST',
                success: function (res) {
                    if (res.status == true) {
                        $('#phantu').empty();
                        if (res.hang.length > 0) {
                            var data = res.hang;
                            var html = optionsl(data);
                            $('#phantu').append(mang("IDHang", "Hãng sản xuất:", html));
                        }
                        if (res.models.length > 0) {
                            var data = res.models;
                            var html = optionsl(data);
                            $('#phantu').append(mang("ID_Model", "Model:", html));
                        }
                        if (res.bonho.length > 0) {
                            var data = res.bonho;
                            var html = optionsl(data);
                            $('#phantu').append(mang("ID_BN", "Bộ nhớ:", html));
                        }
                        if (res.boxuly.length > 0) {
                            var data = res.boxuly;
                            var html = optionsl(data);
                            $('#phantu').append(mang("ID_BXL", "Bộ xử lý:", html));
                        }
                        if (res.camera.length > 0) {
                            var data = res.camera;
                            var html = optionsl(data);
                            $('#phantu').append(mang("ID_Camera", "Camera:", html));
                        }
                        if (res.Case.length > 0) {
                            var data = res.Case;
                            var html = optionsl(data);
                            $('#phantu').append(mang("ID_Case", "Camera:", html));
                        }
                        if (res.Chatlieu.length > 0) {
                            var data = res.Chatlieu;
                            var html = optionsl(data);
                            $('#phantu').append(mang("ID_CL", "Chat lieu:", html));
                        }
                        if (res.chongoi.length > 0) {
                            var data = res.chongoi;
                            var html = optionsl(data);
                            $('#phantu').append(mang("ID_CN", "Cho Ngoi:", html));
                        }
                        if (res.doisanxuat.length > 0) {
                            var data = res.doisanxuat;
                            var html = optionsl(data);
                            $('#phantu').append(mang("ID_Doi", "Doi San Xuat:", html));
                        }
                        if (res.dophangia.length > 0) {
                            var data = res.dophangia;
                            var html = optionsl(data);
                            $('#phantu').append(mang("ID_DPG", "Do Phan Gia:", html));
                        }
                        if (res.hedieuhanh.length > 0) {
                            var data = res.hedieuhanh;
                            var html = optionsl(data);
                            $('#phantu').append(mang("ID_HDH", "He Dieu Hanh:", html));
                        }
                        if (res.hopso.length > 0) {
                            var data = res.hopso;
                            var html = optionsl(data);
                            $('#phantu').append(mang("ID_HS", "Hop So:", html));
                        }
                        if (res.kichthuoc.length > 0) {
                            var data = res.kichthuoc;
                            var html = optionsl(data);
                            $('#phantu').append(mang("ID_KT", "Kich Thuoc:", html));
                        }
                        if (res.kieudang.length > 0) {
                            var data = res.kieudang;
                            var html = optionsl(data);
                            $('#phantu').append(mang("ID_KD", "Kieu Da:", html));
                        }
                        if (res.loaiTR.length > 0) {
                            var data = res.loaiTR;
                            var html = optionsl(data);
                            $('#phantu').append(mang("ID_LTR", "Loai Thoi Trang:", html));
                        }
                        if (res.mausac.length > 0) {
                            var data = res.mausac;
                            var html = optionsl(data);
                            $('#phantu').append(mang("ID_MS", "Mau Sac:", html));
                        }
                        if (res.Mua.length > 0) {
                            var data = res.Mua;
                            var html = optionsl(data);
                            $('#phantu').append(mang("ID_M", "Mua:", html));
                        }
                        if (res.phukien.length > 0) {
                            var data = res.phukien;
                            var html = optionsl(data);
                            $('#phantu').append(mang("ID_PK", "Phu Kien:", html));
                        }
                        if (res.pin.length > 0) {
                            var data = res.pin;
                            var html = optionsl(data);
                            $('#phantu').append(mang("ID_Pin", "Pin:", html));
                        }
                        if (res.quangduong.length > 0) {
                            var data = res.quangduong;
                            var html = optionsl(data);
                            $('#phantu').append(mang("ID_QD", "Quang Duong:", html));
                        }
                        if (res.ram.length > 0) {
                            var data = res.ram;
                            var html = optionsl(data);
                            $('#phantu').append(mang("ID_R", "Ram:", html));
                        }                                              
                    }
                },
                error: function (e) {
                    alert("co loi " + e.statusText);
                }
            });
        });
        var mang = function (a,b,html) {
            var link =
                "<div class='form-group col-md-6'>" +
                    "<label class='control-label col-md-4' for='"+a+"'>"+b+"</label>" +
                        "<div class=' from-table col-md-7'>" +
                            "<select class='form-control col-md-4' id='"+a+"'name='"+a+"'>"+html+"</select>"+
                            "<span class='field-validation-valid text-danger' data-valmsg-for='P"+a+"' data-valmsg-replace='true'></span>"+
                        "</div>" +
                    "<script type='text/javascript'>" +
                        "$('#"+a+"').on('change', function () {"+
                           " var value = $(this).val();"+
                            "$('#SanPham_"+a+"').val(value);"+
                        "});"+
                    "</script> "+
                "</div>";
            return link;           
        }
        var optionsl = function(data){
            var html = '<option value="">--Chọn--</option>';
            $.each(data, function (i, item) {
                html += '<option value="' + item.ID + '">' + item.Name + '</option>'
            });
            return html;
        }    
        
    }
}
common.init();


$.fn.upload = function (parameters) {
    var instanceID = $(this).attr('id');
    var isIE7 = false;
    if (navigator.appVersion.indexOf("MSIE 6.") != -1
        || navigator.appVersion.indexOf("MSIE 7.") != -1
        || navigator.appVersion.indexOf("MSIE 8.") != -1
        || navigator.appVersion.indexOf("MSIE 9.") != -1) {
        isIE7 = true;
    }
    var isInit = true;
    var defaults = $.extend({
        theme: 'default-theme',
        pluginFolder: '/Styles/CommonUpload',
        fileSize: 4,
        maxFiles: 3,
        itemWidth: 90,
        itemHeight: 90,
        minWidth: 200,
        minHeight: 200,
        rotateActionName: 'rotate/',
        rotate90ActionName: 'rotate/90/',
        rotate180ActionName: 'rotate/180/',
        rotate270ActionName: 'rotate/270/'
    }, parameters);
    var initOpenFileBrowser = function () {
        $('#' + instanceID + ' .upload-item').unbind('click');
        $('#' + instanceID + ' .working-upload-item').click(function () {
            $('#' + instanceID + ' .fileupload').click();
            //$('#' + instanceID + ' .fileupload').trigger("click");
        });
    }


    //xoa
    var initActionImage = function () {
        //tạo sự kiện xóa và xoay
        $('#' + instanceID + ' .upload-item .upload-item-delete').unbind('click');
        $('#' + instanceID + ' .upload-item .upload-item-delete').click(function () {
            //if (confirm('Bạn có chắc chắn muốn xoá ảnh này ?')) 
            {
                var image = $(this).parent().attr('rel');
                var listImage = removeImage2List($('#' + parameters.target).val(), image);
                $('#' + parameters.target).val(listImage);
                $(this).parents("li").remove();
                if (!isIE7) {
                    //nếu xóa xong mà chưa có cái nào để upload thì phải show ra 1 cái
                    if ($('#' + instanceID + ' .working-upload-item').length == 0) {
                        $('#' + instanceID).append(uploadItemTemplate);
                        initOpenFileBrowser();
                    }
                }
                else {
                    //nếu xóa xong mà chưa có cái nào để upload thì phải show ra 1 cái
                    if ($('#' + instanceID + ' .working-upload-item').length == 0) {
                        $('#' + instanceID).append(uploadItemTemplateIE7);
                        createEvenForControlIE7();
                    }
                }
            }
        });
        $('#' + instanceID + ' .upload-item .upload-item-rotate').unbind('click');
        $('#' + instanceID + ' .upload-item .upload-item-rotate').click(function () {
            var image = $(this).parent().attr('rel');
            var newimage = '';
            if (image.indexOf(defaults.rotateActionName) == -1) newimage = defaults.rotate90ActionName + image;
            else if (image.indexOf(defaults.rotate90ActionName) != -1) newimage = defaults.rotate180ActionName + image.replace(defaults.rotate90ActionName, '');
            else if (image.indexOf(defaults.rotate180ActionName) != -1) newimage = defaults.rotate270ActionName + image.replace(defaults.rotate180ActionName, '');
            else if (image.indexOf(defaults.rotate270ActionName) != -1) newimage = image.replace(defaults.rotate270ActionName, '');
            var listImage = replaceImage2List($('#' + parameters.target).val(), image, newimage);
            $('#' + parameters.target).val(listImage);
            if (!isIE7) {
                $(this).parent().attr('style', 'background:url(\''+ newimage + '\')  no-repeat scroll 0% 0%;background-color:transparent; background-size:  ' + defaults.itemWidth + 'px ' + defaults.itemHeight + 'px ');
                $(this).parent().attr('rel', newimage); //dùng làm data cho sự kiện xóa và xoay
            }
            else {
                $(this).parent().find('.background').remove();
                $(this).parent().append('<img class="background" src="' + newimage + '"/>');
                $(this).parent().attr('rel', newimage); //dùng làm data cho sự kiện xóa và xoay
            }
        });
    }
    var uploadfinish = function (imageURL) {
        //khi post data xong trả về đường dẫn ảnh và đẩy nó vào div hiển thị
        $('#' + instanceID + ' .working-upload-item').removeClass('upload-item-loading').removeClass("upload").addClass("img-thumb-upload").html("");
        // Cách upload mới chỉ có cấu trúc resize, không có crop hoặc thumb
        $('#' + instanceID + ' .working-upload-item').append('<span><img src="'  + imageURL + '"></span>');
        $('#' + instanceID + ' .working-upload-item').attr('rel', imageURL); //dùng làm data cho sự kiện xóa và xoay
        $('#' + instanceID + ' .working-upload-item').append(actionItemTemplate); //thêm 2 nút xóa và xoay

        $('#' + instanceID + ' .working-upload-item').removeClass('working-upload-item');//chuyển box upload hiện thời thành box upload mới

        //$(uploadItemTemplate).insertBefore($('div.upload-item:eq(0)'));
        $('#' + instanceID).append(uploadItemTemplate);
        initOpenFileBrowser(); //tạo sự kiện mở file

        initActionImage();//thêm sự kiện cho 2 nút xóa và xoay
    }
    var uploadfinishIE7 = function (imageURL) {
        //khi post data xong trả về đường dẫn ảnh và đẩy nó vào div hiển thị
        $('#' + instanceID + ' .working-upload-item').removeClass('uploadIE').removeClass("upload").addClass("img-thumb-upload").html("");
        $('#postiframe').remove();
        $('#theuploadform').remove();
        $('#' + instanceID + ' .working-upload-item').append('<span><img src="' + imageURL + '"></span>');
        $('#' + instanceID + ' .working-upload-item').attr('rel', imageURL);//dùng làm data cho sự kiện xóa và xoay
        $('#' + instanceID + ' .working-upload-item').append(actionItemTemplate);//thêm 2 nút xóa và xoay
        //$('#' + instanceID + ' .working-upload-item').removeClass('working-upload-item');
        $('#' + instanceID + ' .working-upload-item').removeClass('working-upload-item').parent().after(uploadItemTemplateIE7);//chuyển box upload hiện thời thành box upload mới
        //$(uploadItemTemplateIE7).insertBefore($('div.upload-item:eq(0)'));//chuyển box upload hiện thời thành box upload mới

        createEvenForControlIE7(); //tạo control fileupload chèn vào div

        initActionImage();//thêm sự kiện cho 2 nút xóa và xoay
    }
    var validateImage = function (file) {
        //check size
        if (file.size > eval(defaults.fileSize * 1024 * 1024)) return "Kích thước ảnh quá lớn. Dung lượng ảnh phải nhỏ hơn " + defaults.fileSize + "Mb";
        //check type
        var ext = file.name.split('.').pop().toLowerCase();
        if ($.inArray(ext, ['gif', 'png', 'jpg', 'jpeg']) == -1) {
            return 'Không đúng định dạng ảnh cho phép (gif, png, jpg, jpeg)';
        }
        return "";
    }
    var successPost = function (imgURL) {
        var listImage = '';
        alert(imgURL);
        uploadfinish(imgURL);
        listImage = addImage2List($('#' + parameters.target).val(), imgURL);
        $('#' + parameters.target).val(listImage);
    }
    var successPostIE7 = function (imgURL) {
        var listImage = '';
        uploadfinishIE7(imgURL);
        listImage = addImage2List($('#' + parameters.target).val(), imgURL);
        $('#' + parameters.target).val(listImage);
    }
    var createEvenForControlIE7 = function () {
        isInit = true;//do cái postiframe khi được append sẽ gọi load luôn. lên lần đầu chưa có gì để thực thi phải dùng cờ này để cản lại
        $('#fileToUpload').on('change', function () {
            //sau khi chọn file xong thì submit form
            $("#theuploadform").submit();
        });
        $("#postiframe").load(function () {
            //lần đầu mà đang khởi tạo sẽ không vào
            //chạy lần đâu xong thì chuyển init thành false đề lần sau chọn file là vào
            if (!isInit) {
                var imgURL = this.contentWindow.document.body.innerHTML.replace("<pre>", "").replace("</pre>", "").replace("<PRE>", "").replace("</PRE>", "");
                if (imgURL == 'error') {
                    alert('Có lỗi xảy ra, xin bạn vui lòng upload lại ảnh');
                    return;
                }
                else if (imgURL == 'errorMaxSize') {
                    alert("Kích thước ảnh quá lớn. Dũng lượng ảnh phải nhỏ hơn " + defaults.fileSize + " Mb");
                    return;
                }
                successPostIE7(imgURL);
                if (isNumberOfImageOverload()) {
                    //nếu số lượng ảnh đã load đủ vào các item, thì không cần thêm cái upload nữa.
                    $('#' + instanceID + ' .working-upload-item').parents("li").remove();
                }
            }
            else {
                isInit = false;
            }
        });
    }
    var isNumberOfImageOverload = function () {
        //kiểm tra số lượng ảnh trong trường hợp chọn nhiều ảnh hơn được phép
        var arrListImage = $('#' + parameters.target).val() == '' ? "" : $('#' + parameters.target).val().split(",");
        if (arrListImage.length >= defaults.maxFiles) {
            return true;
        }
        return false
    }
    //init
    $('#' + instanceID).addClass(defaults.theme);
    var uploadItemTemplate = '<li><div class="upload-item working-upload-item upload"><a class="browse-img-upload" href="javascript:;"><i class="fa fa-file-image-o"></i>Tải ảnh lên</a></div></li>';
    var uploadItemTemplateIE7 = '<li><div class="upload-item working-upload-item upload uploadIE"><iframe name="postiframe" id="postiframe" style="display: none"></iframe><form id="theuploadform" class="formIE7" action="/HandlerWeb/UploadHandler.ashx" method="post" encoding="multipart/form-data" enctype="multipart/form-data" target="postiframe"><input multiple class="fileuploadie7" type="file" id="fileToUpload" name="userfile"/>';
    //uploadItemTemplateIE7 += '<span class="browse-img-upload" onclick="document.getElementById(\'fileToUpload\').click();"><i class="icon-picture"></i>Tải ảnh lên</span>';
    uploadItemTemplateIE7 += '</form></div></li>';

    var actionItemTemplate = '<a href="javascript:void(0)" class="upload-item-delete delete-img-upload"><i class="fa fa-trash"></i></a>';
    //<a href="javascript:void(0)" class="upload-item-rotate"><img src="' + defaults.pluginFolder + '/images/blank.gif"/></a> <-- Tạm thời không cho rotate
    if (!isIE7) {
        //var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
        var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
        if (isSafari)
            $(this).append('<input id="secleimg" class="fileupload" type="file"  name="userfile"/>');
        else
            $(this).append('<input id="secleimg" multiple class="fileupload" type="file"  name="userfile"/>');
        $(this).append(uploadItemTemplate);
        if ($('#' + parameters.target).val() != '') {
            //nếu là postback, đã có up ảnh từ lần trước        
            var arrListImage = $('#' + parameters.target).val() == '' ? "" : $('#' + parameters.target).val().split(",");
            for (var i = 0; i < arrListImage.length; i++) {
                (arrListImage[i]);
            }
            //nếu số lượng ảnh đã load đủ vào các item, thì không cần thêm cái upload nữa, xẩy ra khi số lượng ảnh đã post back đúng bằng qouta
            if (isNumberOfImageOverload()) {
                $('#' + instanceID + ' .working-upload-item').parents("li").remove();
            }
        }
        else {
            initOpenFileBrowser();
        }
    }
    else {
        $(this).append(uploadItemTemplateIE7);
        if ($('#' + parameters.target).val() != '') {
            //nếu là postback, đã có up ảnh từ lần trước        
            var arrListImage = $('#' + parameters.target).val() == '' ? "" : $('#' + parameters.target).val().split(",");
            for (var i = 0; i < arrListImage.length; i++) {
                uploadfinishIE7(arrListImage[i]);
            }
            //nếu số lượng ảnh đã load đủ vào các item, thì không cần thêm cái upload nữa, xẩy ra khi số lượng ảnh đã post back đúng bằng qouta
            if (isNumberOfImageOverload()) {
                $('#' + instanceID + ' .working-upload-item').parents("li").remove();
            }
        }
        else {
            createEvenForControlIE7();
        }
    }

    //endinit
    var addImage2List = function (list, newimage) {
        if (list == '') return newimage;
        var arrListImage = list.split(",");
        for (var i = 0; i < arrListImage.length; i++) {
            if (newimage == arrListImage[i]) return list;
        }
        return list + ',' + newimage;
    }
    var removeImage2List = function (list, currentimage) {
        if (list == '') return '';
        var arrListImage = list.split(",");
        var newlist = '';
        for (var i = 0; i < arrListImage.length; i++) {
            if (currentimage != arrListImage[i]) newlist += (newlist != '' ? ',' : '') + arrListImage[i];
        }
        //return newlist.trim();
        return $.trim(newlist);
    }
    var replaceImage2List = function (list, currentimage, newimage) {
        if (list == '') return '';
        var arrListImage = list.split(",");
        var newlist = '';
        for (var i = 0; i < arrListImage.length; i++) {
            if (currentimage != arrListImage[i]) {
                newlist += (newlist != '' ? ',' : '') + arrListImage[i];
            }
            else {
                newlist += (newlist != '' ? ',' : '') + newimage;
            }
        }
        return newlist.trim();
    }
    $('#' + instanceID + ' .fileupload').on('change', function () {
        //sau khi chọn file xong thì submit form
        if (this.files.length > 0) {
            var isFail = false;
            for (i = 0; i < this.files.length; i++) {
                if (isFail) break; //nếu có lỗi khi upload ảnh thì thoát ra tại thời điểm đó
                //kiểm tra dung lượng và loại
                var errImage = validateImage(this.files[i]);
                if (errImage != '') {
                    alert(errImage);
                    break;
                }
                if (isNumberOfImageOverload()) {
                    alert('Bạn đã upload quá ' + defaults.maxFiles + ' ảnh');
                    //nếu số lượng ảnh đã load đủ vào các item, thì không cần thêm cái upload nữa.
                    $('#' + instanceID + ' .working-upload-item').parents("li").remove();
                    break;
                }
                var data = new FormData();
                data.append('file', this.files[i]);                
                $.ajax({
                    type: 'POST',
                    url: '/User/Temp',
                    contentType: false,
                    processData: false,
                    data: data,
                    cache: false,                    
                    async: false,                    
                    beforeSend: function () {
                        $('#' + instanceID + ' .working-upload-item').addClass('upload-item-loading');
                    },
                    success: function (data) {
                        successPost(data);
                    },
                    error: function () {
                        alert("Có lỗi xảy ra, xin bạn vui lòng upload lại ảnh");
                        isFail = true;
                    }
                });
            }
        }
        if (isNumberOfImageOverload()) {
            //nếu số lượng ảnh đã upload bằng đúng đủ qouta, thì không cần thêm cái upload nữa.
            $('#' + instanceID + ' .working-upload-item').parents("li").remove();
        }
        $(this).val("");
    });
}





/*$.fn.upload = function readURL(input) {
    if (input.files.length > 0) {

        for (i = 0; i < input.files.length; i++) {
            var formdata = new FormData();
            formdata.append('file', input.files[i]);
            $.ajax(
                {
                    type: 'POST',
                    url: '/User/Temp',
                    contentType: false,
                    processData: false,
                    data: formdata,
                    success: function (urlimage) {
                        var ten = urlimage.slice(37, urlimage.length);
                        var linh =
                            "<li>" +
                            "<div class='upload-item img-thumb-upload'>" +
                            "<span>" +
                            "<img id='anh' src='" + urlimage + "' rel='" + ten + "' >" +
                            "</span>" +
                            "<a href='javascript:' class='upload-item-delete delete-img-upload'>" +
                            "<i class='fa fa-trash'aria-hidden=true'></i>" +
                            "</a>" +
                            "</div>" +
                            "</li >";
                        $('#uploadimage').append(linh);
                    },
                    error: function (e) {
                        alert("co loi " + e.statusText);
                    }

                });
        }
        return false;
    }

}
$("#files").change(function () {
    
    readURL(this);
    
});

$("#uploadimage").on("click", "li a", function () {
    let img = $('#files').files;
    alert(img);
    a = img.length;
    var image = $('#anh').attr("rel");       
    for (i = 0; i <= a; i++) {
        if (image == img[i].name) {
            delete input[i];
            $(this).closest("li").remove();
        }
    }
    });
    

   



var initActionImage = function () {
    var instanceID = $(this).attr('id');
    var isIE7 = false;
    if (navigator.appVersion.indexOf("MSIE 6.") != -1
        || navigator.appVersion.indexOf("MSIE 7.") != -1
        || navigator.appVersion.indexOf("MSIE 8.") != -1
        || navigator.appVersion.indexOf("MSIE 9.") != -1) {
        isIE7 = true;
    }
    //tạo sự kiện xóa và xoay
    $('#' + instanceID + ' .upload-item .upload-item-delete').unbind('click');
    $('#' + instanceID + ' .upload-item .upload-item-delete').click(function () {
        //if (confirm('Bạn có chắc chắn muốn xoá ảnh này ?')) 
        {
            var image = $(this).parent().attr('rel');
            var listImage = removeImage2List($('#' + parameters.target).val(), image);
            $('#' + parameters.target).val(listImage);
            $(this).parents("li").remove();
            if (!isIE7) {
                //nếu xóa xong mà chưa có cái nào để upload thì phải show ra 1 cái
                if ($('#' + instanceID + ' .working-upload-item').length == 0) {
                    $('#' + instanceID).append(uploadItemTemplate);
                    initOpenFileBrowser();
                }
            }
            else {
                //nếu xóa xong mà chưa có cái nào để upload thì phải show ra 1 cái
                if ($('#' + instanceID + ' .working-upload-item').length == 0) {
                    $('#' + instanceID).append(uploadItemTemplateIE7);
                    createEvenForControlIE7();
                }
            }
        }
    });
    $('#' + instanceID + ' .upload-item .upload-item-rotate').unbind('click');
    $('#' + instanceID + ' .upload-item .upload-item-rotate').click(function () {
        var image = $(this).parent().attr('rel');
        var newimage = '';
        if (image.indexOf(defaults.rotateActionName) == -1) newimage = defaults.rotate90ActionName + image;
        else if (image.indexOf(defaults.rotate90ActionName) != -1) newimage = defaults.rotate180ActionName + image.replace(defaults.rotate90ActionName, '');
        else if (image.indexOf(defaults.rotate180ActionName) != -1) newimage = defaults.rotate270ActionName + image.replace(defaults.rotate180ActionName, '');
        else if (image.indexOf(defaults.rotate270ActionName) != -1) newimage = image.replace(defaults.rotate270ActionName, '');
        var listImage = replaceImage2List($('#' + parameters.target).val(), image, newimage);
        $('#' + parameters.target).val(listImage);
        if (!isIE7) {
            $(this).parent().attr('style', 'background:url(\'' + defaults.serverThumb + '/' + newimage + '\')  no-repeat scroll 0% 0%;background-color:transparent; background-size:  ' + defaults.itemWidth + 'px ' + defaults.itemHeight + 'px ');
            $(this).parent().attr('rel', newimage); //dùng làm data cho sự kiện xóa và xoay
        }
        else {
            $(this).parent().find('.background').remove();
            $(this).parent().append('<img class="background" src="' + defaults.serverThumb + '/' + newimage + '"/>');
            $(this).parent().attr('rel', newimage); //dùng làm data cho sự kiện xóa và xoay
        }
    });
}


 var xhr = new XMLHttpRequest();
        xhr.open('POST', '/User/Upload');
        xhr.send(formdata);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                alert(xhr.responseText);
            } else {

                reader.onload = function (e) {
                    var linh =
                        "<li>" +
                        "<div class='upload-item img-thumb-upload'>" +
                        "<span>" +
                        "<img id='anh' src='' >" +
                        "</span>" +
                        "<a href='javascript:' class='upload-item-delete delete-img-upload'>" +
                        "<i class='fa fa-trash'aria-hidden=true'></i>" +
                        "</a>" +
                        "</div>" +
                        "</li >";
                    $('#uploadimage').append(linh);


                    $('#anh').attr('src', e.target.result);
                }

                reader.readAsDataURL(input.files[0]);
            }
        }
        */
